import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { authService } from "./authService";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await authService.login(email, password);
      navigate("/"); // Redirect user to dashboard after successful login
    } catch (err: unknown) {
      console.error(err);
      setError(err instanceof Error ? err.message : "بيانات الدخول غير صحيحة");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            مرحباً بعودتك
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            قم بتسجيل الدخول للوصول إلى رحلاتك
          </p>
        </div>

        <Card>
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg dark:bg-red-900/30 dark:text-red-400 dark:border-red-800">
                {error}
              </div>
            )}

            <Input
              label="البريد الإلكتروني"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="كلمة المرور"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Button type="submit" className="w-full mt-2" isLoading={isLoading}>
              تسجيل الدخول
            </Button>
          </form>
        </Card>

        <p className="text-center mt-6 text-gray-600 dark:text-gray-400">
          ليس لديك حساب؟{" "}
          <Link
            to="/register"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            إنشاء حساب جديد
          </Link>
        </p>
      </div>
    </div>
  );
}
