import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    aria-label="Koeneng Hub Logo"
  >
    <path d="M50 90 V 60" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
    <path d="M50 60 L30 40" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
    <path d="M50 60 L70 40" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
    <path d="M30 40 L20 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    <path d="M30 40 L40 30" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    <path d="M70 40 L60 30" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    <path d="M70 40 L80 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="50" cy="60" r="4" fill="currentColor"/>
    <circle cx="30" cy="40" r="3" fill="currentColor"/>
    <circle cx="70" cy="40" r="3" fill="currentColor"/>
    <circle cx="20" cy="50" r="2.5" fill="currentColor"/>
    <circle cx="40" cy="30" r="2.5" fill="currentColor"/>
    <circle cx="60" cy="30" r="2.5" fill="currentColor"/>
    <circle cx="80" cy="50" r="2.5" fill="currentColor"/>
    <path d="M20 50 L15 45" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <path d="M40 30 L35 25" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <path d="M60 30 L65 25" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <path d="M80 50 L85 45" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export default Logo;
