export type LeadershipMember = {
  name: string;
  role: string;
  category: "Executive Leadership" | "Board & Advisory Team";
  image: string;
};

export type LeadershipProfile = LeadershipMember & {
  profile: {
    introduction: string;
    quote?: string;
  };
};

export const executiveLeadership: LeadershipProfile[] = [
  {
    name: "Sunny Halani",
    role: "Chairperson",
    category: "Executive Leadership",
    image: "/images/board/sunny-halani.jpeg",
    profile: {
      introduction:
        "Sunny Halani is a respected community leader, entrepreneur and business investor with a strong presence across the Niagara region. He has built and operated multiple businesses, bringing extensive experience in entrepreneurship, business development, investment and strategic partnerships. His community involvement extends beyond NIA through leadership and support of local organizations, charitable initiatives and major fundraising efforts. He has served as a board member of the Niagara Health Foundation and has supported initiatives including the Niagara Innovation Hub and South Niagara Hospital fundraising efforts. His contributions have been recognized through several community and business awards, reflecting his commitment to both economic growth and community service.\n\nAs Chairperson of NIA, Sunny brings business leadership, cultural pride and a strong commitment to bringing families, generations and the wider Indian community together. His leadership is grounded in collaboration, service and the belief that a strong community grows when people, businesses and generations work together.",
      quote:
        "My goal is to bring people together through culture, service, business collaboration, and shared pride. Together, we can build a stronger, more connected Niagara that supports every family, every generation, and our growing Indian community.",
    },
  },
  {
    name: "Prashanth Unnithan",
    role: "President",
    category: "Executive Leadership",
    image: "/images/board/prashanth-unnithan.jpeg",
    profile: {
      introduction:
        "Prashanth Unnithan is an accomplished entrepreneur, construction professional, REALTOR® and Senior Financial Advisor with broad experience across business and community leadership. His professional journey spans construction, real estate, financial advisory, building supplies, procurement, logistics and international trade. Through his businesses, he has developed strong capabilities in business development, operations, strategic relationships and identifying opportunities for growth. His academic background includes an MBA along with studies in export management, international business, business management and commerce.\n\nHis ability to work across diverse industries gives him a practical and well-rounded perspective on business and community development. As President of NIA, Prashanth brings entrepreneurial thinking, professional experience and a strong focus on building partnerships and opportunities that can strengthen the Indian community across Niagara.",
    },
  },
  {
    name: "Parth Patel",
    role: "Vice President",
    category: "Executive Leadership",
    image: "/images/board/parth-patel.jpeg",
    profile: {
      introduction:
        "Parth Patel is an entrepreneur, business leader and real estate professional with experience across staffing, retail, entertainment and international business. He has built and managed ventures including SaveMax Staffing Solutions, Maharaja World Export, Bridge Variety and Food Mart, and works as a REALTOR® with HomeLife Miracle Brokerage. His involvement with Bombay Entertainment also gives him valuable experience in events, entertainment and community-focused initiatives. His educational background combines Mechanical Engineering with postgraduate studies in Canada in Mechanical Engineering and Business Management.\n\nThis combination of technical education and entrepreneurial experience enables him to approach challenges with both analytical and business-minded thinking. As Vice President of NIA, Parth brings a dynamic leadership style and a strong belief in creating a connected, vibrant community that values its heritage while embracing new opportunities.",
      quote:
        "Together, we can build a stronger, connected, and vibrant Indian community that values our heritage and embraces opportunities for a better tomorrow.",
    },
  },
  {
    name: "Abhay Sabharwal",
    role: "Secretary",
    category: "Executive Leadership",
    image: "/images/board/abhay-sabharwal.jpeg",
    profile: {
      introduction:
        "Abhay Sabharwal is a systems engineering professional with more than 10 years of experience in technology, infrastructure, management and complex problem-solving. His professional background has developed strong capabilities in organizational leadership, coordination, analytical thinking and structured execution. He holds a Master's degree in Computer and Electrical Engineering from the University of Windsor, providing him with a strong technical and analytical foundation. His strengths in communication, documentation and project coordination are particularly valuable in an organization managing diverse people, programs and community initiatives.\n\nHe also brings experience in team collaboration, strategic planning, volunteering and event coordination. As Secretary of NIA, Abhay contributes disciplined organization, dependable coordination and a technology-informed approach to helping the association execute its initiatives effectively.",
    },
  },
  {
    name: "Rupali Gaikwad",
    role: "Joint Secretary",
    category: "Executive Leadership",
    image: "/images/board/rupali-gaikwad.jpeg",
    profile: {
      introduction:
        "Rupali Gaikwad is an experienced community organizer and professional with more than eight years of experience across community engagement, event management, marketing, communications and business development. Her professional experience includes work in fraud analysis and financial services, while her community leadership includes organizing cultural programs, celebrations and networking initiatives. She has served as an official event organizer with ISKCON Niagara and is a co-founder and community organizer with Niagara Marathi Mandal. Her work demonstrates a strong ability to bring people together, communicate effectively and create welcoming spaces for participation.\n\nShe has also contributed to women empowerment, youth engagement and newcomer integration initiatives. As Joint Secretary of NIA, Rupali brings energy, organization and a people-focused leadership style that helps strengthen connections among families and communities across Niagara.",
      quote:
        "Together, through unity, service and leadership, we can build a stronger, more connected community.",
    },
  },
  {
    name: "Abinandan Jakhu",
    role: "Treasurer",
    category: "Executive Leadership",
    image: "/images/board/abhinandan-jakhu.jpeg",
    profile: {
      introduction:
        "Abinandan Jakhu is a professional accountant specializing in financial management, tax planning, bookkeeping, compliance and business advisory. His professional work focuses on helping organizations and businesses establish accurate financial systems and make informed financial decisions. As a CPA Canada professional with an accounting background, he brings strong expertise in financial reporting, controls and responsible financial stewardship. His experience with cloud accounting, budgeting, forecasting and cash-flow management adds practical value to organizations that require disciplined financial operations.\n\nHis approach combines precision, accountability and a clear understanding of the importance of sound financial governance. As Treasurer of NIA, Abinandan provides the association with thoughtful financial stewardship and helps ensure that its resources are managed responsibly in support of the community.",
    },
  },
];

