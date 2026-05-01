import type { SVGProps } from 'react';

const SpinningGlobe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    aria-label="Spinning globe animation"
    {...props}
  >
    <defs>
      <clipPath id="globeClipPath">
        <circle cx="100" cy="100" r="80" />
      </clipPath>
      <linearGradient id="globeStroke" x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="hsl(var(--accent))" />
        <stop offset="100%" stopColor="hsl(var(--primary))" />
      </linearGradient>
      <radialGradient id="globeFill" cx="50%" cy="45%" r="65%">
        <stop offset="0%" stopColor="hsl(var(--secondary) / 0.85)" />
        <stop offset="100%" stopColor="hsl(var(--background) / 0.45)" />
      </radialGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <circle cx="100" cy="100" r="92" fill="hsl(var(--accent) / 0.08)" />
    <circle cx="100" cy="100" r="80" fill="url(#globeFill)" stroke="url(#globeStroke)" strokeWidth="1.5" />
    <circle cx="100" cy="100" r="65" fill="none" stroke="hsl(var(--primary) / 0.12)" strokeWidth="12" filter="url(#glow)" />

    <g clipPath="url(#globeClipPath)" style={{ transformOrigin: '100px 100px' }} className="animate-spin-slow">
      <ellipse cx="100" cy="100" rx="20" ry="80" fill="none" stroke="url(#globeStroke)" strokeWidth="1.1" opacity="0.65" />
      <ellipse cx="100" cy="100" rx="45" ry="80" fill="none" stroke="url(#globeStroke)" strokeWidth="1.1" opacity="0.65" />
      <ellipse cx="100" cy="100" rx="65" ry="80" fill="none" stroke="url(#globeStroke)" strokeWidth="1.1" opacity="0.65" />
      <ellipse cx="100" cy="100" rx="78" ry="80" fill="none" stroke="hsl(var(--primary) / 0.45)" strokeWidth="0.65" opacity="0.65" />

      <ellipse cx="100" cy="100" rx="80" ry="25" fill="none" stroke="url(#globeStroke)" strokeWidth="1.1" opacity="0.65" />
      <ellipse cx="100" cy="100" rx="80" ry="50" fill="none" stroke="url(#globeStroke)" strokeWidth="1.1" opacity="0.65" />
      <ellipse cx="100" cy="100" rx="80" ry="70" fill="none" stroke="url(#globeStroke)" strokeWidth="1.1" opacity="0.65" />
      <line x1="20" y1="100" x2="180" y2="100" stroke="url(#globeStroke)" strokeWidth="1.5" />
    </g>

    <circle cx="134" cy="62" r="5" fill="hsl(var(--accent))" />
    <circle cx="70" cy="128" r="4" fill="hsl(var(--primary))" />
    <path d="M130 66 L154 48" stroke="hsl(var(--accent))" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
    <path d="M74 125 L54 142" stroke="hsl(var(--primary))" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
  </svg>
);

export default SpinningGlobe;
