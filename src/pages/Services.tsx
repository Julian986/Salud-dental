import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

interface Service {
  title: string
  icon: string
  description: string
  price?: string
  duration?: string
  featured?: boolean
  slug?: string
}

interface ServiceCategory {
  title: string
  icon: string
  services: Service[]
}

const serviceCategories: ServiceCategory[] = [
  {
    title: "Servicios Preventivos",
    icon: "🛡️",
    services: [
      {
        title: "Limpieza Dental",
        icon: "🦷",
        description: "Limpieza profesional para mantener tus dientes saludables y prevenir enfermedades periodontales",
        price: "Desde $50",
        duration: "30-45 mins",
        featured: true,
        slug: "limpieza-dental"
      },
      {
        title: "Revisión General",
        icon: "👨‍⚕️",
        description: "Evaluación completa de tu salud dental con diagnóstico profesional",
        price: "Desde $30",
        duration: "20-30 mins",
        slug: "revision-general"
      },
      {
        title: "Fluorización",
        icon: "✨",
        description: "Tratamiento preventivo para fortalecer el esmalte dental y prevenir caries",
        price: "Desde $40",
        duration: "15-20 mins",
        slug: "fluorizacion"
      }
    ]
  },
  {
    title: "Servicios Estéticos",
    icon: "🌟",
    services: [
      {
        title: "Blanqueamiento Dental",
        icon: "😁",
        description: "Tratamiento profesional para una sonrisa más brillante y blanca",
        price: "Desde $200",
        duration: "1 hora",
        featured: true,
        slug: "blanqueamiento-dental"
      },
      {
        title: "Carillas Dentales",
        icon: "💎",
        description: "Mejora la apariencia de tus dientes con carillas de porcelana o composite",
        price: "Desde $300",
        duration: "2-3 visitas",
        slug: "carillas-dentales"
      },
      {
        title: "Diseño de Sonrisa",
        icon: "🎨",
        description: "Plan personalizado para lograr tu sonrisa ideal con tecnología digital",
        price: "Consultar",
        duration: "Evaluación inicial",
        slug: "diseno-sonrisa"
      }
    ]
  },
  {
    title: "Servicios de Urgencia",
    icon: "🚑",
    services: [
      {
        title: "Dolor Dental",
        icon: "😣",
        description: "Atención inmediata para aliviar el dolor y tratar la causa subyacente",
        price: "Desde $80",
        duration: "30-60 mins",
        slug: "dolor-dental"
      },
      {
        title: "Reparación de Emergencia",
        icon: "🔧",
        description: "Soluciones rápidas para problemas dentales inesperados",
        price: "Consultar",
        duration: "Varía según caso",
        slug: "reparacion-emergencia"
      }
    ]
  }
]

const Services = () => {
  const [openCategory, setOpenCategory] = useState<number | null>(0)

  return (
    <div className="container mx-auto px-4 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-8">
          <span className="text-4xl">🦷</span>
          <h1 className="text-4xl font-bold text-gray-900">Nuestros Servicios</h1>
        </div>

        <div className="space-y-4">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
                onClick={() => setOpenCategory(openCategory === index ? null : index)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <h2 className="text-xl font-semibold text-gray-900">{category.title}</h2>
                </div>
                <span className="text-gray-500">
                  {openCategory === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {openCategory === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-gray-50">
                      <div className="grid md:grid-cols-2 gap-6">
                        {category.services.map((service, serviceIndex) => (
                          <div
                            key={serviceIndex}
                            className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                          >
                            <div className="p-6">
                              <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl">{service.icon}</span>
                                <h3 className="text-xl font-bold text-gray-900">
                                  {service.title}
                                </h3>
                              </div>
                              
                              <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                              
                              <div className="flex flex-wrap gap-2 mb-4">
                                {service.duration && (
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    {service.duration}
                                  </span>
                                )}
                                {service.featured && (
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                    </svg>
                                    Destacado
                                  </span>
                                )}
                              </div>
                              
                              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                                {service.price && (
                                  <p className="text-lg font-semibold text-primary">{service.price}</p>
                                )}
                                <button className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                                  <span className="text-sm font-medium">Agendar cita</span>
                                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-20 text-center"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6">¿No encuentras lo que buscas?</h3>
        <Link
          to="/contacto"
          className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          Contáctanos para una consulta personalizada
        </Link>
      </motion.div>
    </div>
  )
}

export default Services