import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Resultados() {
  const casosExito = [
    {
      id: "caso1",
      empresa: "TechSolutions",
      industria: "Software",
      descripcion: "Aumento del 150% de tráfico web y 75% más conversiones en solo 6 meses",
      resultados: [
        { label: "Tráfico Web", valor: "+150%" },
        { label: "Conversiones", valor: "+75%" },
        { label: "ROI", valor: "325%" },
      ],
      testimonio: "Desde que comenzamos a trabajar con MarketingDigital, nuestro tráfico web ha aumentado un 150% y las conversiones han crecido un 75%. Su equipo no solo entiende perfectamente nuestro negocio, sino que ha desarrollado estrategias que realmente funcionan para nuestro mercado.",
      autor: "María González",
      cargo: "Directora de Marketing, TechSolutions",
      imagen: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920&auto=format&fit=crop"
    },
    {
      id: "caso2",
      empresa: "EcoFashion",
      industria: "Moda Sostenible",
      descripcion: "Estrategia de redes sociales que triplicó ventas e-commerce en un año",
      resultados: [
        { label: "Ventas Online", valor: "+200%" },
        { label: "Seguidores", valor: "+450%" },
        { label: "Engagement", valor: "+85%" },
      ],
      testimonio: "La estrategia de marketing en redes sociales desarrollada por MarketingDigital ha triplicado nuestras ventas online en solo un año. Su enfoque centrado en nuestra audiencia y valores de sostenibilidad ha conectado perfectamente con nuestros clientes.",
      autor: "Carlos Méndez",
      cargo: "CEO, EcoFashion",
      imagen: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1920&auto=format&fit=crop"
    },
    {
      id: "caso3",
      empresa: "GourmetDelivery",
      industria: "Alimentación",
      descripcion: "Campaña de email marketing con tasa de apertura del 45% y conversión del 12%",
      resultados: [
        { label: "Tasa Apertura", valor: "45%" },
        { label: "Tasa Conversión", valor: "12%" },
        { label: "Nuevos Clientes", valor: "+68%" },
      ],
      testimonio: "Nuestra campaña de email marketing alcanzó tasas de apertura del 45% y conversión del 12%, muy por encima del promedio del sector. El enfoque segmentado y personalizado que implementaron fue clave para estos resultados.",
      autor: "Lucía Torres",
      cargo: "Directora Comercial, GourmetDelivery",
      imagen: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1920&auto=format&fit=crop"
    }
  ];

  return (
    <main className="flex flex-col">
      {/* Hero Header */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1920&auto=format&fit=crop"
            alt="Resultados de Marketing Digital"
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
                Resultados que Hablan por Sí Mismos
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Descubre cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos de negocio con estrategias de marketing digital efectivas
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="flex flex-col items-center p-4 border rounded-lg bg-background">
                <span className="text-3xl font-bold text-primary">+150%</span>
                <span className="text-sm text-muted-foreground">Aumento en Tráfico Web</span>
              </div>
              <div className="flex flex-col items-center p-4 border rounded-lg bg-background">
                <span className="text-3xl font-bold text-primary">+75%</span>
                <span className="text-sm text-muted-foreground">Incremento en Conversiones</span>
              </div>
              <div className="flex flex-col items-center p-4 border rounded-lg bg-background">
                <span className="text-3xl font-bold text-primary">325%</span>
                <span className="text-sm text-muted-foreground">ROI Promedio</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery - Casos de Éxito */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Casos de Éxito Destacados
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Explora nuestros casos de éxito y descubre cómo hemos ayudado a empresas como la tuya a crecer
              </p>
            </div>
          </div>

          <Tabs defaultValue="caso1" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              {casosExito.map((caso) => (
                <TabsTrigger key={caso.id} value={caso.id}>
                  {caso.empresa}
                </TabsTrigger>
              ))}
            </TabsList>
            {casosExito.map((caso) => (
              <TabsContent key={caso.id} value={caso.id} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src={caso.imagen}
                      alt={caso.empresa}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">{caso.empresa}</h3>
                      <p className="text-sm text-muted-foreground mb-4">Industria: {caso.industria}</p>
                      <p className="text-lg font-medium mb-4">{caso.descripcion}</p>
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {caso.resultados.map((resultado, index) => (
                          <div key={index} className="flex flex-col items-center p-3 border rounded-lg">
                            <span className="text-xl font-bold text-primary">{resultado.valor}</span>
                            <span className="text-xs text-muted-foreground text-center">{resultado.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <blockquote className="italic mb-2">&quot;{caso.testimonio}&quot;</blockquote>
                      <p className="text-sm font-medium">{caso.autor}</p>
                      <p className="text-xs text-muted-foreground">{caso.cargo}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Lo Que Dicen Nuestros Clientes
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Testimonios reales de empresas que han transformado su presencia digital con nuestras estrategias
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 bg-background/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="relative">
                  <span className="absolute left-0 top-0 text-6xl text-primary/20">&quot;</span>
                  <blockquote className="px-6 text-lg italic">
                    El equipo de MarketingDigital ha sido clave para el crecimiento de nuestra empresa online. Su enfoque estratégico y análisis detallado nos ha permitido triplicar nuestra visibilidad en buscadores.
                  </blockquote>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-1 text-center border-t pt-4">
                <div className="font-semibold">Antonio Ruiz</div>
                <div className="text-sm text-muted-foreground">Director General, InnovaTech</div>
              </CardFooter>
            </Card>

            <Card className="border-0 bg-background/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="relative">
                  <span className="absolute left-0 top-0 text-6xl text-primary/20">&quot;</span>
                  <blockquote className="px-6 text-lg italic">
                    Las campañas de redes sociales diseñadas han conseguido un engagement sin precedentes. Hemos visto un aumento del 200% en interacción y un 80% en conversiones desde que trabajamos juntos.
                  </blockquote>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-1 text-center border-t pt-4">
                <div className="font-semibold">Laura Sánchez</div>
                <div className="text-sm text-muted-foreground">Social Media Manager, ModaExpress</div>
              </CardFooter>
            </Card>

            <Card className="border-0 bg-background/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="relative">
                  <span className="absolute left-0 top-0 text-6xl text-primary/20">&quot;</span>
                  <blockquote className="px-6 text-lg italic">
                    El ROI de las campañas ha superado todas nuestras expectativas. La capacidad de MarketingDigital para optimizar el presupuesto y maximizar resultados es realmente impresionante.
                  </blockquote>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-1 text-center border-t pt-4">
                <div className="font-semibold">Javier Martínez</div>
                <div className="text-sm text-muted-foreground">CFO, FinancePlus</div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  ¿Quieres Resultados Similares?
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Solicita ahora una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos de marketing digital
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" asChild>
                  <Link href="/contacto">Solicitar Consulta</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/servicios">Ver Servicios</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1920&auto=format&fit=crop"
                alt="Resultados de Marketing Digital"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 