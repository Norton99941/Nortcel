import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Users, BarChart2, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1920&auto=format&fit=crop"
            alt="Marketing Digital"
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
                Impulsamos Tu Negocio en el Mundo Digital
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Estrategias personalizadas de marketing que maximizan tu presencia online y aumentan tus conversiones
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/contacto">Consulta Gratuita</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/servicios">Nuestros Servicios</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Nuestros Servicios Principales</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Soluciones integrales diseñadas para impulsar tu presencia digital y resultados de negocio
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">SEO</CardTitle>
                <Search className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
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
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Beneficios de Trabajar con Nosotros</h2>
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
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Lo Que Dicen Nuestros Clientes</h2>
            </div>
          </div>
          <div className="mx-auto max-w-3xl mt-8">
            <Card className="border-0 bg-background/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="relative">
                  <span className="absolute left-0 top-0 text-6xl text-primary/20">"</span>
                  <blockquote className="px-6 text-xl italic">
                    Desde que comenzamos a trabajar con MarketingDigital, nuestro tráfico web ha aumentado un 150% y las conversiones han crecido un 75%. Su equipo no solo entiende perfectamente nuestro negocio, sino que ha desarrollado estrategias que realmente funcionan para nuestro mercado.
                  </blockquote>
                  <span className="absolute bottom-0 right-0 text-6xl text-primary/20">"</span>
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
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">¿Listo para Impulsar tu Negocio?</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg">
                Solicita ahora tu consulta gratuita y descubre cómo nuestras estrategias de marketing digital pueden transformar tu presencia online
              </p>
            </div>
            <Button size="lg" asChild>
              <Link href="/contacto">Solicitar Consulta Gratuita</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
