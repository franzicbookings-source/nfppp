
export interface Leader {
  id: string;
  name: string;
  title: string;
  bio: string;
  photo: string;
  category: 'NEC' | 'Parliament' | 'Legislature' | 'Regional';
  province?: string;
  twitter?: string;
  linkedin?: string;
}

export interface Policy {
  id: string;
  title: string;
  summary: string;
  icon: string;
  details: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'Press Release' | 'Announcement' | 'Update';
  content: string;
  url?: string;
}

export interface NFPEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: 'Rally' | 'Community Meeting' | 'Press Briefing' | 'Youth Workshop';
  description: string;
  image?: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  category: 'Rallies' | 'Community' | 'Leadership' | 'NEC';
  date: string;
}

export interface Interview {
  id: string;
  title: string;
  date: string;
  source: string;
  summary: string;
  link: string;
  type: 'Video' | 'Article' | 'Radio';
  interviewee: string;
}

export type MembershipCategory = 'General' | 'Youth' | 'Student';

export interface MembershipType {
  category: MembershipCategory;
  description: string;
  benefits: string[];
}
