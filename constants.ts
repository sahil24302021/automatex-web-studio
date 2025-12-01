import { ServiceItem, PricingTier, PortfolioItem, Testimonial, FaqItem, SeoSection } from './types';

// Company Info
export const COMPANY_NAME = "AutomateX Web Studio";
export const PHONE_NUMBER = "+91 99348 57789";
export const WHATSAPP_LINK = `https://wa.me/919934857789?text=Hi, I'm interested in growing my business.`;

// Home Page Content
export const HERO_HEADLINE = "We Help Small Businesses Grow Online & Save Time.";
export const HERO_SUBHEADLINE = "Get a professional website and WhatsApp automation that actually brings you customers. Simple, affordable, and built for India.";
export const HERO_CTA = "Chat on WhatsApp";

export const WHY_CHOOSE_US = [
  { title: "Simple & Clear", desc: "No confusing tech jargon. We speak your language." },
  { title: "Affordable", desc: "Pricing designed for small business budgets." },
  { title: "Fast Delivery", desc: "Get your website or automation running in days." },
  { title: "Local Support", desc: "We are just one WhatsApp message away." },
];

export const HOW_IT_WORKS = [
  { step: "1", title: "Chat With Us", desc: "Tell us about your business on WhatsApp." },
  { step: "2", title: "We Build It", desc: "We create your site or set up your automation." },
  { step: "3", title: "Go Live", desc: "Start getting more customers and saving time." },
];

// Services Data
export const SERVICES: ServiceItem[] = [
  {
    id: "website-dev",
    title: "Website Development",
    shortIntro: "Your online shop front, open 24/7.",
    explanation: "We build clean, fast, and mobile-friendly websites that look great on every phone.",
    whatYouGet: ["Mobile-friendly design", "Google Map integration", "Click-to-Call buttons", "Product/Service gallery"],
    benefits: ["Build trust with customers", "Showcase your work", "Be found on Google"],
    priceRange: "₹10,000 - ₹25,000",
    iconName: "Globe"
  },
  {
    id: "whatsapp-auto",
    title: "WhatsApp Automation",
    shortIntro: "Reply to customers instantly, even while sleeping.",
    explanation: "Set up auto-replies, menus, and catalogs directly in WhatsApp.",
    whatYouGet: ["Auto-welcome messages", "Automated FAQ replies", "Product catalog setup", "Order taking flow"],
    benefits: ["Never miss a customer", "Save hours of typing", "Look professional"],
    priceRange: "₹5,000 - ₹15,000",
    iconName: "MessageCircle"
  },
  {
    id: "lead-auto",
    title: "Business Lead Automation",
    shortIntro: "Capture every inquiry automatically.",
    explanation: "Connect your Facebook ads or website forms directly to your phone.",
    whatYouGet: ["Instant lead alerts", "Google Sheets connection", "Auto-email follow-ups", "Lead filtering"],
    benefits: ["Faster response times", "No manual data entry", "Higher conversion rates"],
    priceRange: "₹8,000 - ₹12,000",
    iconName: "Zap"
  },
  {
    id: "ai-support",
    title: "AI Customer Support Agents",
    shortIntro: "Smart AI that talks like a human.",
    explanation: "An intelligent chatbot that answers complex questions about your business instantly.",
    whatYouGet: ["Custom trained AI bot", "24/7 support handling", "Multi-language support", "Seamless hand-off to human"],
    benefits: ["Reduce support costs", "Happy customers", "Zero wait times"],
    priceRange: "₹15,000 - ₹30,000",
    iconName: "Bot"
  },
  {
    id: "dashboard",
    title: "Custom Dashboards",
    shortIntro: "See your business numbers in one place.",
    explanation: "Visual charts showing sales, leads, and performance at a glance.",
    whatYouGet: ["Sales tracking charts", "Inventory overview", "Lead status board", "Daily PDF reports"],
    benefits: ["Make better decisions", "Spot trends early", "Stop guessing"],
    priceRange: "₹12,000 - ₹20,000",
    iconName: "LayoutDashboard"
  },
  {
    id: "billing",
    title: "Invoice & Billing Tools",
    shortIntro: "Send bills and get paid faster.",
    explanation: "Simple tools to generate GST invoices and track payments effortlessly.",
    whatYouGet: ["PDF Invoice generator", "Payment reminders", "Expense tracking", "GST calculation"],
    benefits: ["Look professional", "Get paid on time", "Organized accounts"],
    priceRange: "₹5,000 - ₹10,000",
    iconName: "Receipt"
  }
];

