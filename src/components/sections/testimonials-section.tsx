"use client"

import { useEditable } from "@/lib/editable-context"
import { EditableText } from "@/components/editable-text"
import { EditableImage } from "@/components/editable-image"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const { data } = useEditable()

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary-foreground/20 rounded-full text-sm font-medium mb-4">
            Testimonios
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Historias de Impacto</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Las voces de quienes han sido parte de nuestra historia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 relative">
              <Quote className="h-10 w-10 text-primary-foreground/30 absolute top-6 right-6" />
              <div className="flex items-center gap-4 mb-6">
                <EditableImage
                  path={`testimonials.${index}.image`}
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={200}
                  height={200}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary-foreground/30"
                />
                <div>
                  <EditableText
                    path={`testimonials.${index}.name`}
                    value={testimonial.name}
                    as="h4"
                    className="font-semibold"
                  />
                  <EditableText
                    path={`testimonials.${index}.role`}
                    value={testimonial.role}
                    as="p"
                    className="text-sm text-primary-foreground/70"
                  />
                </div>
              </div>
              <EditableText
                path={`testimonials.${index}.content`}
                value={testimonial.content}
                as="p"
                className="text-primary-foreground/90 italic leading-relaxed"
                multiline
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
