import { 
  Rocket, 
  Users, 
  Trophy, 
  Lightbulb, 
  Search, 
  Hammer, 
  Building2, 
  Flag, 
  Bot, 
  Cpu, 
  Target, 
  Database, 
  Monitor, 
  Sprout,
  Handshake,
  Award,
  Globe,
  Zap,
  Star,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Info
} from "lucide-react";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Startups", href: "/startups" },
  { name: "Team", href: "/team" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

export const stats = [
  { value: 5, suffix: "+", label: "Active Startups" },
  { value: 50, suffix: "+", label: "Students Mentored" },
  { value: 3, suffix: "", label: "Strategic Partners" },
  { value: 3, suffix: "Cr+", label: "Funding Raised" }
];

export const journeySteps = [
  { title: "Idea Submission", desc: "Submit your innovative startup concept for evaluation.", icon: Lightbulb },
  { title: "Mentor Review", desc: "Expert panel reviews feasibility and market potential.", icon: Search },
  { title: "Prototype Development", desc: "Build your MVP with technical support and resources.", icon: Hammer },
  { title: "Incubation Support", desc: "Get workspace, infrastructure, and legal guidance.", icon: Building2 },
  { title: "Launch & Growth", desc: "Go to market and scale with ecosystem networking.", icon: Flag },
];

export const domains = [
  { name: "Artificial Intelligence", icon: Bot, color: "text-blue-500" },
  { name: "IoT", icon: Cpu, color: "text-orange-500" },
  { name: "Robotics", icon: Target, color: "text-red-500" },
  { name: "SaaS", icon: Database, color: "text-purple-500" },
  { name: "Media & Branding", icon: Monitor, color: "text-emerald-500" },
  { name: "AgriTech", icon: Sprout, color: "text-green-500" },
];

export const benefits = [
  { title: "Expert Mentorship", desc: "Direct guidance from seasoned entrepreneurs.", icon: Users },
  { title: "Startup Guidance", desc: "Full-lifecycle support from idea to MVP.", icon: Target },
  { title: "Networking", desc: "Access to massive industry & alumni networks.", icon: Globe },
  { title: "Funding Awareness", desc: "Assistance with grants and VC pitching.", icon: TrendingUp },
  { title: "Modern Ecosystem", desc: "Cutting-edge innovation workspace.", icon: Zap },
  { title: "Growth Support", desc: "Scaling strategies for sustainable impact.", icon: Rocket },
];

export const reviews = [
  { 
    text: "The incubation hub gave us the mentorship to transform ideas into a working startup. Moving from concept to real execution was a life-changing experience.", 
    author: "Mr. Tharsan", 
    role: "Founder, Nexora Crew",
    image: "https://img.sanishtech.com/u/f69d2dc17d7efaba78b193cf576e10bc.png"
  },
  { 
    text: "Understanding the real journey of building a startup happened here. Workshops and mentor access gave me practical knowledge and startup sector confidence.", 
    author: "Mr. Arun S", 
    role: "Founder & CEO, Nexara Creation",
    image: "https://img.sanishtech.com/u/d5c65469409d99772f12e7a5051e86ea.jpg"
  },
  { 
    text: "Innovation thrives in the right environment. The hub encouraged us to think like entrepreneurs and build scalable solutions for real-world problems.", 
    author: "Mr. Prasanna Venkatesan R", 
    role: "Founder & CEO, Rapid Arms",
    image: "https://img.sanishtech.com/u/140417b2ede105b4bda42bace6539dcb.jpeg"
  },
];

export const leadership = [
  {
    name: "Dr. P. Mathiyalagan",
    role: "Principal",
    organisation: "JJ College of Engineering & Technology",
    category: "leadership",
    initials: "PM",
    image: "https://jjcet.ac.in/wp-content/uploads/2022/05/Principal-Desk.jpg",
    badge: "LEADERSHIP",
    keyResponsibility: "Institutional Leadership & Vision",
    focusArea: "Academic Excellence",
    bio: "Principal of JJ College of Engineering & Technology, leading the institution with a strong vision for academic excellence and innovation.",
    linkedin: "",
    portfolioUrl: ""
  },
  {
    name: "Dr. P. Premkumar",
    role: "Vice Principal",
    organisation: "JJ College of Engineering & Technology",
    category: "leadership",
    initials: "PP",
    image: "https://res.cloudinary.com/dgqlb8j2x/image/upload/v1776452834/Screenshot_2026-04-18_003634_onrahx.png",
    badge: "LEADERSHIP",
    keyResponsibility: "Academic Administration & Planning",
    focusArea: "Institutional Development",
    bio: "Vice Principal of JJ College of Engineering & Technology, driving academic administration and institutional growth.",
    linkedin: "https://www.linkedin.com/in/dr-premkumar-p-96417b373",
    portfolioUrl: ""
  },
  {
    name: "Mr. Navin M",
    role: "Faculty Coordinator – Incubation Hub",
    organisation: "JJCET Incubation Hub",
    category: "faculty",
    initials: "NM",
    image: "https://res.cloudinary.com/dgqlb8j2x/image/upload/v1776452887/Screenshot_2026-04-18_003746_lrxqdk.png",
    badge: "FACULTY",
    keyResponsibility: "Incubation Hub Management",
    focusArea: "Startup Mentorship",
    bio: "Head of the JJCET Incubation Hub, guiding student startups from ideation to execution with hands-on mentorship.",
    linkedin: "https://www.linkedin.com/in/navinm8008",
    portfolioUrl: ""
  }
];

export const students = [
  {
    name: "Mr. S. N. Sanjay",
    role: "Student President",
    organisation: "JJCET Incubation Hub",
    category: "students",
    initials: "SN",
    image: "https://res.cloudinary.com/dgqlb8j2x/image/upload/c_fill,g_face,w_400,h_400/v1776452993/WhatsApp_Image_2026-04-17_at_11.41.17_AM_wgt5jg.jpg",
    badge: "STUDENT COUNCIL",
    year: "4th Year",
    department: "AI & DS",
    keyResponsibility: "Student Leadership & Strategy",
    focusArea: "Startup Ecosystem",
    bio: "Student President of JJCET Incubation Hub and Founder & CEO of Areostellar — building next-gen autonomous aerial systems for photography and defense.",
    linkedin: "https://www.linkedin.com/in/sanjai-sn-ab52a4272",
    portfolioUrl: "https://voydecompany.github.io/sanjay/",
    startup: {
      name: "Areostellar",
      role: "Founder & CEO",
      category: "Future Tech"
    }
  },
  {
    name: "Mr. Aswin Joel K",
    role: "Student Vice President",
    organisation: "JJCET Incubation Hub",
    category: "students",
    initials: "AJ",
    image: "https://res.cloudinary.com/dgqlb8j2x/image/upload/c_fill,g_face,w_400,h_400/v1776452474/WhatsApp_Image_2026-04-17_at_9.39.25_PM_funirj.jpg",
    badge: "STUDENT COUNCIL",
    year: "4th Year",
    department: "AI & DS",
    keyResponsibility: "Operations & Execution Support",
    focusArea: "Institutional Innovation",
    bio: "Student Vice President of JJCET Incubation Hub and Founder & CEO of Maxifiled — delivering scalable SaaS solutions for the digital future.",
    linkedin: "https://www.linkedin.com/in/aswin-joel-k",
    portfolioUrl: "",
    startup: {
      name: "Maxifiled",
      role: "Founder & CEO",
      category: "Digital Services"
    }
  },
  {
    name: "Mr. Arun S",
    role: "Finance & HR",
    organisation: "JJCET Incubation Hub",
    category: "students",
    initials: "AS",
    image: "https://res.cloudinary.com/dgqlb8j2x/image/upload/v1776457914/WhatsApp_Image_2026-04-18_at_2.01.11_AM_winf8s.jpg",
    badge: "STUDENT COUNCIL",
    year: "3rd Year",
    department: "CSE",
    keyResponsibility: "Finance & Human Resources",
    focusArea: "Creative Media & Branding",
    bio: "Finance & HR lead at JJCET Incubation Hub and Founder & CEO of Nexara Creation — helping businesses grow through creative marketing and branding.",
    linkedin: "",
    portfolioUrl: "",
    startup: {
      name: "Nexara Creation",
      role: "Founder & CEO",
      category: "Creative Media"
    }
  },
  {
    name: "Mr. Tharsan",
    role: "Finance & HR – General Body",
    organisation: "JJCET Incubation Hub",
    category: "students",
    initials: "TH",
    image: "https://res.cloudinary.com/dgqlb8j2x/image/upload/c_fill,g_face,w_400,h_400/v1776452474/IMG_20260123_151908.png_muizui_ugtxbo.png",
    badge: "STUDENT COUNCIL",
    year: "2nd Year",
    department: "Cyber Security",
    keyResponsibility: "Finance & General Operations",
    focusArea: "SaaS & AI Products",
    bio: "Finance & HR General Body member and Founder & CEO of Nexora Crew — transforming raw ideas into powerful digital products using AI and modern technology.",
    linkedin: "https://www.linkedin.com/in/tharsan1305",
    portfolioUrl: "https://tharsan.onrender.com/#about",
    startup: {
      name: "Nexora Crew",
      role: "Founder & CEO",
      category: "SaaS & AI"
    }
  },
  {
    name: "Surendar S",
    role: "Entrepreneur – General Body",
    organisation: "JJCET Incubation Hub",
    category: "students",
    initials: "SS",
    image: "https://res.cloudinary.com/dgqlb8j2x/image/upload/c_fill,g_face,w_600,h_700/v1776452474/WhatsApp_Image_2026-04-17_at_3.26.26_PM_rufrci.jpg",
    badge: "STUDENT COUNCIL",
    year: "2nd Year",
    department: "Cyber Security",
    keyResponsibility: "Entrepreneurship & Innovation",
    focusArea: "SaaS & AI Products",
    bio: "General Body Entrepreneur and Co-Founder & CEO of Nexora Crew — building intelligent digital solutions for modern businesses.",
    linkedin: "https://www.linkedin.com/in/surendar-selvakumar-b97a31326",
    portfolioUrl: "",
    startup: {
      name: "Nexora Crew",
      role: "Co-Founder & CEO",
      category: "SaaS & AI"
    }
  },
  {
    name: "Mr. Prasanna Venkatesan R",
    role: "Media Lead",
    organisation: "JJCET Incubation Hub",
    category: "students",
    initials: "PV",
    image: "https://res.cloudinary.com/dgqlb8j2x/image/upload/c_fill,g_face,w_400,h_400/v1776452992/WhatsApp_Image_2026-04-17_at_11.36.48_AM_xbshgk.jpg",
    badge: "STUDENT COUNCIL",
    year: "2nd Year",
    department: "Mechanical",
    keyResponsibility: "Media & Communications",
    focusArea: "Defense Technology",
    bio: "Media Lead at JJCET Incubation Hub and Founder & CEO of Rapid Arms — engineering advanced defense solutions for modern security needs.",
    linkedin: "https://www.linkedin.com/in/prasanna-venkatesan-4192a9381",
    portfolioUrl: "",
    startup: {
      name: "Rapid Arms",
      role: "Founder & CEO",
      category: "Defense Tech"
    }
  },
  {
    name: "Mr. Thimothi Paul James",
    role: "Media Lead",
    organisation: "JJCET Incubation Hub",
    category: "students",
    initials: "TP",
    image: "https://res.cloudinary.com/dgqlb8j2x/image/upload/c_fill,g_face,w_400,h_400/v1776452991/WhatsApp_Image_2026-04-17_at_11.31.18_AM_etiqct.jpg",
    badge: "STUDENT COUNCIL",
    year: "2nd Year",
    department: "Mechanical",
    keyResponsibility: "Technology & Media Operations",
    focusArea: "Defense Technology",
    bio: "Media Lead and CTO of Rapid Arms — driving technology strategy and product development for next-generation defense engineering solutions.",
    linkedin: "https://www.linkedin.com/in/thimothi-paul-james-67891a335",
    portfolioUrl: "",
    startup: {
      name: "Rapid Arms",
      role: "CTO",
      category: "Defense Tech"
    }
  },
  {
    name: "Shakugesh T",
    role: "General Body",
    organisation: "JJCET Incubation Hub",
    category: "students",
    initials: "ST",
    image: "https://res.cloudinary.com/doz4sfwg7/image/upload/c_fill,g_face,w_600,h_600/v1768575294/589d8d66-ffd8-447c-a83c-f37c7dec8c8b_dzy6l5.png",
    badge: "STUDENT COUNCIL",
    year: "2nd Year",
    department: "Cyber Security",
    keyResponsibility: "Technology & Product Development",
    focusArea: "SaaS & AI Products",
    bio: "General Body member and CTO of Nexora Crew — leading technical development and AI integration for cutting-edge digital products.",
    linkedin: "https://www.linkedin.com/in/sharugesh-t-9aa848356",
    portfolioUrl: "",
    startup: {
      name: "Nexora Crew",
      role: "CTO",
      category: "SaaS & AI"
    }
  }
];

export const startups = [
  {
    name: "Areostellar",
    slug: "aerostellar",
    icon: "AS",
    tag: "Future Tech",
    image: "https://picsum.photos/seed/areostellar/600/400",
    tagline: "Beyond Horizons – Next-Gen Autonomous Aerial Systems for Photography & Defense",
    about: "Areostellar is a next-generation drone technology startup focused on building autonomous aerial systems for advanced photography, surveillance, and defense applications. Our platform integrates AI-driven piloting with high-fidelity imaging sensors.",
    vision: "To lead the future of autonomous aerial innovation by developing intelligent drone systems that redefine safety and efficiency in global airspace.",
    mission: "To design and deploy reliable, high-performance drone solutions that empower industries and strengthen security through cutting-edge UAV technology.",
    core: [
      "Autonomous Drone Systems",
      "Aerial Surveillance & Defense",
      "Smart Imaging & Photography",
      "UAV Research & Development"
    ],
    website: "#"
  },
  {
    name: "Maxifiled",
    slug: "maxifiled",
    icon: "MF",
    tag: "Digital Services",
    image: "https://picsum.photos/seed/maxifiled/600/400",
    tagline: "Scalable SaaS Solutions for the Digital Future",
    about: "Maxifiled is a SaaS-based startup delivering scalable digital solutions for modern businesses. We specialize in automating complex workflows and providing real-time data analytics for optimized decision making.",
    vision: "To become a leading provider of scalable SaaS platforms that empower businesses of all sizes to thrive in the digital era.",
    mission: "To simplify business operations through automation, innovative cloud architecture, and user-centric platform design.",
    core: [
      "SaaS Development",
      "Business Automation",
      "Cloud Platforms",
      "Workflow Optimization"
    ],
    website: "#"
  },
  {
    name: "Nexara Creation",
    slug: "nexara-creation",
    icon: "NC",
    tag: "Creative Media",
    image: "https://picsum.photos/seed/nexara/600/400",
    tagline: "Creative Digital Marketing & Branding Solutions",
    about: "Nexara Creation helps businesses grow through creative marketing strategies, high-impact branding, and digital content that resonates with modern audiences.",
    vision: "To become a leading creative agency known for transforming brands through innovation and artistic engineering.",
    mission: "To deliver impactful marketing solutions that connect brands with their core audience and drive meaningful growth.",
    core: [
      "Digital Marketing",
      "Brand Design",
      "Social Media Strategy",
      "Content Creation"
    ],
    website: "#"
  },
  {
    name: "Nexora Crew",
    slug: "nexora-crew",
    icon: "NX",
    tag: "SaaS & AI",
    image: "https://picsum.photos/seed/nexora/600/400",
    tagline: "Transforming Raw Ideas into Polished Digital Products",
    about: "Nexoracrew is an MSME-registered student startup from JJ College of Engineering & Technology, Trichy. We don’t just write code; we transform raw ideas into powerful, polished digital products using modern technology, thoughtful design, and Artificial Intelligence.",
    philosophy: "These core values guide every decision we make, from the smallest code commit to major collaborations.",
    vision: "Our vision is to become the industry's most reliable partner.",
    mission: "Our mission is to empower teams with cutting-edge technology.",
    stats: [
      { label: "Founded", value: "25 Sep 2025" },
      { label: "Incubation Access", value: "Nov 2025" },
      { label: "Projects Done", value: "Major 2+" },
      { label: "Interns", value: "30+" }
    ],
    journey: [
      { year: "2020", event: "We started with a single project and have grown exponentially." }
    ],
    core: [
      "SaaS & AI Products",
      "MSME Registered Startup",
      "Digital Branding",
      "Full-Stack Development"
    ],
    website: "https://nexoracrew.com/"
  },
  {
    name: "Rapid Arms",
    slug: "rapid-arms",
    icon: "RA",
    tag: "Social Tech",
    image: "https://picsum.photos/seed/rapidarms/600/400",
    tagline: "Engineering the Future of Defense Technology",
    about: "Rapid Arms develops advanced defense engineering solutions focusing on tactical hardware and strategic software integration for modern security needs.",
    vision: "To strengthen global defense systems through responsible technology and superior engineering innovation.",
    mission: "To build reliable defense solutions that ensure safety, stability, and technological advantage in security operations.",
    core: [
      "Defense Engineering",
      "Tactical Systems",
      "Security Tech",
      "Military Innovation"
    ],
    website: "#"
  }
];

export const faqs = [
  { q: "How to join?", a: "Students can apply through our portal by submitting an innovative startup idea. Selected ideas will go through a screening and mentorship process." },
  { q: "Who can apply?", a: "Any student of JJCET with a strong interest in innovation, entrepreneurship, or startup development can apply individually or as a team." },
  { q: "What support is available?", a: "We provide mentorship, workspace, technical guidance, networking opportunities, and support in funding awareness and startup growth." },
  { q: "Do I need a complete idea to apply?", a: "No. Even if you have a basic idea or problem statement, you can apply. Our mentors will help you refine and develop it." },
  { q: "Is there any registration fee?", a: "No, joining the incubation hub is completely free for JJCET students." },
  { q: "Can I apply as a team?", a: "Yes, you can apply as an individual or as a team with your co-founders." },
  { q: "Will I get mentorship from industry experts?", a: "Yes, we provide access to experienced mentors, entrepreneurs, and industry professionals." },
  { q: "Do you help with funding?", a: "We provide guidance on funding opportunities, investor connections, and pitch preparation, but direct funding is not guaranteed." },
  { q: "What domains are supported?", a: "We support multiple domains including AI, IoT, Robotics, SaaS, AgriTech, and Media & Branding." },
  { q: "How long is the incubation period?", a: "The incubation period depends on your startup progress, typically ranging from a few months to a year." },
  { q: "Can I join without technical knowledge?", a: "Yes, students from all departments can join. Business, design, and idea-driven roles are equally important." },
  { q: "Will I get a certificate?", a: "Yes, active participants and successful startups may receive recognition and certification from the incubation hub." },
  { q: "How are startups selected?", a: "Startups are evaluated based on innovation, feasibility, scalability, and potential impact." },
  { q: "Can I continue my startup after graduation?", a: "Yes, we encourage students to continue and scale their startups even after graduation with ongoing support." },
  { q: "How can I contact the incubation team?", a: "You can reach us through email, phone, or by visiting the incubation hub office on campus." },
];

export const awards = [
  { title: "Best Incubation Award", context: "National Startup Conclave 2025", icon: Trophy },
  { title: "Institutional Achievement", desc: "Top 10 Innovation Hubs in Region", icon: Star },
  { title: "Recognition", context: "Startup India Authorized Incubator", icon: CheckCircle2 },
];

export const events = [
  { 
    id: 1,
    title: "Innovation Hackathon 2026", 
    date: "Coming Soon", 
    time: "TBA",
    location: "Main Auditorium, JJCET",
    category: "HACKATHON", 
    img: "https://picsum.photos/seed/hack/1200/800", 
    icon: Cpu,
    status: "COMING SOON",
    seats: "TBA",
    description: "The ultimate 24-hour challenge for developers and innovators to build scalable solutions for real-world problems.",
    host: "JJCET Incubation Hub",
    agenda: ["Opening Ceremony", "Ideation Phase", "Development Sprint", "Final Pitching"],
    registrationOpen: false
  },
  { 
    id: 2,
    title: "Startup Founders Workshop", 
    date: "Coming Soon", 
    time: "TBA",
    location: "Incubation Hub Lab, JJCET",
    category: "WORKSHOP", 
    img: "https://picsum.photos/seed/work/1200/800", 
    icon: Monitor,
    status: "COMING SOON",
    seats: "TBA",
    description: "An exclusive workshop for aspiring student founders to learn startup fundamentals, business models, and pitch skills.",
    host: "JJCET Incubation Hub",
    agenda: ["Foundational Models", "Legal Framework", "MVP Development", "Q&A Session"],
    registrationOpen: false
  },
  { 
    id: 3,
    title: "Pitch Perfect Night", 
    date: "Coming Soon", 
    time: "TBA",
    location: "Virtual Meeting Room",
    category: "PITCHING", 
    img: "https://picsum.photos/seed/pitch/1200/800", 
    icon: Target,
    status: "COMING SOON",
    seats: "TBA",
    description: "A premier pitching event where student startups present their ideas to industry mentors and investors.",
    host: "JJCET Incubation Hub",
    agenda: ["Pitch Presentations", "Investor Q&A", "Feedback Round", "Networking"],
    registrationOpen: false
  }
];
export const contactInfo = {
  email: "jjcetincubationhub@gmail.com",
  phone: "+91 94428 82091",
  address: "Main Block, JJCET Campus, Tiruchirappalli - 620 009",
  whatsapp: "+919442882091"
};

export const emailConfig = {
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY"
};
