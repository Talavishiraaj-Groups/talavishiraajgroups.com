'use client';

import { useEffect, useState } from 'react';

export function LocalTime({ label, tz }: { label: string; tz: string }) {
  const [t, setT] = useState('--:--');
  useEffect(() => {
    const f = () => setT(new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: tz }).format(new Date()));
    f();
    const id = setInterval(f, 30_000);
    return () => clearInterval(id);
  }, [tz]);
  return (
    <div>
      <div>{label}</div>
      <div className="mt-1 text-ink">{t}</div>
    </div>
  );
}
