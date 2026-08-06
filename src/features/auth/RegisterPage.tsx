import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { authService } from './authService';
import { LanguageSwitcher } from '../../components/shared/LanguageSwitcher';
import { ThemeToggle } from '../../components/shared/ThemeToggle';
import { Logo } from '../../components/shared/Logo';
import { Sparkles } from 'lucide-react';

export default function RegisterPage() {
  const { t } = useTranslation();
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
      setError(err instanceof Error ? err.message : t('common.error'));
    } finally {
      setLoading(false);
    }
  };

  const handleDemoAccess = async () => {
    setLoading(true);
    await authService.login('demo@aethertravel.io', 'DemoPass2026!');
    navigate('/');
    setLoading(false);
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
            {t('auth.joinPlatform')}
          </p>
        </div>

        <Card className="p-6 backdrop-blur-xl bg-white/90 dark:bg-slate-900/90 border border-teal-100 dark:border-teal-900/50 shadow-2xl shadow-teal-950/10 dark:shadow-teal-900/20 space-y-4">
          <Button
            onClick={handleDemoAccess}
            type="button"
            className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-extrabold py-3 rounded-xl shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 border border-purple-400/30"
          >
            <Sparkles className="w-5 h-5 text-yellow-300" />
            Explore Recruiter Live Demo
          </Button>

          <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-gray-200 dark:border-slate-800"></div>
            <span className="flex-shrink mx-4 text-xs font-semibold uppercase tracking-wider text-gray-400">Or register</span>
            <div className="flex-grow border-t border-gray-200 dark:border-slate-800"></div>
          </div>

          <form className="space-y-4" onSubmit={handleRegister}>
            {error && (
              <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl dark:bg-red-950/40 dark:text-red-300 dark:border-red-800">
                {error}
              </div>
            )}

            <div className="grid grid-cols-2 gap-3">
              <Input
                label={t('auth.firstName')}
                type="text"
                placeholder="Alex"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Input
                label={t('auth.lastName')}
                type="text"
                placeholder="Schmidt"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <Input
              label={t('auth.email')}
              type="email"
              placeholder="name@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label={t('auth.password')}
              type="password"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              variant="secondary"
              className="w-full font-bold py-2.5 rounded-xl"
              isLoading={loading}
            >
              {loading ? t('common.loading') : t('auth.createAccount')}
            </Button>
          </form>
        </Card>

        <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
          {t('auth.alreadyHaveAccount')}{' '}
          <Link
            to="/login"
            className="text-teal-600 dark:text-teal-400 hover:underline font-bold"
          >
            {t('auth.signIn')}
          </Link>
        </p>
      </div>
    </div>
  );
}