// Pricing Data
export const PRICING_PACKAGES: PricingTier[] = [
  {
    name: "Starter",
    subtitle: "For new businesses",
    price: "₹15,000",
    features: ["5-Page Website", "Basic SEO Setup", "Click-to-Call Button", "1 Month Support", "Basic Hosting Setup"],
  },
  {
    name: "Growth",
    subtitle: "Most Popular",
    price: "₹25,000",
    features: ["Modern 10-Page Website", "WhatsApp Auto-Reply", "Google Business Profile Setup", "Lead Form Integration", "3 Months Support"],
    recommended: true
  },
  {
    name: "Premium",
    subtitle: "For larger operations",
    price: "₹45,000+",
    features: ["Custom Web Application", "Full AI Chatbot Integration", "Payment Gateway Setup", "Admin Dashboard", "6 Months Priority Support"],
  }
];

// Portfolio Data
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "restaurant",
    title: "Spice Garden Restaurant",
    category: "Restaurant Website",
    description: "A modern, mobile-friendly digital menu and table-booking page designed for a local family restaurant.",
    whyItHelps: "Customers can see the menu and book tables without calling.",
    features: ["Mobile Digital Menu", "One-click Table Reservation", "Photo Gallery", "Click-to-Call"],
    imageUrl: "https://uicookies.com/wp-content/uploads/2019/10/Appetizer.jpg"
  },
  {
    id: "real-estate",
    title: "City Homes Realty",
    category: "Real Estate Website",
    description: "A clean, professional property listing website for a city-based real estate agent.",
    whyItHelps: "Agents can share property links instead of sending 50 photos on WhatsApp.",
    features: ["Property Listings", "Area Filters", "Direct WhatsApp Enquiry" , "WhatsApp Lead Button" , "Google Maps Integration"],
    imageUrl: "https://uicookies.com/wp-content/uploads/2018/04/south-free-real-estate-website-templates.jpg"
  },
  {
    id: "salon",
    title: "Glow Unisex Salon",
    category: "Salon Website",
    description: "Stylish website for a beauty salon with service rates and appointment booking.",
    whyItHelps: "Reduced phone calls for price enquiries by 70%.",
    features: ["Service Rate Card", "Appointment Request", "Customer Reviews"],
    imageUrl: "https://uicookies.com/wp-content/uploads/2020/07/Brber.jpg"
  },
  {
    id: "gym",
    title: "Iron Pump Gym",
    category: "Gym Website",
    description: "High-energy landing page for a local gym promoting memberships.",
    whyItHelps: "Increased membership signups via the online enquiry form.",
    features: ["Membership Plans", "Trainer Profiles", "Diet Chart Download"],
    imageUrl: "https://uicookies.com/wp-content/uploads/2020/09/gymfit-gym-website-template.png"
  },
  {
    id: "shop",
    title: "Sharma Electronics",
    category: "Small Shop Website",
    description: "Product catalog for a local electronics retailer.",
    whyItHelps: "Locals can check what's in stock before visiting.",
    features: ["Product Categories", "Offer Banners", "Shop Location Map"],
    imageUrl: "https://w3layouts.b-cdn.net//wp-content/uploads/2017/01/electronic-store.jpg"
  },
  {
    id: "dashboard",
    title: "Sales Tracker App",
    category: "Automation Dashboard",
    description: "Internal tool for a wholesale distributor to track daily sales.",
    whyItHelps: "Replaced 5 different Excel sheets with one simple screen.",
    features: ["Daily Sales Graph", "Salesman Performance", "Stock Alerts"],
    imageUrl: "https://cdn.dribbble.com/userupload/15310601/file/original-d10977f09c37dafb80e258eb90cba728.png?format=webp&resize=400x300&vertical=center"
  }
];

