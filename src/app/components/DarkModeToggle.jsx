// components/DarkModeToggle.js
import { useTheme } from '../context/ThemeProvider';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default function DarkModeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="px-4 py-2 bg-blue-500 text-white rounded-md"
    >
      {darkMode ? (
         <SunIcon className="w-6 h-6 text-yellow-400" /> // Sun icon for light mode
        ) : (
          <MoonIcon className="w-6 h-6 text-gray-200" /> // Moon icon for dark mode
      )}
    </button>
  );
}
