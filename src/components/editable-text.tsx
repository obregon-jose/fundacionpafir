"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useAuth } from "@/lib/auth-context"
import { useEditable } from "@/lib/editable-context"
import { Pencil, Check, X } from "lucide-react"

interface EditableTextProps {
  path: string
  value: string
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
  className?: string
  multiline?: boolean
}

export function EditableText({
  path,
  value,
  as: Component = "p",
  className = "",
  multiline = false,
}: EditableTextProps) {
  const { isEditMode } = useAuth()
  const { updateField } = useEditable()
  const [isEditing, setIsEditing] = useState(false)
  const [tempValue, setTempValue] = useState(value)
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isEditing])

  useEffect(() => {
    setTempValue(value)
  }, [value])

  if (!isEditMode) {
    return <Component className={className}>{value}</Component>
  }

  if (isEditing) {
    return (
      <div className="relative inline-flex items-center gap-2 w-full">
        {multiline ? (
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            className={`${className} border-2 border-primary rounded px-2 py-1 bg-background w-full min-h-[100px] text-foreground`}
          />
        ) : (
          <input
            ref={inputRef as React.RefObject<HTMLInputElement>}
            type="text"
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            className={`${className} border-2 border-primary rounded px-2 py-1 bg-background w-full text-foreground`}
          />
        )}
        <div className="flex gap-1">
          <button
            onClick={() => {
              updateField(path, tempValue)
              setIsEditing(false)
            }}
            className="p-1.5 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
          >
            <Check className="h-4 w-4" />
          </button>
          <button
            onClick={() => {
              setTempValue(value)
              setIsEditing(false)
            }}
            className="p-1.5 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div
      className="relative inline-flex items-center gap-2 border-2 border-dashed border-primary/50 rounded-md px-2 py-1 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group"
      onClick={() => setIsEditing(true)}
    >
      <Component className={className}>{value}</Component>
      <div className="flex-shrink-0 p-1 bg-primary/10 rounded text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        <Pencil className="h-3 w-3" />
      </div>
    </div>
  )
}
