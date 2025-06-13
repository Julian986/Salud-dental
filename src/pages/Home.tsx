import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/slick.css'

const featuredServices = [
  {
    title: 'Ortodoncia',
    description: 'Tratamientos personalizados para una sonrisa perfecta. Utilizamos las últimas tecnologías en brackets y alineadores transparentes para lograr resultados óptimos.',
    icon: '🦷',
    image: 'https://res.cloudinary.com/dnnxgzqzv/image/upload/v1749764144/photo-1629909613654-28e377c37b09_xmutin.webp',
    features: ['Brackets metálicos y estéticos', 'Invisalign', 'Ortodoncia lingual']
  },
  {
    title: 'Implantes Dentales',
    description: 'Soluciones permanentes y naturales para dientes perdidos. Nuestros implantes están diseñados para durar toda la vida y restaurar la funcionalidad completa.',
    icon: '🦷',
    image: 'https://res.cloudinary.com/dnnxgzqzv/image/upload/v1749764144/photo-1629909615184-74f495363b67_mmgxvh.webp',
    features: ['Implantes de titanio', 'Prótesis fijas', 'Rehabilitación completa']
  },
  {
    title: 'Blanqueamiento Dental',
    description: 'Logra una sonrisa más brillante y atractiva con nuestros tratamientos de blanqueamiento profesional. Resultados visibles desde la primera sesión.',
    icon: '🦷',
    image: 'https://res.cloudinary.com/dnnxgzqzv/image/upload/v1749764144/photo-1629909613654-28e377c37b09_xmutin.webp',
    features: ['Blanqueamiento LED', 'Tratamiento en consulta', 'Kits para el hogar']
  }
]

const testimonials = [
  {
    name: 'María González',
    text: 'Excelente atención y resultados. El Dr. Marcelo es muy profesional y cuidadoso.',
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
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  }

  return (
    <div className="pt-16 shadow-md">
      {/* Hero Section */}
      <section className="relative bg-white min-h-[90vh] flex items-center justify-center text-center px-6 sm:px-12 lg:px-24">
  <div className="max-w-xl z-10">
    <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-gray-900 leading-tight">
      Sonríe con confianza
    </h1>
    <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
      Atención odontológica profesional con tecnología avanzada. Te ayudamos a lograr la sonrisa que merecés.
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
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de tratamientos dentales con la más alta tecnología y profesionalismo
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
                        <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6">
                    <Link
                      to="/"
                      className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
                    >
                      Conocer más
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
      </section>

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
            Agenda tu consulta hoy mismo y da el primer paso hacia una sonrisa más saludable y hermosa.
          </p>
          <Link to="/turnos" className="inline-block text-lg bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300">
            Reservar turno
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home 