import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

type UseThemeSwitchReturn = [
  string,
  React.Dispatch<React.SetStateAction<string>>
];

export default function useThemeSwitch(): UseThemeSwitchReturn {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return [theme, setTheme];
}
