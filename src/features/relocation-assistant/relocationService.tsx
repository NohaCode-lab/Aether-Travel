export const getCostOfLivingData = async (city: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        city,
        costs: [
          { category: 'Housing', amount: '$1,200', trend: 'down' },
          { category: 'Food', amount: '$400', trend: 'down' },
          { category: 'Transport', amount: '$50', trend: 'down' },
          { category: 'Utilities', amount: '$100', trend: 'down' }
        ]
      });
    }, 500);
  });
};