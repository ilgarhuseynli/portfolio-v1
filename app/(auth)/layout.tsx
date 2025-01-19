"use client";

import { Nunito } from "next/font/google";
import { Toaster } from "react-hot-toast";
import ThemeContextProvider from "@/context/theme-context";
import { AuthProvider } from "@/context/auth-context";

const nunito = Nunito({ subsets: ["latin"] });

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={nunito.className}>
        <ThemeContextProvider>
          <AuthProvider>
            {children}
            <Toaster position="top-right" />
          </AuthProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
} 