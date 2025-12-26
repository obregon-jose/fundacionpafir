"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/lib/auth-context"
import { useEditable } from "@/lib/editable-context"
import { Menu, X, LogOut, Edit, Save, RotateCcw, User, Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const { data, hasChanges, saveChanges, resetData } = useEditable()
  const { isAuthenticated, isEditMode, setEditMode, logout } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {isEditMode && (
        <div className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground py-2 px-4">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Pencil className="h-4 w-4 animate-pulse" />
              <span className="text-sm font-medium">
                Modo Edición Activo - Haz clic en los elementos con borde punteado para editarlos
              </span>
            </div>
            <div className="flex items-center gap-2">
              {hasChanges && (
                <>
                  <Button size="sm" variant="secondary" onClick={saveChanges}>
                    <Save className="h-4 w-4 mr-1" /> Guardar
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={resetData}
                    className="text-primary-foreground hover:bg-primary-foreground/20"
                  >
                    <RotateCcw className="h-4 w-4 mr-1" /> Resetear
                  </Button>
                </>
              )}
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setEditMode(false)}
                className="text-primary-foreground hover:bg-primary-foreground/20"
              >
                <X className="h-4 w-4 mr-1" /> Salir del Editor
              </Button>
            </div>
          </div>
        </div>
      )}

      <header
        className={`fixed left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b ${isEditMode ? "top-10" : "top-0"}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={data.logo || "/placeholder.svg"}
                alt={data.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="hidden- sm:block-">
                <span className="font-bold text-3xl text-foreground text-green-800 sm:text-xl">{data.name}</span>
                <span className="text-xs text-muted-foreground block- hidden sm:block">{data.tagline}</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {data.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Auth & Edit Controls */}
            <div className="flex items-center gap-2">
              {isAuthenticated && (
                <>
                  <Button
                    variant={isEditMode ? "default" : "outline"}
                    size="sm"
                    onClick={() => setEditMode(!isEditMode)}
                    className={`hidden sm:flex ${isEditMode ? "bg-primary animate-pulse" : "bg-transparent"}`}
                  >
                    <Edit className="h-4 w-4 mr-1" />
                    {isEditMode ? "Editando" : "Editar"}
                  </Button>
                  {!isEditMode && (
                    <Button size="sm" variant="ghost" onClick={logout} className="hidden sm:flex">
                      <LogOut className="h-4 w-4 mr-1" /> Salir
                    </Button>
                  )}
                </>
              )}

              {/* {!isAuthenticated && (
                <Button asChild size="sm" variant="outline" className="hidden sm:flex bg-transparent">
                  <Link href="/login">
                    <User className="h-4 w-4 mr-1" /> 
                  </Link>
                </Button>
              )} */}

              {/* Mobile Menu Button */}
              <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <nav className="flex flex-col gap-2">
                {data.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                {/* Mobile auth controls */}
                {isAuthenticated ? (
                  <>
                    <Button
                      variant={isEditMode ? "default" : "outline"}
                      size="sm"
                      onClick={() => setEditMode(!isEditMode)}
                      className="mx-4 mt-2"
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      {isEditMode ? "Editando" : "Editar"}
                    </Button>
                    {!isEditMode && (
                      <Button size="sm" variant="ghost" onClick={logout} className="mx-4">
                        <LogOut className="h-4 w-4 mr-1" /> Salir
                      </Button>
                    )}
                  </>
                ) : (<> </>
                  // <Link
                  //   href="/login"
                  //   className="mx-4 mt-2 px-4 py-2 text-sm font-medium text-center bg-primary text-primary-foreground rounded-md"
                  //   onClick={() => setIsMenuOpen(false)}
                  // >
                  //   Admin
                  // </Link>
                )}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
