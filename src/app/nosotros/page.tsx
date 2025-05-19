import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Award, Clock, Users, Handshake } from "lucide-react";

export default function Nosotros() {
  const equipoDirectivo = [
    {
      name: "Alejandro Fernández",
      cargo: "CEO & Fundador",
      foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
      bio: "Con más de 15 años de experiencia en marketing digital, Alejandro fundó MarketingDigital con la visión de ayudar a las empresas a prosperar en el entorno digital."
    },
    {
      name: "Sofía Rodríguez",
      cargo: "Directora de Estrategia Digital",
      foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      bio: "Especialista en SEO y analítica web, Sofía desarrolla estrategias digitales innovadoras que maximizan resultados para nuestros clientes."
    },
    {
      name: "Daniel López",
      cargo: "Director de Social Media",
      foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
      bio: "Experto en redes sociales con un historial de campañas exitosas para grandes marcas nacionales e internacionales."
    }
  ];

  const valores = [
    {
      titulo: "Innovación",
      descripcion: "Buscamos constantemente nuevas soluciones y enfoques para mantenernos a la vanguardia del marketing digital.",
      icono: <Award className="h-10 w-10" />
    },
    {
      titulo: "Transparencia",
      descripcion: "Creemos en la comunicación clara y honesta con nuestros clientes sobre estrategias, resultados y expectativas.",
      icono: <Handshake className="h-10 w-10" />
    },
    {
      titulo: "Excelencia",
      descripcion: "Nos esforzamos por superar expectativas en cada proyecto, entregando resultados sobresalientes y medibles.",
      icono: <Clock className="h-10 w-10" />
    },
    {
      titulo: "Colaboración",
      descripcion: "Trabajamos estrechamente con nuestros clientes como verdaderos socios para alcanzar objetivos comunes.",
      icono: <Users className="h-10 w-10" />
    }
  ];

  return (
    <main className="flex flex-col">
      {/* Hero Header */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1920&auto=format&fit=crop"
            alt="Nuestro Equipo"
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
                Nuestro Equipo de Especialistas
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Con más de 10 años de experiencia, somos expertos en impulsar el crecimiento de empresas a través de estrategias de marketing digital efectivas
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <div className="flex flex-col items-center p-4">
                <span className="text-3xl font-bold text-primary">10+</span>
                <span className="text-sm text-muted-foreground">Años de Experiencia</span>
              </div>
              <div className="flex flex-col items-center p-4">
                <span className="text-3xl font-bold text-primary">200+</span>
                <span className="text-sm text-muted-foreground">Clientes Satisfechos</span>
              </div>
              <div className="flex flex-col items-center p-4">
                <span className="text-3xl font-bold text-primary">15</span>
                <span className="text-sm text-muted-foreground">Especialistas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_400px] items-center">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Nuestra Historia
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  MarketingDigital nació en 2013 con una clara misión: ayudar a empresas a navegar exitosamente por el cambiante mundo del marketing digital.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Lo que comenzó como un pequeño equipo de consultores apasionados por el marketing digital, ha crecido hasta convertirse en una agencia de referencia en el sector, con un equipo multidisciplinar de 15 especialistas.
                </p>
                <p>
                  A lo largo de nuestra trayectoria, hemos trabajado con más de 200 clientes de diversos sectores, desde startups hasta grandes corporaciones, ayudándoles a desarrollar estrategias efectivas que impulsan su crecimiento en el entorno digital.
                </p>
                <p>
                  Nuestro enfoque siempre ha sido el mismo: ofrecer soluciones personalizadas basadas en datos, con un compromiso inquebrantable con los resultados y la satisfacción del cliente.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop"
                alt="Nuestro equipo trabajando"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Nuestros Valores
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Los pilares fundamentales que guían nuestro trabajo y relación con los clientes
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <div key={index} className="flex flex-col items-center space-y-4 text-center p-6 border rounded-lg">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  {valor.icono}
                </div>
                <h3 className="text-xl font-bold">{valor.titulo}</h3>
                <p className="text-muted-foreground">{valor.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Equipo Directivo
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Conoce a los profesionales que lideran nuestra agencia
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipoDirectivo.map((miembro, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-[300px]">
                  <Image 
                    src={miembro.foto}
                    alt={miembro.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold">{miembro.name}</h3>
                  <p className="text-sm text-primary">{miembro.cargo}</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start">
                  <p className="text-muted-foreground">{miembro.bio}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                ¿Listo para Trabajar con Nosotros?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Contacta con nuestro equipo para descubrir cómo podemos ayudarte a alcanzar tus objetivos de marketing digital
              </p>
            </div>
            <Button size="lg" asChild>
              <Link href="/contacto">Contactar con el Equipo</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
} 