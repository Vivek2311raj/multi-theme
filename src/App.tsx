
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { motion } from 'framer-motion';

function LayoutWithSidebar() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-900 text-white p-4 space-y-4">
        <h2 className="text-xl font-bold mb-4">Sidebar</h2>
        <nav className="flex flex-col gap-2">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as any)}
          className="mt-4 bg-gray-800 p-2 rounded"
        >
          <option value="light">Theme 1</option>
          <option value="dark">Theme 2</option>
          <option value="colorful">Theme 3</option>
        </select>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </main>
    </div>
  );
}

function LayoutWithHeader() {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </>
  );
}

function AppContent() {
  const { theme } = useTheme();
  return theme === 'dark' ? <LayoutWithSidebar /> : <LayoutWithHeader />;
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
