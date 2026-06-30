import { NavLink } from 'react-router-dom';

const navigation = [
  { name: 'Dashboard', href: '/' },
  { name: 'Destinations', href: '/destinations' },
  { name: 'Trip Planner', href: '/trip-planner' },
  { name: 'Profile', href: '/profile' },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4 hidden md:block">
      <nav className="space-y-1">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            end
            className={({ isActive }) =>
              `group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                isActive
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
