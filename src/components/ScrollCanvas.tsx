"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const frameCount = 240;

  const imagePaths = useMemo(() => {
    return Array.from({ length: frameCount }, (_, i) => {
      const frameNum = (i + 1).toString().padStart(3, "0");
      return `/animation/ezgif-frame-${frameNum}.png`;
    });
  }, []);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = new Array(frameCount);
    let loadedCount = 0;

    const checkComplete = () => {
      loadedCount++;
      if (loadedCount === frameCount) {
        setImages([...loadedImages]);
      }
    };

    imagePaths.forEach((path, i) => {
      const img = new Image();
      img.src = path;
      img.onload = () => {
        loadedImages[i] = img;
        checkComplete();
      };
      img.onerror = () => {
        console.warn(`Failed to load image: ${path}`);
        // Add a dummy or empty image to prevent breaking the sequence completely
        loadedImages[i] = new Image(); 
        checkComplete();
      };
    });
  }, [imagePaths]);

  useEffect(() => {
    if (images.length !== frameCount || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const render = (index: number) => {
      if (images[index]) {
        const img = images[index];
        const canvasAspect = canvas.width / canvas.height;
        const imgAspect = img.width / img.height;
        
        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;

        if (canvasAspect > imgAspect) {
          drawHeight = canvas.width / imgAspect;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          drawWidth = canvas.height * imgAspect;
          offsetX = (canvas.width - drawWidth) / 2;
        }

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    // Initial render
    render(0);

    const animationState = { frame: 0 };

    const initScrollTrigger = () => {
      const triggerElement = document.getElementById("animation-wrapper");
      if (!triggerElement) {
        // If not found, try again shortly (handles React mounting quirks)
        setTimeout(initScrollTrigger, 100);
        return;
      }

      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const frameIndex = Math.min(
            frameCount - 1,
            Math.floor(self.progress * (frameCount - 1))
          );
          animationState.frame = frameIndex;
          render(frameIndex);
        },
      });
    };

    initScrollTrigger();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render(animationState.frame);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [images]);

  return (
    <div className="fixed inset-0 -z-20 w-full h-full pointer-events-none overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
    </div>
  );
}
