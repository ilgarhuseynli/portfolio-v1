"use client";

import { useAuth } from "@/context/auth-context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome back!</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 dark:text-gray-400">Email: {user?.email}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Status</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 dark:text-gray-400">Active</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Last Login</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {user?.metadata.lastSignInTime ? new Date(user.metadata.lastSignInTime).toLocaleString() : "N/A"}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 