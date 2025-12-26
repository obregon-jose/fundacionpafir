"use client"

import Link from "next/link"
import Image from "next/image"
import { useEditable } from "@/lib/editable-context"
import { useAuth } from "@/lib/auth-context"
import { EditableText } from "@/components/editable-text"
import { Heart, Facebook, MessageCircle, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const { data } = useEditable()
  const { isEditMode } = useAuth()

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${data.contact.whatsapp}?text=Hola, me gustaría obtener información sobre la Fundación PAFIR.`,
      "_blank",
    )
  }

  return (
    <footer className={`bg-card border-t py-16 `}>
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src={data.logo || "/placeholder.svg"}
                alt={data.name}
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <span className="font-bold text-3xl text-green-800 text-card-foreground block">{data.name}</span>
                {/* <EditableText path="tagline" value={data.tagline} as="span" className="text-xs text-muted-foreground" /> */}
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">{data.fullName}</p>
            <p>
              Centro de apoyo Psicológico, social y pedagógico dedicada a impactar las comunidades a través de proyectos innovadores y sostenibles.
            </p>

            {/* Social Links */}
            {/* <div className="flex gap-3 mt-6">
              {data.contact.social.facebook && (
                <a
                  href={data.contact.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              <button
                onClick={handleWhatsAppClick}
                className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center text-green-600 hover:bg-green-500 hover:text-white transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-card-foreground">Enlaces rápidos</h4>
            <ul className="space-y-0">
              {data.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-card-foreground">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li
                className={`flex items-start gap-2 text-muted-foreground `}
              >
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary" />
                <span className="text-muted-foreground text-sm">
                  {data.contact.address}
                </span>
              </li>
              <li
                className={`flex items-center gap-2 text-muted-foreground `}
              >
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground text-sm">
                  {data.contact.phone}
                </span>
              </li>
              <div
                className={`flex items-center gap-2 text-muted-foreground `}
              >
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground text-sm">
                  {data.contact.email}
                 
                </span>
              </div>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-center text-muted-foreground">
            © {new Date().getFullYear()} Fundación {data.name}. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Hecho con <Heart className="h-4 w-4 text-red-500 fill-red-500" /> por José Obregón
          </p>
        </div>
      </div>
    </footer>
  )
}
