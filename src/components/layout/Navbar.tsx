import { useTranslation } from 'react-i18next';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../ui/Button';
import { LanguageSwitcher } from '../shared/LanguageSwitcher';
import { ThemeToggle } from '../shared/ThemeToggle';
import { NotificationCenter } from '../shared/NotificationCenter';
import { Logo } from '../shared/Logo';

export const Navbar = () => {
  const { user, signOut } = useAuth();
  const { t } = useTranslation();

  return (
    <header className="bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border-b border-teal-100/80 dark:border-teal-900/40 shadow-sm sticky top-0 z-40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo size="md" />
          <div className="flex items-center gap-3">
            <NotificationCenter />
            <ThemeToggle />
            <LanguageSwitcher />
            {user && (
              <span className="text-xs text-teal-700/80 dark:text-teal-300/80 hidden md:inline font-mono">
                {user.email}
              </span>
            )}
            <Button variant="outline" size="sm" onClick={signOut}>
              {t('nav.logout')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
