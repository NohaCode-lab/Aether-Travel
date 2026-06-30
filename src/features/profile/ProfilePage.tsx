import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { PageHeader } from '../../components/PageHeader';
import { ProfileForm } from './ProfileForm';

export const ProfilePage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">
        <PageHeader title="My Profile" subtitle="Manage your personal information and preferences." />
        <ProfileForm />
      </div>
    </DashboardLayout>
  );
};