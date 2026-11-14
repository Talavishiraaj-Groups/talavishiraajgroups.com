import { ImageResponse } from 'next/og';
import { coverDataUri, coverSpec } from '@/lib/cover';
import { formatDate, getPost, getPosts } from '@/lib/blog';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Talavishiraaj Groups blog';

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

/** Share image: the post's own generative cover with the title set on a paper panel. */
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPost((await params).slug);
  if (!p) return new ImageResponse(<div style={{ width: '100%', height: '100%', background: '#F4F3EE' }} />, size);
  const { palette } = coverSpec(p);
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', background: palette.bg }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={coverDataUri(p)} width={1200} height={630} alt="" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'absolute', left: 48, top: 48, bottom: 48, width: 600, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#F4F3EE', borderRadius: 28, padding: 48, color: '#0A0B0D' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 24 }}>
            <div style={{ width: 16, height: 16, background: palette.bg === '#F4F3EE' || palette.bg === '#EAE8E1' ? '#2B55FF' : palette.bg, borderRadius: 4 }} />
            <span style={{ fontWeight: 600 }}>Talavishiraaj Groups</span>
          </div>
          <div style={{ fontSize: p.title.length > 60 ? 46 : 54, lineHeight: 1.08, letterSpacing: -1.5, fontWeight: 600 }}>{p.title}</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 20, color: '#5C6068' }}>
            <span>{formatDate(p.date)}</span>
            <span>{p.tags[0] ?? 'Blog'}</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
