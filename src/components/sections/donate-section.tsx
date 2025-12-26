"use client"

import { useEditable } from "@/lib/editable-context"
import { useAuth } from "@/lib/auth-context"
import { EditableText } from "@/components/editable-text"
import { Building2, CreditCard, FileText, Copy, Check } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function DonateSection() {
  const { data } = useEditable()
  const { isEditMode } = useAuth()
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  return (
    <section id="donate" className="py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Apóyanos
          </div>
          <EditableText
            path="donateSection.title"
            value="Donaciones"
            as="h2"
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
          />
          <EditableText
            path="donateSection.description"
            value="Tu apoyo es fundamental para continuar con nuestra labor. Estos son nuestros canales oficiales de donación."
            as="p"
            className="text-muted-foreground max-w-2xl mx-auto"
          />
        </div>

        <div className="max-w-xl mx-auto">
          <div
            className={`bg-card rounded-2xl border shadow-lg overflow-hidden ${isEditMode ? "border-dashed border-primary" : ""}`}
          >
            <div className="bg-primary p-6 text-primary-foreground text-center">
              <h3 className="text-xl font-bold mb-2">Información Bancaria</h3>
              <p className="text-primary-foreground/80 text-sm">Realiza tu donación directamente a nuestra cuenta</p>
            </div>

            <div className="p-6 space-y-6">
              {/* NIT */}
              <div
                className={`flex items-center justify-between p-4 bg-muted/50 rounded-xl ${isEditMode ? "border border-dashed border-primary/30" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">NIT</p>
                    <EditableText
                      path="donation.nit"
                      value={data.donation.nit}
                      as="p"
                      className="font-semibold text-card-foreground"
                    />
                  </div>
                </div>
                {!isEditMode && (
                  <Button variant="ghost" size="icon" onClick={() => copyToClipboard(data.donation.nit, "nit")}>
                    {copiedField === "nit" ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                )}
              </div>
                <div className="flex flex-col md:flex-row gap-4 mt-6">
                {/* Banco */}
                <div
                  className={`flex w-full items-center justify-between p-4 bg-muted/50 rounded-xl ${isEditMode ? "border border-dashed border-primary/30" : ""}`}
                >
                  <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Banco</p>
                    <EditableText
                    path="donation.bankName"
                    value={data.donation.bankName}
                    as="p"
                    className="font-semibold text-card-foreground"
                    />
                  </div>
                  </div>
                </div>

                {/* Tipo y Número de cuenta */}
                <div
                  className={`flex w-full items-center justify-between p-4 bg-muted/50 rounded-xl ${isEditMode ? "border border-dashed border-primary/30" : ""}`}
                >
                  <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <EditableText
                    path="donation.accountType"
                    value={data.donation.accountType}
                    as="p"
                    className="text-sm text-muted-foreground"
                    />
                    <EditableText
                    path="donation.accountNumber"
                    value={data.donation.accountNumber}
                    as="p"
                    className="font-semibold text-card-foreground"
                    />
                  </div>
                  </div>
                  {!isEditMode && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard(data.donation.accountNumber, "account")}
                  >
                    {copiedField === "account" ? (
                    <Check className="h-4 w-4 text-green-500" />
                    ) : (
                    <Copy className="h-4 w-4" />
                    )}
                  </Button>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6 bg-muted/30 border-t text-center">
              <p className="text-sm text-muted-foreground">
                Si realizas una donación, por favor envíanos el comprobante a nuestro WhatsApp o correo electrónico para
                poder agradecerte personalmente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
