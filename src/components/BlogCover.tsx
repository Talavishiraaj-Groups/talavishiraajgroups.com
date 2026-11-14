import clsx from 'clsx';
import { coverSvg, type CoverInput } from '@/lib/cover';

/** Server-rendered generative cover. Animated with CSS only, so it costs no JavaScript. */
export function BlogCover({ post, className, label = true }: { post: CoverInput; className?: string; label?: boolean }) {
  return <div aria-hidden className={clsx('cover-frame aspect-[1200/630] overflow-hidden', className)} dangerouslySetInnerHTML={{ __html: coverSvg(post, { animated: true, label }) }} />;
}
