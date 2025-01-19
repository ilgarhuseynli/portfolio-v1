"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { AuthContextType, AuthProviderProps } from "@/types/auth";
import Cookies from "js-cookie";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        Cookies.set("auth", "true", { expires: 7 });
      } else {
        Cookies.remove("auth");
      }
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      Cookies.remove("auth");
      router.push("/login");
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 