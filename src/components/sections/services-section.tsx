"use client"

import type React from "react"
import { useEditable } from "@/lib/editable-context"
import { useAuth } from "@/lib/auth-context"
import { EditableText } from "@/components/editable-text"
import { EditableListItem } from "@/components/editable-list-item"
import {
  Brain,
  MessageCircle,
  HeartPulse,
  Compass,
  Home,
  HeartHandshake,
  UserRound,
  UsersRound,
  CheckCircle2,
} from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain className="h-8 w-8" />,
  "message-circle": <MessageCircle className="h-8 w-8" />,
  "heart-pulse": <HeartPulse className="h-8 w-8" />,
  compass: <Compass className="h-8 w-8" />,
  home: <Home className="h-8 w-8" />,
  "heart-handshake": <HeartHandshake className="h-8 w-8" />,
  "user-round": <UserRound className="h-8 w-8" />,
  "users-round": <UsersRound className="h-8 w-8" />,
}

export function ServicesSection() {
  const { data } = useEditable()
  const { isEditMode } = useAuth()

  return (
    <section id="services" className="py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Nuestros Servicios
          </div>
          <EditableText
            path="servicesSection.title"
            value="¿Qué Hacemos?"
            as="h2"
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
          />
          <EditableText
            path="servicesSection.description"
            value="Ofrecemos apoyo integral en el ámbito psicológico, social y pedagógico para toda la familia"
            as="p"
            className="text-muted-foreground max-w-2xl mx-auto"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.services.map((service, serviceIndex) => (
            <div
              key={service.id}
              className={`group bg-card rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ${isEditMode ? "border-dashed border-primary/30" : ""}`}
            >
              <div className="p-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {iconMap[service.icon]}
                </div>
                <EditableText
                  path={`services.${serviceIndex}.title`}
                  value={service.title}
                  as="h3"
                  className="text-lg font-semibold mb-4 text-card-foreground"
                />
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <EditableListItem path={`services.${serviceIndex}.items.${idx}`} value={item}>
                        <span>{item}</span>
                      </EditableListItem>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
