import { RecordStore } from '@/types';

export const recordStores: RecordStore[] = [
  {
    id: '1',
    name: 'Vinyl Paradise',
    slug: 'vinyl-paradise',
    address: '123 Bedford Ave, Brooklyn, NY 11211',
    borough: 'Brooklyn',
    coordinates: [40.7193, -73.9554], // Williamsburg area
    rating: 'gold',
    specialties: ['Jazz', 'Soul', 'Funk'],
    priceRange: '$$',
    description: 'A cozy record shop specializing in rare jazz and soul vinyl.',
    reviewExcerpt: 'Incredible selection of jazz rarities with knowledgeable staff.',
    fullReview: `Vinyl Paradise is a gem tucked away in Williamsburg. The moment you walk in, you're greeted by the warm crackle of vintage jazz spinning on their in-house turntable. The owner, Mike, has curated one of the best collections of jazz, soul, and funk records I've seen in the city.

    The pricing is fair considering the rarity of some items, and they regularly bring in new stock. The staff is incredibly knowledgeable and happy to make recommendations based on your taste.
    
    What really sets this place apart is their listening station where you can sample records before purchasing. They also host listening parties on the first Friday of every month, featuring different genres and artists.
    
    Gold rating well deserved for their specialized collection and community focus.`,
    imageUrl: 'https://placehold.co/600x400?text=Vinyl+Paradise',
    hours: {
      monday: 'Closed',
      tuesday: '12PM - 7PM',
      wednesday: '12PM - 7PM',
      thursday: '12PM - 7PM',
      friday: '12PM - 8PM',
      saturday: '11AM - 8PM',
      sunday: '12PM - 6PM'
    },
    phone: '(718) 555-1234',
    website: 'https://example.com/vinylparadise',
    instagram: '@vinylparadisenyc'
  },
  {
    id: '2',
    name: 'Wax Nostalgic',
    slug: 'wax-nostalgic',
    address: '456 W 14th St, New York, NY 10014',
    borough: 'Manhattan',
    coordinates: [40.7420, -74.0048], // Meatpacking District
    rating: 'diamond',
    specialties: ['Indie Rock', 'Electronic', 'New Releases'],
    priceRange: '$$$',
    description: 'High-end record store focusing on limited pressings and audiophile-quality vinyl.',
    reviewExcerpt: 'The best vinyl shop in Manhattan with exceptional curation and quality.',
    fullReview: `Wax Nostalgic is undoubtedly the crown jewel of Manhattan's vinyl scene. Located in the trendy Meatpacking District, this shop spares no expense in creating a premium record shopping experience.

    The store is beautifully designed with custom wooden shelving and state-of-the-art listening stations featuring high-end audio equipment. The selection focuses on limited pressings, first editions, and audiophile-quality records spanning indie rock, electronic, and carefully selected new releases.
    
    Yes, prices are steep (hence the three-dollar sign rating), but you're paying for immaculate condition vinyl, expert curation, and an unparalleled shopping experience. The staff are all musicians or DJs themselves and can speak intelligently about every corner of their inventory.
    
    They also offer vinyl cleaning services, turntable setup consultations, and host exclusive listening events for new releases.
    
    Absolutely deserving of the diamond rating - this is the best record store experience in the borough and perhaps the entire city.`,
    imageUrl: 'https://placehold.co/600x400?text=Wax+Nostalgic',
    hours: {
      monday: '11AM - 7PM',
      tuesday: '11AM - 7PM',
      wednesday: '11AM - 7PM',
      thursday: '11AM - 8PM',
      friday: '11AM - 9PM',
      saturday: '10AM - 9PM',
      sunday: '10AM - 7PM'
    },
    phone: '(212) 555-5678',
    website: 'https://example.com/waxnostalgic',
    instagram: '@waxnostalgicrecords'
  },
  {
    id: '3',
    name: 'Bargain Bin Records',
    slug: 'bargain-bin-records',
    address: '789 Northern Blvd, Queens, NY 11358',
    borough: 'Queens',
    coordinates: [40.7628, -73.8301], // Flushing area
    rating: 'red',
    specialties: ['Used Vinyl', 'Dollar Bins', 'Rock'],
    priceRange: '$',
    description: 'Budget-friendly shop with mountains of used records for diggers.',
    reviewExcerpt: 'Disorganized chaos with occasional hidden treasures at low prices.',
    fullReview: `Bargain Bin Records in Queens lives up to its name, but not always in a good way. This cramped store is literally filled to the brim with dusty, often unlabeled crates of vinyl spanning decades.

    The organization is virtually non-existent. Records are frequently misfiled, sleeves are worn, and finding something specific feels like a needle in a haystack situation. The lighting is poor, making it difficult to inspect record conditions before purchasing.
    
    The staff seems disinterested at best, offering little assistance even when directly asked. The store has a musty smell that clings to your clothes after leaving.
    
    Why even visit? Well, the prices are rock bottom. Most bins are priced at $1-5 per record, and if you're willing to dig for hours, you occasionally find a gem that makes it worthwhile. I once unearthed an original pressing of an obscure 70s funk album worth over $100 for just $3.
    
    I've given it a red rating because despite the potential for finds, the shopping experience is poor, record quality is inconsistent, and the lack of organization makes it a frustrating experience for all but the most determined crate-diggers.`,
    imageUrl: 'https://placehold.co/600x400?text=Bargain+Bin+Records',
    hours: {
      monday: 'Closed',
      tuesday: 'Closed',
      wednesday: '1PM - 6PM',
      thursday: '1PM - 6PM',
      friday: '1PM - 7PM',
      saturday: '12PM - 8PM',
      sunday: '12PM - 5PM'
    },
    phone: '(718) 555-9012',
    website: undefined,
    instagram: '@bargainbinrecordsqueens'
  }
]; 