// Testimonials
export const TESTIMONIALS: Testimonial[] = [
  { name: "Rahul Sharma", role: "Cafe Owner", text: "AutomateX made my cafe website in just 4 days. Now people find me on Google easily!" },
  { name: "Priya Singh", role: "Boutique Owner", text: "The WhatsApp automation is magic. It replies to customers while I am busy designing clothes." },
  { name: "Amit Patel", role: "Real Estate Agent", text: "Professional, fast, and very affordable. Highly recommended for small business owners." },
];

// FAQ
export const FAQ: FaqItem[] = [
  { question: "How much does a website cost?", answer: "Our basic packages start from ₹10,000. It depends on what you need, but we keep it affordable." },
  { question: "Do I need to pay monthly?", answer: "No, website design is a one-time fee. You only pay a small yearly amount for hosting and domain name." },
  { question: "Can I update the website myself?", answer: "Yes! We give you a simple admin panel to change prices or photos easily." },
  { question: "How long does it take?", answer: "Usually 5-7 days for a standard business website." },
  { question: "Do you provide support after launch?", answer: "Yes, we provide 1 month free support to make sure everything runs smoothly." },
  { question: "How do we start?", answer: "Just click the WhatsApp button and chat with us. We will guide you." },
];

// SEO Content
export const SEO_CONTENT: SeoSection[] = [
  {
    title: "Website for Small Business in India",
    content: [
      "Every small business in India needs a digital presence today. Whether you run a kirana shop, a cafe, or a consultancy, customers are searching for you online. A professional website builds instant trust.",
      "We design websites specifically for the Indian market—fast, mobile-friendly (because everyone uses phones), and easy to navigate. We don't just build pages; we build your digital shop."
    ],
    bullets: ["Increases brand credibility", "Available 24/7 to customers", "Reaches customers beyond your locality", "Showcases your full catalog", "Cost-effective marketing"]
  },
  {
    title: "WhatsApp Automation for Restaurants",
    content: [
      "Stop missing orders during peak hours. WhatsApp automation helps restaurants handle menu inquiries, table bookings, and delivery status automatically.",
      "Imagine a customer messages 'Menu' and instantly gets your PDF menu, or messages 'Book table' and gets a confirmation—all without you typing a single word."
    ],
    bullets: ["Instant replies to hungry customers", "Automated menu sharing", "Reduced phone call distractions", "Collect customer feedback easily", "Send bulk offers to loyal customers"]
  },
  {
    title: "Affordable Website Developer India",
    content: [
      "High quality doesn't have to mean high cost. We specialize in affordable web development for startups and MSMEs. We cut out the confusing agency jargon and hidden fees.",
      "Our packages are transparent. You get a sleek, modern website that competes with big brands, at a price that fits a small business budget."
    ],
    bullets: ["Transparent pricing", "No hidden maintenance fees", "Optimized for slow internet connections", "Local Hindi/English support", "Fast delivery turnaround"]
  },
  {
    title: "AI Automation for Real Estate",
    content: [
      "Real estate agents waste hours answering the same questions: 'Price?', 'Location?', 'Photos?'. AI automation handles these initial queries for you.",
      "Let our AI chatbots qualify leads 24/7. By the time you speak to a client, they are already informed and ready to visit the property."
    ],
    bullets: ["Qualify leads automatically", "Share property details instantly", "Schedule site visits via chat", "Follow up with old leads", "Manage client data efficiently"]
  },
  {
    title: "Business Automation Services India",
    content: [
      "Manual data entry and repetitive tasks kill productivity. Our business automation services connect your apps (like Gmail, Sheets, WhatsApp) to work together.",
      "From auto-generating invoices to sending payment reminders, we automate the boring stuff so you can focus on growing your business."
    ],
    bullets: ["Eliminate manual data entry errors", "Speed up invoicing", "Automate payment reminders", "Sync leads to Google Sheets", "Save 10+ hours per week"]
  }
];