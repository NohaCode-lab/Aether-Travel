import { PageHeader } from '../../components/PageHeader';
import { ProfileForm } from './ProfileForm';

export const ProfilePage: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="My Profile"
        subtitle="Update your personal details and preferences."
      />
      <ProfileForm />
    </div>
  );
};
