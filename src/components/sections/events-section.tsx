"use client"

import { useEditable } from "@/lib/editable-context"
import { EditableText } from "@/components/editable-text"
import { EditableImage } from "@/components/editable-image"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"

export function EventsSection() {
  const { data } = useEditable()

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  return (
    <section id="events" className="py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Próximamente
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Próximos Eventos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Participa en nuestras actividades y sé parte del cambio
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {data.events.map((event, index) => (
            <div
              key={event.id}
              className="bg-card rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48">
                <EditableImage
                  path={`events.${index}.image`}
                  src={event.image}
                  alt={event.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <EditableText
                  path={`events.${index}.title`}
                  value={event.title}
                  as="h3"
                  className="text-xl font-semibold mb-3 text-card-foreground"
                />
                <EditableText
                  path={`events.${index}.description`}
                  value={event.description}
                  as="p"
                  className="text-muted-foreground mb-4"
                />
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <Button className="w-full">Registrarse</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
