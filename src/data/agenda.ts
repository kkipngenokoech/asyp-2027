export type AgendaItem = {
  time: string
  title: string
  description: string
  type: 'ceremony' | 'keynote' | 'workshop' | 'social' | 'break' | 'tour' | 'panel' | 'plenary' | 'session' | 'logistics'
}

export type AgendaDay = {
  day: number
  date: string
  title: string
  items: AgendaItem[]
}

export const agenda: AgendaDay[] = [
  {
    day: 1,
    date: 'Friday, July 24, 2027',
    title: 'Arrival & Welcome',
    items: [
      {
        time: '08:00',
        title: 'Participant Arrivals & Registration',
        description: 'Airport welcome ushers on duty from 06:00. Welcome packs, badge collection, accommodation check-in.',
        type: 'logistics',
      },
      {
        time: '13:00',
        title: 'Opening Ceremony',
        description: 'Welcome by Congress Chair | Remarks by IEEE Rwanda Subsection Chair | Address by CMU-Africa Director | Greetings from IEEE Region 8 SAC and YP representatives.',
        type: 'ceremony',
      },
      {
        time: '13:45',
        title: 'Keynote: Navigating Opportunity in a World Shaped by AI',
        description: 'Skyler Speakman — Senior Research Scientist & Manager, AI Sciences, IBM Research Africa',
        type: 'keynote',
      },
      {
        time: '14:30',
        title: 'Kickoff Session: Meet and Connect',
        description: 'Structured ice-breaker. Each delegate introduces their section, IEEE role, and one thing they want to take home.',
        type: 'session',
      },
      {
        time: '15:15',
        title: 'Coffee Break',
        description: '',
        type: 'break',
      },
      {
        time: '15:45',
        title: 'Technical Visit — Norrsken House Kigali',
        description: 'Guided visit to East Africa\'s largest innovation hub for entrepreneurs, 10 minutes from CMU-Africa within the KSEZ.',
        type: 'tour',
      },
      {
        time: '18:00',
        title: 'Free Time — Kigali City Centre',
        description: '',
        type: 'break',
      },
      {
        time: '19:30',
        title: 'Multicultural Evening',
        description: 'The social centrepiece of ASYP 2027. Each delegation represents their country through food, traditional clothing, music, or performance. Open-air setting on CMU-Africa outdoor terrace.',
        type: 'social',
      },
    ],
  },
  {
    day: 2,
    date: 'Saturday, July 25, 2027',
    title: 'Workshops & Gala',
    items: [
      {
        time: '08:00',
        title: 'Breakfast',
        description: '',
        type: 'break',
      },
      {
        time: '09:00',
        title: 'Kigali City Tour',
        description: 'Professional guide via Rwanda Development Board. Route: Kigali Genocide Memorial (optional), Kimironko Market, Nyamirambo quarter, panoramic hill viewpoints.',
        type: 'tour',
      },
      {
        time: '11:15',
        title: 'Return to CMU-Africa',
        description: '',
        type: 'logistics',
      },
      {
        time: '12:00',
        title: 'Lunch',
        description: '',
        type: 'break',
      },
      {
        time: '13:00',
        title: 'Keynote: Building Africa\'s AI-Ready Economy',
        description: 'Esther Kunda — Director General, Innovation & Emerging Technologies, Ministry of ICT and Innovation, Rwanda',
        type: 'keynote',
      },
      {
        time: '13:45',
        title: 'Parallel Workshop Tracks — Block I',
        description: 'Track A: Effective Student Branch Management (IEEE R8 SAC, mandatory for SB officers) | Track B: The IEEE YP Journey (IEEE R8 YP, mandatory for YP officers) | Track C: Applied AI for African Engineering Challenges (IBM Research Africa)',
        type: 'workshop',
      },
      {
        time: '14:35',
        title: 'Group Photo & Coffee Break',
        description: '',
        type: 'break',
      },
      {
        time: '15:00',
        title: 'Parallel Workshop Tracks — Block II',
        description: 'Track A: From Idea to Venture — the African Startup Path (Stanley Mukasa, CMU-Africa) | Track B: Data-Driven Solutions for African Development (Dr. Jennifer Batamuliza, University of Rwanda) | Track C: Women in Engineering — Visibility, Voice, and Venture (IEEE R8 WIE)',
        type: 'workshop',
      },
      {
        time: '15:50',
        title: 'Coffee Break',
        description: '',
        type: 'break',
      },
      {
        time: '16:00',
        title: 'Panel: Technology Powering Rwanda\'s Growth',
        description: 'Panellists: Jude Rwaka (RwandAir) | Keith Straughan (CMU-Africa) | MTN Rwanda Representative | Rwanda ICT Chamber Representative',
        type: 'panel',
      },
      {
        time: '17:00',
        title: 'Plenary: Building the University-to-Venture Pipeline',
        description: 'Keith Straughan — Professor of Global Entrepreneurship & Digital Technology Innovation, CMU-Africa',
        type: 'plenary',
      },
      {
        time: '19:30',
        title: 'Coach Departure for Gala Dinner',
        description: 'Departing CMU-Africa main entrance',
        type: 'logistics',
      },
      {
        time: '20:00',
        title: 'Gala Dinner — The Hut Restaurant',
        description: 'Authentic Rwandan cuisine. African attire encouraged. Awards ceremony: Best Poster, Most Active Delegation, Best Workshop.',
        type: 'social',
      },
    ],
  },
  {
    day: 3,
    date: 'Sunday, July 26, 2027',
    title: 'Pitches & Closing',
    items: [
      {
        time: '08:00',
        title: 'Breakfast at Accommodation',
        description: '',
        type: 'break',
      },
      {
        time: '09:00',
        title: 'Graduate Opportunities at CMU-Africa',
        description: 'Information session for delegates interested in postgraduate programmes in IT, ECE, and Engineering AI.',
        type: 'session',
      },
      {
        time: '09:30',
        title: 'Poster Session — CMU-Africa IIL Hub',
        description: 'Student Branch and YP delegations present posters on branch activities, technical projects, or research. Open networking format. Judging panel awards Best Poster.',
        type: 'session',
      },
      {
        time: '10:15',
        title: 'Plenary: Elevate Your Pitch',
        description: 'Delegates pitch a short idea and receive structured peer and expert feedback. IEEE R8 Entrepreneurship Committee / Stanley Mukasa (CMU-Africa).',
        type: 'plenary',
      },
      {
        time: '11:00',
        title: 'Closing Ceremony',
        description: 'Congress highlights video | Award presentations | Remarks from IEEE R8 SAC and YP | Group photograph',
        type: 'ceremony',
      },
      {
        time: '12:00',
        title: 'Lunch',
        description: '',
        type: 'break',
      },
      {
        time: '13:00',
        title: 'Optional Afternoon Activities',
        description: 'Kigali Genocide Memorial | Cycling tour of Kigali hills with Rwanda Cycling Federation | Nyungwe Forest or Volcanoes National Park day trip | Free time in Kigali city centre',
        type: 'tour',
      },
      {
        time: 'From 14:00',
        title: 'Delegate Departures',
        description: 'Coordinated airport transfers from CMU-Africa and recommended hotels.',
        type: 'logistics',
      },
    ],
  },
]
