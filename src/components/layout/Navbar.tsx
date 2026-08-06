import { useTranslation } from 'react-i18next';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../ui/Button';
import { LanguageSwitcher } from '../shared/LanguageSwitcher';
import { Compass } from 'lucide-react';

export const Navbar = () => {
  const { user, signOut } = useAuth();
  const { t } = useTranslation();

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Compass className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              AetherTravel
            </span>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            {user && (
              <span className="text-xs text-gray-500 dark:text-gray-400 hidden sm:inline">
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
