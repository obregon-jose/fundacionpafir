"use client"

import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { useEditable } from "@/lib/editable-context"
import { ImageIcon, Check, X, Pencil } from "lucide-react"
import Image from "next/image"

interface EditableImageProps {
  path: string
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function EditableImage({ path, src, alt, width, height, className = "" }: EditableImageProps) {
  const { isEditMode } = useAuth()
  const { updateField } = useEditable()
  const [isEditing, setIsEditing] = useState(false)
  const [tempUrl, setTempUrl] = useState(src)

  if (!isEditMode) {
    return <Image src={src || "/placeholder.svg"} alt={alt} width={width} height={height} className={className} />
  }

  if (isEditing) {
    return (
      <div className="relative border-2 border-dashed border-primary rounded-lg p-4 bg-muted">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">URL de la imagen:</span>
          </div>
          <input
            type="text"
            value={tempUrl}
            onChange={(e) => setTempUrl(e.target.value)}
            placeholder="https://ejemplo.com/imagen.jpg"
            className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
          />
          <div className="flex gap-2">
            <button
              onClick={() => {
                updateField(path, tempUrl)
                setIsEditing(false)
              }}
              className="flex items-center gap-1 px-3 py-1.5 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              <Check className="h-4 w-4" /> Guardar
            </button>
            <button
              onClick={() => {
                setTempUrl(src)
                setIsEditing(false)
              }}
              className="flex items-center gap-1 px-3 py-1.5 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            >
              <X className="h-4 w-4" /> Cancelar
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="relative border-2 border-dashed border-primary/50 rounded-lg overflow-hidden hover:border-primary transition-colors cursor-pointer group"
      onClick={() => setIsEditing(true)}
    >
      <Image src={src || "/placeholder.svg"} alt={alt} width={width} height={height} className={className} />
      {/* Icono de lápiz siempre visible */}
      <div className="absolute top-2 right-2 p-2 bg-primary/80 text-primary-foreground rounded-lg shadow-lg group-hover:bg-primary transition-colors">
        <Pencil className="h-4 w-4" />
      </div>
      {/* Overlay al hover */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg">
          <ImageIcon className="h-5 w-5" />
          Cambiar imagen
        </div>
      </div>
    </div>
  )
}
