declare namespace Wishlistar {
  export interface Wishlist {
    id: number;
    name: string;
    itemCount: number;
  }

  export interface Activity {
    id: number;
    type: "created" | "updated" | "received";
    content: string;
    date: string;
  }

  export interface UserProfile {
    username: string;
    fullName: string;
    bio: string;
    location: string;
    website: string;
    email: string;
    joinDate: string;
    profileImage: string;
    bannerImage: string;
    badges: string[];
    wishlists: Wishlist[];
    activities: Activity[];
    stats: {
      wishlistsCount: number;
      itemsCount: number;
      giftsReceived: number;
      giftsSent: number;
    };
  }
}
