import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna 1 - Información Principal */}
          <div className="space-y-4">
            <Image
              src="/images/logo.svg"
              alt="NORTCEL MARKETING"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              Transformamos negocios con estrategias digitales efectivas y personalizadas.
            </p>
            <p className="text-sm text-muted-foreground">
              CIF: B21996848
            </p>
          </div>

          {/* Columna 2 - Enlaces Rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary">Inicio</Link></li>
              <li><Link href="/servicios" className="hover:text-primary">Servicios</Link></li>
              <li><Link href="/resultados" className="hover:text-primary">Resultados</Link></li>
              <li><Link href="/nosotros" className="hover:text-primary">Nosotros</Link></li>
              <li><Link href="/contacto" className="hover:text-primary">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna 3 - Contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contacto</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 shrink-0" />
                <span>Rambla Rafael Casanovas, 39 Local<br />08830 Sant Boi de Llobregat (Barcelona)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 shrink-0" />
                <span>nortcelmarketingsl@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} NORTCEL MARKETING. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
} 