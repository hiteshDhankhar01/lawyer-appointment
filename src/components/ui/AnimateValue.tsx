"use client"

import { useEffect, useRef } from 'react';

type AnimateValueProps = {
  start: number;
  end: number;
  duration: number;
};

const AnimateValue: React.FC<AnimateValueProps> = ({ start, end, duration }) => {
  const valueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateValue = (obj: HTMLDivElement, start: number, end: number, duration: number) => {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start).toString();
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    if (valueRef.current) {
      animateValue(valueRef.current, start, end, duration);
    }
  }, [start, end, duration]);

  return (
    <div ref={valueRef} className="font-bold text-4xl" >0</div>
  );
};

export default AnimateValue;
