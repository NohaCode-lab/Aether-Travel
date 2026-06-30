export const getUserProfile = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phone: "",
        bio: "",
      });
    }, 300);
  });
};

export const updateUserProfile = async (data: any) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ success: true }), 500);
  });
};
