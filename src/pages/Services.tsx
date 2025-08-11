import { useEffect, useRef, useState } from 'react'
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
  features?: string[]
  afterFeatures?: string
  group?: 'niños' | 'adolescentes' | 'adultos'
}

interface ServiceCategory {
  title: string
  icon: string
  services: Service[]
}

const serviceCategories: ServiceCategory[] = [
  {
    title: "Especialidades",
    icon: "🦷",
    services: [
      {
        title: 'Ortodoncia para adolescentes y adultos con brackets.',
        icon: '🦷',
        description:
          'Tratamiento de Ortodoncia fija con brackets de diferentes materiales, pudiendo el paciente, optar por la aparatología deseada.\nDesde las técnicas más sencillas hasta las de alta tecnología, estética y confort. Logrando resultados exitosos, corrigiendo la oclusión, tratando cuidadosamente la salud de la articulación temporomandibular, tejidos periodontales y dentarios, dando como resultado la sonrisa ideal.',
        featured: true,
        slug: 'ortodoncia-brackets',
        group: 'adolescentes'
      },
      {
        title: 'Ortodoncia para adolescentes y adultos  con brackets autoligables.',
        icon: '🦷',
        description:
          'Última tecnología en Brackets, con características beneficiosas para el tratamiento del paciente.\nÉsta técnica con Brackets autoligables se caracteriza por:',
        features: [
          'Ser indolora.',
          'Tratamiento más rápidos que las técnicas convencionales.',
          'Evitar extracciones dentales en los tratamientos indicados con ellas.',
          'Mejor confort.',
          'Mejor higiene.',
          'Sonrisas amplias.'
        ],
        slug: 'brackets-autoligables',
        group: 'adolescentes'
      },
      {
        title: 'Alineadores Invisibles para adultos.',
        icon: '🦷',
        description:
          'Tratamientos de alineación dentaria de última generación. Con materiales confeccionados con tecnología de avanzada, donde el paciente goza de un buen confort y alta estética.',
        slug: 'alineadores-invisibles',
        group: 'adultos'
      },
      {
        title: 'Ortopedia para niños.',
        icon: '🦷',
        description:
          'Aparatología Removible. Aplicada en pacientes de los 5 a 10 años aprox.\nTratamientos destinados a la corrección de los maxilares en edades tempranas del desarrollo (en pacientes con dientes de leche o temporarios), donde la aparatología utilizada no provoca dolor ni malestar al paciente pequeño.\nCon éstos tratamientos, obtenemos como resultado,',
        features: [
          'Aumentar el tamaño de los maxilares, evitando futuro apiñamiento dentario.',
          'La corrección de una  maloclusión.',
          'Corregir un mal hábito.',
          'Corrección de una deglución atípica.',
          'Corrigen un apoyo lingual incorrecto.',
          'Entre otras …'
        ],
        afterFeatures:
          'Son tratamientos interdisciplinarios, dónde el papel del fonoaudiólogo y/o Otorrinolaringólogo, puede ser importante para el éxito total del tratamiento.',
        slug: 'ortopedia-ninos',
        group: 'niños'
      },
      {
        title: 'Prótesis Dental Fija',
        icon: '🦷',
        description:
          'Tratamiento de reemplazo fijo de piezas faltantes, sin necesidad de retirar para su higiene, no invasivo, sin cirugía, de alta durabilidad, excelente comodidad y estética.\nDichos tratamientos pueden utilizarse para:',
        features: [
          'Reemplazo de una o varias  piezas dentales faltantes.',
          'Modificar el tamaño de un diente.',
          'Modificar la forma dentaria.',
          'Solucionar el color de una pieza dentaria afectada.'
        ],
        slug: 'protesis-fija',
        group: 'adultos'
      },
      {
        title: 'Carillas Dentales',
        icon: '🦷',
        description:
          'Son tratamientos estéticos, en la cual reemplazamos una capa de tejido superficial del diente por material de alta estética, confeccionado especialmente para el caso en cuestión, pudiendo otorgar el color y/o forma deseada.',
        featured: true,
        slug: 'carillas-dentales',
        group: 'adultos'
      },
      {
        title: 'Blanqueamiento Dental',
        icon: '🦷',
        description:
          'Se utilizan variedad de técnicas de Blanqueamiento dental, dependiendo la necesidad o requerimiento del paciente. Son técnicas muy poco invasivas, lo que mantiene la integridad dental natural.\n Sus materiales son exclusivos, de uso y manipulación profesional lo que hace de un tratamiento seguro y sin complicaciones.\nEl paciente obtiene una sonrisa naturalmente estética, con piezas dentales  blancas, limpias y saludables.',
        slug: 'blanqueamiento-dental',
        group: 'adultos'
      },
      {
        title: 'Prótesis Dentales  Removibles',
        icon: '🦷',
        description:
          'Son aparatos de reemplazo dental parciales o totales. pueden estar confeccionados con diversos materiales y diseños apropiados a cada caso. Los cuales fueron evolucionando con el tiempo, pudiendo ofrecer al paciente estética y confort a la hora de su rehabilitación con prótesis removibles.',
        slug: 'protesis-removibles',
        group: 'adultos'
      },
      {
        title: 'Medicina Estética',
        icon: '🦷',
        description:
          'Es la rama de la medicina donde el Odontólogo Especializado, aborda los tejidos superficiales y/o músculos faciales, a través de inyecciones  de sustancias apropiadas para la soluciones estéticas, las cuales pueden ser ácido hialurónico y toxina Botulínica.\nLos tratamientos más solicitados al odontólogo, luego de una rehabilitación oral adecuada ya sea con ortodoncia o prótesis dental, son la solución de una sonrisa gingival, tratamiento de bruxismo o terminación estética para un labio con dimensiones armoniosas.',
        slug: 'medicina-estetica',
        group: 'adultos'
      },
      {
        title: 'Odontología general para niños, adolescentes y  adultos.',
        icon: '🦷',
        description:
          'Tratamos la salud bucal del paciente diagnosticando y tratando de forma cuidadosa y responsable las posibles enfermedades bucales que afectan la salud general.\nLe damos fundamental importancia a la  prevención, educando e informando a los pacientes de los cuidados necesarios y los cambios que sufrimos con las distintas etapas evolutivas de la vida, manteniendo la salud bucal de la familia en condiciones óptimas.',
        slug: 'odontologia-general',
        group: 'adultos'
      }
    ]
  }
]

