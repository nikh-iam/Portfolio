import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlocksBackground from "./components/BlocksBackground";
import Navbar from "./components/Navbar";
import HomeSection from "./components/Home";
import WorksSection from "./components/Works";
import ContactSection from "./components/Contact";
import "./App.css";
import { bouncy } from "ldrs";

// Register the bouncy loader component
bouncy.register();

const sections = {
  home: <HomeSection />,
  works: <WorksSection />,
  contact: <ContactSection />,
};

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return savedTheme || (systemPrefersDark ? "dark" : "light");
  });

  useEffect(() => {
    // Apply theme class to document element
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);

    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  if (isLoading) {
    return (
      <motion.div
        className="loading-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <l-bouncy
          size="45"
          speed="1.75"
          color={theme === "dark" ? "white" : "black"}
        />
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="loading-text"
        >
          Loading portfolio...
        </motion.p>
      </motion.div>
    );
  }

  return (
    <div className={`app ${theme}`}>
      <BlocksBackground theme={theme} />

      <div className="content">
        <Navbar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          toggleTheme={toggleTheme}
          theme={theme}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            {sections[activeSection]}
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="footer">&copy; 2024 Nikhil A Mathew. New work in progress, make sure to check back.</p>
    </div>
  );
}
