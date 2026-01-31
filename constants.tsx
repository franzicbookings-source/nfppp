
import React from 'react';
import { Leader, Policy, MembershipType, NFPEvent, GalleryImage, Interview } from './types';
import { 
  Users, 
  Briefcase, 
  BookOpen, 
  ShieldCheck, 
  HeartPulse, 
  Zap 
} from 'lucide-react';

export const NFP_NAME = "National Freedom Party (NFP)";
export const SLOGAN = "Freedom through Service and Accountability";
export const CORE_VALUES = ["Dignity", "Freedom", "Service Delivery", "Ethical Governance", "Youth Empowerment", "Rural Development"];

export const MOCK_LEADERSHIP: Leader[] = [
  {
    id: '1',
    name: 'Ivan Rowan Barnes',
    title: 'President',
    category: 'NEC',
    bio: 'Providing national vision and executive leadership for the National Freedom Party. President Barnes is committed to the principles of social justice and ensuring the NFP remains the home for the homeless.',
    photo: 'https://i.ibb.co/RpMkXkJw/Generated-Image-January-31-2026-3-34-AM.jpg',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: '2',
    name: 'Sbusiso Mkhabela',
    title: 'National Chairperson',
    category: 'NEC',
    bio: 'Overseeing party discipline and the coordination of national structures. Sbusiso brings extensive experience in community organization and institutional management.',
    photo: 'https://i.ibb.co/3yVmjjyc/Generated-Image-January-31-2026-3-42-AM.jpg',
    twitter: 'https://twitter.com'
  },
  {
    id: '3',
    name: 'Sunset Xaba',
    title: 'Acting Secretary General',
    category: 'NEC',
    bio: 'Managing the administrative heartbeat of the movement. Sunset ensures that the party\'s operations are efficient, transparent, and aligned with our manifesto goals.',
    photo: 'https://i.ibb.co/WWSYndt5/Generated-Image-January-31-2026-4-02-AM.jpg',
    linkedin: 'https://linkedin.com'
  },
  {
    id: '4',
    name: 'Mbali Shinga',
    title: 'Member of Provincial Legislature',
    category: 'Legislature',
    province: 'KwaZulu-Natal',
    bio: 'Fighting for the rights of constituents in the Provincial Legislature. Mbali focuses on oversight of service delivery and rural development projects in KZN.',
    photo: 'https://i.ibb.co/39GJR0qf/Generated-Image-January-31-2026-4-33-AM.jpg',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: '5',
    name: 'Innocent Shezi',
    title: 'Administrator',
    category: 'Legislature',
    province: 'KwaZulu-Natal',
    bio: 'Serving as a key administrative pillar within the KwaZulu-Natal Provincial Legislature. Innocent ensures that the NFP legislative caucus operates with institutional excellence and procedural integrity.',
    photo: 'https://i.ibb.co/Z1Y9vDwX/Generated-Image-January-31-2026-5-51-AM.jpg'
  }
];

// Media Archive Gallery (Cleaned of mockup data)
export const MOCK_GALLERY: GalleryImage[] = [];

// Media Broadcast Archive (Cleaned of mockup data)
export const MOCK_INTERVIEWS: Interview[] = [];

export const MOCK_POLICIES: Policy[] = [
  {
    id: 'economic',
    title: 'Economic Inclusion',
    summary: 'Building an economy that serves all South Africans, focusing on SMME growth and rural development.',
    icon: 'Briefcase',
    details: [
      'Support for local cooperatives',
      'Red tape reduction for small businesses',
      'Infrastructure investment in underserviced areas'
    ]
  },
  {
    id: 'education',
    title: 'Education & Skills',
    summary: 'A commitment to quality education and vocational training to combat youth unemployment.',
    icon: 'BookOpen',
    details: [
      'Free tertiary education for the missing middle',
      'Revitalization of TVET colleges',
      'Early Childhood Development focus'
    ]
  },
  {
    id: 'healthcare',
    title: 'Universal Healthcare',
    summary: 'Equitable access to quality medical services regardless of socio-economic standing.',
    icon: 'HeartPulse',
    details: [
      'Upgrading community clinics',
      'Mental health awareness programs',
      'Addressing staff shortages in public hospitals'
    ]
  },
  {
    id: 'safety',
    title: 'Safety & Security',
    summary: 'Restoring law and order while building trust between communities and law enforcement.',
    icon: 'ShieldCheck',
    details: [
      'Community-led policing initiatives',
      'Zero tolerance for corruption',
      'Enhanced protection for women and children'
    ]
  }
];

export const MOCK_EVENTS: NFPEvent[] = [
  {
    id: 'e5',
    title: 'Nongoma Ward 17 Manifesto & Candidate Launch',
    date: '2026-02-15',
    time: '10:00 AM',
    location: 'Nongoma, Ward 17',
    category: 'Rally',
    description: 'A historic manifesto and candidate launch for Ward 17, Nongoma. Join the NFP leadership as we present our vision for local governance and introduce our dedicated ward candidates.',
    image: 'https://i.ibb.co/5W7dd4BT/28761.jpg'
  },
  {
    id: 'e1',
    title: 'Umzumbe Ward 13 NFP Youth Talent Showcase',
    date: '2026-01-30',
    time: '09:00 AM',
    location: 'Mvuthuluka High School Hall, Umzumbe',
    category: 'Youth Workshop',
    description: 'A vibrant celebration of talent and local youth empowerment in Ward 13. Join the NFP Youth League as we showcase the artistic and creative potential of our future leaders.',
    image: 'https://i.ibb.co/DP6trW5r/28764.jpg'
  },
  {
    id: 'e4',
    title: 'NFP KZN Legislature Caucus: Public Participation Programme',
    date: '2024-05-17',
    time: '10:00 AM',
    location: 'B-Section Hall, eSikhaleni',
    category: 'Community Meeting',
    description: 'The NFP KZN Legislature Caucus, led by Hon. Mbali Shinga, conducts a critical public participation programme to engage with the residents of eSikhaleni on service delivery and provincial governance.',
    image: 'https://i.ibb.co/8nQPJjP9/28763-1.jpg'
  }
];

export const MEMBERSHIP_TYPES: MembershipType[] = [
  {
    category: 'General',
    description: 'For all citizens committed to the vision of a free and prosperous South Africa.',
    benefits: ['Voting rights in internal structures', 'Direct updates from leadership', 'Event invitations']
  },
  {
    category: 'Youth',
    description: 'Ages 14–35. Join the NFP Youth League (NFPYL) to shape the future.',
    benefits: ['Youth empowerment workshops', 'Mentorship programs', 'Political education']
  },
  {
    category: 'Student',
    description: 'Exclusively for registered students in TVETs and Universities.',
    benefits: ['NASMO membership', 'Support for student funding issues', 'Academic networking']
  }
];
