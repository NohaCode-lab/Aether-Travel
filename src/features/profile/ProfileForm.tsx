import React, { useState, useEffect } from 'react';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import {
  getUserProfile,
  updateUserProfile,
  type UserProfile,
} from './profileService';
import { Loader } from '../../components/ui/Loader';

export const ProfileForm: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      const userProfile = await getUserProfile();
      setProfile(userProfile);
      setLoading(false);
    };
    fetchProfile();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (profile) {
      setProfile({ ...profile, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (profile) {
      setSaving(true);
      await updateUserProfile(profile);
      setSaving(false);
      // Here you might want to show a success message
    }
  };

  if (loading || !profile) {
    return <Loader />;
  }

  return (
    <Card className="max-w-2xl mx-auto p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="First Name"
            name="firstName"
            value={profile.firstName}
            onChange={handleChange}
          />
          <Input
            label="Last Name"
            name="lastName"
            value={profile.lastName}
            onChange={handleChange}
          />
        </div>
        <Input
          label="Email"
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          disabled // Usually email is not editable
        />
        <Input
          label="Phone Number"
          name="phone"
          value={profile.phone}
          onChange={handleChange}
        />
        <Input
          label="Bio"
          name="bio"
          value={profile.bio}
          onChange={handleChange}
        />
        <div className="flex justify-end">
          <Button type="submit" isLoading={saving}>
            {saving ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </form>
    </Card>
  );
};
