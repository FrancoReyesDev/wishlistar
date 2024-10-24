export const userProfile = {
  username: "stargazer",
  fullName: "Alex Stargazer",
  bio: "Dreamer, adventurer, and wishlist enthusiast.",
  location: "Starry City, Dreamland",
  website: "www.alexstargazer.com",
  email: "alex@wishlistar.com",
  joinDate: "Joined January 2024",
  profileImage: "/placeholder.svg?height=200&width=200",
  bannerImage: "/placeholder.svg?height=400&width=1200",
  badges: ["VIP", "Top Wisher", "Gift Guru", "1 Year"],
  wishlists: [
    { id: 1, name: "Birthday Bonanza", itemCount: 15 },
    { id: 2, name: "Dream Vacation", itemCount: 8 },
    { id: 3, name: "Home Makeover", itemCount: 12 },
  ],
  activities: [
    {
      id: 1,
      type: "created",
      content: "Created a new wishlist: 'Tech Gadgets 2024'",
      date: "2 days ago",
    },
    {
      id: 2,
      type: "updated",
      content: "Updated item in 'Birthday Bonanza'",
      date: "5 days ago",
    },
    {
      id: 3,
      type: "received",
      content: "Received a gift: 'Cosmic Mug Set'",
      date: "1 week ago",
    },
  ],
  stats: {
    wishlistsCount: 5,
    itemsCount: 47,
    giftsReceived: 23,
    giftsSent: 31,
  },
};