const Services = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const [openGroups, setOpenGroups] = useState<{ niños: boolean; adolescentes: boolean; adultos: boolean }>({
    niños: false,
    adolescentes: false,
    adultos: false
  })

  useEffect(() => {
    // Llevar siempre al tope absoluto al cargar
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

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
          <h1 ref={titleRef} className="text-4xl font-bold text-gray-900">Nuestros Servicios</h1>
        </div>

        {/* Contenedor general de Especialidades con 3 sub-contenedores por edad */}
        <div className="space-y-12">
          {([
            { key: 'niños', title: 'Atención Infantil' },
            { key: 'adolescentes', title: 'Adolescentes' },
            { key: 'adultos', title: 'Adultos' }
          ] as { key: NonNullable<Service['group']>; title: string }[]).map(({ key, title }) => {
            const groupServices = serviceCategories[0].services.filter(s => s.group === key)
            if (groupServices.length === 0) return null
            const isOpen = openGroups[key]
            return (
              <section key={key} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  type="button"
                  className="w-full px-6 py-4 bg-white flex items-center justify-between hover:bg-gray-50"
                  onClick={() => setOpenGroups(prev => ({ ...prev, [key]: !prev[key] }))}
                >
                  <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
                  <span className="text-gray-500">{isOpen ? '−' : '+'}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-gray-50">
                        <div className="grid md:grid-cols-2 gap-6">
                          {groupServices.map((service, idx) => (
                            <div key={idx} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                              <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                  <span className="text-3xl">{service.icon}</span>
                                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                                </div>
                                <p className="text-gray-600 mb-4 whitespace-pre-line">{service.description}</p>
                                {service.features && service.features.length > 0 && (
                                  <ul className="mb-4 space-y-2">
                                    {service.features.map((f, i) => (
                                      <li key={i} className="flex items-center text-gray-700">
                                        <svg className="w-5 h-5 flex-none shrink-0 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        {f}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                                {service.afterFeatures && (
                                  <p className="text-gray-600 mb-4">{service.afterFeatures}</p>
                                )}
                                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                                  {service.price && (
                                    <p className="text-lg font-semibold text-primary">{service.price}</p>
                                  )}
                                  <Link to="/contacto" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                                    <span className="text-sm font-medium">Consultar</span>
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </section>
            )
          })}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-20 text-center"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6">¿Listo para mejorar tu sonrisa?</h3>
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