"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { X, Minus, Maximize2, Minimize2 } from "lucide-react"
import { useTerminal } from "./terminal-context"

interface TerminalProps {
  id: string
  title: string
  children: React.ReactNode
  position: { x: number; y: number }
  size: { width: number; height: number }
  zIndex: number
  isActive: boolean
  isMaximized: boolean
  isMobile: boolean
  onActivate: (id: string) => void
  onClose: (id: string) => void
  onMinimize: (id: string) => void
  onMaximize: (id: string) => void
  onUpdatePosition: (id: string, position: { x: number; y: number }) => void
  onUpdateSize: (id: string, size: { width: number; height: number }) => void
}

const Terminal: React.FC<TerminalProps> = ({
  id,
  title,
  children,
  position,
  size,
  zIndex,
  isActive,
  isMaximized,
  isMobile,
  onActivate,
  onClose,
  onMinimize,
  onMaximize,
  onUpdatePosition,
  onUpdateSize,
}) => {
  const terminalRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 })
  const { executeCommand } = useTerminal()
  const [terminalContent, setTerminalContent] = useState<React.ReactNode>(children)
  const [inputValue, setInputValue] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setTerminalContent(children)
  }, [children])

  useEffect(() => {
    if (isActive && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isActive])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && !isMaximized) {
        const newX = e.clientX - dragOffset.x
        const newY = e.clientY - dragOffset.y
        onUpdatePosition(id, { x: newX, y: newY })
      } else if (isResizing && !isMaximized) {
        const newWidth = resizeStart.width + (e.clientX - resizeStart.x)
        const newHeight = resizeStart.height + (e.clientY - resizeStart.y)
        onUpdateSize(id, {
          width: Math.max(300, newWidth),
          height: Math.max(200, newHeight),
        })
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      setIsResizing(false)
    }

    if (isDragging || isResizing) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, isResizing, dragOffset, resizeStart, onUpdatePosition, onUpdateSize, isMaximized, id])

  const handleMouseDown = () => {
    if (!isActive) {
      onActivate(id)
    }
  }

  const handleTitleBarMouseDown = (e: React.MouseEvent) => {
    if (isMaximized) return
    e.preventDefault()
    setIsDragging(true)
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    })
  }

  const handleResizeMouseDown = (e: React.MouseEvent, direction: string) => {
    if (isMaximized) return
    e.preventDefault()
    e.stopPropagation()
    setIsResizing(true)
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: size.width,
      height: size.height,
      direction,
    })
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && !isMaximized) {
        const newX = e.clientX - dragOffset.x
        const newY = e.clientY - dragOffset.y
        onUpdatePosition(id, { x: newX, y: newY })
      } else if (isResizing && !isMaximized) {
        const dx = e.clientX - resizeStart.x
        const dy = e.clientY - resizeStart.y

        let newWidth = resizeStart.width
        let newHeight = resizeStart.height
        let newX = position.x
        let newY = position.y

        if (resizeStart.direction.includes("right")) {
          newWidth = resizeStart.width + dx
        }
        if (resizeStart.direction.includes("left")) {
          newWidth = resizeStart.width - dx
          newX = position.x + dx
        }

        if (resizeStart.direction.includes("bottom")) {
          newHeight = resizeStart.height + dy
        }
        if (resizeStart.direction.includes("top")) {
          newHeight = resizeStart.height - dy
          newY = position.y + dy
        }

        onUpdateSize(id, {
          width: Math.max(300, newWidth),
          height: Math.max(200, newHeight),
        })
        onUpdatePosition(id, { x: newX, y: newY })
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      setIsResizing(false)
    }

    if (isDragging || isResizing) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, isResizing, dragOffset, resizeStart, onUpdatePosition, onUpdateSize, isMaximized, id, position])

  return (
    <div
      ref={terminalRef}
      className={`absolute rounded-xl overflow-hidden flex flex-col ${isActive ? "shadow-lg" : "shadow-md"}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        zIndex,
      }}
      onMouseDown={handleMouseDown}
    >
      {/* Resize handles */}
      {!isMaximized && (
        <>
          <div
            className="absolute top-0 right-0 w-2 h-full cursor-ew-resize"
            onMouseDown={(e) => handleResizeMouseDown(e, "right")}
          />
          <div
            className="absolute bottom-0 left-0 w-full h-2 cursor-ns-resize"
            onMouseDown={(e) => handleResizeMouseDown(e, "bottom")}
          />
          <div
            className="absolute top-0 right-0 w-4 h-4 cursor-nesw-resize"
            onMouseDown={(e) => handleResizeMouseDown(e, "top-right")}
          />
          <div
            className="absolute bottom-0 left-0 w-4 h-4 cursor-nesw-resize"
            onMouseDown={(e) => handleResizeMouseDown(e, "bottom-left")}
          />
          <div
            className="absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize"
            onMouseDown={(e) => handleResizeMouseDown(e, "bottom-right")}
          />
        </>
      )}

      {/* Title bar */}
      <div
        className={`h-8 flex items-center px-2 ${isActive ? "bg-ctp-surface0" : "bg-ctp-surface1"} rounded-t-xl`}
        onMouseDown={handleTitleBarMouseDown}
      >
        <div className="flex space-x-2 mr-2">
          <button
            className={`rounded-full ${isMobile ? "w-4 h-4" : "w-3 h-3"} bg-ctp-red hover:bg-ctp-red/80 flex items-center justify-center`}
            onClick={() => onClose(id)}
          >
            <X className="w-2 h-2 text-ctp-base opacity-0 hover:opacity-100" />
          </button>
          <button
            className={`rounded-full ${isMobile ? "w-4 h-4" : "w-3 h-3"} bg-ctp-yellow hover:bg-ctp-yellow/80 flex items-center justify-center`}
            onClick={() => onMinimize(id)}
          >
            <Minus className="w-2 h-2 text-ctp-base opacity-0 hover:opacity-100" />
          </button>
          <button
            className={`rounded-full ${isMobile ? "w-4 h-4" : "w-3 h-3"} bg-ctp-green hover:bg-ctp-green/80 flex items-center justify-center`}
            onClick={() => onMaximize(id)}
          >
            {isMaximized ? (
              <Minimize2 className="w-2 h-2 text-ctp-base opacity-0 hover:opacity-100" />
            ) : (
              <Maximize2 className="w-2 h-2 text-ctp-base opacity-0 hover:opacity-100" />
            )}
          </button>
        </div>
        <div className="flex-1 text-center text-xs font-medium text-ctp-text">{title} - Terminal</div>
      </div>

      {/* Terminal content */}
      <div className="flex-1 bg-ctp-mantle text-ctp-text p-2 overflow-auto font-mono text-sm flex flex-col">
        <div className="flex-1">
          {terminalContent}
        </div>
        <div className="flex mt-2">
          <span className="text-ctp-green mr-1 whitespace-nowrap">melbin@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault()
                const command = inputValue.trim()
                setInputValue("")

                if (command) {
                  const output = executeCommand(command, id)
                  if (output) {
                    setTerminalContent(output)
                  }
                }
              }
            }}
            className="flex-1 bg-transparent outline-none border-none text-ctp-text"
            autoFocus={isActive}
          />
        </div>
      </div>
    </div>
  )
}

export default Terminal
