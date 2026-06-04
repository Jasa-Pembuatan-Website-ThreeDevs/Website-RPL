import { useState, useEffect, useCallback } from 'react';
import { Plus, Pencil, Trash2, Eye } from 'lucide-react';
import { cmsApi, resolveMediaUrl } from '../../lib/api';
import {
  GlassCard,
  GlassInput,
  GlassTextarea,
  GlassButton,
  GlassModal,
  AlertBanner,
} from '../ui/GlassCard';

function CrudTable({ columns, rows, onEdit, onDelete, onView }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-600/30">
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase"
              >
                {col.label}
              </th>
            ))}
            <th className="px-4 py-3 text-right text-xs font-semibold text-gray-400 uppercase">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={columns.length + 1} className="px-4 py-8 text-center text-gray-500">
                Belum ada data
              </td>
            </tr>
          ) : (
            rows.map((row) => (
              <tr key={row.id} className="border-b border-gray-600/20 hover:bg-white/5">
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-3 text-sm text-gray-300">
                    {col.render ? col.render(row) : row[col.key]}
                  </td>
                ))}
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    {onView && (
                      <button
                        type="button"
                        onClick={() => onView(row)}
                        className="p-2 rounded-lg text-[#00D2FF] hover:bg-[#00D2FF]/10"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    )}
                    {onEdit && (
                      <button
                        type="button"
                        onClick={() => onEdit(row)}
                        className="p-2 rounded-lg text-[#00F5A0] hover:bg-[#00F5A0]/10"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                    )}
                    {onDelete && (
                      <button
                        type="button"
                        onClick={() => onDelete(row)}
                        className="p-2 rounded-lg text-red-400 hover:bg-red-500/10"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

// ——— Posts ———
export function PostsManager() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: '', content: '', is_published: true });
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await cmsApi.getPosts();
      const list = data?.data || data || [];
      setItems(Array.isArray(list) ? list : []);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  function openForm(item = null) {
    setEditing(item);
    setForm(
      item
        ? { title: item.title, content: item.content, is_published: item.is_published }
        : { title: '', content: '', is_published: true }
    );
    setImage(null);
    setModal(true);
  }

  async function save(e) {
    e.preventDefault();
    const fd = new FormData();
    fd.append('title', form.title);
    fd.append('content', form.content);
    fd.append('is_published', form.is_published ? '1' : '0');
    if (image) fd.append('image', image);
    if (editing) fd.append('_method', 'PUT');

    try {
      if (editing) await cmsApi.updatePost(editing.id, fd);
      else await cmsApi.createPost(fd);
      setSuccess(editing ? 'Berita diperbarui' : 'Berita ditambahkan');
      setModal(false);
      load();
    } catch (err) {
      setError(err.message);
    }
  }

  async function remove(item) {
    if (!confirm('Hapus berita ini?')) return;
    try {
      await cmsApi.deletePost(item.id);
      setSuccess('Berita dihapus');
      load();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <ManagerShell
      title="Berita & Prestasi"
      loading={loading}
      error={error}
      success={success}
      onAdd={() => openForm()}
    >
      <CrudTable
        columns={[
          { key: 'title', label: 'Judul' },
          {
            key: 'is_published',
            label: 'Status',
            render: (r) => (r.is_published ? 'Published' : 'Draft'),
          },
        ]}
        rows={items}
        onEdit={openForm}
        onDelete={remove}
      />
      <GlassModal open={modal} onClose={() => setModal(false)} title={editing ? 'Edit Berita' : 'Tambah Berita'}>
        <form onSubmit={save} className="space-y-4">
          <GlassInput
            placeholder="Judul"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
          <GlassTextarea
            rows={5}
            placeholder="Konten"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            required
          />
          <label className="flex items-center gap-2 text-sm text-gray-400">
            <input
              type="checkbox"
              checked={form.is_published}
              onChange={(e) => setForm({ ...form, is_published: e.target.checked })}
            />
            Publish
          </label>
          <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0])} className="text-sm text-gray-400" />
          <GlassButton type="submit" className="w-full">
            Simpan
          </GlassButton>
        </form>
      </GlassModal>
    </ManagerShell>
  );
}

