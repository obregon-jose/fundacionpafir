"use client"

import { useState } from "react"
import { useEditable } from "@/lib/editable-context"
import { useAuth } from "@/lib/auth-context"
import { EditableImage } from "@/components/editable-image"
import { EditableText } from "@/components/editable-text"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"
import Image from "next/image"

export function GallerySection() {
  const { data } = useEditable()
  const { isEditMode } = useAuth()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  if (data.gallery.length === 0) {
    return null
  }

  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Nuestra Labor
          </div>
          <EditableText
            path="gallerySection.title"
            value="Galería de Actividades"
            as="h2"
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
          />
          <EditableText
            path="gallerySection.description"
            value="Conoce algunas de las actividades y encuentros que realizamos con la comunidad"
            as="p"
            className="text-muted-foreground max-w-2xl mx-auto"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.gallery.map((item, index) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-2xl group ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              } ${isEditMode ? "border-2 border-dashed border-primary/30" : ""}`}
            >
              {isEditMode ? (
                <div className="h-full">
                  <EditableImage
                    path={`gallery.${index}.image`}
                    src={item.image}
                    alt={item.title}
                    width={index === 0 ? 800 : 400}
                    height={index === 0 ? 600 : 300}
                    className={`w-full object-cover ${index === 0 ? "h-full min-h-[400px]" : "h-[200px] md:h-[250px]"}`}
                  />
                  <div className="p-2 bg-card border-t">
                    <EditableText
                      path={`gallery.${index}.title`}
                      value={item.title}
                      as="span"
                      className="text-sm font-medium text-card-foreground"
                    />
                  </div>
                </div>
              ) : (
                <div className="cursor-pointer h-full" onClick={() => setSelectedImage(item.image)}>
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={index === 0 ? 800 : 400}
                    height={index === 0 ? 600 : 300}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      index === 0 ? "h-full min-h-[400px]" : "h-[200px] md:h-[250px]"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h4 className="font-semibold">{item.title}</h4>
                      {item.description && <p className="text-sm text-white/80">{item.description}</p>}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            {selectedImage && (
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Galería"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
