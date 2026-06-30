export const getDestinations = async () => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Kyoto",
          country: "Japan",
          image:
            "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          description:
            "Kyoto is famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses.",
          tags: ["Culture", "History", "Temples"],
        },
        {
          id: 2,
          name: "Santorini",
          country: "Greece",
          image:
            "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          description:
            "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC.",
          tags: ["Relaxing", "Beach", "Romance"],
        },
        {
          id: 3,
          name: "Banff",
          country: "Canada",
          image:
            "https://images.unsplash.com/photo-1542668595-fa9394e5b686?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          description:
            "Banff National Park is Canada's oldest national park and offers stunning mountain scenery, glacial lakes, and abundant wildlife.",
          tags: ["Adventure", "Nature", "Hiking"],
        },
      ]);
    }, 500);
  });
};