// ——— Teachers ———
export function TeachersManager() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: '', position: '' });
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await cmsApi.getTeachers();
      setItems(Array.isArray(data) ? data : []);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  function openForm(item = null) {
    setEditing(item);
    setForm(item ? { name: item.name, position: item.position } : { name: '', position: '' });
    setPhoto(null);
    setModal(true);
  }

  async function save(e) {
    e.preventDefault();
    const fd = new FormData();
    fd.append('name', form.name);
    fd.append('position', form.position);
    if (photo) fd.append('photo', photo);
    if (editing) fd.append('_method', 'PUT');

    try {
      if (editing) await cmsApi.updateTeacher(editing.id, fd);
      else await cmsApi.createTeacher(fd);
      setSuccess('Data guru disimpan');
      setModal(false);
      load();
    } catch (err) {
      setError(err.message);
    }
  }

  async function remove(item) {
    if (!confirm('Hapus guru ini?')) return;
    try {
      await cmsApi.deleteTeacher(item.id);
      setSuccess('Guru dihapus');
      load();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <ManagerShell title="Profil Guru" loading={loading} error={error} success={success} onAdd={() => openForm()}>
      <CrudTable
        columns={[
          { key: 'name', label: 'Nama' },
          { key: 'position', label: 'Jabatan' },
        ]}
        rows={items}
        onEdit={openForm}
        onDelete={remove}
      />
      <GlassModal open={modal} onClose={() => setModal(false)} title={editing ? 'Edit Guru' : 'Tambah Guru'}>
        <form onSubmit={save} className="space-y-4">
          <GlassInput value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Nama" required />
          <GlassInput value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} placeholder="Jabatan" required />
          <input type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files?.[0])} className="text-sm text-gray-400" />
          <GlassButton type="submit" className="w-full">
            Simpan
          </GlassButton>
        </form>
      </GlassModal>
    </ManagerShell>
  );
}

// ——— Gallery ———
export function GalleryManager() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: '' });
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await cmsApi.getGalleries();
      setItems(Array.isArray(data) ? data : []);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  function openForm(item = null) {
    setEditing(item);
    setForm(item ? { title: item.title } : { title: '' });
    setImage(null);
    setModal(true);
  }

  async function save(e) {
    e.preventDefault();
    const fd = new FormData();
    fd.append('title', form.title);
    if (image) fd.append('image', image);
    if (editing) fd.append('_method', 'PUT');

    try {
      if (editing) await cmsApi.updateGallery(editing.id, fd);
      else await cmsApi.createGallery(fd);
      setSuccess('Galeri disimpan');
      setModal(false);
      load();
    } catch (err) {
      setError(err.message);
    }
  }

  async function remove(item) {
    if (!confirm('Hapus item galeri?')) return;
    try {
      await cmsApi.deleteGallery(item.id);
      setSuccess('Item dihapus');
      load();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <ManagerShell title="Galeri" loading={loading} error={error} success={success} onAdd={() => openForm()}>
      <CrudTable
        columns={[
          { key: 'title', label: 'Judul' },
          {
            key: 'image_url',
            label: 'Preview',
            render: (r) =>
              resolveMediaUrl(r.image_url) ? (
                <img src={resolveMediaUrl(r.image_url)} alt="" className="w-12 h-12 rounded object-cover" loading="lazy" decoding="async" />
              ) : (
                '-'
              ),
          },
        ]}
        rows={items}
        onEdit={openForm}
        onDelete={remove}
      />
      <GlassModal open={modal} onClose={() => setModal(false)} title={editing ? 'Edit Galeri' : 'Tambah Galeri'}>
        <form onSubmit={save} className="space-y-4">
          <GlassInput value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Judul" required />
          <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0])} className="text-sm text-gray-400" required={!editing} />
          <GlassButton type="submit" className="w-full">
            Simpan
          </GlassButton>
        </form>
      </GlassModal>
    </ManagerShell>
  );
}

