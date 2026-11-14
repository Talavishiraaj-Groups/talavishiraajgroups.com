import type { Block } from '@/content';
import { Fragment } from 'react';

/** Renders scraped content blocks; consecutive list items become one list, figures become bar charts. */
export function Blocks({ blocks }: { blocks: Block[] }) {
  const out: React.ReactNode[] = [];
  let list: string[] = [];
  const flush = (k: number) => {
    if (list.length) {
      out.push(
        <ul key={'ul' + k}>
          {list.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>,
      );
      list = [];
    }
  };
  blocks.forEach((b, k) => {
    if (b.t === 'li') {
      list.push(b.x);
      return;
    }
    flush(k);
    if (b.t === 'figure') {
      const nums = b.rows.map((r) => Number((r.value.match(/(\d+)(?!.*\d)/) || [0, 0])[1]));
      const max = Math.max(60, ...nums);
      out.push(
        <figure key={k} className="not-prose my-10 rounded-3xl border border-line bg-white p-7">
          <figcaption>
            <div className="text-lg font-medium tracking-tight">{b.title}</div>
            <div className="mt-1 text-sm text-muted">{b.caption}</div>
          </figcaption>
          <div className="mt-8 space-y-5">
            {b.rows.map((r, i) => {
              const m = r.value.match(/(\d+)\D+(\d+)/);
              const lo = m ? +m[1] : nums[i];
              const hi = m ? +m[2] : nums[i];
              return (
                <div key={i}>
                  <div className="mb-2 flex justify-between gap-4 text-[15px]">
                    <span>{r.label}</span>
                    <span className="text-sm">{r.value}</span>
                  </div>
                  <div className="relative h-8 overflow-hidden rounded-md bg-ink/[0.05]">
                    <div className="absolute inset-y-0 left-0 rounded-md bg-signal/30" style={{ width: `${(hi / max) * 100}%` }} />
                    <div className="absolute inset-y-0 left-0 rounded-md bg-signal" style={{ width: `${(lo / max) * 100}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
          {b.source && <div className="mt-6 text-[11px] text-muted">Source: {b.source}</div>}
        </figure>,
      );
      return;
    }
    const Tag = (b.t === 'h1' ? 'h2' : b.t) as 'h2' | 'h3' | 'h4' | 'p';
    out.push(<Tag key={k}>{b.x}</Tag>);
  });
  flush(blocks.length);
  return <Fragment>{out}</Fragment>;
}
