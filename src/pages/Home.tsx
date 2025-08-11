import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/slick.css'
import image from '../../public/logo salud dental verde.png'


const featuredServices = [
  {
    title: 'Ortodoncia para adolescentes y adultos con brackets.',
    description:
      'Tratamiento de Ortodoncia fija con brackets de diferentes materiales, pudiendo el paciente, optar por la aparatología deseada.\nDesde las técnicas más sencillas hasta las de alta tecnología, estética y confort. Logrando resultados exitosos, corrigiendo la oclusión, tratando cuidadosamente la salud de la articulación temporomandibular, tejidos periodontales y dentarios, dando como resultado la sonrisa ideal.',
    icon: '🦷',
    image: 'https://i.pinimg.com/736x/ba/45/23/ba4523e334bf8dbde9a91b611418fa3e.jpg',
    features: [],
    photos: [
      'https://i.pinimg.com/736x/ba/45/23/ba4523e334bf8dbde9a91b611418fa3e.jpg',
      'https://i.pinimg.com/736x/a0/a2/61/a0a2615eac7c8169a8f9ef0ff462a6ca.jpg',
      'https://i.pinimg.com/736x/a0/f5/f9/a0f5f93fd15c54a3b909854aaa7fb142.jpg',
      'https://i.pinimg.com/1200x/3f/22/59/3f2259fed0e3e91262ca1656dc7dac44.jpg',
      'https://i.pinimg.com/736x/ea/b7/00/eab7004dd258070f24a899b479432856.jpg'
    ]
  },
  {
    title: 'Ortodoncia para adolescentes y adultos  con brackets autoligables.',
    description:
      'Última tecnología en Brackets, con características beneficiosas para el tratamiento del paciente.\nÉsta técnica con Brackets autoligables se caracteriza por:',
    icon: '🦷',
    image: 'https://i.pinimg.com/1200x/ba/76/e8/ba76e8a5085a690329c98ac430c822c1.jpg',
    features: [
      'Ser indolora.',
      'Tratamiento más rápidos que las técnicas convencionales.',
      'Evitar extracciones dentales en los tratamientos indicados con ellas.',
      'Mejor confort.',
      'Mejor higiene.',
      'Sonrisas amplias.'
    ],
    photos: [
      'https://i.pinimg.com/1200x/ba/76/e8/ba76e8a5085a690329c98ac430c822c1.jpg',
      'https://i.pinimg.com/1200x/97/7e/ea/977eea7e0fb3319c1620b901c3c33b9b.jpg',
      'https://i.pinimg.com/1200x/39/de/3a/39de3a252d50fbccaad0e173577afd8a.jpg',
      'https://i.pinimg.com/736x/22/8a/01/228a01e11e5583f86cbe4091e4f3865d.jpg'
    ]
  },
  {
    title: 'Alineadores Invisibles para adultos.',
    description:
      'Tratamientos de alineación dentaria de última generación. Con materiales confeccionados con tecnología de avanzada, donde el paciente goza de un buen confort y alta estética.',
    icon: '🦷',
    image: 'https://cdn.shopify.com/s/files/1/0685/4115/3567/files/clearadultbraces3.jpg',
    features: []
  },
  {
    title: 'Ortopedia para niños.',
    description:
      'Aparatología Removible. Aplicada en pacientes de los 5 a 10 años aprox.\nTratamientos destinados a la corrección de los maxilares en edades tempranas del desarrollo (en pacientes con dientes de leche o temporarios), donde la aparatología utilizada no provoca dolor ni malestar al paciente pequeño.\nCon éstos tratamientos, obtenemos como resultado,',
    icon: '🦷',
    image: 'https://i.pinimg.com/736x/c4/e0/bd/c4e0bd6b5b5317cca813ac74697949ff.jpg',
    features: [
      'Aumentar el tamaño de los maxilares, evitando futuro apiñamiento dentario.',
      'La corrección de una  maloclusión.',
      'Corregir un mal hábito.',
      'Corrección de una deglución atípica.',
      'Corrigen un apoyo lingual incorrecto.',
      'Entre otras …'
    ],
    afterFeatures: 'Son tratamientos interdisciplinarios, dónde el papel del fonoaudiólogo y/o Otorrinolaringólogo, puede ser importante para el éxito total del tratamiento.',
    photos: [
      'https://i.pinimg.com/736x/c4/e0/bd/c4e0bd6b5b5317cca813ac74697949ff.jpg',
      'https://i.pinimg.com/1200x/2a/46/73/2a4673a6470c113caabdcce3196f7c61.jpg',
      'https://i.pinimg.com/1200x/dc/52/1f/dc521f5d28f76217cad6be5120cc238a.jpg',
      'https://i.pinimg.com/736x/41/f4/25/41f4259a4da690d3115003886aae15f4.jpg',
      'https://i.pinimg.com/736x/44/bb/99/44bb99162184c65bf764f811251b8a3a.jpg'
    ]
  },
  {
    title: 'Prótesis Dental Fija',
    description:
      'Tratamiento de reemplazo fijo de piezas faltantes, sin necesidad de retirar para su higiene, no invasivo, sin cirugía, de alta durabilidad, excelente comodidad y estética.\nDichos tratamientos pueden utilizarse para:',
    icon: '🦷',
    image: 'https://i.pinimg.com/736x/29/a5/8e/29a58e0956d26bc06aada50db49814d9.jpg',
    features: [
      'Reemplazo de una o varias  piezas dentales faltantes.',
      'Modificar el tamaño de un diente.',
      'Modificar la forma dentaria.',
      'Solucionar el color de una pieza dentaria afectada.'
    ],
    photos: [
      'https://i.pinimg.com/736x/29/a5/8e/29a58e0956d26bc06aada50db49814d9.jpg',
      'https://i.pinimg.com/1200x/de/56/ea/de56ea4a2b2b1fe8986b84980b988866.jpg'
    ]
  },
  {
    title: 'Carillas Dentales',
    description:
      'Son tratamientos estéticos, en la cual reemplazamos una capa de tejido superficial del diente por material de alta estética, confeccionado especialmente para el caso en cuestión, pudiendo otorgar el color y/o forma deseada.',
    icon: '🦷',
    image: 'https://i.pinimg.com/736x/41/7e/3c/417e3cba7a94a97c4692c8acc82a00a9.jpg',
    features: [],
    photos: [
      'https://i.pinimg.com/736x/41/7e/3c/417e3cba7a94a97c4692c8acc82a00a9.jpg'
    ]
  },
  {
    title: 'Blanqueamiento Dental',
    description:
      'Se utilizan variedad de técnicas de Blanqueamiento dental, dependiendo la necesidad o requerimiento del paciente. Son técnicas muy poco invasivas, lo que mantiene la integridad dental natural.\n Sus materiales son exclusivos, de uso y manipulación profesional lo que hace de un tratamiento seguro y sin complicaciones.\nEl paciente obtiene una sonrisa naturalmente estética, con piezas dentales  blancas, limpias y saludables.',
    icon: '🦷',
    image: 'https://www.ragaortodoncia.com/wp-content/uploads/2020/08/blanqueamiento-dental-raga-ortodoncia.jpg',
    features: []
  },
  {
    title: 'Prótesis Dentales  Removibles',
    description:
      'Son aparatos de reemplazo dental parciales o totales. pueden estar confeccionados con diversos materiales y diseños apropiados a cada caso. Los cuales fueron evolucionando con el tiempo, pudiendo ofrecer al paciente estética y confort a la hora de su rehabilitación con prótesis removibles.',
    icon: '🦷',
    image: 'https://i.pinimg.com/1200x/9a/2c/6a/9a2c6acc3b9645096e78190ec8999c77.jpg',
    features: [],
    photos: [
      'https://i.pinimg.com/1200x/9a/2c/6a/9a2c6acc3b9645096e78190ec8999c77.jpg',
      'https://i.pinimg.com/1200x/a9/bf/d2/a9bfd2401e22a377c5484979bcea26fe.jpg',
      'https://i.pinimg.com/736x/c9/1e/c3/c91ec351427127a512e676de900fc50c.jpg'
    ]
  },
  {
    title: 'Medicina Estética',
    description:
      'Es la rama de la medicina donde el Odontólogo Especializado, aborda los tejidos superficiales y/o músculos faciales, a través de inyecciones  de sustancias apropiadas para la soluciones estéticas, las cuales pueden ser ácido hialurónico y toxina Botulínica.\nLos tratamientos más solicitados al odontólogo, luego de una rehabilitación oral adecuada ya sea con ortodoncia o prótesis dental, son la solución de una sonrisa gingival, tratamiento de bruxismo o terminación estética para un labio con dimensiones armoniosas.',
    icon: '🦷',
    image: '/odontologia.png',
    features: []
  },
  {
    title: 'Odontología general para niños, adolescentes y  adultos.',
    description:
      'Tratamos la salud bucal del paciente diagnosticando y tratando de forma cuidadosa y responsable las posibles enfermedades bucales que afectan la salud general.\nLe damos fundamental importancia a la  prevención, educando e informando a los pacientes de los cuidados necesarios y los cambios que sufrimos con las distintas etapas evolutivas de la vida, manteniendo la salud bucal de la familia en condiciones óptimas.',
    icon: '🦷',
    image: 'https://www.ragaortodoncia.com/wp-content/uploads/2017/05/importancia-de-la-salud-dental.jpg',
    features: []
  }
]