// ——— Partners ———
export function PartnersManager() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    company_name: '',
    logo_image: '',
    description: '',
    internship_quota: '',
    website_url: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await cmsApi.getPartners();
      setItems(Array.isArray(data) ? data : []);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  function openForm(item = null) {
    setEditing(item);
    setForm(
      item
        ? {
            company_name: item.company_name,
            logo_image: item.logo_image || '',
            description: item.description || '',
            internship_quota: item.internship_quota || '',
            website_url: item.website_url || '',
          }
        : {
            company_name: '',
            logo_image: '',
            description: '',
            internship_quota: '',
            website_url: '',
          }
    );
    setModal(true);
  }

  async function save(e) {
    e.preventDefault();
    try {
      if (editing) await cmsApi.updatePartner(editing.id, form);
      else await cmsApi.createPartner(form);
      setSuccess('Mitra disimpan');
      setModal(false);
      load();
    } catch (err) {
      setError(err.message);
    }
  }

  async function remove(item) {
    if (!confirm('Hapus mitra ini?')) return;
    try {
      await cmsApi.deletePartner(item.id);
      setSuccess('Mitra dihapus');
      load();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <ManagerShell title="Mitra DUDIKA" loading={loading} error={error} success={success} onAdd={() => openForm()}>
      <CrudTable
        columns={[
          { key: 'company_name', label: 'Perusahaan' },
          { key: 'internship_quota', label: 'Kuota' },
        ]}
        rows={items}
        onEdit={openForm}
        onDelete={remove}
      />
      <GlassModal open={modal} onClose={() => setModal(false)} title={editing ? 'Edit Mitra' : 'Tambah Mitra'}>
        <form onSubmit={save} className="space-y-3">
          {['company_name', 'logo_image', 'description', 'internship_quota', 'website_url'].map((field) => (
            <GlassInput
              key={field}
              placeholder={field.replace('_', ' ')}
              value={form[field]}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              required={field === 'company_name'}
            />
          ))}
          <GlassButton type="submit" className="w-full">
            Simpan
          </GlassButton>
        </form>
      </GlassModal>
    </ManagerShell>
  );
}

// ——— Messages ———
export function MessagesManager() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await cmsApi.getMessages();
      setItems(Array.isArray(data) ? data : []);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function viewMessage(msg) {
    try {
      const data = await cmsApi.getMessage(msg.id);
      setDetail(data);
      load();
    } catch (err) {
      setError(err.message);
    }
  }

  async function remove(item) {
    if (!confirm('Hapus pesan ini?')) return;
    try {
      await cmsApi.deleteMessage(item.id);
      setSuccess('Pesan dihapus');
      setDetail(null);
      load();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <ManagerShell title="Pesan Masuk" loading={loading} error={error} success={success}>
      <CrudTable
        columns={[
          { key: 'sender_name', label: 'Nama' },
          { key: 'subject', label: 'Subjek' },
          {
            key: 'is_read',
            label: 'Status',
            render: (r) => (r.is_read ? 'Dibaca' : 'Baru'),
          },
        ]}
        rows={items}
        onView={viewMessage}
        onDelete={remove}
      />
      {detail && (
        <GlassCard className="mt-4 p-4">
          <p className="text-white font-bold">{detail.sender_name}</p>
          <p className="text-sm text-gray-400">{detail.email}</p>
          <p className="text-sm text-[#00F5A0] mt-2">{detail.subject}</p>
          <p className="text-gray-300 mt-2 whitespace-pre-wrap">{detail.message}</p>
        </GlassCard>
      )}
    </ManagerShell>
  );
}

function ManagerShell({ title, loading, error, success, onAdd, children }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        {onAdd && (
          <GlassButton onClick={onAdd} className="flex items-center gap-2">
            <Plus className="w-4 h-4" /> Tambah
          </GlassButton>
        )}
      </div>
      <AlertBanner type="error" message={error} />
      <AlertBanner type="success" message={success} />
      <GlassCard className="overflow-hidden">
        {loading ? (
          <p className="p-8 text-center text-gray-400">Memuat...</p>
        ) : (
          children
        )}
      </GlassCard>
    </div>
  );
}

export function AdminOverview({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => (
        <GlassCard key={stat.title} className="p-6 hover:border-[#00F5A0]/30 transition-all">
          <p className="text-3xl font-bold text-[#00F5A0]">{stat.value}</p>
          <p className="text-gray-400 text-sm mt-1">{stat.title}</p>
        </GlassCard>
      ))}
    </div>
  );
}
