"use client"

import type React from "react"
import { Terminal, Code, GraduationCap, Briefcase, Mail } from "lucide-react"

interface DockProps {
  terminals: Array<{
    id: string
    title: string
    isMinimized: boolean
  }>
  onTerminalClick: (id: string) => void
  isMobile: boolean
}

const Dock: React.FC<DockProps> = ({ terminals, onTerminalClick, isMobile }) => {
  const getIconForTerminal = (id: string) => {
    switch (id) {
      case "about":
        return <Terminal className="w-5 h-5" />
      case "projects":
        return <Code className="w-5 h-5" />
      case "education":
        return <GraduationCap className="w-5 h-5" />
      case "experience":
        return <Briefcase className="w-5 h-5" />
      case "contact":
        return <Mail className="w-5 h-5" />
      case "terminal":
        return <Terminal className="w-5 h-5" />
      default:
        return <Terminal className="w-5 h-5" />
    }
  }

  const handleClick = (id: string) => {
    if (id === "projects") {
      window.open("https://projects.mellowbricks.co.in", "_blank")
    } else {
      onTerminalClick(id)
    }
  }

  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-ctp-surface0/80 backdrop-blur-md rounded-2xl p-2 flex space-x-2">
      {["about", "projects", "education", "experience", "contact", "terminal"].map((id) => {
        const terminal = terminals.find((t) => t.id === id)
        const isActive = terminal && !terminal.isMinimized

        return (
          <button
            key={id}
            className={`${isMobile ? "w-9 h-9" : "w-10 h-10"} rounded-xl flex items-center justify-center transition-all duration-200 ${
              isActive ? "bg-ctp-surface2 shadow-md" : "bg-ctp-surface1 hover:bg-ctp-surface2"
            }`}
            onClick={() => handleClick(id)}
          >
            <div className={`${isActive ? "text-ctp-text" : "text-ctp-subtext0"}`}>{getIconForTerminal(id)}</div>
          </button>
        )
      })}
    </div>
  )
}

export default Dock
