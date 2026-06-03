import { useState, useEffect } from 'react';
import { User, Link2 } from 'lucide-react';
import { studentApi, storageUrl } from '../../lib/api';
import { useToast } from '../../context/ToastContext';
import { GlassCard, GlassInput, GlassTextarea, GlassSelect, GlassButton, AlertBanner } from '../ui/GlassCard';

const emptyForm = {
  grade_level: '10',
  specialty: '',
  github_url: '',
  linkedin_url: '',
  bio: '',
};

export default function ProfileSection() {
  const [form, setForm] = useState(emptyForm);
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { push } = useToast();

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    setLoading(true);
    setError('');
    try {
      const data = await studentApi.getProfile();
      setUserName(data.name || '');
      if (data.student) {
        setForm({
          grade_level: data.student.grade_level || '10',
          specialty: data.student.specialty || '',
          github_url: data.student.github_url || '',
          linkedin_url: data.student.linkedin_url || '',
          bio: data.student.bio || '',
        });
        if (data.student.avatar) {
          setAvatarPreview(storageUrl(data.student.avatar));
        }
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleAvatar(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setAvatarFile(file);
    setAvatarPreview(URL.createObjectURL(file));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError('');
    setSuccess('');

    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));
    if (avatarFile) fd.append('avatar', avatarFile);

    try {
      await studentApi.updateProfile(fd);
      setSuccess('Profil berhasil disimpan.');
      setAvatarFile(null);
      push('Profil berhasil disimpan.', { type: 'success' });
    } catch (err) {
      setError(err.message);
      push(err.message || 'Gagal menyimpan profil.', { type: 'error' });
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <GlassCard className="p-8 text-center text-gray-400">Memuat profil...</GlassCard>
    );
  }

  return (
    <GlassCard className="p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-[#00F5A0] rounded-xl flex items-center justify-center">
          <User className="w-5 h-5 text-black" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Profil Siswa</h2>
          <p className="text-sm text-gray-400">{userName}</p>
        </div>
      </div>

      <AlertBanner type="error" message={error} />
      <AlertBanner type="success" message={success} />

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <div className="shrink-0">
            <div className="w-24 h-24 rounded-2xl border border-gray-600/40 overflow-hidden bg-[#0A0E12]/60">
              {avatarPreview ? (
                <img src={avatarPreview} alt="Avatar" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs">
                  No foto
                </div>
              )}
            </div>
            <label className="mt-2 block">
              <span className="text-xs text-[#00F5A0] cursor-pointer hover:underline">
                Upload avatar
              </span>
              <input type="file" accept="image/*" className="hidden" onChange={handleAvatar} />
            </label>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div>
              <label className="text-xs text-gray-400 mb-1 block">Kelas</label>
              <GlassSelect name="grade_level" value={form.grade_level} onChange={handleChange}>
                <option value="10">Kelas 10</option>
                <option value="11">Kelas 11</option>
                <option value="12">Kelas 12</option>
              </GlassSelect>
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1 block">Spesialisasi</label>
              <GlassInput
                name="specialty"
                value={form.specialty}
                onChange={handleChange}
                placeholder="Web Development"
                required
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-gray-400 mb-1 flex items-center gap-1">
              <Link2 className="w-3 h-3" /> GitHub URL
            </label>
            <GlassInput
              name="github_url"
              type="url"
              value={form.github_url}
              onChange={handleChange}
              placeholder="https://github.com/username"
            />
          </div>
          <div>
            <label className="text-xs text-gray-400 mb-1 flex items-center gap-1">
              <Link2 className="w-3 h-3" /> LinkedIn URL
            </label>
            <GlassInput
              name="linkedin_url"
              type="url"
              value={form.linkedin_url}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/username"
            />
          </div>
        </div>

        <div>
          <label className="text-xs text-gray-400 mb-1 block">Bio</label>
          <GlassTextarea
            name="bio"
            rows={4}
            value={form.bio}
            onChange={handleChange}
            placeholder="Ceritakan tentang dirimu..."
          />
        </div>

        <GlassButton type="submit" disabled={saving}>
          {saving ? 'Menyimpan...' : 'Simpan Profil'}
        </GlassButton>
      </form>
    </GlassCard>
  );
}
