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
  onActivate: () => void
  onClose: () => void
  onMinimize: () => void
  onMaximize: () => void
  onUpdatePosition: (position: { x: number; y: number }) => void
  onUpdateSize: (size: { width: number; height: number }) => void
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
  const [touchStartPos, setTouchStartPos] = useState({ x: 0, y: 0 })

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
        onUpdatePosition({ x: newX, y: newY })
      } else if (isResizing && !isMaximized) {
        const newWidth = resizeStart.width + (e.clientX - resizeStart.x)
        const newHeight = resizeStart.height + (e.clientY - resizeStart.y)
        onUpdateSize({
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
  }, [isDragging, isResizing, dragOffset, resizeStart, onUpdatePosition, onUpdateSize, isMaximized])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isActive) {
      onActivate()
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

  const handleTitleBarTouchStart = (e: React.TouchEvent) => {
    if (isMaximized) return
    e.preventDefault()
    const touch = e.touches[0]
    setTouchStartPos({
      x: touch.clientX,
      y: touch.clientY,
    })
    setIsDragging(true)
    setDragOffset({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    })
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && !isMaximized) {
      const touch = e.touches[0]
      const newX = touch.clientX - dragOffset.x
      const newY = touch.clientY - dragOffset.y
      onUpdatePosition({ x: newX, y: newY })
    } else if (isResizing && !isMaximized) {
      const touch = e.touches[0]
      const newWidth = resizeStart.width + (touch.clientX - resizeStart.x)
      const newHeight = resizeStart.height + (touch.clientY - resizeStart.y)
      onUpdateSize({
        width: Math.max(300, newWidth),
        height: Math.max(200, newHeight),
      })
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    setIsResizing(false)
  }

  const handleResizeMouseDown = (e: React.MouseEvent) => {
    if (isMaximized) return
    e.preventDefault()
    e.stopPropagation()
    setIsResizing(true)
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: size.width,
      height: size.height,
    })
  }

  const handleResizeTouchStart = (e: React.TouchEvent) => {
    if (isMaximized) return
    e.preventDefault()
    e.stopPropagation()
    const touch = e.touches[0]
    setIsResizing(true)
    setResizeStart({
      x: touch.clientX,
      y: touch.clientY,
      width: size.width,
      height: size.height,
    })
  }

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
  }

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
      onTouchStart={handleMouseDown}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Title bar */}
      <div
        className={`h-8 flex items-center px-2 ${isActive ? "bg-ctp-surface0" : "bg-ctp-surface1"} rounded-t-xl`}
        onMouseDown={handleTitleBarMouseDown}
        onTouchStart={handleTitleBarTouchStart}
      >
        <div className="flex space-x-2 mr-2">
          <button
            className="w-3 h-3 rounded-full bg-ctp-red hover:bg-ctp-red/80 flex items-center justify-center"
            onClick={onClose}
          >
            <X className="w-2 h-2 text-ctp-base opacity-0 hover:opacity-100" />
          </button>
          <button
            className="w-3 h-3 rounded-full bg-ctp-yellow hover:bg-ctp-yellow/80 flex items-center justify-center"
            onClick={onMinimize}
          >
            <Minus className="w-2 h-2 text-ctp-base opacity-0 hover:opacity-100" />
          </button>
          <button
            className="w-3 h-3 rounded-full bg-ctp-green hover:bg-ctp-green/80 flex items-center justify-center"
            onClick={onMaximize}
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
      <div className="flex-1 bg-ctp-mantle text-ctp-text p-2 overflow-auto font-mono text-sm">
        {terminalContent}
        <div className="flex mt-2">
          <span className="text-ctp-green mr-1 whitespace-nowrap">melbin@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleInputKeyDown}
            className="flex-1 bg-transparent outline-none border-none text-ctp-text"
            autoFocus={isActive}
          />
        </div>
      </div>

      {/* Resize handle */}
      {!isMaximized && (
        <div
          className="absolute bottom-0 right-0 w-6 h-6 cursor-nwse-resize"
          onMouseDown={handleResizeMouseDown}
          onTouchStart={handleResizeTouchStart}
        >
          <div className="w-0 h-0 border-t-8 border-l-8 border-transparent border-t-ctp-surface0 transform rotate-45 translate-x-1 translate-y-1" />
        </div>
      )}
    </div>
  )
}

export default Terminal
