import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null as any;

// Database types
export interface User {
  id: string;
  email: string;
  name?: string;
  phone?: string;
  address?: string;
  created_at: string;
  updated_at: string;
}

export interface Booking {
  id: string;
  user_id: string;
  service: string;
  pickup_location: string;
  delivery_location: string;
  scheduled_date: string;
  status: "pending" | "confirmed" | "in_transit" | "completed";
  notes?: string;
  created_at: string;
  updated_at: string;
}
