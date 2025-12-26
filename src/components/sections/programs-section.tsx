"use client"

import { useEditable } from "@/lib/editable-context"
import { EditableText } from "@/components/editable-text"
import { EditableImage } from "@/components/editable-image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ProgramsSection() {
  const { data } = useEditable()

  return (
    <section id="programs" className="py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Lo que hacemos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Nuestros Programas</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Desarrollamos programas integrales que abordan las necesidades más urgentes de las comunidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.programs.map((program, index) => (
            <div
              key={program.id}
              className="group bg-card rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <EditableImage
                  path={`programs.${index}.image`}
                  src={program.image}
                  alt={program.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {program.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <EditableText
                  path={`programs.${index}.title`}
                  value={program.title}
                  as="h3"
                  className="text-xl font-semibold mb-3 text-card-foreground"
                />
                <EditableText
                  path={`programs.${index}.description`}
                  value={program.description}
                  as="p"
                  className="text-muted-foreground mb-4"
                />
                <Button variant="ghost" className="group/btn p-0 h-auto">
                  Ver más <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
