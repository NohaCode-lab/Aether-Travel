import React, { useState } from 'react';
import { Bell, Check, Plane, ShieldAlert, Sparkles, Calendar, X } from 'lucide-react';

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  type: 'flight' | 'visa' | 'trip' | 'ai';
  timestamp: string;
  read: boolean;
}

export const NotificationCenter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: 'notif-1',
      title: 'Flight Delayed',
      message: 'Lufthansa flight LH458 delayed by 25 mins due to air traffic control.',
      type: 'flight',
      timestamp: '10 mins ago',
      read: false,
    },
    {
      id: 'notif-2',
      title: 'Visa Expiry Warning',
      message: 'Your Schengen visa expires in 30 days. Click to apply for renewal.',
      type: 'visa',
      timestamp: '1 hour ago',
      read: false,
    },
    {
      id: 'notif-3',
      title: 'Trip Starts Tomorrow!',
      message: 'Your 7-day trip to Kyoto starts tomorrow. Check your packing list.',
      type: 'trip',
      timestamp: '3 hours ago',
      read: true,
    },
    {
      id: 'notif-4',
      title: 'AI Itinerary Generated',
      message: 'Your personalized itinerary for Munich, Germany is ready.',
      type: 'ai',
      timestamp: 'Yesterday',
      read: true,
    },
  ]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const getIcon = (type: NotificationItem['type']) => {
    switch (type) {
      case 'flight':
        return <Plane className="w-4 h-4 text-amber-500" />;
      case 'visa':
        return <ShieldAlert className="w-4 h-4 text-red-500" />;
      case 'ai':
        return <Sparkles className="w-4 h-4 text-indigo-500" />;
      default:
        return <Calendar className="w-4 h-4 text-emerald-500" />;
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-all border border-gray-200 dark:border-gray-700 shadow-sm"
        aria-label="Notification Center"
      >
        <Bell className="w-4 h-4" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Notification Drawer */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-80 sm:w-96 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-2xl z-50 overflow-hidden animate-fade-in">
          <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm text-gray-900 dark:text-white">Notifications</h3>
              {unreadCount > 0 && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                  {unreadCount} new
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                >
                  <Check className="w-3 h-3" /> Mark all read
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="max-h-80 overflow-y-auto divide-y divide-gray-100 dark:divide-gray-800">
            {notifications.length > 0 ? (
              notifications.map((n) => (
                <div
                  key={n.id}
                  className={`p-4 transition-colors flex items-start gap-3 ${
                    !n.read ? 'bg-indigo-50/40 dark:bg-indigo-950/20' : 'hover:bg-gray-50 dark:hover:bg-gray-800/40'
                  }`}
                >
                  <div className="p-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xs flex-shrink-0 mt-0.5">
                    {getIcon(n.type)}
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-gray-900 dark:text-white">{n.title}</h4>
                      <span className="text-[10px] text-gray-400 font-mono">{n.timestamp}</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-snug">{n.message}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-6 text-center text-xs text-gray-400">No notifications.</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
