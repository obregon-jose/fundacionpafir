"use client"

import { useEditable } from "@/lib/editable-context"
import { useAuth } from "@/lib/auth-context"
import { EditableText } from "@/components/editable-text"
import { EditableImage } from "@/components/editable-image"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowDown, Heart } from "lucide-react"
import Image from "next/image"
import { WhatsAppIcon } from "@/app/icons"

export function HeroSection() {
  const { data } = useEditable()
  const { isEditMode } = useAuth()

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${data.contact.whatsapp}?text=Hola, me gustaría obtener información sobre los servicios de la Fundación PAFIR.`,
      "_blank",
    )
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <EditableImage
          path="hero.backgroundImage"
          src={data.hero.backgroundImage}
          alt="Hero background"
          width={1600}
          height={800}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logo prominente */}
          <div
            className={`flex justify-center mb-6 `}
          >
            <Image
              src={data.logo}
              alt={data.name}
              width={150}
              height={150}
              className="rounded-full shadow-2xl"
            />
          </div>
          {/* Centro de Apoyo Psicológico, Social y Pedagógico */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
            {/* // path="hero.badge" */}
            <Heart className="h-4 w-4 animate-ping" />
            {/* value= */}
            {`${data.name}: ${data.slogan}`}
            {/* as="span" */}
            
          </div>

          {/* <EditableText
            path="fullName"
            value={data.fullName}
            as="h1"
            className="text-3xl md:text-5xl lg:text-5xl font-bold tracking-tight text-foreground text-balance"
          /> */}

          <EditableText
            path="hero.subtitle"
            value={data.hero.subtitle}
            as="p"
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty"
            multiline
          />

          {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-lg px-8" onClick={handleWhatsAppClick}>
              <WhatsAppIcon className="mr-2 h-6 w-6" />
              Contáctanos por WhatsApp
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <a href="#services">Ver Servicios</a>
            </Button>
          </div> */}
        </div>
        {/* Stats Preview */}
        {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {data.about.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div> */}

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  )
}
