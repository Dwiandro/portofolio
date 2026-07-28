export interface ExperienceItem {
  id: string;
  role: string;
  programOrEvent: string;
  organization: string;
  period: string;
  location?: string;
  badge: string;
  bullets: string[];
  technologies?: string[];
  highlights?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'AI & Data' | 'Web Development' | 'B2B Platform';
  type: string;
  stack: string[];
  image: string;
  shortDesc: string;
  detailedDesc: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: { name: string; level?: string; highlight?: boolean }[];
  description: string;
}

export const PERSONAL_INFO = {
  name: "MUHAMMAD AFDHAL HANIF DWIANDRO",
  nickname: "Afdhal Dwiandro",
  title: "WEB DEVELOPER / IT SUPPORT",
  location: "Ciputat, Tangerang Selatan",
  phone: "+6285718996747",
  email: "andouse008@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-afdhal-mahda",
  github: "https://github.com/Dwiandro",
  education: {
    degree: "Bachelor of Informatics Engineer",
    period: "September 2022 - Present"
  },
  stats: [
    { label: "Modul OBE Laravel", value: 4, suffix: "+" },
    { label: "Angkatan Data KHS Cleansed", value: 6, suffix: " Angkatan" },
    { label: "Project Teknologi & AI", value: 2, suffix: " Project" },
    { label: "Kegiatan Volunteer", value: 4, suffix: " Event" }
  ]
};

export const ABOUT_TEXT = {
  tech: `Mahasiswa tingkat akhir yang berorientasi pada solusi teknologi dengan fondasi kuat lintas bahasa pemrograman (JavaScript, Python, PHP, Java). Memiliki rekam jejak dalam mendigitalisasi operasional bisnis, dibuktikan melalui pengembangan Content Management System (CMS) dan landing page dinamis yang memampukan BumDes Sirah Dayueh mengelola aset data dan visual mereka secara mandiri. Memiliki kemampuan problem-solving dan analisis yang detail, siap untuk mendorong inisiatif teknologi yang efisien dan berdampak strategis pada proyek.`,
  volunteer: `Mahasiswa tingkat akhir berlatar belakang IT yang memiliki antusiasme tinggi terhadap inisiatif sosial dan pengembangan komunitas. Berbekal pengalaman membangun Content Management System (CMS) untuk pemberdayaan UMKM desa, saya terbiasa menerjemahkan masalah di lapangan menjadi solusi terukur. Sebagai individu yang terus bertumbuh, saya sangat menghargai sinergi tim, komunikasi yang terbuka, dan manajemen waktu yang ketat. Berdedikasi untuk memberikan kontribusi nyata dan eksekusi adaptif sebagai bagian dari tim volunteer di organisasi Anda.`
};

export const IT_WORK_EXPERIENCES: ExperienceItem[] = [
  {
    id: "work-1",
    role: "IT & Academic Support Intern",
    programOrEvent: "Program KKN-in-Campus",
    organization: "UIN Syarif Hidayatullah Jakarta",
    period: "Januari 2026 – Juni 2026",
    location: "Ciputat, Tangerang Selatan",
    badge: "Internship",
    bullets: [
      "Merancang dan mengimplementasikan antarmuka pengguna (View Layer) menggunakan framework Laravel untuk 4 modul utama pada dashboard akademik berbasis Outcome-Based Education (OBE), yang mencakup dasbor utama, RPS, manajemen mata kuliah, dan visualisasi CPL/CPMK.",
      "Melakukan ekstraksi, pembersihan (cleansing), dan normalisasi rekam jejak data akademik dan Kartu Hasil Studi (KHS) mahasiswa angkatan 2020–2025 untuk menjamin kesiapan data (data readiness) sebelum diimpor ke sistem OBE terbaru.",
      "Menyusun query prompt SQL terstruktur untuk mempercepat proses entri data ke dalam sistem layanan kampus.",
      "Memfasilitasi operasional 4 agenda krusial prodi (Seminar Proposal & Diseminasi Penelitian) sebagai moderator, timekeeper, dan penanggung jawab dokumentasi untuk memastikan kelancaran acara dan pengarsipan visual."
    ],
    technologies: ["Laravel", "PHP", "SQL", "Data Cleansing", "OBE Dashboard", "CPL/CPMK Visualization"]
  },
  {
    id: "work-2",
    role: "Web Developer",
    programOrEvent: "Contract/Project-Based",
    organization: "BumDes Sirah Dayueh",
    period: "August, 2025",
    location: "Contract / Project-Based",
    badge: "Contract",
    bullets: [
      "Merancang dan mengembangkan landing page promosi digital yang dinamis untuk mendukung digitalisasi dan meningkatkan visibilitas bisnis BumDes Sirah Dayueh.",
      "Membangun dashboard admin (Content Management System/CMS) end-to-end yang memampukan pihak BumDes untuk mengelola aset visual dan data bisnis mereka secara mandiri.",
      "Mengimplementasikan infrastruktur Backend-as-a-Service (BaaS) menggunakan Supabase (PostgreSQL) untuk mendukung operasi basis data (CRUD) yang efisien."
    ],
    technologies: ["React.js", "Supabase", "PostgreSQL", "BaaS", "CMS Admin", "PHP"]
  }
];

