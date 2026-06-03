import { useState, useMemo } from "react";
import Navbar from "../../components/landing/Navbar";
import { ChevronDown, Share2, Star, Heart } from "lucide-react";

// Mock Data
const MOCK_PROJECTS = [
    {
        id: 1,
        title: "E-Commerce Dashboard",
        description: "Modern admin dashboard untuk toko online dengan real-time analytics dan inventory management",
        category: "Web Apps",
        grade: "Kelas 12",
        image: "https://via.placeholder.com/400x300?text=E-Commerce+Dashboard",
        technologies: ["React", "Node.js", "MongoDB"],
        developer: {
            name: "Ahmad Rizki",
            avatar: "https://via.placeholder.com/50x50?text=AR",
            role: "Full Stack Developer",
        },
        rating: 4.8,
        likes: 24,
    },
    {
        id: 2,
        title: "Kasir Pintar POS",
        description: "Aplikasi point of sale lengkap dengan fitur transaksi, laporan penjualan, dan pengelolaan keuangan",
        category: "Point of Sales",
        grade: "Kelas 12",
        image: "https://via.placeholder.com/400x300?text=Kasir+Pintar+POS",
        technologies: ["Tauri", "MySQL", "TypeScript"],
        developer: {
            name: "Siti Nurhalizaa",
            avatar: "https://via.placeholder.com/50x50?text=SN",
            role: "Backend Developer",
        },
        rating: 4.7,
        likes: 18,
    },
    {
        id: 3,
        title: "Adventure Quest RPG",
        description: "Browser-based RPG game dengan battle system, quest management, dan character progression",
        category: "Games",
        grade: "Kelas 11",
        image: "https://via.placeholder.com/400x300?text=Adventure+Quest+RPG",
        technologies: ["Phaser", "JavaScript", "Firebase"],
        developer: {
            name: "Fadhlan Maulana",
            avatar: "https://via.placeholder.com/50x50?text=FM",
            role: "Game Developer",
        },
        rating: 4.5,
        likes: 32,
    },
    {
        id: 4,
        title: "EduLearn UI Kit",
        description: "Comprehensive design system dengan component library dan documentation untuk aplikasi edukasi",
        category: "UI/UX",
        grade: "Kelas 10",
        image: "https://via.placeholder.com/400x300?text=EduLearn+UI+Kit",
        technologies: ["Figma", "React", "Storybook"],
        developer: {
            name: "Rina Hendayani",
            avatar: "https://via.placeholder.com/50x50?text=RH",
            role: "UI/UX Designer",
        },
        rating: 4.6,
        likes: 28,
    },
    {
        id: 5,
        title: "FitTrack Mobile",
        description: "Aplikasi fitness tracker dengan workout planning, nutrition tracking, dan progress monitoring",
        category: "Mobile Apps",
        grade: "Kelas 11",
        image: "https://via.placeholder.com/400x300?text=FitTrack+Mobile",
        technologies: ["React Native", "TypeScript", "Expo",
        ],
        developer: {
            name: "Farhan Maulana",
            avatar: "https://via.placeholder.com/50x50?text=FM",
            role: "Mobile Developer",
        },
        rating: 4.7,
        likes: 21,
    },
    {
        id: 6,
        title: "Library Management System",
        description: "Sistem manajemen perpustakaan digital dengan katalog buku, peminjaman online, dan integrasi e-book reader",
        category: "Web Apps",
        grade: "Kelas 10",
        image: "https://via.placeholder.com/400x300?text=Library+Management",
        technologies: ["Vue.js", "Express", "PostgreSQL"],
        developer: {
            name: "Rina Hendayani",
            avatar: "https://via.placeholder.com/50x50?text=RH",
            role: "Full Stack Developer",
        },
        rating: 4.5,
        likes: 19,
    },
    {
        id: 7,
        title: "Restaurant POS Pro",
        description: "Aplikasi POS profesional untuk restoran dengan menu management, table ordering, dan kitchen display system",
        category: "Point of Sales",
        grade: "Kelas 12",
        image: "https://via.placeholder.com/400x300?text=Restaurant+POS+Pro",
        technologies: ["React", "Laravel", "MySQL"],
        developer: {
            name: "Andi Parjana",
            avatar: "https://via.placeholder.com/50x50?text=AP",
            role: "Full Stack Developer",
        },
        rating: 4.8,
        likes: 27,
    },
    {
        id: 8,
        title: "Puzzle Master",
        description: "Koleksi puzzle games interaktif dengan berbagai tingkat kesulitan, leaderboard, dan achievement system",
        category: "Games",
        grade: "Kelas 10",
        image: "https://via.placeholder.com/400x300?text=Puzzle+Master",
        technologies: ["Unity", "C#", "Photon"],
        developer: {
            name: "Kevin Wijaya",
            avatar: "https://via.placeholder.com/50x50?text=KW",
            role: "Game Developer",
        },
        rating: 4.9,
        likes: 12,
    },
];

