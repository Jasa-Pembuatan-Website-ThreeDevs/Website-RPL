import { storageUrl } from '../lib/api';

const ACCENT_PALETTE = [
  '#00F5A0',
  '#00D2FF',
  '#FFBD2E',
  '#A78BFA',
  '#F472B6',
  '#34D399',
  '#60A5FA',
  '#FB923C',
];

export function hashAccentColor(name = '') {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return ACCENT_PALETTE[Math.abs(hash) % ACCENT_PALETTE.length];
}

export function normalizePartner(partner) {
  const name = partner.company_name || partner.name || 'Mitra';
  const logo =
    partner.logo_url ||
    (partner.logo_image?.startsWith?.('http')
      ? partner.logo_image
      : storageUrl(partner.logo_image));

  return {
    id: partner.id ?? name,
    name,
    description: partner.description || 'Mitra industri RPL',
    quota: partner.internship_quota ?? 0,
    website: partner.website_url || null,
    logo,
    color: hashAccentColor(name),
    icon: name.charAt(0).toUpperCase(),
  };
}

export function ensureMarqueeItems(items) {
  if (!items.length) return [];
  if (items.length === 1) return [...items, ...items];
  return items;
}
