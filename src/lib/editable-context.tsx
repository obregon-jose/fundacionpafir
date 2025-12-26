"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { foundationData } from "@/data/foundation-data"
import type { FoundationData } from "@/types/foundation"

interface EditableContextType {
  data: FoundationData
  updateField: (path: string, value: unknown) => void
  resetData: () => void
  hasChanges: boolean
  saveChanges: () => Promise<void>
}

const EditableContext = createContext<EditableContextType | undefined>(undefined)

export function EditableProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<FoundationData>(foundationData)
  const [hasChanges, setHasChanges] = useState(false)

  const updateField = (path: string, value: unknown) => {
    setData((prev) => {
      const newData = { ...prev }
      const keys = path.split(".")
      let current: Record<string, unknown> = newData

      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i]
        if (typeof current[key] === "object" && current[key] !== null) {
          current[key] = Array.isArray(current[key])
            ? [...(current[key] as unknown[])]
            : { ...(current[key] as Record<string, unknown>) }
          current = current[key] as Record<string, unknown>
        }
      }

      current[keys[keys.length - 1]] = value
      return newData
    })
    setHasChanges(true)
  }

  const resetData = () => {
    setData(foundationData)
    setHasChanges(false)
  }

  const saveChanges = async () => {
    // Aquí se guardaría en Firebase
    console.log("Guardando cambios:", data)
    setHasChanges(false)
    // En producción: await firebase.database().ref('foundation').set(data)
  }

  return (
    <EditableContext.Provider value={{ data, updateField, resetData, hasChanges, saveChanges }}>
      {children}
    </EditableContext.Provider>
  )
}

export function useEditable() {
  const context = useContext(EditableContext)
  if (context === undefined) {
    throw new Error("useEditable must be used within an EditableProvider")
  }
  return context
}
