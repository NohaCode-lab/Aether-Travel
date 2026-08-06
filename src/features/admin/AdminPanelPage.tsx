import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { Card } from '../../components/ui/Card';

export interface SystemAuditLog {
  id: string;
  action: string;
  actor: string;
  target: string;
  timestamp: string;
  status: 'SUCCESS' | 'WARN' | 'FAIL';
}

export const AdminPanelPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'users' | 'audit'>('users');

  const mockUsers = [
    { id: 'usr-1', name: 'Sophia Miller', email: 'sophia@example.com', role: 'ADMIN', status: 'ACTIVE' },
    { id: 'usr-2', name: 'Alexander Schmidt', email: 'alex@example.de', role: 'USER', status: 'ACTIVE' },
    { id: 'usr-3', name: 'Emma Watson', email: 'emma@example.org', role: 'USER', status: 'ACTIVE' },
  ];

  const auditLogs: SystemAuditLog[] = [
    { id: 'log-1', action: 'USER_ROLE_UPDATE', actor: 'admin@aethertravel.io', target: 'usr-1 (ADMIN)', timestamp: '2 mins ago', status: 'SUCCESS' },
    { id: 'log-2', action: 'AI_PROXIED_REQUEST', actor: 'alex@example.de', target: '/api/ai/chat', timestamp: '15 mins ago', status: 'SUCCESS' },
    { id: 'log-3', action: 'RATE_LIMIT_TRIGGER', actor: '192.168.1.45', target: '/api/auth/login', timestamp: '1 hour ago', status: 'WARN' },
  ];

  return (
    <div className="animate-fade-in space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <ShieldCheck className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
            Enterprise Admin & Audit Control
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
            Manage system roles, access controls (RBAC), audit logs, AI token utilization, and infrastructure metrics.
          </p>
        </div>
      </div>

      <div className="flex border-b border-gray-200 dark:border-gray-800 gap-4">
        <button
          onClick={() => setActiveTab('users')}
          className={`pb-3 text-sm font-bold border-b-2 transition-all ${
            activeTab === 'users' ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400' : 'border-transparent text-gray-500'
          }`}
        >
          User & RBAC Management
        </button>
        <button
          onClick={() => setActiveTab('audit')}
          className={`pb-3 text-sm font-bold border-b-2 transition-all ${
            activeTab === 'audit' ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400' : 'border-transparent text-gray-500'
          }`}
        >
          System Audit Logs
        </button>
      </div>

      {activeTab === 'users' ? (
        <Card className="p-6 space-y-4">
          <h3 className="font-bold text-gray-900 dark:text-white text-lg">Registered SaaS Accounts</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-gray-600 dark:text-gray-300">
              <thead className="bg-gray-50 dark:bg-gray-800/60 uppercase font-mono text-[10px] text-gray-400">
                <tr>
                  <th className="p-3">User ID</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {mockUsers.map((u) => (
                  <tr key={u.id}>
                    <td className="p-3 font-mono text-gray-400">{u.id}</td>
                    <td className="p-3 font-bold text-gray-900 dark:text-white">{u.name}</td>
                    <td className="p-3">{u.email}</td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${u.role === 'ADMIN' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300' : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'}`}>
                        {u.role}
                      </span>
                    </td>
                    <td className="p-3 font-semibold text-emerald-600">{u.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      ) : (
        <Card className="p-6 space-y-4">
          <h3 className="font-bold text-gray-900 dark:text-white text-lg">Security Audit Logs</h3>
          <div className="space-y-3 font-mono text-xs">
            {auditLogs.map((log) => (
              <div key={log.id} className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 flex items-center justify-between border border-gray-100 dark:border-gray-800">
                <div className="space-y-1">
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">{log.action}</span>
                  <p className="text-gray-500">Actor: {log.actor} ➔ Target: {log.target}</p>
                </div>
                <span className="text-gray-400 text-[10px]">{log.timestamp}</span>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};

export default AdminPanelPage;
