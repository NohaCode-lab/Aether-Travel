import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LayoutDashboard, MapPin, Calendar, Bot, FolderLock, Plane, BarChart3, ShieldCheck, User } from 'lucide-react';

export const Sidebar = () => {
  const { t } = useTranslation();

  const navigation = [
    { name: t('nav.dashboard'), href: '/', icon: LayoutDashboard },
    { name: t('nav.destinations'), href: '/destinations', icon: MapPin },
    { name: t('nav.tripPlanner'), href: '/trip-planner', icon: Calendar },
    { name: t('nav.aiConcierge'), href: '/ai-chat', icon: Bot },
    { name: 'Document Vault', href: '/documents', icon: FolderLock },
    { name: 'Flight Tracker', href: '/flight-tracker', icon: Plane },
    { name: 'Analytics', href: '/analytics', icon: BarChart3 },
    { name: 'Admin Control', href: '/admin', icon: ShieldCheck },
    { name: t('nav.profile'), href: '/profile', icon: User },
  ];

  return (
    <aside className="w-64 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-teal-100/80 dark:border-teal-900/40 p-4 hidden md:block flex-shrink-0">
      <nav className="space-y-1">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.href}
              to={item.href}
              end
              className={({ isActive }) =>
                `group flex items-center gap-3 px-3 py-2.5 text-xs font-semibold rounded-xl transition-all ${
                  isActive
                    ? 'bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-300 font-bold border border-teal-200/60 dark:border-teal-800/40 shadow-xs'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-teal-50/50 dark:hover:bg-slate-800/60 hover:text-teal-700 dark:hover:text-teal-200'
                }`
              }
            >
              <Icon className="w-4 h-4" />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};
