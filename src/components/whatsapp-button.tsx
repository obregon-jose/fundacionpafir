"use client"

import { WhatsAppIcon } from "@/app/icons"
import { useEditable } from "@/lib/editable-context"

export function WhatsAppButton() {
  const { data } = useEditable()

  const handleClick = () => {
    window.open(
      `https://wa.me/${data.contact.whatsapp}?text=Hola, me gustaría obtener información sobre los servicios de la Fundación PAFIR.`,
      "_blank",
    )
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon className="h-9 w-9" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-card text-card-foreground text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border">
        ¡Escríbenos!
      </span>

      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
    </button>
  )
}
