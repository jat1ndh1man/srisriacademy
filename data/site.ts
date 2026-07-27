import {
  Award,
  BedDouble,
  Bot,
  Dumbbell,
  GraduationCap,
  HeartHandshake,
  Leaf,
  Medal,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";

export type HeroSlide = {
  id: string;
  navLabel: string;
  mediaType: "image" | "video";
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  video?: string;
  poster: string;
};

export const navItems = [
  {
    label: "About",
    items: ["Our Story", "Gurudev's Vision", "Leadership", "Campus", "Careers"],
  },
  {
    label: "Academics",
    items: ["Early Years", "Primary School", "Middle School", "Senior School", "CBSE Curriculum"],
  },
  {
    label: "Boarding",
    items: ["Residential Life", "Pastoral Care", "Dining", "Weekend Activities"],
  },
  {
    label: "Student Life",
    items: ["Arts", "Clubs", "Community Service", "Events"],
  },
  {
    label: "Sports",
    items: ["Football", "Swimming", "Archery", "Cricket", "Skating"],
  },
  {
    label: "Achievements",
    items: ["Hall of Fame", "Awards", "Olympiads", "Alumni Stories"],
  },
  {
    label: "Admissions",
    items: ["Process", "Fees", "Scholarships", "Transport", "Enquire Now"],
  },
];

export const heroSlides: HeroSlide[] = [
  {
    id: "campus",
    navLabel: "Campus",
    mediaType: "image",
    eyebrow: "Nurturing minds. Enriching lives.",
    title: "Every Child Carries Infinite Potential",
    description:
      "A serene Siliguri campus where academic excellence, human values, and world-ready confidence grow together.",
    image: "/images/guruji-hero.png",
    poster: "/images/guruji-hero.png",
  },
  {
    id: "toppers",
    navLabel: "Toppers",
    mediaType: "image",
    eyebrow: "Our proud achievers",
    title: "Excellence in Every Step",
    description:
      "Students raise the bar with disciplined effort, focused mentorship, and remarkable academic outcomes.",
    image: "/images/toppers.png",
    poster: "/images/toppers.png",
  },
  {
    id: "boarding",
    navLabel: "Boarding",
    mediaType: "image",
    eyebrow: "Residential boarding",
    title: "A Calm Home for Growing Up",
    description:
      "Safe boarding, nutritious meals, guided prep, and warm pastoral care create a steady rhythm of life.",
    image: "/images/hero/boarding-generated-hd.png",
    poster: "/images/hero/boarding-generated-hd.png",
  },
  {
    id: "sports",
    navLabel: "Sports",
    mediaType: "image",
    eyebrow: "Sports excellence",
    title: "Strength With Grace",
    description:
      "Professional coaching, disciplined routines, and wide open grounds help students compete with composure.",
    image: "/images/hero/sports-generated-hd.png",
    poster: "/images/hero/sports-generated-hd.png",
  },
  {
    id: "arts",
    navLabel: "Arts",
    mediaType: "image",
    eyebrow: "Creative arts",
    title: "Music, Dance, and Expression",
    description:
      "Students find confidence on stage, in studios, and across creative clubs led by dedicated mentors.",
    image: "/images/hero/arts-generated-hd.png",
    poster: "/images/hero/arts-generated-hd.png",
  },
  {
    id: "learning",
    navLabel: "Learning",
    mediaType: "image",
    eyebrow: "Learning beyond classrooms",
    title: "Inquiry, Nature, and Imagination",
    description:
      "Lessons move through labs, gardens, theatres, fields, and reflection spaces built for curious young minds.",
    image: "/images/hero/learning-generated-hd.png",
    poster: "/images/hero/learning-generated-hd.png",
  },
  {
    id: "videos",
    navLabel: "Videos",
    mediaType: "video",
    eyebrow: "Campus in motion",
    title: "Learning Comes Alive Across the Campus",
    description:
      "A moving glimpse of student life, open spaces, activity zones, and the daily rhythm of school.",
    image: "/images/hero/campus.png",
    video: "https://assets.mixkit.co/videos/4519/4519-720.mp4",
    poster: "/images/hero/campus.png",
  },
];

export const stats = [
  {
    label: "Years of Excellence",
    value: 120,
    suffix: "+",
    animatedIcon: "1000-business-champion-medal",
  },
  {
    label: "Years of Education",
    value: 25,
    suffix: "+",
    animatedIcon: "483-building",
  },
  {
    label: "Happy Students",
    value: 5000,
    suffix: "+",
    animatedIcon: "529-boy-girl-children",
  },
  {
    label: "Dedicated Educators",
    value: 1000,
    suffix: "+",
    animatedIcon: "2612-training",
  },
  {
    label: "Green Campus",
    text: "Eco-Friendly",
    animatedIcon: "401-leaves-eco",
  },
  {
    label: "Compliant",
    text: "NEP 2020",
    animatedIcon: "486-school",
  },
  {
    label: "Environment",
    text: "Safe & Secure",
    animatedIcon: "457-shield-security",
  },
];

export const whyCards = [
  { title: "Academic Excellence", description: "Conceptual learning, language fluency, and careful assessment.", icon: GraduationCap, image: "/images/why/academic-excellence.png" },
  { title: "Human Values", description: "Yoga, meditation, service, and character formation in daily life.", icon: HeartHandshake, image: "/images/why/human-values.png" },
  { title: "Sports", description: "Facilities and coaching across team and individual disciplines.", icon: Dumbbell, image: "/images/why/sports.png" },
  { title: "Future Ready", description: "AI, robotics, coding, and innovation projects for tomorrow.", icon: Bot, image: "/images/why/future-ready.png" },
  { title: "Holistic Development", description: "Leadership, arts, public speaking, and mindful routines.", icon: Sparkles, image: "/images/why/holistic-development.png" },
  { title: "Safe Boarding", description: "Comfortable residences with structured supervision and care.", icon: BedDouble, image: "/images/why/safe-boarding.png" },
];

export const dayTimeline = [
  { time: "6:00 AM", title: "Morning Yoga", animatedIcon: "505-yoga" },
  { time: "8:00 AM", title: "Healthy Breakfast", animatedIcon: "554-fork-knife" },
  { time: "9:00 AM", title: "Interactive Classes", animatedIcon: "112-book" },
  { time: "11:00 AM", title: "Science Labs", animatedIcon: "1229-microscope" },
  { time: "1:00 PM", title: "Nutritious Lunch", animatedIcon: "554-fork-knife" },
  { time: "2:00 PM", title: "Sports & Activities", animatedIcon: "429-weight-gym-fitness" },
  { time: "4:00 PM", title: "Arts & Music", animatedIcon: "43-music-note" },
  { time: "7:00 PM", title: "Study & Reflection", animatedIcon: "112-book" },
  { time: "9:00 PM", title: "Lights Out", animatedIcon: "668-sleeping-in-bed-sleepy" },
];

export const campusGallery = [
  { title: "Smart Classrooms", image: "/images/campus-classroom.svg", span: "md:row-span-2" },
  { title: "Science & Robotics Labs", image: "/images/campus-labs.svg", span: "" },
  { title: "Sports Complex", image: "/images/campus-sports.svg", span: "md:row-span-2" },
  { title: "Library", image: "/images/campus-library.svg", span: "" },
  { title: "Residential Hostel", image: "/images/campus-hostel.svg", span: "" },
  { title: "Dining Hall", image: "/images/campus-dining.svg", span: "" },
];

export const achievements = [
  {
    title: "Student Achievers",
    kicker: "Our stars shine bright",
    image: "/images/student-achiever.svg",
    accent: "from-[#fff6e5] to-[#f8d7d7]",
    points: ["CBSE topper with 96.4%", "National sports gold medal", "Science Olympiad national winner", "Young author published book"],
  },
  {
    title: "Sports Without Limits",
    kicker: "Play. Compete. Excel.",
    image: "/images/sports-achiever.svg",
    accent: "from-[#eff8e8] to-[#dff1c5]",
    points: ["Football", "Swimming", "Archery", "Skating", "Cricket", "Basketball"],
  },
  {
    title: "Creative Minds",
    kicker: "Express. Create. Inspire.",
    image: "/images/creative-minds.svg",
    accent: "from-[#fff1ef] to-[#fde9c8]",
    points: ["Music", "Dance", "Art", "Drama", "Photography", "Clubs & more"],
  },
];

export const recognitions = [
  { label: "CBSE Affiliated", icon: GraduationCap },
  { label: "Art of Living Education", icon: Leaf },
  { label: "SSRVM Trusted Legacy", icon: ShieldCheck },
  { label: "ISO Certified", icon: Award },
  { label: "AICTE Recognized", icon: Medal },
  { label: "Various Awards & Honors", icon: Trophy },
];

export const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Parent of Class VII student",
    quote:
      "The balance of academics, values, and care is rare. Our daughter is confident, grounded, and happy.",
    image: "/images/parent-1.svg",
  },
  {
    name: "Ritwick Sen",
    role: "Parent of boarding student",
    quote:
      "The boarding team communicates with warmth and precision. The routines have helped our son mature beautifully.",
    image: "/images/parent-2.svg",
  },
  {
    name: "Meera Agarwal",
    role: "Parent of Class XI student",
    quote:
      "Teachers know the children deeply. The school expects effort, but never loses sight of wellbeing.",
    image: "/images/parent-3.svg",
  },
];

