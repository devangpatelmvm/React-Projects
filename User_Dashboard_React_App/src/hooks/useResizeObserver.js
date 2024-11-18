import { useState, useEffect, useCallback } from 'react';

export const useResizeObserver = (ref) => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  const handleResize = useCallback((entries) => {
    if (entries.length > 0) {
      const { width, height } = entries[0].contentRect;
      setSize({ width, height });
    }
  }, []);

  useEffect(() => {
    const observer = new ResizeObserver(handleResize);
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [handleResize, ref]);

  return size;
};
