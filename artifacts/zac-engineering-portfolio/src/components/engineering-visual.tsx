import { useId } from 'react';
import { cn } from '@/lib/utils';

type Props = { variant?: 'rotary' | 'beam' | 'cad' | 'prototype' | 'signal'; className?: string; label?: string };

export function EngineeringVisual({ variant = 'rotary', className, label = 'engineering diagram' }: Props) {
  const id = useId();
  const grid = `${id.replace(/:/g, '')}-grid`;
  return (
    <div className={cn('relative overflow-hidden bg-[#0d141c] engineering-grid-fine', className)} aria-label={label} role="img">
      <svg viewBox="0 0 600 420" fill="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <pattern id={grid} width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" stroke="#21303c" strokeWidth=".7" opacity=".55" />
          </pattern>
          <linearGradient id={`${grid}-fade`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#59d8ef" stopOpacity=".16" />
            <stop offset="1" stopColor="#0d141c" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="600" height="420" fill={`url(#${grid})`} />
        <rect width="600" height="420" fill={`url(#${grid}-fade)`} />
        {variant === 'rotary' && <>
          <circle cx="300" cy="215" r="107" stroke="#8ea1ae" strokeWidth="2" />
          <circle cx="300" cy="215" r="72" stroke="#59d8ef" strokeWidth="3" strokeDasharray="7 8" />
          <circle cx="300" cy="215" r="24" fill="#172531" stroke="#d7e5e9" strokeWidth="2" />
          <path d="M300 191V145M300 239v46M276 215h-45M324 215h45" stroke="#d7e5e9" strokeWidth="2" />
          <path d="M300 65v35M300 330v25M150 215h35M415 215h35" stroke="#59d8ef" />
          <path d="M140 105h82M140 105v28M460 325h-82M460 325v-28" stroke="#8296a4" />
          <text x="150" y="97" fill="#8ea1ae" fontSize="12" fontFamily="monospace">AXIS_01 / ROTARY</text>
          <text x="390" y="344" fill="#59d8ef" fontSize="11" fontFamily="monospace">Ø 120 REF</text>
        </>}
        {variant === 'beam' && <>
          <path d="M80 305h440" stroke="#8ea1ae" strokeWidth="3" />
          <path d="M90 290h420" stroke="#59d8ef" strokeWidth="11" strokeLinecap="round" />
          <path d="M180 290v-62M420 290v-62" stroke="#d7e5e9" strokeWidth="4" />
          <path d="M110 190c58-78 110 78 168 0s110 78 168 0" stroke="#f2b963" strokeWidth="3" />
          <path d="M110 185v-40M446 185v-40" stroke="#8ea1ae" />
          <path d="M102 145h16M438 145h16" stroke="#8ea1ae" />
          <text x="89" y="117" fill="#8ea1ae" fontSize="12" fontFamily="monospace">SENSOR / RESPONSE TRACE</text>
          <text x="240" y="338" fill="#59d8ef" fontSize="11" fontFamily="monospace">TEST FIXTURE</text>
        </>}
        {variant === 'cad' && <>
          <path d="M130 312 195 105l170 32 105 175-160 46-180-46Z" fill="#152632" stroke="#59d8ef" strokeWidth="2" />
          <path d="m195 105 115 89 160-57M310 194l-5 164M310 194l160 118M130 312l175 46" stroke="#8ea1ae" strokeWidth="1.5" />
          <path d="M176 245h228M215 179h152M175 278h250" stroke="#59d8ef" strokeWidth="1" strokeDasharray="4 6" opacity=".75" />
          <circle cx="310" cy="194" r="8" fill="#f2b963" />
          <text x="122" y="80" fill="#8ea1ae" fontSize="12" fontFamily="monospace">MODEL / REV 03</text>
          <text x="383" y="355" fill="#59d8ef" fontSize="11" fontFamily="monospace">BUILD VOLUME</text>
        </>}
        {variant === 'prototype' && <>
          <path d="M130 310v-95l68-38 126 30 0 94-68 35-126-26Z" fill="#182b36" stroke="#d7e5e9" strokeWidth="2" />
          <path d="m198 177 2 95 124 30M130 215l126 29 68-36M256 244v94" stroke="#59d8ef" strokeWidth="2" />
          <path d="M395 140v160M375 160h40M375 280h40" stroke="#f2b963" strokeWidth="2" />
          <path d="M410 140l-5 11h10l-5-11ZM410 300l-5-11h10l-5 11Z" fill="#f2b963" />
          <text x="108" y="95" fill="#8ea1ae" fontSize="12" fontFamily="monospace">PROTOTYPE / FIT CHECK</text>
          <text x="428" y="228" fill="#f2b963" fontSize="11" fontFamily="monospace" transform="rotate(90 428 228)">150 REF</text>
        </>}
        {variant === 'signal' && <>
          <path d="M55 280h490M55 90v190" stroke="#607685" strokeWidth="1" />
          <path d="M55 210h490M55 140h490" stroke="#30404a" strokeDasharray="3 8" />
          <path d="M60 218c25-10 32-83 58-79s30 89 55 58 26-112 52-50 30 99 55 45 36-87 63-30 29 96 57 49 47-67 82-32 30 30 60 22" stroke="#59d8ef" strokeWidth="3" />
          <circle cx="180" cy="197" r="5" fill="#f2b963" />
          <circle cx="405" cy="187" r="5" fill="#f2b963" />
          <text x="70" y="68" fill="#8ea1ae" fontSize="12" fontFamily="monospace">OBSERVATION / ITERATION</text>
          <text x="470" y="302" fill="#59d8ef" fontSize="11" fontFamily="monospace">t →</text>
        </>}
      </svg>
      <div className="absolute left-4 top-4 font-mono text-[10px] tracking-[.18em] text-slate-500">ZDI / 2025</div>
      <div className="absolute bottom-4 right-4 h-2 w-2 rounded-full bg-[#59d8ef] shadow-[0_0_0_4px_rgba(89,216,239,.12)]" />
    </div>
  );
}
