"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"

interface User {
  username: string
  isAdmin: boolean
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isEditMode: boolean
  setEditMode: (mode: boolean) => void
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Credenciales de demo (en producción, usar Firebase Auth)
const DEMO_CREDENTIALS = {
  username: "admin@pafir.org",
  password: "pafir2024",
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isEditMode, setIsEditMode] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Verificar si hay sesión guardada
    const savedUser = localStorage.getItem("pafir_user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  const login = async (username: string, password: string): Promise<boolean> => {
    // Simulación de autenticación (reemplazar con Firebase)
    if (username === DEMO_CREDENTIALS.username && password === DEMO_CREDENTIALS.password) {
      const userData: User = { username, isAdmin: true }
      setUser(userData)
      localStorage.setItem("pafir_user", JSON.stringify(userData))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    setIsEditMode(false)
    localStorage.removeItem("pafir_user")
    router.push("/")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isEditMode,
        setEditMode: setIsEditMode,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
