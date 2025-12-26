export const SITE_DOMAIN = "fundacionpafir.vercel.app";
export const SITE_URL = `https://${SITE_DOMAIN}`;

export const DEFAULT_SEO = {
    title: "Fundación PAFIR | Amor, Formación, Inclusión y Reconciliación.",
    description:
        "Fundación PAFIR: Centro de apoyo Psicológico, social y pedagógico. Brindamos asistencia a familias, niños, niñas, adolescentes y adultos mayores para promover una adecuada salud mental.",
    keywords: [
        "pafir",
        "fundacion",
        "fundación PAFIR",
        "psicología",
        "salud mental",
        "terapia familiar",
        "apoyo psicológico",
        "Cali",
        "Colombia",
        "bienestar",
        "inclusión",
    ],
    authors: [{ name: "José Obregón" }],
    openGraph: {
        type: "website",
        url: "https://fundacionpafir.vercel.app/",
        locale: "es_CO",
        siteName: "Fundación PAFIR - Amor, Formación, Inclusión y Reconciliación",
        description:
            "Centro de apoyo Psicológico, social y pedagógico dedicada a impactar las comunidades a través de proyectos innovadores y sostenibles.",
        images: [
            {
                url: `${SITE_URL}/images/logo.png`, //pendiente
                width: 400,
                height: 400,
                alt: "Fundación PAFIR Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Fundación PAFIR - Amor, Formación, Inclusión y Reconciliación",
        description: "Centro de apoyo Psicológico, social y pedagógico dedicada a impactar las comunidades.",
        images: ["/images/logo.png"],
    },
    icons: {
        icon: "/images/logo.png",
        apple: "/images/logo.png",
    },
};

// export const DEFAULT_SCHEMA = {
//     type: "Fundación",
//     description: "",
//     servesCuisine: ["",],
//     location: {
//         address: "", //corregir
//         locality: "Cali",
//         region: "Valle del Cauca",
//         postalCode: "", //corregir
//         latitude: "", //corregir
//         longitude: "", //corregir
//     },
//     // telephone: "+57", //corregir
//     // openingHours: [
//     //     "Mo-Sa 12:00-22:00",
//     //     "Su 12:00-20:00",
//     // ],
//     // priceRange: "$$",
//     // sameAs: [
//     //     // "https://www.instagram.com/fundacionpafir", //corregir
//     //     // "https://wa.me/57", //corregir
//     // ],
// };

