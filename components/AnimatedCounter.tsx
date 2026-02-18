'use client';

import { animate, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.1,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplay(Math.round(latest))
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
