"use client"

import { useEditable } from "@/lib/editable-context"
import { EditableText } from "@/components/editable-text"
import { EditableImage } from "@/components/editable-image"
import { Linkedin, Twitter, Mail } from "lucide-react"

export function TeamSection() {
  const { data } = useEditable()

  return (
    <section id="team" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Nuestro equipo
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Conoce al Equipo</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Profesionales comprometidos que trabajan día a día para hacer realidad nuestra misión
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.team.map((member, index) => (
            <div
              key={member.id}
              className="group bg-card rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="relative h-64 overflow-hidden">
                <EditableImage
                  path={`team.${index}.image`}
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <EditableText
                  path={`team.${index}.name`}
                  value={member.name}
                  as="h3"
                  className="text-lg font-semibold text-card-foreground"
                />
                <EditableText
                  path={`team.${index}.role`}
                  value={member.role}
                  as="p"
                  className="text-primary text-sm mb-2"
                />
                <EditableText
                  path={`team.${index}.bio`}
                  value={member.bio}
                  as="p"
                  className="text-muted-foreground text-sm mb-4"
                />
                <div className="flex justify-center gap-3">
                  {member.social?.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.social?.twitter && (
                    <a
                      href={member.social.twitter}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  {member.social?.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