export const news = [
  { title: "Annual Day Celebrations 2026", category: "Events", date: "12 Jan 2026", image: "/images/news-annual.svg" },
  { title: "Inter-School Sports Meet", category: "Sports", date: "04 Feb 2026", image: "/images/news-sports.svg" },
  { title: "Science Exhibition Opens to Parents", category: "Academics", date: "18 Mar 2026", image: "/images/news-science.svg" },
  { title: "Residential Weekend Retreat", category: "Boarding", date: "21 Apr 2026", image: "/images/news-boarding.svg" },
];

export const footerColumns = [
  { title: "Quick Links", links: ["About Us", "Academics", "Boarding", "Sports", "Achievements", "Contact Us"] },
  { title: "Academics", links: ["Early Years", "Primary", "Middle School", "Senior School", "CBSE Curriculum"] },
  { title: "Student Life", links: ["Arts", "Clubs", "Community Service", "Excursions", "Events"] },
  { title: "Admissions", links: ["Process", "Fees Structure", "Transport", "FAQ", "Enquire Now"] },
];

export const contact = {
  address: "Matigara, Siliguri, West Bengal 734010",
  phone: "+91 353 678 9100",
  whatsapp: "+91 97310 04455",
  email: "info@srisriacademy.in",
};

export const socialLinks = [
  { label: "Facebook", icon: "FaFacebookF" },
  { label: "Instagram", icon: "FaInstagram" },
  { label: "YouTube", icon: "FaYoutube" },
  { label: "LinkedIn", icon: "FaLinkedinIn" },
];
