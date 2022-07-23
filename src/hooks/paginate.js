import { useEffect, useState } from 'react';

export const usePaginate = () => {
  const [page, setPage] = useState(1);
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setPage(page + 1);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return [page, setPage];
};
