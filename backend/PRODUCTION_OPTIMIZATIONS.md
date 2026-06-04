Production performance checklist for Laravel + Vite

- PHP / OPcache
  - Enable OPcache in `php.ini`:
    - opcache.enable=1
    - opcache.memory_consumption=128
    - opcache.max_accelerated_files=10000
  - Restart PHP-FPM after changes.

- Laravel caches
  - Run on deploy:

```bash
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan event:cache
```

- Static assets
  - Serve `dist` from `frontend/dist` via webserver or CDN.
  - Set long cache headers for assets and use fingerprinted filenames (Vite does this by default).
  - Example Nginx snippet to serve assets with Brotli/gzip and caching:

```nginx
location /assets/ {
  alias /var/www/project/frontend/dist/assets/;
  access_log off;
  gzip_static on;
  brotli_static on;
  add_header Cache-Control "public, max-age=31536000, immutable";
}
```

- Compression
  - Enable gzip and Brotli at the webserver or CDN level.

- CDN
  - Serve vendor and large static files via CDN where possible.

- Monitoring
  - Use Lighthouse CI on CI to detect regressions.

Notes
- Many Lighthouse improvements require real-device testing and CDN/server-level config. I can help generate Nginx/Apache examples or CI config if desired.
