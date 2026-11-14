import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F4F3EE',
        paper2: '#EAE8E1',
        ink: '#0A0B0D',
        ink2: '#14161A',
        ink3: '#1E2126',
        muted: '#5C6068',
        line: 'rgba(10,11,13,0.12)',
        signal: '#2B55FF',
        signal2: '#8FA6FF',
        ember: '#FF5B24',
        mint: '#2FD6A3',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        mega: ['clamp(2.75rem, 6.2vw, 6.75rem)', { lineHeight: '0.92', letterSpacing: '-0.045em' }],
        display: ['clamp(2.5rem, 5.6vw, 5.5rem)', { lineHeight: '0.98', letterSpacing: '-0.04em' }],
        h1: ['clamp(2.1rem, 4vw, 3.75rem)', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
        h2: ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.08', letterSpacing: '-0.03em' }],
      },
      maxWidth: { site: '1360px' },
      transitionTimingFunction: { out: 'cubic-bezier(0.22, 1, 0.36, 1)' },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        pulseRing: { '0%': { transform: 'scale(.6)', opacity: '0.9' }, '100%': { transform: 'scale(2.6)', opacity: '0' } },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        pulseRing: 'pulseRing 2.4s cubic-bezier(0.22,1,0.36,1) infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
