export type Organizer = {
  name: string
  role: string
  responsibility: string
  image?: string
  linkedin?: string
  initials: string
}

export const organizers: Organizer[] = [
  {
    name: 'Cyiza Augustin',
    role: 'Congress Chair',
    responsibility: 'Overall leadership',
    initials: 'CA',
  },
  {
    name: 'Akabway Rurangwa',
    role: 'Vice Chair',
    responsibility: 'Coordination',
    initials: 'AR',
  },
  {
    name: 'Slyvia Jebet',
    role: 'Secretary',
    responsibility: 'Documentation',
    initials: 'SJ',
  },
  {
    name: 'Kipngeno Koech',
    role: 'Treasurer',
    responsibility: 'Finance',
    initials: 'KK',
    linkedin: 'https://www.linkedin.com/in/kkipngenokoech/',
    image: 'images/kkip-image.jpeg',
  },
  {
    name: 'Stella Kaniaru',
    role: 'Program Lead',
    responsibility: 'Agenda & sessions',
    initials: 'SK',
  },
  {
    name: 'Samantha Niyoyita',
    role: 'Operations Lead',
    responsibility: 'Logistics',
    initials: 'SN',
  },
  {
    name: 'Simenya Enoch',
    role: 'Marketing Lead',
    responsibility: 'Promotion',
    initials: 'SE',
  },
  {
    name: 'Igihozo Nadah Stella',
    role: 'Media Lead',
    responsibility: 'Coverage',
    initials: 'IN',
  },
]
