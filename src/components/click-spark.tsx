"use client";

import { useEffect, useRef } from "react";

type Spark = {
  x: number;
  y: number;
  angle: number;
  start: number;
};

const DURATION = 450;
const SPARK_COUNT = 7;
const SPARK_LENGTH = 12;
const SPARK_TRAVEL = 16;

// Radiating line-burst on click, drawn on a single fixed canvas so it never
// touches the DOM tree or intercepts pointer events. Skips entirely under
// prefers-reduced-motion.
export function ClickSpark() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    let sparks: Spark[] = [];
    let rafId: number | null = null;

    const tick = (now: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const color =
        getComputedStyle(document.documentElement)
          .getPropertyValue("--foreground")
          .trim() || "#fff";

      sparks = sparks.filter((spark) => {
        const progress = (now - spark.start) / DURATION;
        if (progress >= 1) return false;

        const eased = 1 - Math.pow(1 - progress, 3);
        const travel = eased * SPARK_TRAVEL;
        const length = SPARK_LENGTH * (1 - eased * 0.7);

        const x1 = spark.x + Math.cos(spark.angle) * travel;
        const y1 = spark.y + Math.sin(spark.angle) * travel;
        const x2 = x1 + Math.cos(spark.angle) * length;
        const y2 = y1 + Math.sin(spark.angle) * length;

        ctx.strokeStyle = color;
        ctx.globalAlpha = 1 - progress;
        ctx.lineWidth = 1.5;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        return true;
      });
      ctx.globalAlpha = 1;

      rafId = sparks.length > 0 ? requestAnimationFrame(tick) : null;
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.button !== 0) return;

      const now = performance.now();
      const baseAngle = Math.random() * Math.PI * 2;
      for (let i = 0; i < SPARK_COUNT; i++) {
        sparks.push({
          x: e.clientX,
          y: e.clientY,
          angle: baseAngle + (i * (Math.PI * 2)) / SPARK_COUNT,
          start: now,
        });
      }

      if (rafId == null) rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("pointerdown", onPointerDown);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointerdown", onPointerDown);
      if (rafId != null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-100"
    />
  );
}
