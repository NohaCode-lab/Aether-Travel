export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bio: string;
}

export const getUserProfile = async (): Promise<UserProfile> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '+1 (555) 000-0000', // Added a default phone number for consistency with ProfileForm
        bio: 'Tell us a bit about your travel style...', // Added a default bio for consistency with ProfileForm
      });
    }, 300);
  });
};

export const updateUserProfile = async (
  data: UserProfile
): Promise<{ success: boolean }> => {
  // In a real app, you would send this data to your API.
  // For this mock, we'll log it to the console to confirm it's being received.
  console.log('Simulating profile update with:', data);
  return new Promise((resolve) => {
    setTimeout(() => resolve({ success: true }), 500);
  });
};
