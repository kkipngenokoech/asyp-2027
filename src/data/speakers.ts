export type Speaker = {
  name: string
  title: string
  organization: string
  session: string
  sessionType: 'keynote' | 'panel' | 'workshop' | 'plenary'
  image?: string
  linkedin?: string
  bio?: string
  initials: string
}

export const speakers: Speaker[] = [
  {
    name: 'Skyler Speakman',
    title: 'Senior Research Scientist & Manager, AI Sciences',
    organization: 'IBM Research Africa',
    session: 'Navigating Opportunity in a World Shaped by Artificial Intelligence',
    sessionType: 'keynote',
    initials: 'SS',
    bio: 'Leading AI research at IBM Research Africa, focused on developing AI solutions for African challenges.',
  },
  {
    name: 'Esther Kunda',
    title: 'Director General, Innovation & Emerging Technologies',
    organization: 'Ministry of ICT and Innovation, Rwanda',
    session: 'Building Africa\'s AI-Ready Economy',
    sessionType: 'keynote',
    initials: 'EK',
    bio: 'Leading Rwanda\'s national strategy for ICT innovation and emerging technologies.',
  },
  {
    name: 'Keith Straughan',
    title: 'Professor of Global Entrepreneurship & Digital Tech Innovation',
    organization: 'Carnegie Mellon University Africa',
    session: 'Building the University-to-Venture Pipeline',
    sessionType: 'plenary',
    initials: 'KS',
    bio: 'Expert in entrepreneurship education and digital technology innovation at CMU-Africa.',
  },
  {
    name: 'Stanley Mukasa',
    title: 'Associate Director of Entrepreneurship',
    organization: 'Carnegie Mellon University Africa',
    session: 'From Idea to Venture — the African Startup Path',
    sessionType: 'workshop',
    initials: 'SM',
    bio: 'Driving entrepreneurship programs and startup support at CMU-Africa.',
  },
  {
    name: 'Dr. Jennifer Batamuliza',
    title: 'IT Lecturer & Head, Data-Driven Incubation Hub',
    organization: 'University of Rwanda',
    session: 'Applied AI for African Engineering Challenges',
    sessionType: 'workshop',
    initials: 'JB',
    bio: 'Leading data science research and incubation for African engineering solutions.',
  },
  {
    name: 'Jude Rwaka',
    title: 'Head of IT',
    organization: 'RwandAir',
    session: 'Technology Powering Rwanda\'s Growth',
    sessionType: 'panel',
    initials: 'JR',
    bio: 'Overseeing technology strategy at Rwanda\'s national airline.',
  },
  {
    name: 'IEEE R8 SAC Representative',
    title: 'IEEE Region 8 Student Activities Committee',
    organization: 'IEEE Region 8',
    session: 'Effective Student Branch Management',
    sessionType: 'plenary',
    initials: 'R8',
    bio: 'Supporting student branches across IEEE Region 8 in Africa, Europe, and the Middle East.',
  },
  {
    name: 'IEEE R8 YP Representative',
    title: 'IEEE Region 8 Young Professionals Committee',
    organization: 'IEEE Region 8',
    session: 'The IEEE YP Journey',
    sessionType: 'plenary',
    initials: 'YP',
    bio: 'Championing young professional development and career growth in IEEE Region 8.',
  },
]
