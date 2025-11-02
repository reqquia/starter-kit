import { Menu, Moon, Sun } from 'lucide-react'
import React from 'react'

export default function Header({ toggleSidebar, setIsDarkMode, isDarkMode }: any) {
  return (
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
  )
}
