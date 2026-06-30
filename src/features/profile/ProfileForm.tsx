import React from 'react';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';

export const ProfileForm: React.FC = () => {
  return (
    <Card className="p-6">
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="First Name" defaultValue="John" />
          <Input label="Last Name" defaultValue="Doe" />
        </div>
        <Input label="Email Address" type="email" defaultValue="john.doe@example.com" />
        <Input label="Phone Number" type="tel" placeholder="+1 (555) 000-0000" />
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
          <textarea 
            className="w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" 
            rows={4}
            placeholder="Tell us a bit about your travel style..."
          ></textarea>
        </div>

        <div className="flex justify-end">
          <Button type="button" variant="primary">Save Changes</Button>
        </div>
      </form>
    </Card>
  );
};