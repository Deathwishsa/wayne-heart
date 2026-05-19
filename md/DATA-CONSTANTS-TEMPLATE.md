DATA-CONSTANTS-TEMPLATE.md
**DATA-CONSTANTS-TEMPLATE.md** (copy into `client-data.ts`)

```markdown
# client-data.ts (ALL client-specific data lives here)

export interface ClientData {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  email: string;
  googleMapCoords: { lat: number; lng: number };
  social: {
    instagram: string;
    facebook?: string;
    tiktok?: string;
  };
  galleryImages: { url: string; alt: string; category: 'hair' | 'nails' | 'combo' }[];
  services: {
    hair: Array<{ name: string; price: string; duration: string; description: string }>;
    nails: Array<{ name: string; price: string; duration: string; description: string }>;
    combos: Array<{ name: string; price: string; duration: string; description: string }>;
  };
  businessHours: string; // e.g. "Mon-Sat 9am-6pm"
  // Add more as needed (e.g. meta description, logo URL)
}

export const CLIENT_DATA: ClientData = {
  name: "YOUR SALON NAME HERE",
  tagline: "Luxury Hair & Nail Experience",
  address: "123 Beauty Lane, City, State 12345",
  phone: "(555) 123-4567",
  email: "hello@yoursalon.com",
  googleMapCoords: { lat: 40.7128, lng: -74.0060 }, // ← replace with real
  social: {
    instagram: "https://instagram.com/yoursalon",
    facebook: "https://facebook.com/yoursalon"
  },
  galleryImages: [
    // Last 5 will auto-show on homepage slider
    { url: "assets/images/gallery/1.jpg", alt: "Hair transformation", category: "hair" },
    // ... add 10-15 real client images later
  ],
  services: {
    hair: [ /* populate with real specials */ ],
    nails: [ /* populate */ ],
    combos: [ /* populate */ ]
  },
  businessHours: "Monday - Saturday: 9:00 AM - 6:00 PM"
};