export const boardAdvisoryTeam: LeadershipProfile[] = [
  {
    name: "Jagadeesh Babu Buddireddi",
    role: "Director - IT, Digital Services",
    category: "Board & Advisory Team",
    image: "/images/board/jagadeesh.jpeg",
    profile: {
      introduction:
        "Jagadeesh Babu Buddireddi is a Senior Software Engineer with more than 8 years of experience in software quality engineering, automation and digital transformation. His professional background combines strong technical expertise with a focus on building reliable, scalable and modern software solutions. He brings experience in application development, digital technologies and quality engineering, with a particular interest in emerging AI-driven solutions. His academic background in Engineering and Data Science & Engineering further strengthens his ability to approach complex technology challenges with analytical and innovative thinking.\n\nAt NIA, Jagadeesh contributes his technology leadership to strengthen the organization's digital presence and support the use of modern technology across its initiatives. His approach reflects a belief that technology should not simply make things easier, but should create meaningful opportunities and stronger connections within the community.",
      quote:
        "The true measure of success is not just what we achieve ourselves, but how many lives we positively impact along the way.",
    },
  },
  {
    name: "Varun Verma",
    role: "Director - Technical Operations & Event Production",
    category: "Board & Advisory Team",
    image: "/images/board/varun-verma.jpeg",
    profile: {
      introduction:
        "Varun Verma is a data analytics and AI professional with more than 14 years of experience across technology, analytics and business intelligence. His career includes senior and leadership roles in data analysis and technology with organizations including NICE Systems, Contact Engine, CloudNine Technologies and Infosys. He combines technical expertise with formal education in Information Systems - Data Analytics and Information Technology, supported by PMP and cloud and AI credentials. His professional experience also extends into business finance and real-estate-related ventures, giving him a broad understanding of technology, business operations and strategic decision-making.\n\nThis multidisciplinary background makes him particularly effective in combining technology, planning and execution. As Director of Technical Operations & Event Production, Varun brings analytical thinking, technical leadership and strong organizational capabilities to help NIA deliver professional and memorable community experiences.",
      quote:
        "To empower the Niagara Indian community through unified action, fostering a legacy of cultural pride and economic growth.",
    },
  },
  {
    name: "Raj Sharma",
    role: "Director - Protocol, VIP Relations & Hospitality",
    category: "Board & Advisory Team",
    image: "/images/board/raj-sharma.jpeg",
    profile: {
      introduction:
        "Raj Sharma is an entrepreneur, REALTOR® and community leader with more than 18 years of experience across banking, real estate and community services. His professional journey has given him extensive exposure to financial services, real-estate investment, land acquisition and business development. As the founder of Raj Sharma Professional Real Estate Corp, he brings practical entrepreneurial experience and a strong network of professional relationships. His strengths also include financial literacy, accounting, visionary planning, change management and organizational leadership.\n\nThese capabilities are especially valuable when NIA works with community partners, dignitaries, businesses and guests at major events. As Director of Protocol, VIP Relations & Hospitality, Raj brings professionalism, relationship-building and a strong commitment to ensuring that every interaction reflects the respect, warmth and hospitality of the NIA community.",
      quote:
        "Together, let’s build a vibrant community where every individual is empowered, every voice is heard, and every dream has the opportunity to grow.",
    },
  },
  {
    name: "Jebila Sithiraipandi",
    role: "Director - Youth, Education & Cultural Programs",
    category: "Board & Advisory Team",
    image: "/images/board/jebila-sithiraipandi.jpeg",
    profile: {
      introduction:
        "Jebila Sithiraipandi is an educator, entrepreneur and community-focused professional with a strong commitment to youth, education and cultural connection. She works as an ILP Instructor with the Niagara Catholic District School Board and brings valuable experience supporting learners and families through education and community programs. She is also the founder of Mrukkubites Inc. and has contributed as a volunteer with Food for Kids Niagara. Her commitment to cultural education includes providing free Tamil language classes through Niagara Tamil Sangam, helping younger generations maintain a meaningful connection with language and heritage.\n\nWith a Master's degree in Literature, a Bachelor of Education and teacher education credentials, she combines academic depth with practical teaching experience. As Director of Youth, Education & Cultural Programs, Jebila helps NIA create opportunities for young people, families and future generations to learn, participate and feel a strong sense of belonging.",
      quote: "Community is the spirit that draws people together.",
    },
  },
  {
    name: "Divya Thomas (Sonu)",
    role: "Director - Health & Wellness",
    category: "Board & Advisory Team",
    image: "/images/board/divya-thomas.jpeg",
    profile: {
      introduction:
        "Divya Thomas, known as Sonu, is a healthcare and wellness professional whose experience brings together nursing, mental health, Ayurveda and manual osteopathy. Her professional background is grounded in compassionate, holistic and client-centred care. She is associated with Pranaah Ayurcare Kerala Ayurveda & Osteopathy Centre in Niagara Falls, where her work focuses on wellness and therapeutic care. Her academic qualifications include a Bachelor of Science in Nursing, a Master's degree in Psychiatric Nursing and a Diploma in Manual Osteopathy.\n\nThis combination of healthcare education and holistic wellness experience gives her a broad perspective on physical, emotional and overall well-being. As Director of Health & Wellness, Divya brings that perspective to NIA and supports the association's commitment to a healthy, informed and caring community.",
    },
  },
  {
    name: "Gagan Dadiala",
    role: "Legal Advisor",
    category: "Board & Advisory Team",
    image: "/images/board/gagan-dadiala.jpeg",
    profile: {
      introduction:
        "Gagan Dadiala is a lawyer with almost 13 years of professional experience in estate planning, residential and commercial real estate and corporate law. Through his legal practice, he provides clients with guidance across complex personal, property and business matters. He is a member in good standing of the Law Society of Ontario and operates professional corporations serving clients in Pelham and Mississauga. Beyond his professional practice, Gagan has contributed pro bono legal services to families and newcomers and has supported community organizations and cultural events.\n\nHis legal expertise, professional judgment and commitment to accessible guidance make him a valuable resource for a diverse and growing community. As Legal Advisor to NIA, Gagan brings integrity, experience and a strong belief in ensuring that people feel supported and included as the community grows.",
      quote:
        "A community isn’t measured by how far it’s come, but by how many people it brings along the way.",
    },
  },
  {
    name: "Sampa Shakya",
    role: "Director - Family Services & Community Outreach",
    category: "Board & Advisory Team",
    image: "/images/board/sampa-shakya.jpeg",
    profile: {
      introduction:
        "Sampa Shakya brings a diverse professional background spanning childcare, occupational health and safety, government sales, scientific research and community service. She is the owner of The Bridge Inc., a licensed home daycare, reflecting her commitment to supporting children and families. Her professional experience also includes work with General Electric, Agriculture and Agri-Food Canada and Brock University's Department of Cool Climate Oenology and Viticulture Institute. With a Master's degree in Biochemistry and additional training in medical office administration, First Aid & CPR and Food Safe, she combines scientific knowledge with practical community experience.\n\nHer involvement with organizations including ISKCON Niagara and the Niagara Region Telugu Association further reflects her connection to cultural and community initiatives. As Director of Family Services & Community Outreach, Sampa brings a caring, multidisciplinary perspective focused on families, youth, meaningful connections and lasting community impact.",
    },
  },
];
