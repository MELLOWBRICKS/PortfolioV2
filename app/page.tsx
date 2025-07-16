"use client"

import type React from "react"

import { useEffect, useState, useRef, useCallback } from "react"
import Desktop from "@/components/desktop"
import Terminal from "@/components/terminal"
import Dock from "@/components/dock"
import TopBar from "@/components/top-bar"
import { TerminalProvider } from "@/components/terminal-context"
import { EducationSection } from "@/components/sections/education"
import { ProjectsSection } from "@/components/sections/projects"
import { ExperienceSection } from "@/components/sections/experience"
import { ContactForm } from "@/components/sections/contact"
import { useMobile } from "@/hooks/use-mobile"
import { AboutSection } from "@/components/sections/about"
export default function Home() {
  const [terminals, setTerminals] = useState<
    Array<{
      id: string
      title: string
      content: React.ReactNode
      position: { x: number; y: number }
      size: { width: number; height: number }
      zIndex: number
      isActive: boolean
      isMinimized: boolean
      isMaximized: boolean
      prevSize?: { width: number; height: number }
      prevPosition?: { x: number; y: number }
    }>
  >([])

  const [highestZIndex, setHighestZIndex] = useState(100)
  const [time, setTime] = useState(new Date())
  const desktopRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Initialize with no terminals open
    setTerminals([])

    // Update time every second
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const getCenterPosition = () => {
    if (!desktopRef.current) return { x: 100, y: 100 }

    const desktopWidth = desktopRef.current.clientWidth
    const desktopHeight = desktopRef.current.clientHeight

    const terminalWidth = isMobile ? Math.min(320, desktopWidth - 20) : 600
    const terminalHeight = isMobile ? Math.min(400, desktopHeight - 100) : 400

    return {
      x: Math.max(0, (desktopWidth - terminalWidth) / 2),
      y: Math.max(0, (desktopHeight - terminalHeight) / 2),
    }
  }

  const getTerminalSize = () => {
    if (!desktopRef.current) return { width: 600, height: 400 }

    const desktopWidth = desktopRef.current.clientWidth
    const desktopHeight = desktopRef.current.clientHeight

    const width = isMobile
      ? Math.min(320, desktopWidth - 20)
      : Math.floor(Math.random() * (800 - 500 + 1)) + 500
    const height = isMobile
      ? Math.min(400, desktopHeight - 100)
      : Math.floor(Math.random() * (600 - 300 + 1)) + 300

    return { width, height }
  }

  const activateTerminal = (id: string) => {
    setTerminals((prev) =>
      prev.map((terminal) => ({
        ...terminal,
        isActive: terminal.id === id,
        zIndex: terminal.id === id ? highestZIndex + 1 : terminal.zIndex,
        isMinimized: terminal.id === id ? false : terminal.isMinimized,
      })),
    )
    setHighestZIndex(highestZIndex + 1)
  }

  const closeTerminal = (id: string) => {
    setTerminals((prev) => prev.filter((terminal) => terminal.id !== id))
  }

  const minimizeTerminal = (id: string) => {
    setTerminals((prev) =>
      prev.map((terminal) => ({
        ...terminal,
        isMinimized: terminal.id === id ? true : terminal.isMinimized,
        isActive: terminal.id === id ? false : terminal.isActive,
      })),
    )
  }

  const maximizeTerminal = (id: string) => {
    if (!desktopRef.current) return

    const desktopWidth = desktopRef.current.clientWidth
    const desktopHeight = desktopRef.current.clientHeight

    setTerminals((prev) =>
      prev.map((terminal) => {
        if (terminal.id !== id) return terminal

        if (terminal.isMaximized) {
          // Restore previous size and position
          return {
            ...terminal,
            isMaximized: false,
            size: terminal.prevSize || getTerminalSize(),
            position: terminal.prevPosition || getCenterPosition(),
          }
        } else {
          // Maximize terminal
          return {
            ...terminal,
            isMaximized: true,
            prevSize: terminal.size,
            prevPosition: terminal.position,
            size: {
              width: desktopWidth,
              height: desktopHeight,
            },
            position: { x: 0, y: 0 },
          }
        }
      }),
    )
  }

  const openTerminal = (id: string) => {
    const terminalExists = terminals.some((terminal) => terminal.id === id)

    if (terminalExists) {
      setTerminals((prev) =>
        prev.map((terminal) => ({
          ...terminal,
          isMinimized: terminal.id === id ? false : terminal.isMinimized,
          isActive: terminal.id === id,
          zIndex: terminal.id === id ? highestZIndex + 1 : terminal.zIndex,
        })),
      )
    } else {
      let content
      const title = id

      switch (id) {
        case "about":
          content = <AboutSection />
          break
        case "education":
          content = <EducationSection />
          break
        case "projects":
          content = <ProjectsSection />
          break
        case "experience":
          content = <ExperienceSection />
          break
        case "contact":
          content = <ContactForm />
          break
        default:
          content = <div>Terminal</div>
      }

      const centerPosition = getCenterPosition()
      const terminalSize = getTerminalSize()

      const newTerminal = {
        id,
        title,
        content,
        position: centerPosition,
        size: terminalSize,
        zIndex: highestZIndex + 1,
        isActive: true,
        isMinimized: false,
        isMaximized: false,
      }

      setTerminals((prev) => [...prev, newTerminal])

      if (isMobile) {
        maximizeTerminal(id)
      }
    }

    setHighestZIndex(highestZIndex + 1)
  }

  const updateTerminalPosition = (id: string, position: { x: number; y: number }) => {
    setTerminals((prev) => prev.map((terminal) => (terminal.id === id ? { ...terminal, position } : terminal)))
  }

  const updateTerminalSize = (id: string, size: { width: number; height: number }) => {
    setTerminals((prev) => prev.map((terminal) => (terminal.id === id ? { ...terminal, size } : terminal)))
  }

  return (
    <TerminalProvider closeTerminal={closeTerminal}>
      <div className="h-screen w-screen overflow-hidden bg-ctp-base text-ctp-text font-mono">
        <TopBar time={time} />
        <Desktop ref={desktopRef}>
          {terminals
            .filter((terminal) => !terminal.isMinimized)
            .map((terminal) => (
              <Terminal
                key={terminal.id}
                id={terminal.id}
                title={terminal.title}
                position={terminal.position}
                size={terminal.size}
                zIndex={terminal.zIndex}
                isActive={terminal.isActive}
                isMaximized={terminal.isMaximized}
                onActivate={activateTerminal}
                onClose={closeTerminal}
                onMinimize={minimizeTerminal}
                onMaximize={maximizeTerminal}
                onUpdatePosition={updateTerminalPosition}
                onUpdateSize={updateTerminalSize}
                isMobile={isMobile}
              >
                {terminal.content}
              </Terminal>
            ))}
        </Desktop>
        <Dock
          terminals={terminals}
          onTerminalClick={(id) => {
            const terminal = terminals.find((t) => t.id === id)
            if (terminal?.isMinimized) {
              openTerminal(id)
            } else if (terminal) {
              minimizeTerminal(id)
            } else {
              openTerminal(id)
            }
          }}
          isMobile={isMobile}
        />
      </div>
    </TerminalProvider>
  )
}
