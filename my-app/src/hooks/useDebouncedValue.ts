import { useEffect, useState } from 'react';

export default function useDebouncedValue(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    let timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearInterval(timer);
  }, [value, delay]);

  return debouncedValue;
}
