// =============================================================================
// BUSINESS CONSTANTS — Wayne Heart
// src/app/common/constant/business.ts
//
// ALL hardcoded business data lives here.
// To rebrand this template for a new client, update this file only.
// =============================================================================

export interface NavItem {
  label: string;
  route: string;
  icon: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SocialLink {
  platform: string;
  icon: string;
  url: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  event: string;
}

export const BUSINESS = {
  // ── Identity
  name        : 'Wayne Heart',
  stageName   : 'WAYNE HEART',
  tagline     : 'Live • Loud • Unforgettable',
  heroTagline : 'The voice that makes nights legendary',
  shortBio    : '8+ years behind the mic across Cape Town and beyond. From intimate gatherings to 1000-seat ballrooms — every event leaves a lasting impression.',
  location    : 'Cape Town, South Africa',

  // ── SEO / HTML
  htmlTitle       : 'WAYNE HEART | Emcee · Karaoke Host · Event Entertainer',
  metaDescription : 'Wayne Heart — Cape Town\'s premier emcee, karaoke host & event entertainer. Available for weddings, corporate events, private parties and more.',

  // ── Contact
  phone    : '+27 82 000 0000',
  email    : 'booking@wayneheart.co.za',
  website  : 'https://wayneheart.co.za',

  // ── Social Media
  social: [
    {
      platform : 'Instagram',
      icon     : 'fa-brands fa-instagram',
      url      : 'https://instagram.com/wayneheart',
    },
    {
      platform : 'Facebook',
      icon     : 'fa-brands fa-facebook-f',
      url      : 'https://facebook.com/wayneheart',
    },
    {
      platform : 'TikTok',
      icon     : 'fa-brands fa-tiktok',
      url      : 'https://tiktok.com/@wayneheart',
    },
    {
      platform : 'YouTube',
      icon     : 'fa-brands fa-youtube',
      url      : 'https://youtube.com/@wayneheart',
    },
  ] as SocialLink[],

  // ── Navigation
  nav: [
    { label: 'Home',      route: '/',           icon: 'fa-solid fa-house' },
    { label: 'Gallery',   route: '/gallery',    icon: 'fa-solid fa-images' },
    { label: 'Booking',   route: '/booking',    icon: 'fa-solid fa-calendar-check' },
    { label: 'Contact',   route: '/contact-us', icon: 'fa-solid fa-envelope' },
  ] as NavItem[],

  // ── CTA Button (header)
  ctaLabel : 'Book the Stage',
  ctaRoute : '/contact-us',

  // ── Stats (hero section)
  stats: [
    { value: '8+',   label: 'Years on stage'     },
    { value: '200+', label: 'Events hosted'       },
    { value: '5★',   label: 'Average rating'      },
    { value: '100%', label: 'Client satisfaction' },
  ] as Stat[],

  // ── Services
  services: [
    {
      icon        : 'fa-solid fa-microphone-lines',
      title       : 'Emcee & Hosting',
      description : 'Weddings, corporate events, award ceremonies — flawless energy, perfect timing and crowd connection from first word to last.',
    },
    {
      icon        : 'fa-solid fa-music',
      title       : 'Karaoke Nights',
      description : 'Full production setup, curated songbook and high-octane hosting — the ultimate crowd-pleaser for any occasion.',
    },
    {
      icon        : 'fa-solid fa-champagne-glasses',
      title       : 'Private Parties',
      description : 'Birthdays, anniversaries, year-end functions — I keep the vibe electric and the dance floor packed all night.',
    },
    {
      icon        : 'fa-solid fa-building',
      title       : 'Corporate Events',
      description : 'Professional, polished hosting with that perfect edge of warmth and fun. Your brand, elevated.',
    },
  ] as Service[],

  // ── Testimonials
  testimonials: [
    {
      quote  : 'Wayne had our entire room on their feet within 10 minutes. Absolutely incredible energy — our guests are still talking about it.',
      author : 'Sarah & James M.',
      event  : 'Wedding Reception, Stellenbosch',
    },
    {
      quote  : 'Professional, hilarious and completely in control of the room. Our company year-end will never be the same without him.',
      author : 'Priya N.',
      event  : 'Corporate Year-End, Cape Town CBD',
    },
    {
      quote  : 'The karaoke night Wayne hosted was the highlight of our entire season. Booked him three times since.',
      author : 'Marco F.',
      event  : 'Private Club Night, Camps Bay',
    },
  ] as Testimonial[],

  // ── Gallery (placeholder images — replace with real assets)
  heroSlides: [
    'assets/images/hero-1.jpg',
    'assets/images/hero-2.jpg',
    'assets/images/hero-3.jpg',
    'assets/images/hero-4.jpg',
  ],

  galleryPreview: [
    'assets/images/gallery-1.jpg',
    'assets/images/gallery-2.jpg',
    'assets/images/gallery-3.jpg',
    'assets/images/gallery-4.jpg',
    'assets/images/gallery-5.jpg',
    'assets/images/gallery-6.jpg',
  ],
};
