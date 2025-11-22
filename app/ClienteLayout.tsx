"use client";

import { useState, useEffect } from "react";
import { Home, Info, Briefcase, Mail, Settings } from "lucide-react";
import Header from "./components/layouts/Header/Header";
import Footer from "./components/layouts/Footer/Footer";
import Sidebar from "./components/layouts/Sidebar/Sidebar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedSidebar = localStorage.getItem("sidebarOpen");
    const storedDark = localStorage.getItem("darkMode");
    if (storedSidebar !== null) setIsSidebarOpen(storedSidebar === "true");
    if (storedDark !== null) setIsDarkMode(storedDark === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebarOpen", JSON.stringify(isSidebarOpen));
  }, [isSidebarOpen]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleSidebar = () => {
    if (window.innerWidth < 768) setIsMobileSidebarOpen(true);
    else setIsSidebarOpen(!isSidebarOpen);
  };

  const closeMobileSidebar = () => setIsMobileSidebarOpen(false);

  const menuItems = [
    { icon: Home, label: "Dashboard", link: "/" },
    { icon: Briefcase, label: "Menu 1", link: "/menu1" },
    { icon: Mail, label: "Menu 2", link: "/menu2" },
    { icon: Settings, label: "Menu 3", link: "/menu3" },
    { icon: Info, label: "Menu 4", link: "/menu4" }
  ];

  return (
    <>
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-md z-40"
          onClick={closeMobileSidebar}
        />
      )}

      <div className="flex min-h-screen w-full transition-all duration-300 ease-in-out">
        <Sidebar
          menuItems={menuItems}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          isMobileSidebarOpen={isMobileSidebarOpen}
          setIsMobileSidebarOpen={setIsMobileSidebarOpen}
          isDarkMode={isDarkMode}
        />

        <div className="flex flex-col flex-1 min-h-screen transition-all duration-300 ease-in-out">
          <Header
            toggleSidebar={toggleSidebar}
            setIsDarkMode={setIsDarkMode}
            isDarkMode={isDarkMode}
          />

          <main className="flex-1 p-6 overflow-y-auto dark:bg-zinc-900 transition-colors duration-300">
            {children}
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
