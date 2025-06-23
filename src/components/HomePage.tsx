"use client"

import React from "react"
import { Camera, Shield, Palette, Monitor, Film, Zap, CheckCircle, Star, MessageCircle } from "lucide-react"

// Utility function
function cn(...inputs: (string | undefined | null | boolean)[]) {
  return inputs.filter(Boolean).join(" ")
}

// Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 disabled:pointer-events-none"

    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      outline: "border border-gray-300 hover:bg-gray-100 text-gray-900",
      ghost: "hover:bg-gray-100 text-gray-900",
    }

    const sizes = {
      default: "h-10 py-2 px-4",
      sm: "h-9 px-3",
      lg: "h-11 px-8",
    }

    return <button className={cn(baseClasses, variants[variant], sizes[size], className)} ref={ref} {...props} />
  },
)

// Card Components
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border bg-white shadow-sm", className)} {...props} />
))

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
)

// Badge Component
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline"
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(({ className, variant = "default", ...props }, ref) => {
  const baseClasses =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors"

  const variants = {
    default: "border-transparent bg-blue-600 text-white hover:bg-blue-700",
    secondary: "border-transparent bg-gray-100 text-gray-900 hover:bg-gray-200",
    destructive: "border-transparent bg-red-600 text-white hover:bg-red-700",
    outline: "text-gray-900 border-gray-300",
  }

  return <div ref={ref} className={cn(baseClasses, variants[variant], className)} {...props} />
})

