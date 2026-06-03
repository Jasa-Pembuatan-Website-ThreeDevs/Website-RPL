const API_URL = import.meta.env.VITE_API_URL || '/api';
const STORAGE_URL = import.meta.env.VITE_STORAGE_URL ?? '';

export function storageUrl(path) {
  if (!path) return null;
  const normalized = String(path).trim().replace(/\\/g, '/');
  if (!normalized) return null;

  if (normalized.startsWith('http://') || normalized.startsWith('https://')) {
    return resolveMediaUrl(normalized);
  }

  if (normalized.startsWith('/storage/')) {
    return normalized;
  }

  const base =
    STORAGE_URL ||
    (typeof window !== 'undefined' ? window.location.origin : 'http://127.0.0.1:8000');

  const cleanPath = normalized.replace(/^\/?storage\//, '');
  return `${base.replace(/\/$/, '')}/storage/${cleanPath}`;
}

/**
 * Normalize API media URLs so images load via Vite /storage proxy in dev.
 */
export function resolveMediaUrl(urlOrPath) {
  if (urlOrPath === null || urlOrPath === undefined) return null;

  const value = String(urlOrPath).trim();
  if (!value) return null;

  if (value.startsWith('//')) {
    return `${typeof window !== 'undefined' ? window.location.protocol : 'https:'}${value}`;
  }

  if (value.startsWith('/storage/')) {
    return value;
  }

  if (value.startsWith('storage/')) {
    return `/${value}`;
  }

  try {
    const parsed = new URL(value, typeof window !== 'undefined' ? window.location.origin : 'http://127.0.0.1:8000');
    if (parsed.pathname.startsWith('/storage/')) {
      return `${parsed.pathname}${parsed.search}`;
    }
    if (value.startsWith('http://') || value.startsWith('https://')) {
      return value;
    }
  } catch {
    /* relative path below */
  }

  return storageUrl(value);
}

function getToken() {
  return localStorage.getItem('auth_token');
}

export function setToken(token) {
  if (token) localStorage.setItem('auth_token', token);
  else localStorage.removeItem('auth_token');
}

export function setUser(user) {
  if (user) localStorage.setItem('auth_user', JSON.stringify(user));
  else localStorage.removeItem('auth_user');
}

export function getStoredUser() {
  try {
    const raw = localStorage.getItem('auth_user');
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function getErrorMessage(json) {
  const errors = json.errors;
  if (errors && typeof errors === 'object') {
    const messages = Object.values(errors).flatMap((v) =>
      Array.isArray(v) ? v : [String(v)]
    );
    if (messages.length > 0) {
      return messages.join(' ');
    }
  }
  if (json.message && json.message !== 'Validation error') {
    return json.message;
  }
  return json.message || 'Terjadi kesalahan. Coba lagi.';
}

async function parseResponse(res) {
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(getErrorMessage(json));
  }
  if (json.status === 'error') {
    throw new Error(getErrorMessage(json));
  }
  return json;
}

function extractData(json) {
  if (json.data !== undefined) return json.data;
  return json;
}

export async function apiRequest(path, options = {}) {
  const { auth = true, body, headers = {}, method = 'GET', isFormData = false } = options;

  const config = {
    method,
    headers: {
      Accept: 'application/json',
      ...headers,
    },
  };

  if (auth) {
    const token = getToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }

  if (body !== undefined) {
    if (isFormData) {
      config.body = body;
    } else {
      config.headers['Content-Type'] = 'application/json';
      config.body = JSON.stringify(body);
    }
  }

  const res = await fetch(`${API_URL}${path}`, config);
  const json = await parseResponse(res);
  return extractData(json);
}

// ——— Auth ———
export const authApi = {
  register: (data) => apiRequest('/register', { method: 'POST', auth: false, body: data }),
  login: (data) => apiRequest('/login', { method: 'POST', auth: false, body: data }),
  logout: () => apiRequest('/logout', { method: 'POST' }),
};

// ——— Student ———
export const studentApi = {
  getProfile: () => apiRequest('/student/profile'),
  updateProfile: (formData) =>
    apiRequest('/student/profile', { method: 'POST', body: formData, isFormData: true }),
  getProjects: () => apiRequest('/student/projects'),
  createProject: (formData) =>
    apiRequest('/student/projects', { method: 'POST', body: formData, isFormData: true }),
  updateProject: (id, formData) =>
    apiRequest(`/student/projects/${id}`, {
      method: 'POST',
      body: formData,
      isFormData: true,
    }),
  deleteProject: (id) => apiRequest(`/student/projects/${id}`, { method: 'DELETE' }),
};

// ——— Public ———
export const publicApi = {
  getCategories: () => apiRequest('/public/categories', { auth: false }),
  getProjects: (params = {}) => {
    const qs = new URLSearchParams(params).toString();
    return apiRequest(`/public/projects${qs ? `?${qs}` : ''}`, { auth: false });
  },
  getPartners: () => apiRequest('/partners', { auth: false }),
  getTeachers: () => apiRequest('/teachers', { auth: false }),
  getGalleries: () => apiRequest('/galleries', { auth: false }),
  getPosts: (params = {}) => {
    const qs = new URLSearchParams(params).toString();
    return apiRequest(`/posts${qs ? `?${qs}` : ''}`, { auth: false });
  },
  getHallOfFame: (params = {}) => {
    const qs = new URLSearchParams(params).toString();
    return apiRequest(`/hall-of-fame${qs ? `?${qs}` : ''}`, { auth: false });
  },
};

// ——— CMS (protected) ———
export const cmsApi = {
  getPosts: () => apiRequest('/posts', { auth: false }),
  createPost: (formData) =>
    apiRequest('/posts', { method: 'POST', body: formData, isFormData: true }),
  updatePost: (id, formData) => {
    if (!formData.has('_method')) formData.append('_method', 'PUT');
    return apiRequest(`/posts/${id}`, { method: 'POST', body: formData, isFormData: true });
  },
  deletePost: (id) => apiRequest(`/posts/${id}`, { method: 'DELETE' }),

  getTeachers: () => apiRequest('/teachers', { auth: false }),
  createTeacher: (formData) =>
    apiRequest('/teachers', { method: 'POST', body: formData, isFormData: true }),
  updateTeacher: (id, formData) => {
    if (!formData.has('_method')) formData.append('_method', 'PUT');
    return apiRequest(`/teachers/${id}`, { method: 'POST', body: formData, isFormData: true });
  },
  deleteTeacher: (id) => apiRequest(`/teachers/${id}`, { method: 'DELETE' }),

  getGalleries: () => apiRequest('/galleries', { auth: false }),
  createGallery: (formData) =>
    apiRequest('/galleries', { method: 'POST', body: formData, isFormData: true }),
  updateGallery: (id, formData) => {
    if (!formData.has('_method')) formData.append('_method', 'PUT');
    return apiRequest(`/galleries/${id}`, { method: 'POST', body: formData, isFormData: true });
  },
  deleteGallery: (id) => apiRequest(`/galleries/${id}`, { method: 'DELETE' }),

  getPartners: () => apiRequest('/partners', { auth: false }),
  createPartner: (body) => apiRequest('/partners', { method: 'POST', body }),
  updatePartner: (id, body) => apiRequest(`/partners/${id}`, { method: 'PUT', body }),
  deletePartner: (id) => apiRequest(`/partners/${id}`, { method: 'DELETE' }),

  getHallOfFame: () => apiRequest('/hall-of-fame', { auth: false }),
  createHallOfFame: (formData) =>
    apiRequest('/hall-of-fame', { method: 'POST', body: formData, isFormData: true }),
  updateHallOfFame: (id, formData) => {
    if (!formData.has('_method')) formData.append('_method', 'PUT');
    return apiRequest(`/hall-of-fame/${id}`, { method: 'POST', body: formData, isFormData: true });
  },
  deleteHallOfFame: (id) => apiRequest(`/hall-of-fame/${id}`, { method: 'DELETE' }),

  getMessages: () => apiRequest('/messages'),
  getMessage: (id) => apiRequest(`/messages/${id}`),
  deleteMessage: (id) => apiRequest(`/messages/${id}`, { method: 'DELETE' }),
};

export function buildProjectFormData(fields, fileField = 'thumbnail_image') {
  const fd = new FormData();
  Object.entries(fields).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '') return;
    if (key === 'tech_stack' && Array.isArray(value)) {
      value.forEach((t) => fd.append('tech_stack[]', t));
    } else if (key === fileField && value instanceof File) {
      fd.append(fileField, value);
    } else {
      fd.append(key, value);
    }
  });
  return fd;
}
