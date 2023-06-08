import { useState, useEffect } from 'react';

type UseLocalStorageReturn<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export default function useLocalStorage<T>(
  key: string,
  initialValue: T
): UseLocalStorageReturn<T> {
  function getInitialVal(): T {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  }
  const [storedValue, setStoredValue] = useState<T>(getInitialVal);

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.log(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
