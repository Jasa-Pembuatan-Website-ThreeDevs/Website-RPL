import { useState, useEffect } from 'react';
import { FolderKanban, Plus, Pencil, Trash2, ExternalLink } from 'lucide-react';
import { studentApi, publicApi, storageUrl, buildProjectFormData } from '../../lib/api';
import { useToast } from '../../context/ToastContext';
import {
  GlassCard,
  GlassInput,
  GlassTextarea,
  GlassSelect,
  GlassButton,
  GlassModal,
  AlertBanner,
} from '../ui/GlassCard';

const emptyProject = {
  title: '',
  category_id: '',
  description: '',
  tech_stack: '',
  demo_url: '',
  repo_url: '',
};

export default function ProjectsCrud() {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyProject);
  const [thumbnail, setThumbnail] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { push } = useToast();

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setLoading(true);
    setError('');
    try {
      const [projData, catData] = await Promise.all([
        studentApi.getProjects(),
        publicApi.getCategories(),
      ]);
      setProjects(Array.isArray(projData) ? projData : []);
      setCategories(Array.isArray(catData) ? catData : []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function openCreate() {
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

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError('');

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
    if (editing) fd.append('_method', 'PUT');

    try {
      if (editing) {
        await studentApi.updateProject(editing.id, fd);
        setSuccess('Proyek berhasil diperbarui.');
        push('Proyek berhasil diperbarui.', { type: 'success' });
      } else {
        await studentApi.createProject(fd);
        setSuccess('Proyek berhasil ditambahkan.');
        push('Proyek berhasil ditambahkan.', { type: 'success' });
      }
      setModalOpen(false);
      await loadData();
    } catch (err) {
      setError(err.message);
      push(err.message || 'Gagal menyimpan proyek.', { type: 'error' });
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id) {
    if (!confirm('Hapus proyek ini?')) return;
    setError('');
    try {
      await studentApi.deleteProject(id);
      setSuccess('Proyek dihapus.');
      push('Proyek dihapus.', { type: 'success' });
      await loadData();
    } catch (err) {
      setError(err.message);
      push(err.message || 'Gagal menghapus proyek.', { type: 'error' });
    }
  }

  return (
    <GlassCard className="p-6 md:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#00F5A0] to-[#00D2FF] rounded-xl flex items-center justify-center">
            <FolderKanban className="w-5 h-5 text-black" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Proyek Saya</h2>
            <p className="text-sm text-gray-400">Kelola portfolio proyek kamu</p>
          </div>
        </div>
        <GlassButton onClick={openCreate} className="flex items-center gap-2">
          <Plus className="w-4 h-4" /> Tambah Proyek
        </GlassButton>
      </div>

      <AlertBanner type="error" message={error} />
      <AlertBanner type="success" message={success} />

      {loading ? (
        <p className="text-gray-400 text-center py-8">Memuat proyek...</p>
      ) : projects.length === 0 ? (
        <div className="text-center py-12 border border-dashed border-gray-600/30 rounded-xl">
          <p className="text-gray-400 mb-4">Belum ada proyek. Lengkapi profil lalu tambah proyek pertama!</p>
          <GlassButton onClick={openCreate}>Buat Proyek Pertama</GlassButton>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group border border-gray-600/30 rounded-xl overflow-hidden bg-[#0A0E12]/40 hover:border-[#00F5A0]/30 transition-all"
            >
              <div className="aspect-video bg-[#0A0E12] relative">
                {project.thumbnail_image ? (
                  <img
                    src={storageUrl(project.thumbnail_image)}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-600 text-sm">
                    Tanpa thumbnail
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-white">{project.title}</h3>
                    <p className="text-xs text-[#00F5A0] mt-0.5">
                      {project.category?.name || 'Tanpa kategori'}
                    </p>
                  </div>
                  <div className="flex gap-1 shrink-0">
                    <button
                      type="button"
                      onClick={() => openEdit(project)}
                      className="p-2 rounded-lg text-[#00D2FF] hover:bg-[#00D2FF]/10"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(project.id)}
                      className="p-2 rounded-lg text-red-400 hover:bg-red-500/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-2 line-clamp-2">{project.description}</p>
                {Array.isArray(project.tech_stack) && project.tech_stack.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tech_stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] rounded-full bg-[#00F5A0]/10 text-[#00F5A0] border border-[#00F5A0]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex gap-3 mt-3">
                  {project.demo_url && (
                    <a
                      href={project.demo_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-[#00D2FF] flex items-center gap-1 hover:underline"
                    >
                      <ExternalLink className="w-3 h-3" /> Demo
                    </a>
                  )}
                  {project.repo_url && (
                    <a
                      href={project.repo_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-gray-400 flex items-center gap-1 hover:underline"
                    >
                      <ExternalLink className="w-3 h-3" /> Repo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <GlassModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editing ? 'Edit Proyek' : 'Tambah Proyek'}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs text-gray-400 mb-1 block">Judul</label>
            <GlassInput name="title" value={form.title} onChange={handleChange} required />
          </div>
          <div>
            <label className="text-xs text-gray-400 mb-1 block">Kategori</label>
            <GlassSelect
              name="category_id"
              value={form.category_id}
              onChange={handleChange}
              required
            >
              <option value="">Pilih kategori</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </GlassSelect>
          </div>
          <div>
            <label className="text-xs text-gray-400 mb-1 block">Deskripsi</label>
            <GlassTextarea
              name="description"
              rows={3}
              value={form.description}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="text-xs text-gray-400 mb-1 block">
              Tech Stack (pisahkan dengan koma)
            </label>
            <GlassInput
              name="tech_stack"
              value={form.tech_stack}
              onChange={handleChange}
              placeholder="React, Laravel, MySQL"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-gray-400 mb-1 block">Demo URL</label>
              <GlassInput name="demo_url" type="url" value={form.demo_url} onChange={handleChange} />
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1 block">Repo URL</label>
              <GlassInput name="repo_url" type="url" value={form.repo_url} onChange={handleChange} />
            </div>
          </div>
          <div>
            <label className="text-xs text-gray-400 mb-1 block">Thumbnail</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setThumbnail(e.target.files?.[0] || null)}
              className="text-sm text-gray-400 w-full"
            />
          </div>
          <div className="flex gap-3 pt-2">
            <GlassButton type="submit" disabled={saving} className="flex-1">
              {saving ? 'Menyimpan...' : editing ? 'Perbarui' : 'Simpan'}
            </GlassButton>
            <GlassButton type="button" variant="secondary" onClick={() => setModalOpen(false)}>
              Batal
            </GlassButton>
          </div>
        </form>
      </GlassModal>
    </GlassCard>
  );
}
