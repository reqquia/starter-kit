import React from 'react'
import { Menu, Moon, Sun, User, Settings, LogOut, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header({ toggleSidebar, setIsDarkMode, isDarkMode }: any) {
  return (
    <header className="bg-white dark:bg-zinc-900 dark:text-white border-b border-zinc-100 dark:border-gray-700 
          px-5 flex justify-between items-center transition-colors duration-300">
      <button
        className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        onClick={toggleSidebar}
      >
        <Menu className="w-5 h-5" />
      </button>
      <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
        <button
          className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>

        <Popover>
          {({ open }) => (
            <>
              <PopoverButton className="p-1 rounded-full cursor-pointer outline-none transition-all duration-200">
                <div className="relative inline-block">
                  <Image
                    src="https://i.pravatar.cc/150?img=3"
                    alt="Avatar"
                    className="w-10 h-10 rounded-full ring-2 ring-zinc-200 dark:ring-zinc-700 transition-all duration-200"
                    width={40}
                    height={40}
                    priority
                  />
                  <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-500 rounded-full ring-2 ring-white dark:ring-zinc-900" />
                </div>
              </PopoverButton>
              <AnimatePresence>
                {open && (
                  <PopoverPanel
                    static
                    as={motion.div}
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] } as any}
                    anchor="bottom end"
                    className="z-50 w-screen sm:w-auto"
                  >
                    <div className="w-72 sm:w-80 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl dark:shadow-2xl mt-3 overflow-hidden backdrop-blur-xl bg-opacity-95 dark:bg-opacity-95">
                      {/* Header do usuário */}
                      <div className="px-5 py-4 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-800 dark:to-zinc-900 border-b border-zinc-200 dark:border-zinc-700">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <Image
                              src="https://i.pravatar.cc/150?img=3"
                              alt="Avatar"
                              className="w-12 h-12 
                              rounded-full 
                              ring-2 
                              ring-white 
                              dark:ring-zinc-700 
                              shadow-md"
                              width={48}
                              height={48}
                              priority
                            />
                            <span className="absolute bottom-0 right-0 block w-3.5 h-3.5 bg-green-500 rounded-full ring-2 ring-white dark:ring-zinc-800" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-zinc-900 dark:text-white text-sm truncate">
                             John Doe <span className="bg-green-500 text-white text-[10px] px-3 py-1 rounded-full">FREE</span>
                            </p>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 truncate">
                              john.doe@email.com
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Menu items */}
                      <div className="py-2">
                        <Link
                          href="#"
                          className="group flex items-center gap-3 px-5 py-3 text-sm 
                          text-zinc-700 dark:text-zinc-300 transition-all duration-200 
                          hover:bg-zinc-50 dark:hover:bg-zinc-700/50 hover:text-zinc-900 
                          dark:hover:text-white"
                        >
                          <div className="flex items-center justify-center w-8 h-8 rounded-lg 
                          bg-zinc-100  
                          dark:bg-zinc-900
                          transition-colors
                          shadow-sm">
                            <User className="w-4 h-4 
                            text-zinc-600 dark:text-zinc-400 
                            group-hover:text-blue-600 
                            dark:group-hover:text-blue-400" 
                            />
                          </div>

                          <span className="flex-1 font-light">Perfil</span>
                          <ChevronRight className="w-4 h-4 
                          text-zinc-400 dark:text-zinc-500 opacity-0 
                          group-hover:opacity-100 transition-opacity
                          " 
                          />
                        </Link>

                        <Link
                          href="#"
                          className="group flex items-center gap-3 px-5 py-3 text-sm text-zinc-700 
                          dark:text-zinc-300 transition-all duration-200 hover:bg-zinc-50 dark:hover:bg-zinc-700/50 
                          hover:text-zinc-900 dark:hover:text-white"
                        >
                          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-900 
                          shadow
                          transition-colors">
                            <Settings className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:text-purple-600 
                            dark:group-hover:text-purple-400" />
                          </div>
                          <span className="flex-1 font-light">Configurações</span>
                          <ChevronRight className="w-4 h-4 text-zinc-400 dark:text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>

                        <div className="my-2 border-t border-zinc-200 dark:border-zinc-700" />

                        <Link
                          href="#"
                          className="group flex items-center gap-3 px-5 py-3 text-sm transition-all duration-200 
                          hover:bg-zinc-50 dark:hover:bg-zinc-700/50 
                          hover:text-red-700 dark:hover:text-red-300"
                        >
                          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-100
                          dark:bg-zinc-900 shadow transition-colors">
                            <LogOut className="w-4 h-4 text-zinc-500 group-hover:text-red-600" />
                          </div>
                          <span className="flex-1 dark:text-white font-light">Sair</span>
                          <ChevronRight className="w-4 h-4 text-zinc-600 dark:text-zinc-400 
                          group-hover:text-red-600 dark:group-hover:text-red-400" />
                        </Link>
                      </div>
                    </div>
                  </PopoverPanel>
                )}
              </AnimatePresence>
            </>
          )}
        </Popover>
      </div>
    </header >
  )
}
