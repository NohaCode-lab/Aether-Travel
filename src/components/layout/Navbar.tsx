import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../ui/Button';
import { LanguageSwitcher } from '../shared/LanguageSwitcher';
import { ThemeToggle } from '../shared/ThemeToggle';
import { NotificationCenter } from '../shared/NotificationCenter';
import { Logo } from '../shared/Logo';
import {
  Menu,
  X,
  LayoutDashboard,
  MapPin,
  Calendar,
  Bot,
  FolderLock,
  Plane,
  BarChart3,
  ShieldCheck,
} from 'lucide-react';

export const Navbar = () => {
  const { user, signOut } = useAuth();
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: t('nav.dashboard'), href: '/', icon: LayoutDashboard },
    { name: t('nav.destinations'), href: '/destinations', icon: MapPin },
    { name: t('nav.tripPlanner'), href: '/trip-planner', icon: Calendar },
    { name: t('nav.aiConcierge'), href: '/ai-chat', icon: Bot },
    { name: 'Vault', href: '/documents', icon: FolderLock },
    { name: 'Flights', href: '/flight-tracker', icon: Plane },
    { name: 'Analytics', href: '/analytics', icon: BarChart3 },
    { name: 'Admin', href: '/admin', icon: ShieldCheck },
  ];

  return (
    <header className="bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border-b border-teal-100/80 dark:border-teal-900/40 shadow-sm sticky top-0 z-40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">
          <Logo size="md" />

          {/* Top Navbar Section Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                      isActive
                        ? 'bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-300 font-bold border border-teal-200/60 dark:border-teal-800/40 shadow-xs'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-teal-50/50 dark:hover:bg-slate-800/60 hover:text-teal-700 dark:hover:text-teal-200'
                    }`
                  }
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <NotificationCenter />
            <ThemeToggle />
            <LanguageSwitcher />
            {user && (
              <span className="text-xs text-teal-700/80 dark:text-teal-300/80 hidden xl:inline font-mono">
                {user.email}
              </span>
            )}
            <Button variant="outline" size="sm" onClick={signOut} className="hidden sm:inline-flex">
              {t('nav.logout')}
            </Button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-slate-800 border border-gray-200 dark:border-slate-700"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-teal-100 dark:border-teal-900/40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl px-4 pt-3 pb-4 space-y-2 animate-fade-in shadow-xl">
          <div className="grid grid-cols-2 gap-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-2.5 px-3 py-2 text-xs font-semibold rounded-xl transition-all ${
                      isActive
                        ? 'bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-300 font-bold border border-teal-200/60 dark:border-teal-800/40'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                    }`
                  }
                >
                  <Icon className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </div>
          <div className="pt-2 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between">
            {user && <span className="text-xs text-gray-500 font-mono truncate">{user.email}</span>}
            <Button variant="outline" size="sm" onClick={signOut} className="w-full sm:w-auto">
              {t('nav.logout')}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
