"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function WorldMap() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const paths = svgRef.current.querySelectorAll(".route-path");
    
    paths.forEach((path) => {
      const length = (path as SVGPathElement).getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 3 + Math.random() * 3,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: Math.random() * 2
      });
    });
  }, []);

  return (
    <div className="relative w-full aspect-[2/1] bg-black/80 border border-white/10 rounded-2xl overflow-hidden flex items-center justify-center p-4">
      {/* Real Map Image Background */}
      <div 
        className="absolute inset-0 opacity-40 bg-center bg-cover mix-blend-screen"
        style={{ backgroundImage: `url('/world_map_bg.png')` }}
      />

      <svg ref={svgRef} viewBox="0 0 1000 500" className="w-full h-full z-10 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]">
        {/* Animated Routes overlaying the map image */}
        <g stroke="#facc15" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
          <path d="M 250 180 Q 350 100 480 150" className="route-path" />
          <path d="M 480 150 Q 550 180 620 230" className="route-path" />
          <path d="M 620 230 Q 750 150 850 180" className="route-path" />
          <path d="M 250 180 Q 200 250 320 350" className="route-path" />
          <path d="M 850 180 Q 900 280 880 380" className="route-path" />
          <path d="M 620 230 Q 550 300 580 400" className="route-path" />
        </g>

        {/* City Nodes */}
        <g fill="#ffffff">
          <g transform="translate(250, 180)">
            <circle r="6" className="fill-primary animate-pulse" />
            <circle r="12" className="fill-primary opacity-30 animate-ping" />
            <text y="-12" x="-10" fontSize="12" fill="#fff" className="font-bold tracking-wider">NEW YORK</text>
          </g>
          <g transform="translate(480, 150)">
            <circle r="5" className="fill-white" />
            <circle r="10" className="fill-white opacity-20 animate-ping" />
            <text y="-12" x="-15" fontSize="12" fill="#fff" className="font-bold tracking-wider">LONDON</text>
          </g>
          <g transform="translate(320, 350)">
            <circle r="5" className="fill-white" />
            <text y="18" x="-20" fontSize="12" fill="#fff" className="font-bold tracking-wider">SÃO PAULO</text>
          </g>
          <g transform="translate(620, 230)">
            <circle r="6" className="fill-primary animate-pulse" />
            <circle r="12" className="fill-primary opacity-30 animate-ping" />
            <text y="-12" x="-15" fontSize="12" fill="#fff" className="font-bold tracking-wider">DUBAI</text>
          </g>
          <g transform="translate(580, 400)">
            <circle r="4" className="fill-white" />
            <text y="18" x="-25" fontSize="12" fill="#fff" className="font-bold tracking-wider">CAPE TOWN</text>
          </g>
          <g transform="translate(850, 180)">
            <circle r="6" className="fill-primary animate-pulse" />
            <circle r="12" className="fill-primary opacity-30 animate-ping" />
            <text y="-12" x="-15" fontSize="12" fill="#fff" className="font-bold tracking-wider">TOKYO</text>
          </g>
          <g transform="translate(880, 380)">
            <circle r="5" className="fill-white" />
            <text y="18" x="-15" fontSize="12" fill="#fff" className="font-bold tracking-wider">SYDNEY</text>
          </g>
        </g>
      </svg>
      
      <div className="absolute bottom-6 left-6 glass px-4 py-3 rounded-lg flex flex-col gap-2 z-20">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-bold tracking-wider text-white uppercase">Active Hub</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-white" />
          <span className="text-[10px] font-bold tracking-wider text-white/70 uppercase">Destination</span>
        </div>
      </div>
    </div>
  );
}
