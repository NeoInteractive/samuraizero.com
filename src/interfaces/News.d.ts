﻿export interface News {
  id: string;
  uuid: string;
  title: string;
  slug: string;
  html: string;
  comment_id: string;
  feature_image: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
  published_at: string;
  custom_excerpt?: string | null;
  codeinjection_head?: null;
  codeinjection_foot?: null;
  custom_template?: null;
  canonical_url?: null;
  primary_author?: null;
  primary_tag?: null;
  url: string;
  page: boolean;
  excerpt?: string | null;
  og_image?: null;
  og_title?: null;
  og_description?: null;
  twitter_image?: null;
  twitter_title?: null;
  twitter_description?: null;
  meta_title?: null;
  meta_description?: null;
}
