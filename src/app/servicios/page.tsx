import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Search,
  Users,
  BarChart2,
  Mail,
  Megaphone,
  Pen,
  Globe,
  Smartphone
} from "lucide-react";

export default function Servicios() {
  const servicios = [
    {
      id: "seo",
      title: "SEO",
      description: "Optimización técnica y de contenidos para mejorar el ranking en buscadores",
      icon: <Search className="h-6 w-6" />,
      features: [
        "Auditoría SEO completa",
        "Optimización on-page",
        "Estrategia de palabras clave",
        "Link building",
        "SEO local"
      ]
    },
    {
      id: "social-media",
      title: "Social Media Marketing",
      description: "Gestión profesional de redes sociales para aumentar tu visibilidad y engagement",
      icon: <Users className="h-6 w-6" />,
      features: [
        "Estrategia de contenidos",
        "Gestión de comunidades",
        "Campañas publicitarias",
        "Análisis de competencia",
        "Informes de resultados"
      ]
    },
    {
      id: "email",
      title: "Email Marketing",
      description: "Estrategias personalizadas para conectar con tu audiencia y aumentar conversiones",
      icon: <Mail className="h-6 w-6" />,
      features: [
        "Diseño de newsletters",
        "Segmentación de audiencia",
        "Automatización",
        "Testing A/B",
        "Análisis de métricas"
      ]
    },
    {
      id: "ppc",
      title: "Publicidad Digital",
      description: "Campañas publicitarias optimizadas para maximizar tu inversión y visibilidad",
      icon: <Megaphone className="h-6 w-6" />,
      features: [
        "Google Ads",
        "Facebook Ads",
        "LinkedIn Ads",
        "Retargeting",
        "Optimización de conversiones"
      ]
    },
    {
      id: "content",
      title: "Marketing de Contenidos",
      description: "Creación y distribución de contenidos relevantes para atraer y convertir clientes",
      icon: <Pen className="h-6 w-6" />,
      features: [
        "Blogs y artículos",
        "Infografías",
        "Ebooks y whitepapers",
        "Vídeo marketing",
        "Podcasts"
      ]
    },
    {
      id: "web",
      title: "Desarrollo Web",
      description: "Diseño y desarrollo de sitios web optimizados para SEO y conversiones",
      icon: <Globe className="h-6 w-6" />,
      features: [
        "Diseño responsive",
        "Optimización de velocidad",
        "UX/UI",
        "E-commerce",
        "Mantenimiento"
      ]
    }
  ];

  return (
    <main className="flex flex-col">
      {/* Hero Header */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1920&auto=format&fit=crop"
            alt="Servicios de Marketing Digital"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
        </div>
        <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Nuestros Servicios de Marketing Digital
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Soluciones integrales diseñadas para impulsar tu presencia online y conseguir resultados tangibles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Soluciones Completas de Marketing Digital
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Descubre nuestra gama de servicios especializados para potenciar tu negocio en el entorno digital
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((servicio) => (
              <Card key={servicio.id} id={servicio.id} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      {servicio.icon}
                    </div>
                    <CardTitle>{servicio.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{servicio.description}</p>
                  <ul className="space-y-2">
                    {servicio.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  ¿Necesitas una Estrategia Personalizada?
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Cuéntanos sobre tu proyecto y te ayudaremos a elegir los servicios que mejor se adapten a tus necesidades y objetivos.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Nombre
                  </label>
                  <Input id="name" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email
                  </label>
                  <Input id="email" placeholder="tu@email.com" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  ¿En qué podemos ayudarte?
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Describe tu proyecto o necesidades..."
                  className="min-h-[120px]"
                />
              </div>
              <Button size="lg" className="w-full">Solicitar Consulta Gratuita</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 