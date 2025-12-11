import { BarChart3, Globe2, Layers, Lightbulb, LineChart, ShieldCheck, Target, Users } from "lucide-react";

export const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Insights", href: "#insights" },
];

export const HERO_CONTENT = {
    headline: "Architecting the Future of Global Enterprise",
    subheadline: "We partner with visionary leaders to navigate complexity, drive innovation, and unlock sustainable value in an ever-evolving world.",
    ctaPrimary: "Schedule a Consultation",
    ctaSecondary: "Explore Our Expertise",
};

export const VALUE_HIGHLIGHTS = [
    {
        icon: Target,
        title: "Precision Strategy",
        description: "Data-driven insights that cut through clarity to deliver actionable roadmaps.",
    },
    {
        icon: ShieldCheck,
        title: "Risk Assurance",
        description: "Fortifying your business against uncertainty with robust compliance and governance frameworks.",
    },
    {
        icon: Lightbulb,
        title: "Innovation Engines",
        description: "Building internal capabilities to foster continuous improvement and breakthrough thinking.",
    },
    {
        icon: Globe2,
        title: "Global Reach",
        description: "Leveraging a worldwide network of experts to solve cross-border challenges.",
    },
];

export const STATS = [
    { label: "Years of Excellence", value: "25+" },
    { label: "Global Clients", value: "150+" },
    { label: "Value Created", value: "$2.5B" },
    { label: "Experts Worldwide", value: "500+" },
];

export const SERVICES = [
    {
        title: "Corporate Strategy",
        description: "Defining clear paths to growth through market analysis, competitive positioning, and M&A advisory.",
        icon: LineChart,
    },
    {
        title: "Digital Transformation",
        description: "Modernizing legacy systems and embracing AI to drive operational efficiency and customer engagement.",
        icon: Layers,
    },
    {
        title: "Organizational Design",
        description: "Aligning structure, culture, and talent to execute strategy effectively and agilely.",
        icon: Users,
    },
    {
        title: "Operational Excellence",
        description: "Streamlining processes and supply chains to maximize margins and minimize waste.",
        icon: BarChart3,
    },
];

export const INDUSTRIES = [
    { name: "Financial Services", icon: "Bank" },
    { name: "Healthcare & Life Sciences", icon: "Stethoscope" },
    { name: "Energy & Utilities", icon: "Zap" },
    { name: "Technology & Media", icon: "Cpu" },
    { name: "Retail & Consumer", icon: "ShoppingBag" },
    { name: "Industrial Goods", icon: "Factory" },
];

export const CASE_STUDIES = [
    {
        client: "Global FinTech Giant",
        title: "Reinventing Digital Banking for the New Era",
        challenge: "Legacy infrastructure was hindering agility and time-to-market for new features.",
        approach: "Implemented a microservices architecture and agile operating model.",
        result: "40% reduction in IT costs, 3x faster release cycles.",
        image: "/images/case-study-1.jpg", // Placeholder
    },
    {
        client: "Leading Pharma Corp",
        title: "Accelerating Drug Discovery with AI",
        challenge: "R&D processes were slow and data-siloed, delaying critical treatments.",
        approach: "Deployed machine learning models to analyze clinical trial data.",
        result: "25% reduction in trial duration, $500M estimated value saved.",
        image: "/images/case-study-2.jpg", // Placeholder
    },
    {
        client: "Energy Conglomerate",
        title: "Transitioning to a Sustainable Future",
        challenge: "Need to pivot from fossil fuels to renewables without disrupting cash flow.",
        approach: "Developed a phased portfolio transition strategy.",
        result: "Successful launch of 3 renewable ventures, stock price up 15%.",
        image: "/images/case-study-3.jpg", // Placeholder
    },
];

export const TESTIMONIALS = [
    {
        quote: "Lumina didn't just give us a report; they gave us a future. Their strategic clarity is unmatched.",
        author: "Elena Rodriguez",
        role: "CEO, Vertex Financial",
    },
    {
        quote: "The depth of their industry knowledge and the caliber of their people is what sets them apart.",
        author: "James Chen",
        role: "COO, Nexus Healthcare",
    },
    {
        quote: "A true partner in transformation. They walked the walk with us every step of the way.",
        author: "Sarah Johnson",
        role: "CTO, OmniTech",
    },
];

export const INSIGHTS = [
    {
        title: "The CEO's Guide to AI Adoption in 2025",
        category: "Technology",
        date: "Oct 12, 2025",
        summary: "How to move beyond the hype and implement AI that drives real ROI.",
    },
    {
        title: "Navigating Geopolitical Uncertainty",
        category: "Strategy",
        date: "Sep 28, 2025",
        summary: "Frameworks for building resilience in a fractured global economy.",
    },
    {
        title: "The Future of Work is Hybrid... Still",
        category: "Talent",
        date: "Sep 15, 2025",
        summary: "Optimizing productivity and culture in distributed teams.",
    },
];
