// Tipos para toda la información de la fundación

export interface NavItem {
  label: string
  href: string
}

export interface HeroContent {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  backgroundImage: string
}

export interface AboutContent {
  title: string
  description: string
  secondaryDescription?: string
  image: string
  stats: {
    value: string
    label: string
  }[]
}

export interface MissionVision {
  mission: {
    title: string
    description: string
    icon: string
  }
  vision: {
    title: string
    description: string
    icon: string
  }
  values: {
    title: string
    description: string
    icon: string
  }[]
}

export interface Service {
  id: string
  title: string
  items: string[]
  icon: string
}

export interface GalleryItem {
  id: string
  title: string
  description?: string
  image: string
  type: "image" | "video"
  videoUrl?: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  social?: {
    linkedin?: string
    twitter?: string
    email?: string
  }
}

export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  image: string
  registrationLink?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  image: string
}

export interface Partner {
  id: string
  name: string
  logo: string
  website?: string
}

export interface ContactInfo {
  address: string
  phone: string
  whatsapp: string
  email: string
  hours: string
  mapEmbed: string
  social: {
    facebook?: string
    instagram?: string
    twitter?: string
    youtube?: string
  }
}

export interface DonationInfo {
  nit: string
  bankName: string
  accountType: string
  accountNumber: string
}
export interface Program {
  id: string
  title: string
  description: string
  image: string
  category: string
}

export interface FoundationData {
  name: string
  fullName: string
  tagline: string
  logo: string
  slogan: string
  slogan2?: string
  nav: NavItem[]
  hero: HeroContent
  about: AboutContent
  missionVision: MissionVision
  programs: Program[]
  services: Service[]
  gallery: GalleryItem[]
  team: TeamMember[]
  events: Event[]
  testimonials: Testimonial[]
  partners: Partner[]
  contact: ContactInfo
  donation: DonationInfo
}
