<?php

namespace App\Support;

class MediaUrl
{
    /**
     * Build a browser-loadable URL for files on the public disk.
     * Uses a relative /storage/... path so Vite dev proxy and same-origin deploy work.
     */
    public static function fromPath(?string $path): ?string
    {
        if ($path === null || $path === '') {
            return null;
        }

        $path = str_replace('\\', '/', trim($path));

        if (str_starts_with($path, 'http://') || str_starts_with($path, 'https://')) {
            return self::normalizeExistingUrl($path);
        }

        if (str_starts_with($path, '/storage/')) {
            return $path;
        }

        if (str_starts_with($path, 'storage/')) {
            return '/' . $path;
        }

        return '/storage/' . ltrim($path, '/');
    }

    private static function normalizeExistingUrl(string $url): string
    {
        $parts = parse_url($url);
        $pathname = $parts['path'] ?? '';

        if (str_starts_with($pathname, '/storage/')) {
            return $pathname . (isset($parts['query']) ? '?' . $parts['query'] : '');
        }

        return $url;
    }
}
