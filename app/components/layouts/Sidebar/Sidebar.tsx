import { X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Sidebar({ menuItems, isSidebarOpen, isMobileSidebarOpen, closeMobileSidebar, isDarkMode }: any) {
  return (
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
          <Image
            src={
              isSidebarOpen
                ? isDarkMode
                  ? "/logo-white.png"
                  : "/logo.png"
                : "/logo-red.svg"
            }
            alt="Reccode Tech"
            className="h-10"
            width={130}
            height={40}
            priority
          />
        </div>
      </div>

      <nav className="flex-1">
        <ul className="space-y-3">
          {menuItems.map((item: any) => (
            <li key={item.label} className="group relative">
              <Link
                href={item.link}
                className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 
                    transition text-gray-800 dark:text-gray-200"
              >
                <item.icon className="w-5 h-5 shrink-0" />
                <span className={`${isSidebarOpen ? "" : "hidden"}`}>
                  {item.label}
                </span>
              </Link>
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
  )
}
