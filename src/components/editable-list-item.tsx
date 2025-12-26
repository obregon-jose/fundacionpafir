"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { useAuth } from "@/lib/auth-context"
import { useEditable } from "@/lib/editable-context"
import { Pencil, Check, X } from "lucide-react"

interface EditableListItemProps {
  path: string
  value: string
  className?: string
  children?: React.ReactNode
}

export function EditableListItem({ path, value, className = "", children }: EditableListItemProps) {
  const { isEditMode } = useAuth()
  const { updateField } = useEditable()
  const [isEditing, setIsEditing] = useState(false)
  const [tempValue, setTempValue] = useState(value)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isEditing])

  useEffect(() => {
    setTempValue(value)
  }, [value])

  if (!isEditMode) {
    return <>{children || <span className={className}>{value}</span>}</>
  }

  if (isEditing) {
    return (
      <div className="inline-flex items-center gap-2 w-full">
        <input
          ref={inputRef}
          type="text"
          value={tempValue}
          onChange={(e) => setTempValue(e.target.value)}
          className="flex-1 border-2 border-primary rounded px-2 py-1 bg-background text-foreground text-sm"
        />
        <button
          onClick={() => {
            updateField(path, tempValue)
            setIsEditing(false)
          }}
          className="p-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
          <Check className="h-3 w-3" />
        </button>
        <button
          onClick={() => {
            setTempValue(value)
            setIsEditing(false)
          }}
          className="p-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          <X className="h-3 w-3" />
        </button>
      </div>
    )
  }

  return (
    <div
      className="inline-flex items-center gap-1 border border-dashed border-primary/40 rounded px-1 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer"
      onClick={() => setIsEditing(true)}
    >
      {children || <span className={className}>{value}</span>}
      <Pencil className="h-2.5 w-2.5 text-primary flex-shrink-0" />
    </div>
  )
}
