import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface MediaItem {
  id: string;
  title: string;
  media_type: 'photo' | 'video';
  media_url: string;
  thumbnail_url?: string;
  event_type?: string;
  is_featured: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}
