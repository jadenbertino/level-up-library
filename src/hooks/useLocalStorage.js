import { useEffect, useState } from 'react';

export default function useLocalStorage(key, defaultValue) {
  const [storedValue, setStoredValue] = useState(defaultValue);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      const value = item ? JSON.parse(item) : defaultValue;
      setStoredValue(value);
    } catch (error) {
      console.log(error);
      setStoredValue(defaultValue);
    }
  }, [key, defaultValue]);

  function setValue(value) {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  }
  return [storedValue, setValue];
}
