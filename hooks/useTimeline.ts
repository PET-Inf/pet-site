import { useState, useRef, RefObject } from 'react';

export function useTimeline(): {
  showMore: boolean;
  topEl: RefObject<HTMLDivElement | null>;
  toggleShowMore: () => void;
} {
  const [showMore, setShowMore] = useState(false);
  const topEl = useRef<HTMLDivElement>(null);

  const toggleShowMore = () => {
    setShowMore(!showMore);
    if (showMore && topEl.current) {
      topEl.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return { showMore, topEl, toggleShowMore };
}
