"use client"

import type React from "react"
import { createContext, useContext } from "react"
import Neofetch from "./neofetch"
import { AboutSection } from "./sections/about"
import { EducationSection } from "./sections/education"
import { ProjectsSection } from "./sections/projects"
import { ExperienceSection } from "./sections/experience"
import { ContactForm } from "./sections/contact"

interface TerminalContextType {
  executeCommand: (command: string, terminalId: string) => React.ReactNode | null
  closeTerminal?: (id: string) => void
}

const TerminalContext = createContext<TerminalContextType>({
  executeCommand: () => null,
})

export const useTerminal = () => useContext(TerminalContext)

export const TerminalProvider: React.FC<{
  children: React.ReactNode
  closeTerminal?: (id: string) => void
}> = ({ children, closeTerminal }) => {
  const executeCommand = (command: string, terminalId: string): React.ReactNode | null => {
    const args = command.split(" ")
    const cmd = args[0].toLowerCase()

    switch (cmd) {
      case "clear":
        return <div></div>

      case "neofetch":
        return <Neofetch />

      case "exit":
        if (closeTerminal) {
          setTimeout(() => {
            closeTerminal(terminalId)
          }, 100)
          return <div className="text-ctp-green">Exiting terminal...</div>
        }
        return <div className="text-ctp-red">Could not exit terminal</div>

      case "about":
        return <AboutSection />

      case "education":
        return <EducationSection />

      case "projects":
        return <ProjectsSection />

      case "experience":
        return <ExperienceSection />

      case "contact":
        return <ContactForm />

      case "cat":
        if (args.length < 2) {
          return <div className="text-ctp-red">Error: cat command requires a section name</div>
        }

        const section = args[1].toLowerCase()
        switch (section) {
          case "about":
            return <AboutSection />
          case "education":
            return <EducationSection />
          case "projects":
            return <ProjectsSection />
          case "experience":
            return <ExperienceSection />
          case "contact":
            return <ContactForm />
          default:
            return (
              <div className="text-ctp-red">
                Error: Section not found. Available sections: about, education, projects, experience, contact
              </div>
            )
        }

      case "help":
        return (
          <div className="space-y-2">
            <div className="text-ctp-blue font-bold">Available commands:</div>
            <div>
              <span className="text-ctp-green">about</span> - Display information about me
            </div>
            <div>
              <span className="text-ctp-green">projects</span> - View my projects
            </div>
            <div>
              <span className="text-ctp-green">education</span> - View my education history
            </div>
            <div>
              <span className="text-ctp-green">experience</span> - View my work experience
            </div>
            <div>
              <span className="text-ctp-green">contact</span> - View contact form
            </div>
            <div>
              <span className="text-ctp-green">neofetch</span> - Display system information
            </div>
            <div>
              <span className="text-ctp-green">clear</span> - Clear terminal content
            </div>
            <div>
              <span className="text-ctp-green">ls</span> - List directory contents
            </div>
            <div>
              <span className="text-ctp-green">exit</span> - Close the current terminal
            </div>
            <div>
              <span className="text-ctp-green">help</span> - Display this help message
            </div>
          </div>
        )

      case "ls":
        return (
          <div className="space-y-1">
            <div className="text-ctp-blue">about.md</div>
            <div className="text-ctp-blue">education.md</div>
            <div className="text-ctp-blue">projects.md</div>
            <div className="text-ctp-blue">experience.md</div>
            <div className="text-ctp-blue">contact.md</div>
            <div className="text-ctp-blue">resume.pdf</div>
          </div>
        )

      default:
        return (
          <div className="text-ctp-red">
            Command not found: {command}. Type &apos;help&apos; for available commands.
          </div>
        )
    }
  }

  return <TerminalContext.Provider value={{ executeCommand, closeTerminal }}>{children}</TerminalContext.Provider>
}
