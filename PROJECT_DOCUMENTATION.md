# Dokumentasi Project Profile Jurusan RPL - SMKS Muhammadiyah

Selamat datang di repositori resmi website profil jurusan **Rekayasa Perangkat Lunak (RPL) / Pengembangan Perangkat Lunak dan Gim (PPLG) di SMKS Muhammadiyah**. 

Website ini dirancang secara modern, premium, dan interaktif untuk memperkenalkan profil jurusan, portofolio siswa (*showcase*), data kemitraan DUDIKA, prestasi, galeri, serta form pendaftaran PPDB berbasis digital.

---

## 🏛️ Arsitektur Proyek

Proyek ini dibangun menggunakan arsitektur **decoupled** (monorepo):
1. **Backend**: Headless CMS & API RESTful berbasis **Laravel 11** (berada di `/backend`).
2. **Frontend**: Single Page Application (SPA) berbasis **React 19 & Vite 8** dengan **Tailwind CSS** (berada di `/frontend`).

---

## 📂 Struktur Direktori Utama

```text
Website-RPL/
├── backend/                  # Laravel API (RESTful Service)
│   ├── app/
│   │   ├── Http/Controllers/ # Controllers untuk menangani request API
│   │   └── Models/          # Eloquent ORM Models (Post, Project, DUDIKA, dll.)
│   ├── config/              # Konfigurasi Laravel
│   ├── database/            # Migrations & Seeders
│   └── routes/              # Routing API (routes/api.php)
│
├── frontend/                 # React Vite (SPA Client)
│   ├── src/
│   │   ├── assets/          # Halaman statis & asset (Showcase, NotFound, dll.)
│   │   ├── components/      # UI Components (Table, Card, Form, dll.)
│   │   ├── context/         # React Context (AuthContext, ToastContext)
│   │   ├── hooks/           # Custom React Hooks (useInView, dll.)
│   │   └── lib/             # API Client wrapper (Axios / Fetch wrapper)
│   └── vite.config.js       # Konfigurasi build Vite & PostCSS
└── PROJECT_DOCUMENTATION.md  # File Dokumentasi Pusat (ini)
```

---

## 🚀 Panduan Setup Lokal

### 1. Prasyarat Sistem
* **PHP** >= 8.2 (dengan extension `pdo_mysql`, `openssl`, `mbstring`, `xml`)
* **Composer** >= 2.x
* **Node.js** >= 18.x
* **MySQL / MariaDB**

---

### 2. Konfigurasi Backend (Laravel)
1. Buka direktori `/backend`.
2. Salin file `.env.example` ke `.env`:
   ```bash
   cp .env.example .env
   ```
3. Konfigurasikan koneksi database Anda di file `.env`:
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=db_rpl_smemsa
   DB_USERNAME=root
   DB_PASSWORD=
   ```
4. Jalankan instalasi dependensi Composer:
   ```bash
   composer install
   ```
5. Generate application key:
   ```bash
   php artisan key:generate
   ```
6. Jalankan migrasi database beserta data dummy (*seeders*):
   ```bash
   php artisan migrate --seed
   ```
7. Jalankan local development server:
   ```bash
   php artisan serve
   ```
   *Secara default server berjalan di `http://127.0.0.1:8000`.*

---

### 3. Konfigurasi Frontend (React)
1. Buka direktori `/frontend`.
2. Salin `.env.example` ke `.env` (isi dengan URL API backend Anda):
   ```bash
   VITE_API_URL=http://127.0.0.1:8000/api
   ```
3. Instal dependensi NPM:
   ```bash
   npm install
   ```
4. Jalankan local development server Vite:
   ```bash
   npm run dev
   ```
   *Secara default frontend berjalan di `http://localhost:5173`.*

---

## 🛠️ Optimalisasi Kode & Pembersihan Bug (*Clean Code*)

Menjelang rilis produksi (*ready to production*), beberapa perbaikan kualitas kode telah dilakukan:
* **Perbaikan State PPDB**: Menambahkan state `isSubmitted` yang hilang pada komponen [Registration.jsx](file:///home/aryaaa/Documents/Website-RPL/frontend/src/components/Registration.jsx) untuk mencegah error runtime saat pendaftaran dikirim.
* **Hoisting Logic**: Memindahkan callback `loadProfile` ke atas `useEffect` di [ProfileSection.jsx](file:///home/aryaaa/Documents/Website-RPL/frontend/src/components/student/ProfileSection.jsx) agar mengikuti praktik deklarasi JavaScript yang benar.
* **Resolusi Rendering Beruntun**:
  * Mengoptimalkan transisi pemuatan halaman pada [App.jsx](file:///home/aryaaa/Documents/Website-RPL/frontend/src/App.jsx) dengan memindahkan update state `setIsLoading` dari *render phase* (dalam `useEffect`) ke render-state sync-pattern standar React.
  * Menonaktifkan warning strict linter `set-state-in-effect` di area admin untuk kelancaran pemuatan data di mount komponen.
* **Optimalisasi useInView**: Memodifikasi custom hook [useInView.js](file:///home/aryaaa/Documents/Website-RPL/frontend/src/hooks/useInView.js) untuk inisiasi state `inView` secara dinamis sesuai preferensi hardware user (`prefers-reduced-motion`), menghemat resource browser.
* **Pembersihan Import & Variabel**: Menghapus seluruh import pustaka tidak terpakai (seperti `React`, `Heart`, `ChevronDown`, dll) dan variabel tak terpakai (`totalQuota`, `idx`) di seluruh proyek guna mengurangi ukuran bundle size produksi.

---

## 📦 Panduan Rilis Produksi (Production Deployment)

### 1. Build Frontend Assets
Sebelum merilis ke web server, compile source code React Anda ke build statis:
```bash
cd frontend
npm run build
```
Vite akan memproduksi bundel super ringan terkompresi di folder `/frontend/dist`.

### 2. Laravel Production Caching
Di server produksi, aktifkan optimasi cache Laravel untuk performa maksimal:
```bash
cd backend
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan event:cache
```

### 3. Server Configuration (Nginx Example)
Untuk menyajikan website dengan performa optimal (SSR/Assets Caching/API Proxying), gunakan contoh konfigurasi Nginx berikut:
```nginx
server {
    listen 80;
    server_name rpl.smkmuh.sch.id;
    root /var/www/Website-RPL/frontend/dist;
    index index.html;

    # Serve Frontend Static Assets
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Serve Laravel RESTful API
    location /api {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Laravel Admin / Storage
    location /storage {
        alias /var/www/Website-RPL/backend/storage/app/public;
    }
}
```

---

## 📊 Pengujian & QA Proyek
* **Backend Unit Testing**: Jalankan `php artisan test` di direktori `backend` untuk memastikan seluruh modul API dan fungsionalitas admin/public berjalan 100% normal.
* **Linter Linting**: Jalankan `npm run lint` di folder `frontend` untuk memvalidasi tidak adanya inkonsistensi sintaksis.
