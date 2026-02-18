'use client';

import { useEffect, useState } from 'react';

const navItems = [
  'about',
  'experience',
  'projects',
  'profiles',
  'leadership',
  'contact'
];

export function Navbar() {
  const [active, setActive] = useState('about');

  useEffect(() => {
    const observers = navItems.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        { threshold: 0.45 }
      );

      observer.observe(element);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  return (
    <nav className="sticky top-4 z-50 mx-auto mb-8 flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-xl md:px-6">
      <p className="text-sm font-semibold tracking-[0.2em] text-slate-200">AT</p>
      <ul className="flex items-center gap-1 md:gap-3">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className={`rounded-full px-3 py-1.5 text-xs font-medium capitalize transition-all duration-300 md:text-sm ${
                active === item
                  ? 'bg-indigo-500/20 text-indigo-200'
                  : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
