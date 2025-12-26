"use client"

import type React from "react"
import { useState } from "react"
import { useEditable } from "@/lib/editable-context"
import { useAuth } from "@/lib/auth-context"
import { EditableText } from "@/components/editable-text"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Facebook, MessageCircle, Send } from "lucide-react"
import { WhatsAppIcon } from "@/app/icons"

export function ContactSection() {
  const { data } = useEditable()
  const { isEditMode } = useAuth()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `*Nuevo mensaje desde la web*%0A%0A*Nombre:* ${formData.name}%0A*Email:* ${formData.email}%0A*Asunto:* ${formData.subject}%0A%0A*Mensaje:*%0A${formData.message}`
    window.open(`https://wa.me/${data.contact.whatsapp}?text=${message}`, "_blank")
  }

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${data.contact.whatsapp}?text=Hola, me gustaría obtener información sobre los servicios de la Fundación PAFIR.`,
      "_blank",
    )
  }

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Contáctanos
          </div>
          <EditableText
            path="contactSection.title"
            value="¿Tienes preguntas?"
            as="h2"
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
          />
          <EditableText
            path="contactSection.description"
            value="Estamos aquí para ayudarte. No dudes en comunicarte con nosotros."
            as="p"
            className="text-muted-foreground max-w-2xl mx-auto"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div
              className={`bg-card p-8 rounded-2xl border shadow-sm ${isEditMode ? "border-dashed border-primary/30" : ""}`}
            >
              <h3 className="text-xl font-semibold mb-6 text-card-foreground">Información de Contacto</h3>
              <div className="space-y-4">
                <div
                  className={`flex items-start gap-4 ${isEditMode ? "p-2 rounded-lg border border-dashed border-primary/20" : ""}`}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Dirección</p>
                    <EditableText
                      path="contact.address"
                      value={data.contact.address}
                      as="p"
                      className="text-muted-foreground"
                    />
                  </div>
                </div>
                <div
                  className={`flex items-start gap-4 ${isEditMode ? "p-2 rounded-lg border border-dashed border-primary/20" : ""}`}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Teléfono / WhatsApp</p>
                    <EditableText
                      path="contact.phone"
                      value={data.contact.phone}
                      as="p"
                      className="text-muted-foreground"
                    />
                  </div>
                </div>
                <div
                  className={`flex items-start gap-4 ${isEditMode ? "p-2 rounded-lg border border-dashed border-primary/20" : ""}`}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Email</p>
                    <EditableText
                      path="contact.email"
                      value={data.contact.email}
                      as="p"
                      className="text-muted-foreground"
                    />
                  </div>
                </div>
                {/*<div
                  className={`flex items-start gap-4 ${isEditMode ? "p-2 rounded-lg border border-dashed border-primary/20" : ""}`}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                   <div>
                    <p className="font-medium text-card-foreground">Horario</p>
                    <EditableText
                      path="contact.hours"
                      value={data.contact.hours}
                      as="p"
                      className="text-muted-foreground"
                    />
                  </div> 
                </div>*/}
              </div>

              {/* WhatsApp Button */}
                {/* <div className="flex gap-4 mt-6">
                <Button className="flex-1" size="lg" onClick={handleWhatsAppClick}>
                  <WhatsAppIcon className="mr-2 h-6 w-6" />
                  Escríbenos por WhatsApp
                </Button>
                <Button className="flex-1" size="lg" onClick={handleWhatsAppClick}>
                  <Facebook className="mr-2 h-6 w-6" />
                  Síguenos
                </Button>
                </div> */}
            </div>

            {/* Social Media & Map */}
            <div
              className={`bg-card p-8 rounded-2xl border shadow-sm ${isEditMode ? "border-dashed border-primary/30" : ""}`}
            >

              {/* Google Maps */}
              <div className="rounded-xl overflow-hidden">
                <iframe
                  src={data.contact.mapEmbed}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación PAFIR"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* <div
            className={`bg-card p-8 rounded-2xl border shadow-sm ${isEditMode ? "border-dashed border-primary/30" : ""}`}
          >
            <h3 className="text-xl font-semibold mb-6 text-card-foreground">Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Asunto</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="¿En qué podemos ayudarte?"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Escribe tu mensaje aquí..."
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                <Send className="mr-2 h-5 w-5" />
                Enviar por WhatsApp
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Al enviar, se abrirá WhatsApp con tu mensaje listo para enviar
              </p>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  )
}
