"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

export default function Contacto() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    servicio: "seo",
    mensaje: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, servicio: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Configura EmailJS con tus credenciales
      // Nota: estos valores deberían estar en variables de entorno (.env)
      const templateParams = {
        from_name: formData.nombre,
        from_email: formData.email,
        phone: formData.telefono,
        company: formData.empresa,
        service: formData.servicio,
        message: formData.mensaje,
        to_email: 'nortcelmarketingsl@gmail.com'
      };
      
      // Enviar el correo usando EmailJS
      await emailjs.send(
        'YOUR_SERVICE_ID', // Reemplaza con tu Service ID de EmailJS
        'YOUR_TEMPLATE_ID', // Reemplaza con tu Template ID de EmailJS
        templateParams,
        'YOUR_PUBLIC_KEY' // Reemplaza con tu Public Key de EmailJS
      );
      
      // Mensaje de éxito
      toast({
        title: "Mensaje enviado",
        description: "Hemos recibido tu mensaje. Te contactaremos pronto.",
        duration: 5000,
      });
      
      // Limpiar el formulario
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        empresa: "",
        servicio: "seo",
        mensaje: ""
      });
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      toast({
        title: "Error al enviar",
        description: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex flex-col">
      {/* Hero Header */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=1920&auto=format&fit=crop"
            alt="Contacto"
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
              Contacto con nuestro equipo
              de Marketing Digital
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Responderemos a tu consulta en menos de 24 horas. Nuestros expertos están listos para asesorarte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Formulario */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Envíanos un Mensaje
                </h2>
                <p className="text-muted-foreground">
                  Completa el formulario a continuación y te responderemos a la brevedad
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre</Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      placeholder="Tu nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      placeholder="tu@email.com"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      placeholder="Tu teléfono"
                      value={formData.telefono}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="empresa">Empresa</Label>
                    <Input
                      id="empresa"
                      name="empresa"
                      placeholder="Nombre de tu empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Servicio de interés</Label>
                  <RadioGroup 
                    defaultValue="seo" 
                    value={formData.servicio}
                    onValueChange={handleRadioChange}
                    className="grid grid-cols-2 sm:grid-cols-3 gap-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="seo" id="seo" />
                      <Label htmlFor="seo">SEO</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="social-media" id="social-media" />
                      <Label htmlFor="social-media">Redes Sociales</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="email-marketing" />
                      <Label htmlFor="email-marketing">Email Marketing</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="ppc" id="ppc" />
                      <Label htmlFor="ppc">Publicidad Digital</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="content" id="content" />
                      <Label htmlFor="content">Marketing de Contenidos</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="otro" id="otro" />
                      <Label htmlFor="otro">Otro</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje">Mensaje</Label>
                  <Textarea 
                    id="mensaje"
                    name="mensaje"
                    placeholder="Describe tu proyecto o consulta"
                    className="min-h-[120px]"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            </div>

            {/* Información de Contacto */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Datos de Contacto</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>Rambla Rafael Casanovas, 39 Local<br />08830 Sant Boi de Llobregat (Barcelona)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Mail className="h-6 w-6 text-primary shrink-0" />
                    <span>nortcelmarketingsl@gmail.com</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-primary shrink-0" />
                    <span>Lunes a Viernes, 9:00 - 18:00</span>
                  </li>
                </ul>
              </div>

              <div className="border rounded-lg overflow-hidden h-[300px] relative">
                <Image 
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1920&auto=format&fit=crop"
                  alt="Ubicación de la oficina"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Preguntas Frecuentes
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Respuestas a las consultas más comunes sobre nuestros servicios
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>¿Cuánto tiempo tarda en responder a mi solicitud?</AccordionTrigger>
                <AccordionContent>
                  Nos comprometemos a responder todas las consultas en un plazo máximo de 24 horas laborables. Normalmente, nuestro tiempo de respuesta es incluso menor, especialmente para consultas urgentes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>¿La consulta inicial tiene algún costo?</AccordionTrigger>
                <AccordionContent>
                  No, la consulta inicial es completamente gratuita y sin compromiso. Durante esta sesión, analizaremos tu situación actual y te recomendaremos las mejores estrategias para tus necesidades.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>¿Qué información debo tener preparada para la consulta?</AccordionTrigger>
                <AccordionContent>
                  Para aprovechar al máximo la consulta, es útil tener información sobre tus objetivos de marketing, tu público objetivo, datos básicos de tu presencia online actual (si existe) y cualquier experiencia previa con marketing digital.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>¿Ofrecen servicios para empresas pequeñas o solo para grandes corporaciones?</AccordionTrigger>
                <AccordionContent>
                  Trabajamos con empresas de todos los tamaños, desde pequeños negocios locales hasta grandes corporaciones. Nuestras estrategias se adaptan a tus necesidades específicas y a tu presupuesto.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>¿Cómo se realiza la consultoría? ¿Es presencial o virtual?</AccordionTrigger>
                <AccordionContent>
                  Ofrecemos ambas opciones. Podemos realizar la consultoría de forma presencial en nuestras oficinas o virtualmente a través de plataformas como Zoom o Teams, según tu preferencia y ubicación.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  );
} 