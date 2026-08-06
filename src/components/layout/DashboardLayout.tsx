import type { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Navbar />
      <div className="flex flex-1 w-full">
        <Sidebar />
        <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto max-w-full">{children}</main>
      </div>
    </div>
  );
};
