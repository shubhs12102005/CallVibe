import React, { useEffect, useRef, useState } from 'react';

/**
 * Replicates CallVibe's elementor-widget-pix-sliding-text.
 * Each word is wrapped in an overflow-hidden container and translates up
 * with a staggered delay (0ms, 75ms, 150ms, etc.) when mounted or scrolled into view.
 */
export default function SlidingHeadline({
  text,
  className = '',
  style = {},
  tag = 'h1',
  highlightWords = [],
  highlightColor = '#2264F6',
  staggerMs = 65,
  delay = 100,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const words = text.split(/\s+/).filter(Boolean);
  const Tag = tag;

  return (
    <Tag
      ref={containerRef}
      className={`sliding-headline ${className}`}
      style={{
        display: 'inline-block',
        ...style,
      }}
    >
      {words.map((word, index) => {
        const cleanWord = word.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '');
        const isHighlighted = highlightWords.some(
          (hw) => hw.toLowerCase() === cleanWord.toLowerCase()
        );

        return (
          <span
            key={index}
            className="slide-in-container"
            style={{
              display: 'inline-block',
              overflow: 'hidden',
              verticalAlign: 'top',
              marginRight: '0.28em',
            }}
          >
            <span
              className="pix-sliding-item"
              style={{
                display: 'inline-block',
                transform: isVisible ? 'translateY(0)' : 'translateY(115%)',
                opacity: isVisible ? 1 : 0,
                transition: `transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${index * staggerMs}ms, opacity 0.5s ease ${index * staggerMs}ms`,
                color: isHighlighted ? highlightColor : 'inherit',
              }}
            >
              {word}
            </span>
          </span>
        );
      })}
    </Tag>
  );
}