// Main HomePage Component
export default function HomePage() {
  const whatsappNumber = "+573208738174" // Reemplaza con tu número real
  const whatsappMessage = "Hola, me interesa conocer más sobre tus servicios como DIT"
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              DIT<span className="text-amber-400">Pro</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-white/80 hover:text-white transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("experiencia")}
                className="text-white/80 hover:text-white transition-colors"
              >
                Experiencia
              </button>
              <button
                onClick={() => scrollToSection("proyectos")}
                className="text-white/80 hover:text-white transition-colors"
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-white/80 hover:text-white transition-colors"
              >
                Contacto
              </button>
            </div>
            <Button
              onClick={() => window.open(whatsappUrl, "_blank")}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-amber-400/20 text-amber-400 border-amber-400/30">
                  Técnico de la Imagen Digital
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Protejo y Perfecciono tu
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                    {" "}
                    Visión Audiovisual
                  </span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Especialista DIT con experiencia en producciones cinematográficas, series y comerciales. Garantizo la
                  seguridad de tu material, configuración óptima de cámaras y corrección de color en tiempo real.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => window.open(whatsappUrl, "_blank")}
                  className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-3"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contactar por WhatsApp
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                  onClick={() => scrollToSection("servicios")}
                >
                  Ver Servicios
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-sm text-slate-400">Producciones</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">5+</div>
                  <div className="text-sm text-slate-400">Años Experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-slate-400">Satisfacción</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Cámara profesional de video para producciones cinematográficas"
                  className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-orange-500/20 rounded-2xl blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Servicios Especializados DIT</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ofrezco servicios completos de técnico de imagen digital para garantizar la máxima calidad en tu
              producción audiovisual
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-8">
                <Shield className="w-12 h-12 text-amber-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Seguridad del Material</h3>
                <p className="text-slate-300 mb-6">
                  Protección y respaldo completo de todo el material grabado. Sistemas redundantes y protocolos de
                  seguridad para evitar pérdidas.
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    Respaldos múltiples
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    Verificación de integridad
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    Protocolos de seguridad
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-8">
                <Camera className="w-12 h-12 text-amber-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Configuración de Cámaras</h3>
                <p className="text-slate-300 mb-6">
                  Configuración técnica óptima de equipos de grabación y calibración precisa para obtener la mejor
                  calidad de imagen.
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    Calibración profesional
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    Optimización de settings
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    Control de exposición
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-8">
                <Palette className="w-12 h-12 text-amber-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Corrección de Color en Vivo</h3>
                <p className="text-slate-300 mb-6">
                  Corrección y gradación de color en tiempo real para que el cliente visualice el resultado final
                  durante la grabación.
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    Color grading en vivo
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    LUTs personalizados
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    Preview en tiempo real
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-8">
                <Monitor className="w-12 h-12 text-amber-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Monitoreo Técnico</h3>
                <p className="text-slate-300 mb-6">
                  Supervisión continua de parámetros técnicos y calidad de imagen durante toda la producción.
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    Control de calidad
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    Análisis técnico
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    Reportes detallados
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-8">
                <Film className="w-12 h-12 text-amber-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Workflow Digital</h3>
                <p className="text-slate-300 mb-6">
                  Diseño e implementación de flujos de trabajo digitales eficientes para optimizar la producción.
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    Flujos optimizados
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    Integración de sistemas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    Automatización
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-8">
                <Zap className="w-12 h-12 text-amber-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Soporte Técnico 24/7</h3>
                <p className="text-slate-300 mb-6">
                  Disponibilidad completa durante la producción con respuesta inmediata ante cualquier incidencia
                  técnica.
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    Disponibilidad total
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    Respuesta inmediata
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    Soluciones rápidas
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Experiencia Profesional</h2>
              <p className="text-xl text-slate-300 mb-8">
                Con más de 5 años de experiencia en la industria audiovisual, he trabajado en producciones de alto nivel
                garantizando la máxima calidad técnica y seguridad del material.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Film className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Largometrajes</h3>
                    <p className="text-slate-400">Participación en más de 15 producciones cinematográficas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Monitor className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Series de TV</h3>
                    <p className="text-slate-400">Trabajo continuo en series para plataformas streaming</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Comerciales</h3>
                    <p className="text-slate-400">Colaboración con marcas reconocidas internacionalmente</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Equipo profesional de DIT en acción"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Proyectos Destacados</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Algunos de los proyectos más importantes en los que he participado como DIT
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Largometraje Independiente",
                type: "Película",
                description:
                  "Responsable de la seguridad del material y corrección de color en tiempo real para producción independiente.",
                image:
                  "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
              },
              {
                title: "Serie Streaming",
                type: "Serie TV",
                description: "Configuración de workflow digital y monitoreo técnico para serie de 8 episodios.",
                image:
                  "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              },
              {
                title: "Campaña Publicitaria",
                type: "Comercial",
                description:
                  "Corrección de color en vivo y configuración de cámaras para campaña de marca internacional.",
                image:
                  "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 overflow-hidden hover:bg-slate-800/70 transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-amber-400/90 text-black">{project.type}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-300">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">¿Listo para tu Próxima Producción?</h2>
            <p className="text-xl text-slate-300 mb-12">
              Contacta conmigo para discutir los requerimientos técnicos de tu proyecto audiovisual. Garantizo
              profesionalismo, calidad y seguridad en cada producción.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-slate-800/50 border-slate-700 p-8 hover:bg-slate-800/70 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Servicios DIT</h3>
                <ul className="text-left space-y-3 text-slate-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    Seguridad del material
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    Configuración de cámaras
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    Corrección de color en vivo
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    Monitoreo técnico
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    Soporte 24/7
                  </li>
                </ul>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 p-8 hover:bg-slate-800/70 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Desarrollo Web</h3>
                <p className="text-slate-300 mb-4">
                  También ofrezco servicios de desarrollo web profesional para empresas y profesionales que buscan una
                  presencia digital de calidad.
                </p>
                <ul className="text-left space-y-3 text-slate-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    Páginas web profesionales
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    Diseño responsive
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    Optimización SEO
                  </li>
                </ul>
              </Card>
            </div>

            <Button
              size="lg"
              onClick={() => window.open(whatsappUrl, "_blank")}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-4 text-lg"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Contactar por WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black/40 border-t border-white/10">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-4">
              DIT<span className="text-amber-400">Pro</span>
            </div>
            <p className="text-slate-400 mb-6">Técnico de la Imagen Digital | Desarrollo Web Profesional</p>
            <div className="flex justify-center space-x-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(whatsappUrl, "_blank")}
                className="text-slate-400 hover:text-white"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 text-sm text-slate-500">
              © 2024 DITPro. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => window.open(whatsappUrl, "_blank")}
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  )
}
