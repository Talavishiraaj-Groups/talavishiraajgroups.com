import { ImageResponse } from 'next/og';
import { formatDate, getPost, getPosts } from '@/lib/blog';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Talavishiraaj Groups blog';

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPost((await params).slug);
  const title = p?.title ?? 'Talavishiraaj Groups';
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#F4F3EE', padding: 72, color: '#0A0B0D', fontFamily: 'sans-serif' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 28 }}>
          <div style={{ width: 18, height: 18, background: '#2B55FF', borderRadius: 4 }} />
          <span style={{ fontWeight: 600 }}>Talavishiraaj Groups</span>
          <span style={{ color: '#6b6b6b' }}>Blog</span>
        </div>
        <div style={{ fontSize: title.length > 70 ? 56 : 68, lineHeight: 1.08, letterSpacing: -2, fontWeight: 600, maxWidth: 1000 }}>{title}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24, color: '#6b6b6b' }}>
          <span>{p ? formatDate(p.date) : ''}</span>
          <span>talavishiraajgroups.com</span>
        </div>
      </div>
    ),
    size,
  );
}
