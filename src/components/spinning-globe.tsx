
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
    </defs>

    {/* Globe outline */}
    <circle cx="100" cy="100" r="80" fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth="1.5" />

    {/* Spinning graticule (lines of latitude and longitude) */}
    <g clipPath="url(#globeClipPath)" style={{ transformOrigin: '100px 100px' }} className="animate-spin-slow">
      {/* Longitude lines (ellipses) */}
      <ellipse cx="100" cy="100" rx="20" ry="80" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.6" />
      <ellipse cx="100" cy="100" rx="45" ry="80" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.6" />
      <ellipse cx="100" cy="100" rx="65" ry="80" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.6" />
      <ellipse cx="100" cy="100" rx="78" ry="80" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.4" />


      {/* Latitude lines */}
      <ellipse cx="100" cy="100" rx="80" ry="25" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.6" />
      <ellipse cx="100" cy="100" rx="80" ry="50" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.6" />
      <ellipse cx="100" cy="100" rx="80" ry="70" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.6" />
      <line x1="20" y1="100" x2="180" y2="100" stroke="hsl(var(--primary))" strokeWidth="1.5" /> {/* Equator */}
    </g>
  </svg>
);

export default SpinningGlobe;
