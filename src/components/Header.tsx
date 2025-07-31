import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

export default function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow sticky top-0 bg-white dark:bg-gray-800 z-50">
      <h1 className="text-xl font-bold">🌈 MultiTheme App</h1>
      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as any)}
        className="border rounded px-2 py-1 text-sm"
      >
        <option value="light">Theme 1 - Light</option>
        <option value="dark">Theme 2 - Dark</option>
        <option value="colorful">Theme 3 - Colorful</option>
      </select>
    </header>
  );
}