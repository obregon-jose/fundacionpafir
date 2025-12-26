"use client"

import type React from "react"
import { useEditable } from "@/lib/editable-context"
import { useAuth } from "@/lib/auth-context"
import { EditableText } from "@/components/editable-text"
import { EditableImage } from "@/components/editable-image"
import { Target, Eye, Heart, BookOpen, Users, Handshake } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  target: <Target className="h-8 w-8" />,
  eye: <Eye className="h-8 w-8" />,
  heart: <Heart className="h-6 w-6" />,
  book: <BookOpen className="h-6 w-6" />,
  users: <Users className="h-6 w-6" />,
  handshake: <Handshake className="h-6 w-6" />,
}

export function AboutSection() {
  const { data } = useEditable()
  const { isEditMode } = useAuth()

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        {/* About */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Conócenos
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {data.about.title}
            </h2>
            <EditableText
              path="about.description"
              value={data.about.description}
              as="p"
              className="text-muted-foreground text-lg leading-relaxed"
              multiline
            />
            {data.about.secondaryDescription && (
              <EditableText
                path="about.secondaryDescription"
                value={data.about.secondaryDescription}
                as="p"
                className="text-muted-foreground text-lg leading-relaxed"
                multiline
              />
            )}
          </div>
          <div className="relative">
            <EditableImage
              path="about.image"
              src={data.about.image}
              alt="Sobre nosotros"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl w-full"
            />
            <div
              className={`absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg `}
            >
              <span className="text-3xl font-bold block" >{data.name}</span> 
              <span className="text-sm block mt-1">{data.slogan2}</span>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div
            className={`bg-card p-8 rounded-2xl border shadow-sm ${isEditMode ? "border-dashed border-primary/30" : ""}`}
          >
            {/* <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
              {iconMap[data.missionVision.mission.icon]}
            </div> */}
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">{data.missionVision.mission.title}</h3>
            
            <EditableText
              path="missionVision.mission.description"
              value={data.missionVision.mission.description}
              as="p"
              className="text-muted-foreground leading-relaxed italic"
              multiline
            />
          </div>
          <div
            className={`bg-card p-8 rounded-2xl border shadow-sm ${isEditMode ? "border-dashed border-primary/30" : ""}`}
          >
            {/* <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
              {iconMap[data.missionVision.vision.icon]}
            </div> */}
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">{data.missionVision.vision.title}</h3>
            <EditableText
              path="missionVision.vision.description"
              value={data.missionVision.vision.description}
              as="p"
              className="text-muted-foreground leading-relaxed italic"
              multiline
            />
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">Nuestros Valores</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.missionVision.values.map((value, index) => (
              <div
                key={index}
                className={`bg-card p-6 rounded-xl border text-center hover:shadow-lg transition-shadow ${isEditMode ? "border-dashed border-primary/30" : ""}`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                  {iconMap[value.icon]}
                </div>
                <EditableText
                  path={`missionVision.values.${index}.title`}
                  value={value.title}
                  as="h4"
                  className="font-semibold mb-2 text-card-foreground"
                />
                <EditableText
                  path={`missionVision.values.${index}.description`}
                  value={value.description}
                  as="p"
                  className="text-sm text-muted-foreground"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
