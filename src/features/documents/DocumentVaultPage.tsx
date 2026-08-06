import React, { useState } from 'react';
import { ShieldCheck, FileText, AlertTriangle, Plus, Calendar, Lock } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export interface TravelDocument {
  id: string;
  type: 'Passport' | 'Visa' | 'Insurance' | 'Vaccination' | 'Ticket';
  title: string;
  docNumber: string;
  expiryDate: string;
  status: 'valid' | 'expiring_soon' | 'expired';
}

export const DocumentVaultPage: React.FC = () => {
  const [documents] = useState<TravelDocument[]>([
    {
      id: 'doc-1',
      type: 'Passport',
      title: 'Biometric International Passport',
      docNumber: 'A98765432',
      expiryDate: '2026-09-15',
      status: 'expiring_soon',
    },
    {
      id: 'doc-2',
      type: 'Visa',
      title: 'Schengen Multiple Entry Visa',
      docNumber: 'SCH-2024-998',
      expiryDate: '2027-11-20',
      status: 'valid',
    },
    {
      id: 'doc-3',
      type: 'Insurance',
      title: 'Global Comprehensive Travel Cover',
      docNumber: 'INS-776100',
      expiryDate: '2027-01-01',
      status: 'valid',
    },
  ]);

  const getStatusBadge = (status: TravelDocument['status']) => {
    if (status === 'expiring_soon') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
          <AlertTriangle className="w-3.5 h-3.5" /> Expiring Soon
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
        <ShieldCheck className="w-3.5 h-3.5" /> Valid
      </span>
    );
  };

  return (
    <div className="animate-fade-in space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Lock className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
            Travel Document Vault
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
            Secure encrypted storage for passports, visas, insurance, and tickets with expiry alert tracking.
          </p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add New Document
        </Button>
      </div>

      <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
        <div className="text-xs text-amber-800 dark:text-amber-200">
          <span className="font-bold">Document Expiry Reminder:</span> Your Passport (A98765432) expires in less than 40 days. Ensure it remains valid for at least 6 months prior to international flights.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((doc) => (
          <Card key={doc.id} className="p-5 relative hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors" hoverable>
            <div className="flex items-start justify-between mb-4">
              <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                <FileText className="w-6 h-6" />
              </div>
              {getStatusBadge(doc.status)}
            </div>

            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
              {doc.type}
            </span>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug mb-2">{doc.title}</h3>
            
            <div className="space-y-1.5 text-xs text-gray-600 dark:text-gray-400 font-mono bg-gray-50 dark:bg-gray-800/50 p-3 rounded-xl border border-gray-100 dark:border-gray-800">
              <div className="flex justify-between">
                <span>Doc No:</span>
                <span className="font-semibold text-gray-900 dark:text-white">{doc.docNumber}</span>
              </div>
              <div className="flex justify-between">
                <span>Expires:</span>
                <span className="font-semibold text-gray-900 dark:text-white flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-indigo-500" />
                  {doc.expiryDate}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DocumentVaultPage;