export const VOLUNTEER_EXPERIENCES: ExperienceItem[] = [
  {
    id: "vol-1",
    role: "Media & Documentation Support",
    programOrEvent: "Diseminasi Seminar Hasil Penelitian",
    organization: "UIN Syarif Hidayatullah Jakarta",
    period: "21 Januari 2026 & 3 Juni 2026",
    badge: "Documentation",
    bullets: [
      "Berperan sebagai tim dokumentasi utama untuk mengelola pengarsipan visual acara secara komprehensif, memastikan seluruh rangkaian kegiatan terekam dengan kualitas yang memadai untuk kebutuhan pelaporan."
    ],
    highlights: ["Visual Archiving", "Event Photography", "Reporting"]
  },
  {
    id: "vol-2",
    role: "Runner Crew Main Stage",
    programOrEvent: "JAAN 2025",
    organization: "JAAN 2025",
    period: "5 Desember - 6 Desember 2025",
    badge: "Stage Crew",
    bullets: [
      "Berperan sebagai tim Dukungan operasional dan penyelesaian krisis dadakan untuk ruangan utama, termasuk menyiapkan segala kebutuhan untuk tamu pembicara."
    ],
    highlights: ["Stage Support", "Field Troubleshooting", "Crisis Resolution"]
  },
  {
    id: "vol-3",
    role: "Timekeeper & Event Support",
    programOrEvent: "Mandiri Runniversary 2025",
    organization: "Mandiri Runniversary 2025",
    period: "20 - 21 September 2025",
    badge: "Precision Timekeeper",
    bullets: [
      "Bertanggung jawab penuh sebagai timekeeper untuk memastikan keakuratan catatan waktu peserta dan menjaga kedisiplinan alur operasional perlombaan di lapangan."
    ],
    highlights: ["Timekeeping & Precision", "Race Operations", "Schedule Discipline"]
  },
  {
    id: "vol-4",
    role: "Event & Operations Volunteer",
    programOrEvent: "Kepanitiaan Hari Raya Idul Fitri & Idul Adha",
    organization: "Kepanitiaan Hari Raya Idul Fitri & Idul Adha",
    period: "Januari 2026 - Juni 2026",
    badge: "MC & Operations",
    bullets: [
      "Mengelola operasional konsumsi dan bertugas sebagai MC pada perayaan Idul Fitri, memastikan kelancaran susunan acara dan kenyamanan jamaah/peserta.",
      "Terlibat langsung dalam manajemen logistik pemotongan hewan kurban Idul Adha, memfasilitasi alur distribusi daging ke tim pencacah hingga berpartisipasi dalam proses pencacahan daging untuk disalurkan kepada masyarakat."
    ],
    highlights: ["Public Speaking & MC", "Logistics & Supply Management", "Community Operations"]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-1",
    title: "AI-Powered Arabic Document Reader & RAG Chatbot",
    category: "AI & Data",
    type: "Final Academic Project",
    stack: ["React.js", "Express.js", "Gemini AI", "RAG Architecture", "DOM-based Chunking"],
    image: "rag-chatbot.png",
    shortDesc: "Aplikasi web fullstack untuk mengotomatisasi ekstraksi dokumen EPUB berbahasa Arab menjadi memori vektor AI dan RAG Chatbot interaktif.",
    detailedDesc: "Mengembangkan aplikasi web fullstack untuk mengotomatisasi ekstraksi dokumen EPUB berbahasa Arab menjadi memori vektor AI menggunakan teknik DOM-based chunking. Mengimplementasikan konsep Retrieval-Augmented Generation (RAG) menggunakan model Gemini untuk menciptakan fitur Chatbot yang mampu menjawab pertanyaan berdasarkan konteks buku secara interaktif. Mengintegrasikan dasbor evaluasi admin dengan teknik prompt engineering spesifik agar AI dapat melakukan penerjemahan dan penilaian dokumen secara konsisten tanpa halusinasi.",
    highlights: [
      "Mengotomatisasi ekstraksi dokumen EPUB berbahasa Arab menjadi memori vektor AI menggunakan DOM-based chunking",
      "Retrieval-Augmented Generation (RAG) berbasis Gemini AI untuk Chatbot interaktif sesuai konteks buku",
      "Dasbor evaluasi admin dengan prompt engineering spesifik untuk penerjemahan & penilaian dokumen tanpa halusinasi"
    ]
  },
  {
    id: "proj-2",
    title: "Sponsormatch: B2B Sponsorship Matching Platform",
    category: "B2B Platform",
    type: "Prototype & Business Plan",
    stack: ["React.ts", "Python", "Data Matching", "Sponsorship Platform"],
    image: "sponsormatch.png",
    shortDesc: "Purwarupa platform matching digital B2B untuk menjembatani panitia acara mahasiswa dengan mitra perusahaan secara efisien.",
    detailedDesc: "Merumuskan business plan dan mengembangkan purwarupa platform matching digital untuk menjembatani panitia acara mahasiswa dengan mitra perusahaan secara efisien. Memodelkan sistem penyaringan (berbasis Python) yang bertujuan untuk mengefisiensikan waktu dan beban kerja tim HR perusahaan dalam menyeleksi proposal sponsor yang masuk. Merancang alur kerja frontend (menggunakan React.ts) yang menyederhanakan proses pencarian target sponsor dan pengajuan proposal bagi panitia acara menjadi lebih terstruktur dan berbasis data.",
    highlights: [
      "Merumuskan business plan & purwarupa platform matching digital panitia mahasiswa vs mitra perusahaan",
      "Sistem penyaringan berbasis Python untuk efisiensi waktu & beban kerja tim HR perusahaan",
      "Frontend React.ts untuk pencarian target sponsor & pengajuan proposal terstruktur berbasis data"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Technical Proficiency",
    iconName: "Code",
    description: "Bahasa pemrograman dan framework pengembang web.",
    skills: [
      { name: "JavaScript", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "Python", highlight: true },
      { name: "Java" },
      { name: "PHP", highlight: true },
      { name: "React.js", highlight: true },
      { name: "Express.js" },
      { name: "Supabase (PostgreSQL)", highlight: true },
      { name: "Git/GitHub", highlight: true }
    ]
  },
  {
    category: "AI & Data Integration",
    iconName: "Cpu",
    description: "Arsitektur RAG AI, Prompt Engineering, dan Otomasi Workflow.",
    skills: [
      { name: "RAG Architecture", highlight: true },
      { name: "Prompt Engineering", highlight: true },
      { name: "Gemini AI", highlight: true },
      { name: "Automated Workflow Design", highlight: true }
    ]
  },
  {
    category: "Analysis & Problem Solving",
    iconName: "Activity",
    description: "Analisis sistem, evaluasi sumber daya, dan penjaminan kualitas.",
    skills: [
      { name: "Systems Analysis", highlight: true },
      { name: "Resource Evaluation" },
      { name: "Detail-Oriented Development (QA)", highlight: true },
      { name: "Hardware & Software Troubleshooting", highlight: true }
    ]
  },
  {
    category: "Strategy & Consulting",
    iconName: "Briefcase",
    description: "Perancangan solusi bisnis dan penerjemahan kebutuhan teknis.",
    skills: [
      { name: "Solution Design", highlight: true },
      { name: "Requirements Analysis", highlight: true },
      { name: "Business Ideation" },
      { name: "Team Collaboration", highlight: true }
    ]
  },
  {
    category: "Event & Field Operations",
    iconName: "Users",
    description: "Manajemen logistik, kedisiplinan waktu, dan penanganan krisis lapangan.",
    skills: [
      { name: "Logistics & Supply Management", highlight: true },
      { name: "Tenant & UMKM Relations" },
      { name: "Timekeeping & Precision", highlight: true },
      { name: "Field Troubleshooting", highlight: true }
    ]
  },
  {
    category: "Media & Communications",
    iconName: "Camera",
    description: "Dokumentasi visual, penyampaian di depan umum, dan komunikasi.",
    skills: [
      { name: "Event Photography", highlight: true },
      { name: "Visual Archiving", highlight: true },
      { name: "Public Speaking & MC", highlight: true },
      { name: "Interpersonal Communication", highlight: true }
    ]
  }
];
