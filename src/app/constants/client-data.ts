export interface Service {
  name: string;
  price: string;
  duration: string;
  description: string;
  image?: string; // optional placeholder image
}

export interface GalleryImage {
  url: string;
  alt: string;
  category: 'hair' | 'nails' | 'combo' | 'all';
}

export type BookingStatus = 'available' | 'requested' | 'booked';

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
  businessHours: string;
  galleryImages: GalleryImage[];
  services: {
    hair: Service[];
    nails: Service[];
    combos: Service[];
  };
  mockAvailability: { [date: string]: BookingStatus };
}

export const CLIENT_DATA: ClientData = {
  name: "Get Glamorous",
  tagline: "Elegance in Every Strand & Stroke",
  address: "123 Beauty Lane, Cape Town, 8001",
  phone: "(021) 555-9876",
  email: "hello@luxebloomsalon.com",
  googleMapCoords: { lat: -33.9249, lng: 18.4241 },
  social: {
    instagram: "https://instagram.com/_getglamorous0",
    facebook: "https://facebook.com/luxebloomsalon"
  },
  businessHours: "Mon–Sat 9:00 AM – 6:00 PM",

  mockAvailability: {
    "2026-04-18": "booked",
    "2026-04-20": "requested",
    "2026-04-22": "available",
    "2026-04-25": "booked",
    "2026-05-05": "requested",
    "2026-05-12": "available",
    "2026-05-15": "booked"
  },

  galleryImages: [
    /*{ url: "https://picsum.photos/id/1011/2000/1200", alt: "Luxury hair transformation", category: "hair" },
    { url: "https://picsum.photos/id/1005/2000/1200", alt: "Elegant blonde balayage", category: "hair" },
    { url: "https://picsum.photos/id/201/2000/1200", alt: "Soft glam makeup & nails", category: "nails" },
    { url: "https://picsum.photos/id/1009/2000/1200", alt: "Nail art perfection", category: "nails" },
    { url: "https://picsum.photos/id/133/2000/1200", alt: "Modern hair extensions", category: "hair" },
    { url: "https://picsum.photos/id/160/2000/1200", alt: "Bridal hair & nails combo", category: "combo" },
    { url: "https://picsum.photos/id/1016/2000/1200", alt: "Voluminous curls", category: "hair" },
    { url: "https://picsum.photos/id/1003/2000/1200", alt: "Rose gold chrome nails", category: "nails" },
    { url: "https://picsum.photos/id/102/2000/1200", alt: "Signature blowout & style", category: "hair" },
    { url: "https://picsum.photos/id/1006/2000/1200", alt: "Full glam combo session", category: "combo" }*/
     { url: "https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2015/06/short-layered-hairstyles-featured.jpg?fit=1280%2C720&ssl=1", alt: "Short Hair", category: "hair" },
     { url: "https://i5.walmartimages.com/asr/7eb93feb-cfb2-4227-a9b4-4ba3cdeeaa27.26d2b36a1502809ec01e3efff1c93693.jpeg", alt: "Medium Hair", category: "hair" },
     { url: "https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2015/06/short-layered-hairstyles-featured.jpg?fit=1280%2C720&ssl=1", alt: "Long Hair", category: "hair" },
     { url: "https://d375139ucebi94.cloudfront.net/region2/za/5436/biz_photo/0084f1d4094247018d5b1df74ac9cf-glama-nails-beauty-biz-photo-e16fdcc6cc6549d8adcd7a98a93fe3-booksy.jpeg?size=640x427", alt: "Basic Manicure + Hand Massage", category: "nails" }
  ],

  // Professional services with realistic pricing (you can edit later)
  services: {
    hair: [
      {
        name: "Signature Balayage",
        price: "R1,850",
        duration: "3 hours",
        description: "Hand-painted highlights with root shadow for a natural sun-kissed look.",
        image: "https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2015/06/short-layered-hairstyles-featured.jpg?fit=1280%2C720&ssl=1"
      },
      {
        name: "Luxury Haircut & Style",
        price: "R950",
        duration: "90 mins",
        description: "Precision cut + luxury wash, treatment & blowout.",
        image: "https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2015/06/short-layered-hairstyles-featured.jpg?fit=1280%2C720&ssl=1"
      },
      {
        name: "Keratin Smoothing Treatment",
        price: "R2,200",
        duration: "3.5 hours",
        description: "Eliminates frizz and adds mirror-like shine for up to 6 months.",
        image: "https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2015/06/short-layered-hairstyles-featured.jpg?fit=1280%2C720&ssl=1"
      }
    ],
    nails: [
      {
        name: "Spa Manicure + Gel Polish",
        price: "R650",
        duration: "60 mins",
        description: "Full hand care, exfoliation, massage & long-lasting gel polish.",
        image: "https://d375139ucebi94.cloudfront.net/region2/za/5436/biz_photo/0084f1d4094247018d5b1df74ac9cf-glama-nails-beauty-biz-photo-e16fdcc6cc6549d8adcd7a98a93fe3-booksy.jpeg?size=640x427"
      },
      {
        name: "Luxury Acrylic Full Set",
        price: "R850",
        duration: "90 mins",
        description: "Custom sculpted nails with 3D art or chrome finish.",
        image: "https://d375139ucebi94.cloudfront.net/region2/za/5436/biz_photo/0084f1d4094247018d5b1df74ac9cf-glama-nails-beauty-biz-photo-e16fdcc6cc6549d8adcd7a98a93fe3-booksy.jpeg?size=640x427"
      },
      {
        name: "Nail Art Masterpiece",
        price: "R450",
        duration: "45 mins",
        description: "Intricate hand-painted or 3D nail art on any base.",
        image: "https://d375139ucebi94.cloudfront.net/region2/za/5436/biz_photo/0084f1d4094247018d5b1df74ac9cf-glama-nails-beauty-biz-photo-e16fdcc6cc6549d8adcd7a98a93fe3-booksy.jpeg?size=640x427"
      }
    ],
    combos: [
      {
        name: "Hair & Nails Glam Combo",
        price: "R2,400",
        duration: "4 hours",
        description: "Signature haircut + balayage touch-up + luxury manicure & gel polish."
      },
      {
        name: "Bridal Beauty Package",
        price: "R4,800",
        duration: "5 hours",
        description: "Trial + full bridal hair, makeup & nails on the big day."
      }
    ]
  }
};