import { User } from "firebase/auth";

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface DashboardLayoutProps {
  children: React.ReactNode;
} 