const testimonials = [
  {
    name: 'María González',
    text: 'Excelente atención y resultados. La Dra. Jesica es muy profesional y cuidadosa.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=23'
  },
  {
    name: 'Juan Pérez',
    text: 'El mejor dentista que he conocido. Muy recomendable.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=38'
  },
  {
    name: 'Ana Martínez',
    text: 'Tratamiento de ortodoncia exitoso. Muy contenta con los resultados.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=35'
  }
]

const Home = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [activeImages, setActiveImages] = useState<string[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const sliderRef = useRef<Slider | null>(null)

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsLightboxOpen(false)
      if (e.key === 'ArrowLeft') sliderRef.current?.slickPrev()
      if (e.key === 'ArrowRight') sliderRef.current?.slickNext()
    }
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isLightboxOpen])

  const openLightbox = (images: string[], startIndex = 0) => {
    setActiveImages(images)
    setActiveIndex(startIndex)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => setIsLightboxOpen(false)

  return (
    <div className="pt-16 shadow-md">
      {/* Hero Section */}
      <section className="relative bg-white min-h-[90vh] flex items-center justify-center text-center px-6 sm:px-12 lg:px-24 pt-6 sm:pt-8">
  <div className="max-w-xl z-10">
    {/* <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-gray-900 leading-tight">
      Salud Dental
    </h1> */}
    <img src={image} alt="logo" className="block mx-auto w-[21rem] sm:w-96 md:w-[28rem] lg:w-[36rem] h-auto" />
    <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
      Consultorio Odontológico Especializado con atención profesional para toda la familia.
    </p>
    <div className="mt-10 flex items-center justify-center">
      <Link
        to="/turnos"
        className="inline-block text-md rounded-full border border-primary bg-[rgb(44,123,183)] px-6 py-3 font-bold tracking-tight text-white hover:bg-[rgb(44,123,183)]/90 transition"
      >
        Reservar turno
      </Link>
    </div>
  </div>
</section>


      {/* Featured Services */}
      <section className="pt-10 pb-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Especialidades</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Contamos con profesionales que ofrecen tratamientos con la tecnología apropiada, alta formación académica y experiencia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-4xl">{service.icon}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 flex-none shrink-0 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {service.afterFeatures && (
                    <p className="text-gray-600 mt-3">{service.afterFeatures}</p>
                  )}
                  
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      to="/contacto"
                      className="inline-flex items-center rounded-full bg-[rgb(44,123,183)] px-4 py-2 text-white font-semibold hover:bg-[rgb(44,123,183)]/90 transition-colors"
                    >
                      Consultar
                    </Link>
                    {service.photos && service.photos.length > 0 && (
                      <button
                        onClick={() => openLightbox(service.photos!, 0)}
                        className="inline-flex items-center rounded-full border border-primary text-primary px-4 py-2 font-semibold hover:bg-primary/5 transition-colors"
                      >
                        Ver fotos
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          aria-modal="true"
          role="dialog"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeLightbox}
          />

          {/* Botón cerrar */}
          <button
            aria-label="Cerrar"
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-[60] inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl"
          >
            ×
          </button>

          {/* Controles izquierda/derecha */}
          <button
            aria-label="Anterior"
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-3 md:left-6 z-[60] inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 md:w-8 md:h-8"><path fillRule="evenodd" d="M15.78 3.72a.75.75 0 010 1.06L9.56 11l6.22 6.22a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 011.06 0z" clipRule="evenodd" /></svg>
          </button>
          <button
            aria-label="Siguiente"
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-3 md:right-6 z-[60] inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 md:w-8 md:h-8"><path fillRule="evenodd" d="M8.22 20.28a.75.75 0 010-1.06L14.44 13 8.22 6.78a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 01-1.06 0z" clipRule="evenodd" /></svg>
          </button>

          {/* Contenedor del slide */}
          <div className="relative z-[55] w-full max-w-6xl px-4">
            <Slider
              ref={sliderRef}
              initialSlide={activeIndex}
              dots={true}
              infinite={true}
              speed={400}
              slidesToShow={1}
              slidesToScroll={1}
              swipe={true}
              arrows={false}
              adaptiveHeight={true}
              beforeChange={(_, next) => setActiveIndex(next)}
            >
              {activeImages.map((src, idx) => (
                <div key={idx} className="px-2">
                  <img
                    src={src}
                    alt={`foto-${idx + 1}`}
                        className="mx-auto max-h-[80vh] md:max-h-[85vh] w-auto object-contain drop-shadow-2xl rounded-[5%]"
                    loading="lazy"
                  />
                </div>
              ))}
            </Slider>

            {/* Indicador */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/90 text-sm bg-black/30 px-3 py-1 rounded-full">
              {activeIndex + 1} / {activeImages.length}
            </div>
          </div>
        </div>
      )}

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Lo que dicen nuestros pacientes</h2>
          <div className="max-w-4xl mx-auto">
            <Slider {...sliderSettings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-4">
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h3>
                        <div className="flex items-center">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-xl">★</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed italic">"{testimonial.text}"</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para mejorar tu sonrisa?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Escribinos hoy mismo y da el primer paso hacia la mejor sonrisa !
          </p>
          <a
            href="https://wa.me/2236160437"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            2236160437
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home 