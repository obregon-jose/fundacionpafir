"use client"

import { useEditable } from "@/lib/editable-context"
import Image from "next/image"

export function PartnersSection() {
  const { data } = useEditable()

  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 mx-auto">
        <h3 className="text-center text-lg font-medium text-muted-foreground mb-8">
          Aliados que hacen posible nuestra labor
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {data.partners.map((partner) => (
            <a
              key={partner.id}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:animate-pulse transition-all duration-300"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={400}
                height={200}
                className="h-25 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
