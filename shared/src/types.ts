export type UserRole = 'student' | 'pg_owner' | 'vendor' | 'admin';
export type Gender = 'male' | 'female' | 'other';
export type VendorType = 'mess' | 'laundry' | 'transport' | 'other';

export interface Profile {
  id: string;
  updated_at: string;
  username: string | null;
  full_name: string | null;
  avatar_url: string | null;
  role: UserRole;
  gender: Gender | null;
  college: string | null;
  batch_year: number | null;
  phone: string | null;
  email: string | null;
  is_verified: boolean;
}

export interface PGListing {
  id: string;
  owner_id: string;
  created_at: string;
  updated_at: string;
  title: string;
  description: string | null;
  address: string;
  location: {
    latitude: number;
    longitude: number;
  };
  monthly_rent: number;
  security_deposit: number | null;
  is_shared: boolean;
  max_occupancy: number | null;
  gender_preference: Gender | null;
  amenities: Record<string, boolean>;
  rules: string[];
  images: string[];
  contact_phone: string | null;
  contact_email: string | null;
  is_available: boolean;
  average_rating: number;
  review_count: number;
}

export interface RoommateProfile {
  id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  bio: string | null;
  preferences: {
    smoking?: boolean;
    pets?: boolean;
    food_preference?: string;
    study_habits?: string;
    sleep_schedule?: string;
    cleanliness?: string;
    socializing?: string;
    [key: string]: any;
  };
  budget_range: {
    min: number;
    max: number;
  };
  preferred_locations: string[];
  lifestyle_tags: string[];
  is_smoking_ok: boolean;
  is_pets_ok: boolean;
  move_in_date: string | null;
  duration_months: number | null;
  is_active: boolean;
}

export interface ChatRoom {
  id: string;
  created_at: string;
  updated_at: string;
  type: string;
  metadata: {
    title?: string;
    description?: string;
    [key: string]: any;
  };
}

export interface ChatMessage {
  id: string;
  room_id: string;
  sender_id: string;
  created_at: string;
  content: string;
  metadata: {
    attachments?: string[];
    [key: string]: any;
  };
}

export interface CommunityPost {
  id: string;
  author_id: string;
  created_at: string;
  updated_at: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  college: string | null;
  batch_year: number | null;
  upvotes: number;
  downvotes: number;
  is_pinned: boolean;
  is_archived: boolean;
}

export interface PostComment {
  id: string;
  post_id: string;
  author_id: string;
  parent_id: string | null;
  created_at: string;
  content: string;
  upvotes: number;
  downvotes: number;
}

export interface LocalVendor {
  id: string;
  owner_id: string;
  created_at: string;
  updated_at: string;
  name: string;
  type: VendorType;
  description: string | null;
  address: string;
  location: {
    latitude: number;
    longitude: number;
  };
  contact_phone: string | null;
  contact_email: string | null;
  operating_hours: {
    [day: string]: {
      open: string;
      close: string;
    };
  } | null;
  services: string[];
  price_range: {
    min: number;
    max: number;
  } | null;
  images: string[];
  is_verified: boolean;
  average_rating: number;
  review_count: number;
}

export interface Review {
  id: string;
  author_id: string;
  created_at: string;
  rating: number;
  content: string | null;
  entity_type: string;
  entity_id: string;
  images: string[];
}

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: Profile;
        Insert: Omit<Profile, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Profile>;
      };
      pg_listings: {
        Row: PGListing;
        Insert: Omit<PGListing, 'id' | 'created_at' | 'updated_at' | 'average_rating' | 'review_count'>;
        Update: Partial<PGListing>;
      };
      roommate_profiles: {
        Row: RoommateProfile;
        Insert: Omit<RoommateProfile, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<RoommateProfile>;
      };
      chat_rooms: {
        Row: ChatRoom;
        Insert: Omit<ChatRoom, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<ChatRoom>;
      };
      chat_messages: {
        Row: ChatMessage;
        Insert: Omit<ChatMessage, 'id' | 'created_at'>;
        Update: Partial<ChatMessage>;
      };
      community_posts: {
        Row: CommunityPost;
        Insert: Omit<CommunityPost, 'id' | 'created_at' | 'updated_at' | 'upvotes' | 'downvotes'>;
        Update: Partial<CommunityPost>;
      };
      post_comments: {
        Row: PostComment;
        Insert: Omit<PostComment, 'id' | 'created_at' | 'upvotes' | 'downvotes'>;
        Update: Partial<PostComment>;
      };
      local_vendors: {
        Row: LocalVendor;
        Insert: Omit<LocalVendor, 'id' | 'created_at' | 'updated_at' | 'average_rating' | 'review_count'>;
        Update: Partial<LocalVendor>;
      };
      reviews: {
        Row: Review;
        Insert: Omit<Review, 'id' | 'created_at'>;
        Update: Partial<Review>;
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      user_role: UserRole;
      gender: Gender;
      vendor_type: VendorType;
    };
  };
} 