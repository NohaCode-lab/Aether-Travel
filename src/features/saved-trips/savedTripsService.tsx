export const getSavedTrips = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          destination: "Tokyo, Japan",
          date: "Oct 10 - Oct 24, 2024",
          travelers: 2,
          status: "Upcoming",
        },
        {
          id: 2,
          destination: "Paris, France",
          date: "Jul 1 - Jul 10, 2024",
          travelers: 1,
          status: "Completed",
        },
        {
          id: 3,
          destination: "Bali, Indonesia",
          date: "Dec 5 - Dec 15, 2024",
          travelers: 4,
          status: "Draft",
        },
      ]);
    }, 400);
  });
};
