import React, { useEffect, useRef, useState } from 'react';

/**
 * Replicates smooth number count-up animation when element enters the viewport.
 */
export default function AnimatedCounter({
  end,
  duration = 1800,
  prefix = '',
  suffix = '',
  decimals = 0,
  isTimer = false, // e.g. "6:24"
  timerMinutes = 6,
  timerSeconds = 24,
  style = {},
  className = '',
}) {
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          if (isTimer) {
            let start = 0;
            const totalTargetSecs = timerMinutes * 60 + timerSeconds;
            const startTime = performance.now();

            const step = (currentTime) => {
              const progress = Math.min((currentTime - startTime) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3); // cubic ease out
              const currentTotalSecs = Math.floor(eased * totalTargetSecs);
              setValue(currentTotalSecs);

              if (progress < 1) {
                requestAnimationFrame(step);
              }
            };
            requestAnimationFrame(step);
          } else {
            const startVal = 0;
            const startTime = performance.now();

            const step = (currentTime) => {
              const progress = Math.min((currentTime - startTime) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = startVal + (end - startVal) * eased;
              setValue(current);

              if (progress < 1) {
                requestAnimationFrame(step);
              }
            };
            requestAnimationFrame(step);
          }
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated, isTimer, timerMinutes, timerSeconds]);

  const display = isTimer
    ? `${Math.floor(value / 60)}:${(value % 60).toString().padStart(2, '0')}`
    : `${prefix}${value.toFixed(decimals)}${suffix}`;

  return (
    <div ref={ref} className={className} style={style}>
      {display}
    </div>
  );
}