const MOCK_CONTRIBUTORS = [
    {
        id: 1,
        name: "Ahmad Rizki",
        role: "Full Stack Developer",
        avatar: "https://via.placeholder.com/80x80?text=AR",
        projects: 8,
        skills: ["React", "Node.js", "MongoDB"],
        github: "https://github.com",
    },
    {
        id: 2,
        name: "Siti Nurhalizaa",
        role: "Backend Developer",
        avatar: "https://via.placeholder.com/80x80?text=SN",
        projects: 6,
        skills: ["PHP", "Python", "PostgreSQL"],
        github: "https://github.com",
    },
    {
        id: 3,
        name: "Budi Santoso",
        role: "Mobile Developer",
        avatar: "https://via.placeholder.com/80x80?text=BS",
        projects: 5,
        skills: ["React Native", "Flutter", "Dart"],
        github: "https://github.com",
    },
    {
        id: 4,
        name: "Dewi Kusuma",
        role: "UI/UX Designer",
        avatar: "https://via.placeholder.com/80x80?text=DK",
        projects: 12,
        skills: ["Figma", "React", "Sketch"],
        github: "https://github.com",
    },
];

// Project Card Component
const ProjectCard = ({ project }) => {
    return (
        <div className="group bg-gradient-to-br from-gray-900/40 to-gray-800/20 border border-gray-700/50 rounded-2xl overflow-hidden hover:border-[#00F5A0]/40 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/20 flex flex-col">
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden bg-gray-800/50">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Category Badge - Top Left */}
                <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#00F5A0] to-[#4bf3ce] text-black text-xs font-bold rounded-full">
                        {project.category}
                    </span>
                </div>

                {/* Action Buttons - Top Right */}
                <div className="absolute top-3 right-3 flex gap-2">
                    <button className="p-2 bg-black/40 backdrop-blur-sm rounded-lg hover:bg-[#00F5A0]/20 hover:text-[#00F5A0] text-gray-300 transition-all duration-200 hover:scale-110">
                        <Share2 size={18} />
                    </button>
                    <button className="p-2 bg-black/40 backdrop-blur-sm rounded-lg hover:bg-[#00F5A0]/20 hover:text-[#00F5A0] text-gray-300 transition-all duration-200 hover:scale-110">
                        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-4">
                {/* Title */}
                <h3 className="font-bold text-lg text-white mb-2 line-clamp-2 group-hover:text-[#00F5A0] transition-colors">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-3 line-clamp-2 flex-grow">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-gray-800/50 text-gray-300 rounded border border-gray-700/50 hover:border-[#00F5A0]/40 hover:text-[#00F5A0] transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Developer Info */}
                <div className="flex items-center justify-between border-t border-gray-700/50 pt-3">
                    <div className="flex items-center gap-2">
                        <img
                            src={project.developer.avatar}
                            alt={project.developer.name}
                            className="w-8 h-8 rounded-full border border-gray-600/50"
                        />
                        <div className="text-xs">
                            <div className="text-gray-300 font-medium">{project.developer.name}</div>
                        </div>
                    </div>

                    {/* Rating and Likes */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                            <Star size={14} className="text-yellow-400 fill-yellow-400" />
                            <span className="text-xs text-gray-300 font-medium">{project.rating}</span>
                        </div>
                        <button className="flex items-center gap-1 text-gray-400 hover:text-red-500 transition-colors group/heart">
                            <Heart size={14} className="group-hover/heart:fill-red-500" />
                            <span className="text-xs">{project.likes}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Top Contributor Card Component
const ContributorCard = ({ contributor }) => {
    return (
        <div className="group bg-gradient-to-br from-gray-900/40 to-gray-800/20 border border-gray-700/50 rounded-2xl p-4 hover:border-[#00F5A0]/40 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/20">
            {/* Avatar */}
            <div className="flex justify-center mb-4">
                <div className="relative">
                    <img
                        src={contributor.avatar}
                        alt={contributor.name}
                        className="w-20 h-20 rounded-full border-2 border-[#00F5A0]/30 group-hover:border-[#00F5A0] transition-all duration-300"
                    />
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#00F5A0] rounded-full border-2 border-gray-900" />
                </div>
            </div>

            {/* Name and Role */}
            <div className="text-center mb-3">
                <h4 className="font-bold text-white text-sm group-hover:text-[#00F5A0] transition-colors">
                    {contributor.name}
                </h4>
                <p className="text-xs text-gray-400 mt-1">{contributor.role}</p>
            </div>

            {/* Stats */}
            <div className="flex gap-4 justify-center mb-4 text-center text-xs border-y border-gray-700/50 py-3">
                <div>
                    <div className="text-lg font-bold text-[#00F5A0]">{contributor.projects}</div>
                    <div className="text-gray-400 mt-1">Projects</div>
                </div>
                <div>
                    <div className="text-lg font-bold text-[#00D2FF]">{contributor.skills.length}</div>
                    <div className="text-gray-400 mt-1">Skills</div>
                </div>
            </div>

            {/* Skills */}
            <div className="mb-4">
                <div className="flex flex-wrap gap-1.5 justify-center">
                    {contributor.skills.map((skill) => (
                        <span
                            key={skill}
                            className="px-2 py-1 text-xs bg-gray-800/50 text-gray-300 rounded hover:bg-[#00F5A0]/10 hover:text-[#00F5A0] transition-all border border-gray-700/50"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* View GitHub Button */}
            <a
                href={contributor.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 bg-gradient-to-r from-[#00F5A0] to-[#4bf3ce] text-black font-bold rounded-lg hover:shadow-lg hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-200 text-sm flex items-center justify-center gap-2"
            >
                <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
                View GitHub
            </a>
        </div>
    );
};

// Main Showcase Component
const Showcase = () => {
    const [selectedGrade, setSelectedGrade] = useState("All Grades");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const grades = ["All Grades", "Kelas 10", "Kelas 11", "Kelas 12"];
    const categories = ["All", "Games", "Web Apps", "Point of Sales", "UI/UX", "Mobile Apps"];

    // Filter projects based on selected criteria
    const filteredProjects = useMemo(() => {
        return MOCK_PROJECTS.filter((project) => {
            const matchGrade = selectedGrade === "All Grades" || project.grade === selectedGrade;
            const matchCategory = selectedCategory === "All" || project.category === selectedCategory;
            const matchSearch =
                project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase());

            return matchGrade && matchCategory && matchSearch;
        });
    }, [selectedGrade, selectedCategory, searchQuery]);

    return (
        <div className="min-h-screen bg-[#0A0E12] text-white font-sans relative overflow-x-hidden antialiased">
            {/* Background Glow Effects */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
                <div className="absolute top-[15%] right-[-8%] w-[min(500px,80vw)] h-[min(500px,80vw)] bg-[#00F5A0]/10 rounded-full blur-[120px] animate-glow-pulse will-change-transform" />
                <div className="absolute bottom-[10%] right-[10%] w-[min(400px,70vw)] h-[min(400px,70vw)] bg-[#00D2FF]/10 rounded-full blur-[100px] animate-glow-pulse will-change-transform [animation-delay:2s]" />
                <div className="absolute top-[45%] left-[-8%] w-[min(350px,60vw)] h-[min(350px,60vw)] bg-emerald-500/5 rounded-full blur-[90px] animate-glow-pulse will-change-transform [animation-delay:4s]" />
            </div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto">
                {/* Navbar */}
                <Navbar />

                <main className="pt-[110px] relative z-10">
                    {/* Hero Section */}
                    <section className="flex flex-col items-center gap-4 min-h-[50vh] justify-center py-16 px-4 text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-[#00F5A0] text-xs font-semibold tracking-wide hover:border-emerald-500/60 hover:bg-emerald-500/15 transition-all duration-300">
                            <svg className="w-4 h-4 animate-spin duration-3000" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            📚 Student Talent Directory
                        </div>

                        {/* Main Heading */}
                        <h1 className="flex gap-4 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] max-w-4xl">
                            Showcase <br />
                            <span className="bg-gradient-to-r from-[#00F5A0] via-[#4bf3ce] to-[#00D2FF] bg-clip-text text-transparent">
                                Excellence
                            </span>
                        </h1>

                        {/* Subheading */}
                        <div className="max-w-2xl mt-4">
                            <p className="text-lg md:text-xl text-gray-300">
                                Jelajahi proyek inovatif yang dikembangkan oleh talenta berbakat dari{" "}
                                <span className="text-white font-bold">SMKS Muhammadiyah 1 Genteng</span>
                            </p>
                            <p className="text-lg text-[#00F5A0] font-semibold mt-3">
                                Temukan generasi engineer masa depan 🚀
                            </p>
                        </div>
                    </section>

                    {/* Search Bar */}
                    <section className="px-4 mb-8">
                        <div className="max-w-2xl mx-auto">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search projects, students, or tech stack..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-6 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00F5A0]/50 focus:bg-gray-900/70 transition-all duration-200"
                                />
                                <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </section>

                    {/* Filter Section */}
                    <section className="px-4 mb-12">
                        <div className="space-y-4">
                            {/* Grades Filter */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                                <label className="text-sm font-semibold text-gray-300 whitespace-nowrap">
                                    🎓 Grades:
                                </label>
                                <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                                    {grades.map((grade) => (
                                        <button
                                            key={grade}
                                            onClick={() => setSelectedGrade(grade)}
                                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${selectedGrade === grade
                                                ? "bg-[#00F5A0] text-black border-[#00F5A0]"
                                                : "bg-transparent border-gray-600/40 text-gray-300 hover:border-[#00F5A0]/60 hover:text-[#00F5A0]"
                                                }`}
                                        >
                                            {grade}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Categories Filter */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                                <label className="text-sm font-semibold text-gray-300 whitespace-nowrap">
                                    📂 Categories:
                                </label>
                                <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => setSelectedCategory(category)}
                                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${selectedCategory === category
                                                ? "bg-[#00F5A0] text-black border-[#00F5A0]"
                                                : "bg-transparent border-gray-600/40 text-gray-300 hover:border-[#00F5A0]/60 hover:text-[#00F5A0]"
                                                }`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Projects Grid Section */}
                    <section className="px-4 pb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Projects Grid */}
                            <div className="lg:col-span-2">
                                {/* Showing X projects */}
                                <div className="mb-6 flex items-center gap-2">
                                    <span className="text-gray-400">Showing</span>
                                    <span className="font-bold text-[#00F5A0] text-lg">{filteredProjects.length}</span>
                                    <span className="text-gray-400">projects</span>
                                </div>

                                {/* Projects Grid - 2 columns */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {filteredProjects.length > 0 ? (
                                        filteredProjects.map((project) => (
                                            <ProjectCard key={project.id} project={project} />
                                        ))
                                    ) : (
                                        <div className="col-span-full text-center py-12">
                                            <p className="text-gray-400 text-lg">Tidak ada project yang sesuai dengan filter.</p>
                                            <p className="text-gray-500 text-sm mt-2">Coba ubah filter Anda.</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Top Contributors Sidebar */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-[150px]">
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        <span>🏆</span>
                                        Top Contributors
                                    </h3>

                                    <div className="space-y-4">
                                        {MOCK_CONTRIBUTORS.map((contributor) => (
                                            <ContributorCard key={contributor.id} contributor={contributor} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Showcase;
