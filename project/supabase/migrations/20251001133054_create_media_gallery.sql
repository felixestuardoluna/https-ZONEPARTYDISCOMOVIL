/*
  # Create Media Gallery System

  1. New Tables
    - `media_items`
      - `id` (uuid, primary key)
      - `title` (text) - Title or description of the media
      - `media_type` (text) - Type: 'photo' or 'video'
      - `media_url` (text) - URL to the media file
      - `thumbnail_url` (text, optional) - Thumbnail for videos
      - `event_type` (text, optional) - Type of event (wedding, birthday, etc)
      - `is_featured` (boolean) - Whether to feature on homepage
      - `display_order` (integer) - Order for displaying
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `media_items` table
    - Add policy for public read access (everyone can view)
    - Add policy for authenticated users to insert/update/delete (admin only)

  3. Notes
    - Public can view all media items
    - Only authenticated users can manage media
    - Uses display_order for custom sorting
*/

CREATE TABLE IF NOT EXISTS media_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL DEFAULT '',
  media_type text NOT NULL CHECK (media_type IN ('photo', 'video')),
  media_url text NOT NULL,
  thumbnail_url text,
  event_type text,
  is_featured boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE media_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view media items"
  ON media_items
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert media items"
  ON media_items
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update media items"
  ON media_items
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete media items"
  ON media_items
  FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_media_items_type ON media_items(media_type);
CREATE INDEX IF NOT EXISTS idx_media_items_featured ON media_items(is_featured);
CREATE INDEX IF NOT EXISTS idx_media_items_order ON media_items(display_order);
