"use client"

import type React from "react"
import { Github, Linkedin, FileText, Mail, Twitter } from "lucide-react"

interface TopBarProps {
  time: Date
}

const TopBar: React.FC<TopBarProps> = ({ time }) => {
  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <div className="h-10 bg-ctp-crust text-ctp-text flex items-center justify-between px-4 text-xs rounded-b-xl">
      <div className="flex items-center">
        <span className="font-bold mr-4 hidden sm:inline">Portfolio OS</span>
        <div className="flex space-x-3 sm:space-x-4">
          <a
            href="https://github.com/mellowbricks"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-ctp-blue transition-colors"
          >
            <Github className="w-4 h-4 mr-1" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/melbinkuriakose"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-ctp-blue transition-colors"
          >
            <Linkedin className="w-4 h-4 mr-1" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-ctp-blue transition-colors"
          >
            <FileText className="w-4 h-4 mr-1" />
            <span className="hidden sm:inline">Resume</span>
          </a>
          <a href="mailto:melbinmk04@gmail.com" className="flex items-center hover:text-ctp-blue transition-colors">
            <Mail className="w-4 h-4 mr-1" />
            <span className="hidden sm:inline">Email</span>
          </a>
          <a
            href="https://mellowbricks.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-ctp-blue transition-colors"
          >
            <Twitter className="w-4 h-4 mr-1" />
            <span className="hidden sm:inline">Website</span>
          </a>
        </div>
      </div>
      <div className="flex items-center">
        <span>{formattedTime}</span>
      </div>
    </div>
  )
}

export default TopBar
