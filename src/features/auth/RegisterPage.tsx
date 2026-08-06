import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { authService } from './authService';
import { LanguageSwitcher } from '../../components/shared/LanguageSwitcher';
import { ThemeToggle } from '../../components/shared/ThemeToggle';
import { Logo } from '../../components/shared/Logo';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await authService.register(email, password, firstName, lastName);
      navigate('/');
    } catch (err: unknown) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-emerald-50 via-teal-50/70 to-sky-100 dark:from-slate-950 dark:via-teal-950/80 dark:to-blue-950 relative overflow-hidden">
      {/* Dynamic Ambient Glow Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/20 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/20 dark:bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>

      <div className="w-full max-w-md animate-fade-in space-y-6 z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <Logo size="lg" />
          <p className="text-gray-600 dark:text-teal-200/80 text-sm mt-3 font-medium">
            Join Aether-Travel AI Platform
          </p>
        </div>

        <Card className="p-6 backdrop-blur-xl bg-white/90 dark:bg-slate-900/90 border border-teal-100 dark:border-teal-900/50 shadow-2xl shadow-teal-950/10 dark:shadow-teal-900/20">
          <form className="space-y-4" onSubmit={handleRegister}>
            {error && (
              <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl dark:bg-red-950/40 dark:text-red-300 dark:border-red-800">
                {error}
              </div>
            )}

            <div className="grid grid-cols-2 gap-3">
              <Input
                label="First Name"
                type="text"
                placeholder="Alex"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Input
                label="Last Name"
                type="text"
                placeholder="Schmidt"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <Input
              label="Email address"
              type="email"
              placeholder="name@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              className="w-full mt-2 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold py-2.5 rounded-xl shadow-lg shadow-teal-600/30 transition-all"
              isLoading={loading}
            >
              {loading ? 'Creating account...' : 'Create account'}
            </Button>
          </form>
        </Card>

        <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
          Already have an account?{' '}
          <Link
            to="/login"
            className="text-teal-600 dark:text-teal-400 hover:underline font-bold"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
