"use client"

import type React from "react"
import { forwardRef } from "react"
import { useMobile } from "@/hooks/use-mobile"

interface DesktopProps {
  children: React.ReactNode
}

const Desktop = forwardRef<HTMLDivElement, DesktopProps>(({ children }, ref) => {
  const isMobile = useMobile()

  return (
    <div
      ref={ref}
      className="h-[calc(100vh-2.5rem)] w-full relative overflow-hidden bg-black flex items-center justify-center"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-4xl text-center text-ctp-text p-4 md:p-8">
          <p className="text-xs mb-1 text-ctp-subtext">(For best experience open this on a laptop/PC)</p>
          <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 text-ctp-mauve">Melbin's Linux Portfolio</h1>
          <p className="text-sm md:text-xl mb-4 md:mb-8">
            Welcome to my interactive Linux-based portfolio. Click on the dock icons below to explore.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left">
            <div className="bg-ctp-mantle p-3 md:p-4 rounded-xl">
              <h2 className="text-lg md:text-xl font-bold text-ctp-blue mb-1 md:mb-2">Terminal Commands</h2>
              <ul className="space-y-0.5 md:space-y-1 text-sm md:text-base">
                <li>
                  <span className="text-ctp-green">about</span> - View about me
                </li>
                <li>
                  <span className="text-ctp-green">projects</span> - View my projects
                </li>
                <li>
                  <span className="text-ctp-green">education</span> - View my education
                </li>
                <li>
                  <span className="text-ctp-green">experience</span> - View my experience
                </li>
                <li>
                  <span className="text-ctp-green">help</span> - List all commands
                </li>
              </ul>
            </div>

            <div className="bg-ctp-mantle p-3 md:p-4 rounded-xl">
              <h2 className="text-lg md:text-xl font-bold text-ctp-peach mb-1 md:mb-2">Window Controls</h2>
              <ul className="space-y-0.5 md:space-y-1 text-sm md:text-base">
                <li>Drag title bar to move window</li>
                <li>Drag bottom-right corner to resize window</li>
                <li>Red button to close</li>
                <li>Yellow button to minimize</li>
                <li>Green button to maximize</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
})

Desktop.displayName = "Desktop"

export default Desktop
