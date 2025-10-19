"use client";

import { useState, useEffect } from "react";
import { Home, Info, Briefcase, Mail, Menu, X, Sun, Moon } from "lucide-react";

export default function HomePage() {
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
    const html = document.documentElement;
    if (isDarkMode) html.classList.add("dark");
    else html.classList.remove("dark");
  }, [isDarkMode]);

  const toggleSidebar = () => {
    if (window.innerWidth < 768) setIsMobileSidebarOpen(true);
    else setIsSidebarOpen(!isSidebarOpen);
  };

  const closeMobileSidebar = () => setIsMobileSidebarOpen(false);

  const menuItems = [
    { icon: Home, label: "Início" },
    { icon: Info, label: "Sobre" },
    { icon: Briefcase, label: "Serviços" },
    { icon: Mail, label: "Contato" },
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
        <aside
          className={`
            fixed md:static inset-y-0 left-0 bg-white border-r border-zinc-100 dark:bg-zinc-900 dark:border-gray-700 
            flex flex-col p-5 transition-transform duration-300 ease-in-out z-50
            ${isSidebarOpen ? "w-64" : "w-20"}
            ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          `}
        >
          <button
            className="self-end mb-4 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 md:hidden transition"
            onClick={closeMobileSidebar}
          >
            <X className="w-5 h-5 text-gray-800 dark:text-gray-200" />
          </button>

          <div className="flex items-center justify-between mb-6">
            <div className="text-2xl font-bold whitespace-nowrap">
              <img
                src={
                  isSidebarOpen
                    ? isDarkMode
                      ? "/logo-white.png"
                      : "/logo.png"
                    : "/logo-red.svg"
                }
                alt="Reccode Tech"
                className="h-10"
              />
            </div>
          </div>

          <nav className="flex-1">
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.label} className="group relative">
                  <a
                    href="#"
                    className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 
                    transition text-gray-800 dark:text-gray-200"
                  >
                    <item.icon className="w-5 h-5 shrink-0" />
                    <span className={`${isSidebarOpen ? "" : "hidden"}`}>
                      {item.label}
                    </span>
                  </a>
                  {!isSidebarOpen && (
                    <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-zinc-900 text-gray-100 text-sm 
                    rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none transition shadow-md">
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </aside>


        <div className="flex flex-col flex-1 min-h-screen transition-all duration-300 ease-in-out">
          <header className="bg-white dark:bg-zinc-900 dark:text-white border-b border-zinc-100 dark:border-gray-700 
          p-4 flex justify-between items-center transition-colors duration-300">
            <button
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              onClick={toggleSidebar}
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
              <button
                className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
              <div className="relative inline-block">
                <img
                  src="https://i.pravatar.cc/150?img=3"
                  alt="Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <span className="absolute bottom-0 right-0 block w-2.5 h-2.5 bg-green-500 rounded-full" />
              </div>
            </div>
          </header>

          <main className="flex-1 p-6 overflow-y-auto dark:bg-zinc-900 transition-colors duration-300">
            <section className="max-w-full mx-auto">
              <h2 className="text-2xl font-semibold mb-4 dark:text-gray-200">
                Bem-vindo ao Starter Kit!
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Este é um exemplo de layout com menu lateral colapsável, popovers e persistência de estado via localStorage.
              </p>
            </section>
          </main>

          <footer className="bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-gray-700  p-4 text-center 
          text-xs text-gray-800 dark:text-gray-200 transition-colors duration-300">
            <div className="flex justify-between">
              <p>© 2025 Reccode Tech. Todos os direitos reservados.</p>
              <p>Versão 1.0</p>
            </div>S
          </footer>
        </div>
      </div>
    </>
  );
}
