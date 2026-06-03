import { useState, useMemo, useEffect } from "react";
import Navbar from "../../components/landing/Navbar";
import { ChevronDown, Share2, Star, Heart, Plus, Pencil, Trash2, GitBranch, ExternalLink, Loader2 } from "lucide-react";
import { publicApi, studentApi, storageUrl, buildProjectFormData, getStoredUser } from "../../lib/api";
import { useToast } from "../../context/ToastContext";
import {
  GlassModal,
  GlassInput,
  GlassTextarea,
  GlassSelect,
  GlassButton,
} from "../../components/ui/GlassCard";

const emptyProject = {
  title: '',
  category_id: '',
  description: '',
  tech_stack: '',
  demo_url: '',
  repo_url: '',
};

// Project Card Component
const ProjectCard = ({ project, onEdit, onDelete, isOwner }) => {
    return (
        <div className="group bg-gradient-to-br from-gray-900/40 to-gray-800/20 border border-gray-700/50 rounded-2xl overflow-hidden hover:border-[#00F5A0]/40 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/20 flex flex-col">
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden bg-gray-800/50">
                <img
                    src={storageUrl(project.thumbnail_image) || "https://via.placeholder.com/400x300?text=No+Image"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Category Badge - Top Left */}
                <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#00F5A0] to-[#4bf3ce] text-black text-xs font-bold rounded-full">
                        {project.category?.name || "Uncategorized"}
                    </span>
                </div>

                {/* Action Buttons - Top Right */}
                <div className="absolute top-3 right-3 flex gap-2">
                    {isOwner && (
                        <>
                            <button 
                                onClick={() => onEdit(project)}
                                className="p-2 bg-black/60 backdrop-blur-sm rounded-lg hover:bg-blue-500/40 text-blue-400 transition-all duration-200 hover:scale-110"
                            >
                                <Pencil size={18} />
                            </button>
                            <button 
                                onClick={() => onDelete(project.id)}
                                className="p-2 bg-black/60 backdrop-blur-sm rounded-lg hover:bg-red-500/40 text-red-400 transition-all duration-200 hover:scale-110"
                            >
                                <Trash2 size={18} />
                            </button>
                        </>
                    )}
                    <button className="p-2 bg-black/40 backdrop-blur-sm rounded-lg hover:bg-[#00F5A0]/20 hover:text-[#00F5A0] text-gray-300 transition-all duration-200 hover:scale-110">
                        <Share2 size={18} />
                    </button>
                    {project.repo_url && (
                        <a 
                            href={project.repo_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-black/40 backdrop-blur-sm rounded-lg hover:bg-[#00F5A0]/20 hover:text-[#00F5A0] text-gray-300 transition-all duration-200 hover:scale-110"
                        >
                            <GitBranch size={18} />
                        </a>
                    )}
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
                    {Array.isArray(project.tech_stack) && project.tech_stack.map((tech) => (
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
                            src={storageUrl(project.student?.avatar) || "https://via.placeholder.com/50x50?text=Student"}
                            alt={project.student?.user?.name || "Student"}
                            className="w-8 h-8 rounded-full border border-gray-600/50 object-cover"
                        />
                        <div className="text-xs">
                            <div className="text-gray-300 font-medium">{project.student?.user?.name || "Anonymous"}</div>
                            <div className="text-gray-500 text-[10px]">{project.student?.grade_level || ""}</div>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3">
                        {project.demo_url && (
                            <a 
                                href={project.demo_url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-[#00F5A0] transition-colors"
                            >
                                <ExternalLink size={16} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Main Showcase Component
const Showcase = () => {
    const { push } = useToast();
    const currentUser = getStoredUser();
    
    const [projects, setProjects] = useState([]);
    const [dbCategories, setDbCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedGrade, setSelectedGrade] = useState("All Grades");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    // CRUD State
    const [modalOpen, setModalOpen] = useState(false);
    const [editing, setEditing] = useState(null);
    const [form, setForm] = useState(emptyProject);
    const [thumbnail, setThumbnail] = useState(null);
    const [saving, setSaving] = useState(false);

    const grades = ["All Grades", "Kelas 10", "Kelas 11", "Kelas 12"];
    
    const categoriesList = useMemo(() => {
        return ["All", ...dbCategories.map(c => c.name)];
    }, [dbCategories]);

    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        setLoading(true);
        try {
            const [projData, catData] = await Promise.all([
                publicApi.getProjects(),
                publicApi.getCategories(),
            ]);
            setProjects(Array.isArray(projData) ? projData : []);
            setDbCategories(Array.isArray(catData) ? catData : []);
        } catch (err) {
            push(err.message || "Gagal memuat data", { type: "error" });
        } finally {
            setLoading(false);
        }
    }

    // Filter projects based on selected criteria
    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            const projectGrade = project.student?.grade_level; // Will be "10", "11", or "12"
            const selectedGradeValue = selectedGrade.split(" ")[1]; // "10", "11", or "12" from "Kelas 10", etc.
            
            const matchGrade = selectedGrade === "All Grades" || projectGrade === selectedGradeValue;
            const matchCategory = selectedCategory === "All" || project.category?.name === selectedCategory;
            const matchSearch =
                project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (project.student?.user?.name || "").toLowerCase().includes(searchQuery.toLowerCase());

            return matchGrade && matchCategory && matchSearch;
        });
    }, [projects, selectedGrade, selectedCategory, searchQuery]);

    // CRUD Functions
    function openCreate() {
        if (!currentUser || currentUser.role !== 'student') {
            push("Hanya siswa yang dapat menambahkan proyek.", { type: "error" });
            return;
        }
        setEditing(null);
        setForm(emptyProject);
        setThumbnail(null);
        setModalOpen(true);
    }

    function openEdit(project) {
        setEditing(project);
        setForm({
            title: project.title || '',
            category_id: String(project.category_id || ''),
            description: project.description || '',
            tech_stack: Array.isArray(project.tech_stack) ? project.tech_stack.join(', ') : '',
            demo_url: project.demo_url || '',
            repo_url: project.repo_url || '',
        });
        setThumbnail(null);
        setModalOpen(true);
    }

    async function handleDelete(id) {
        if (!confirm("Hapus proyek ini?")) return;
        try {
            await studentApi.deleteProject(id);
            push("Proyek berhasil dihapus.", { type: "success" });
            loadData();
        } catch (err) {
            push(err.message || "Gagal menghapus proyek.", { type: "error" });
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setSaving(true);
        try {
            const techStack = form.tech_stack
                .split(',')
                .map((t) => t.trim())
                .filter(Boolean);

            const fields = {
                title: form.title,
                category_id: form.category_id,
                description: form.description,
                tech_stack: techStack,
                demo_url: form.demo_url || undefined,
                repo_url: form.repo_url || undefined,
            };

            if (thumbnail) fields.thumbnail_image = thumbnail;

            const fd = buildProjectFormData(fields);
            if (editing) {
                fd.append('_method', 'PUT');
                await studentApi.updateProject(editing.id, fd);
                push("Proyek berhasil diperbarui.", { type: "success" });
            } else {
                await studentApi.createProject(fd);
                push("Proyek berhasil ditambahkan.", { type: "success" });
            }
            setModalOpen(false);
            loadData();
        } catch (err) {
            push(err.message || "Gagal menyimpan proyek.", { type: "error" });
        } finally {
            setSaving(false);
        }
    }

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
                    <section className="flex flex-col items-center gap-4 min-h-[40vh] justify-center py-16 px-4 text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-[#00F5A0] text-xs font-semibold tracking-wide hover:border-emerald-500/60 hover:bg-emerald-500/15 transition-all duration-300">
                            <Star size={14} className="animate-pulse" />
                            📚 Student Talent Directory
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] max-w-4xl">
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
                        </div>

                        {currentUser?.role === 'student' && (
                            <GlassButton 
                                onClick={openCreate}
                                className="mt-8 flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00F5A0] to-[#4bf3ce] text-black font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-emerald-500/20"
                            >
                                <Plus size={20} />
                                Tambah Proyek Saya
                            </GlassButton>
                        )}
                    </section>

                    {/* Search Bar */}
                    <section className="px-4 mb-8">
                        <div className="max-w-2xl mx-auto">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Cari proyek, siswa, atau teknologi..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00F5A0]/50 focus:bg-gray-900/70 transition-all duration-200 shadow-inner"
                                />
                                <svg className="absolute right-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </section>

                    {/* Filter Section */}
                    <section className="px-4 mb-12">
                        <div className="max-w-4xl mx-auto space-y-6 bg-gray-900/30 backdrop-blur-md border border-gray-700/30 p-6 rounded-3xl">
                            {/* Grades Filter */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                                    🎓 Grade Level
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {grades.map((grade) => (
                                        <button
                                            key={grade}
                                            onClick={() => setSelectedGrade(grade)}
                                            className={`px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 border ${selectedGrade === grade
                                                ? "bg-[#00F5A0] text-black border-[#00F5A0] shadow-lg shadow-emerald-500/20 scale-105"
                                                : "bg-gray-800/40 border-gray-700/50 text-gray-400 hover:border-[#00F5A0]/40 hover:text-[#00F5A0]"
                                                }`}
                                        >
                                            {grade}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Categories Filter */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                                    📂 Category
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {categoriesList.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => setSelectedCategory(category)}
                                            className={`px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 border ${selectedCategory === category
                                                ? "bg-[#00F5A0] text-black border-[#00F5A0] shadow-lg shadow-emerald-500/20 scale-105"
                                                : "bg-gray-800/40 border-gray-700/50 text-gray-400 hover:border-[#00F5A0]/40 hover:text-[#00F5A0]"
                                                }`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Projects Grid */}
                    <section className="px-4 pb-20">
                        {loading ? (
                            <div className="flex flex-col items-center justify-center py-20 gap-4">
                                <Loader2 size={40} className="text-[#00F5A0] animate-spin" />
                                <p className="text-gray-400 font-medium">Memuat proyek terbaik...</p>
                            </div>
                        ) : filteredProjects.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {filteredProjects.map((project) => (
                                    <ProjectCard 
                                        key={project.id} 
                                        project={project} 
                                        onEdit={openEdit}
                                        onDelete={handleDelete}
                                        isOwner={currentUser?.id === project.student?.user?.id}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-gray-900/20 rounded-3xl border border-dashed border-gray-700/50">
                                <p className="text-gray-400 text-lg">Tidak ada proyek yang ditemukan.</p>
                            </div>
                        )}
                    </section>
                </main>

                {/* CRUD Modal */}
                <GlassModal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    title={editing ? 'Edit Proyek' : 'Tambah Proyek Baru'}
                >
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <GlassInput
                            label="Judul Proyek"
                            name="title"
                            value={form.title}
                            onChange={(e) => setForm({ ...form, title: e.target.value })}
                            placeholder="Contoh: E-Commerce Dashboard"
                            required
                        />

                        <GlassSelect
                            label="Kategori"
                            name="category_id"
                            value={form.category_id}
                            onChange={(e) => setForm({ ...form, category_id: e.target.value })}
                            options={dbCategories.map((c) => ({ value: String(c.id), label: c.name }))}
                            required
                        />

                        <GlassTextarea
                            label="Deskripsi"
                            name="description"
                            value={form.description}
                            onChange={(e) => setForm({ ...form, description: e.target.value })}
                            placeholder="Jelaskan tentang proyek Anda..."
                            rows={4}
                            required
                        />

                        <GlassInput
                            label="Tech Stack (Pisahkan dengan koma)"
                            name="tech_stack"
                            value={form.tech_stack}
                            onChange={(e) => setForm({ ...form, tech_stack: e.target.value })}
                            placeholder="React, Laravel, Tailwind"
                            required
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <GlassInput
                                label="Demo URL"
                                name="demo_url"
                                value={form.demo_url}
                                onChange={(e) => setForm({ ...form, demo_url: e.target.value })}
                                placeholder="https://demo.com"
                            />
                            <GlassInput
                                label="Repo URL"
                                name="repo_url"
                                value={form.repo_url}
                                onChange={(e) => setForm({ ...form, repo_url: e.target.value })}
                                placeholder="https://github.com/..."
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Thumbnail Proyek</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => setThumbnail(e.target.files[0])}
                                className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#00F5A0] file:text-black hover:file:bg-emerald-400 transition-all"
                            />
                            {editing && !thumbnail && (
                                <p className="text-xs text-gray-500 mt-2 italic">Kosongkan jika tidak ingin mengubah gambar.</p>
                            )}
                        </div>

                        <div className="flex gap-3 pt-4">
                            <GlassButton
                                type="button"
                                variant="secondary"
                                onClick={() => setModalOpen(false)}
                                className="flex-1"
                            >
                                Batal
                            </GlassButton>
                            <GlassButton
                                type="submit"
                                variant="primary"
                                disabled={saving}
                                className="flex-1 bg-gradient-to-r from-[#00F5A0] to-[#4bf3ce] text-black"
                            >
                                {saving ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <Loader2 size={18} className="animate-spin" />
                                        <span>Menyimpan...</span>
                                    </div>
                                ) : (
                                    'Simpan Proyek'
                                )}
                            </GlassButton>
                        </div>
                    </form>
                </GlassModal>

                {/* Footer simple for Showcase */}
                <footer className="relative z-10 py-10 text-center border-t border-gray-800/50">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} RPL Department - SMK Muhammadiyah 1 Genteng
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default Showcase;
