import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Users, BarChart2, Mail } from "lucide-react";
import { Metadata } from "next";
import { Logo } from "@/components/seo/Logo";
import { JsonLd } from "@/components/seo/JsonLd";

// Metadatos específicos para la página de inicio
export const metadata: Metadata = {
  title: "NORTCEL MARKETING | Expertos en Marketing Digital",
  description: "Impulsamos tu negocio con estrategias de marketing digital personalizadas. SEO, redes sociales, publicidad digital y email marketing para maximizar tu presencia online.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  // Datos estructurados para Schema.org
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://nortcelmarketing.com/#organization",
    "name": "NORTCEL MARKETING",
    "url": "https://nortcelmarketing.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://nortcelmarketing.com/images/nortcel-logo.jpg",
      "width": 600,
      "height": 190
    },
    "sameAs": [
      "https://facebook.com/nortcelmarketing",
      "https://twitter.com/nortcelmarketing",
      "https://instagram.com/nortcelmarketing",
      "https://linkedin.com/company/nortcelmarketing"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+34-000-000-000",
      "contactType": "customer service",
      "availableLanguage": ["Spanish"]
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Marketing Digital",
    "provider": {
      "@id": "https://nortcelmarketing.com/#organization"
    },
    "areaServed": "España",
    "description": "Estrategias de marketing digital personalizadas para impulsar tu negocio online",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "url": "https://nortcelmarketing.com/contacto",
      "description": "Consulta gratuita inicial"
    }
  };
  
  return (
    <>
      {/* Schema.org JSON-LD */}
      <JsonLd data={organizationSchema} />
      <JsonLd data={serviceSchema} />
      
      <main className="flex flex-col" itemScope itemType="https://schema.org/WebPage">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1920&auto=format&fit=crop"
              alt="Estrategias de Marketing Digital - NORTCEL MARKETING"
              fill
              className="object-cover opacity-20"
              sizes="100vw"
              priority
            />
          </div>
          <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="mb-6">
                <Logo width={300} height={95} />
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Impulsamos Tu Negocio en el Mundo Digital
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Estrategias personalizadas de marketing que maximizan tu presencia online y aumentan tus conversiones
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg">
                  <Link href="/contacto" aria-label="Solicitar consulta gratuita de marketing digital">Consulta Gratuita</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/servicios" aria-label="Ver nuestros servicios de marketing digital">Nuestros Servicios</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features List */}
        <section className="w-full py-12 md:py-24 bg-muted/50" aria-labelledby="servicios-heading">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 id="servicios-heading" className="text-3xl font-bold tracking-tighter md:text-4xl">Nuestros Servicios Principales</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                  Soluciones integrales diseñadas para impulsar tu presencia digital y resultados de negocio
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <Card itemScope itemProp="makesOffer" itemType="https://schema.org/Offer">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium" itemProp="name">SEO</CardTitle>
                  <Search className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground" itemProp="description">
                    Mejora tu visibilidad en los motores de búsqueda y atrae tráfico cualificado a tu sitio web.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">Redes Sociales</CardTitle>
                  <Users className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Conecta con tu audiencia a través de estrategias efectivas en las principales plataformas sociales.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">Publicidad Digital</CardTitle>
                  <BarChart2 className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Campañas publicitarias optimizadas para maximizar tu inversión y generar resultados tangibles.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">Email Marketing</CardTitle>
                  <Mail className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Comunicación personalizada que convierte a tus suscriptores en clientes fieles.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="w-full py-12 md:py-24" aria-labelledby="beneficios-heading">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 id="beneficios-heading" className="text-3xl font-bold tracking-tighter md:text-4xl">Beneficios de Trabajar con Nosotros</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                  Descubre por qué nuestros clientes confían en nuestras estrategias de marketing digital
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
                <div className="p-3 rounded-full bg-primary/10">
                  <BarChart2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Resultados Medibles</h3>
                <p className="text-center text-muted-foreground">
                  Informes detallados y análisis que muestran el retorno de tu inversión y el crecimiento de tu negocio.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
                <div className="p-3 rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Equipo Experto</h3>
                <p className="text-center text-muted-foreground">
                  Profesionales especializados en cada área del marketing digital para cubrir todas tus necesidades.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
                <div className="p-3 rounded-full bg-primary/10">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Estrategia Personalizada</h3>
                <p className="text-center text-muted-foreground">
                  Soluciones adaptadas a los objetivos específicos de tu negocio y a las necesidades de tu audiencia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="w-full py-12 md:py-24 bg-muted/50" aria-labelledby="testimonios-heading">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 id="testimonios-heading" className="text-3xl font-bold tracking-tighter md:text-4xl">Lo Que Dicen Nuestros Clientes</h2>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-8">
              <Card className="border-0 bg-background/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="relative">
                    <span className="absolute left-0 top-0 text-6xl text-primary/20">&quot;</span>
                    <blockquote className="px-6 text-xl italic">
                      Desde que comenzamos a trabajar con MarketingDigital, nuestro tráfico web ha aumentado un 150% y las conversiones han crecido un 75%. Su equipo no solo entiende perfectamente nuestro negocio, sino que ha desarrollado estrategias que realmente funcionan para nuestro mercado.
                    </blockquote>
                    <span className="absolute bottom-0 right-0 text-6xl text-primary/20">&quot;</span>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-1 text-center">
                  <div className="font-semibold">María González</div>
                  <div className="text-sm text-muted-foreground">Directora de Marketing, TechSolutions</div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-12 md:py-24" aria-labelledby="cta-heading">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 id="cta-heading" className="text-3xl font-bold tracking-tighter md:text-4xl">¿Listo para Impulsar tu Negocio?</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg">
                  Solicita ahora tu consulta gratuita y descubre cómo nuestras estrategias de marketing digital pueden transformar tu presencia online
                </p>
              </div>
              <Button size="lg" asChild>
                <Link href="/contacto" aria-label="Solicitar una consulta gratuita ahora">Solicitar Consulta Gratuita</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
