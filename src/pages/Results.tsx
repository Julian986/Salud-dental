import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { Link } from 'react-router-dom';

interface BeforeAfter {
  id: number;
  title: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  treatment: string;
  duration: string;
}

interface Testimonial {
  id: number;
  name: string;
  image: string;
  text: string;
  rating: number;
  treatment: string;
}

const beforeAfterCases: BeforeAfter[] = [
  {
    id: 1,
    title: "Blanqueamiento Dental Profesional",
    beforeImage: "https://res.cloudinary.com/dnnxgzqzv/image/upload/v1749764498/2despues_wtw6js.webp",
    afterImage: "https://res.cloudinary.com/dnnxgzqzv/image/upload/v1749764499/2antes_h1daxr.webp",
    description: "Resultados inmediatos con nuestro sistema de blanqueamiento láser",
    treatment: "Blanqueamiento Dental con Láser",
    duration: "1 sesión"
  },
  {
    id: 2,
    title: "Corrección Dental con Ortodoncia",
    beforeImage: "https://res.cloudinary.com/dnnxgzqzv/image/upload/v1749764616/3despues_zznxs4.webp",
    afterImage: "https://res.cloudinary.com/dnnxgzqzv/image/upload/v1749764616/5antes_yk7hbg.webp",
    description: "Transformá tu sonrisa con nuestro tratamiento de ortodoncia profesional. Ideal para alinear dientes torcidos y mejorar la mordida.",
    treatment: "Ortodoncia con Brackets Metálicos",
    duration: "12 a 24 meses"
  },
  {
    id: 3,
    title: "Rehabilitación Oral con Prótesis Dentales",
    beforeImage: "https://res.cloudinary.com/dnnxgzqzv/image/upload/v1749764732/6despues_2_wxuldc.webp",
    afterImage: "https://res.cloudinary.com/dnnxgzqzv/image/upload/v1749764732/6antes_pupuzw.webp",
    description: "Devolvé la funcionalidad y la estética a tu sonrisa con nuestras prótesis dentales personalizadas, ideales para pacientes sin piezas dentales.",
    treatment: "Prótesis Dentales Totales Removibles",
    duration: "2 a 4 semanas (según el caso)"
  }
];

const testimonials: Testimonial[] = [
  {
    "id": 3,
    "name": "Laura Martínez",
    "image": 'https://i.pravatar.cc/150?img=26',
    "text": "¡Increíble el cambio en solo 45 minutos! El Dr. Marcelo me explicó todo el proceso y me hizo sentir muy segura. Mi sonrisa pasó de estar amarillenta a lucir blanca y radiante, sin ninguna molestia. ¡Totalmente recomendado!",
    "rating": 5,
    "treatment": "Blanqueamiento Dental con Láser"
  },
  {
    "id": 4,
    "name": "Carlos Rojas",
    "image": "https://i.pravatar.cc/150?img=13",
    "text": "Al principio dudaba por los brackets, pero el Dr. Marcelo me mostró casos similares y me explicó todo el proceso. Durante los 18 meses de tratamiento, las citas fueron eficientes y el seguimiento personalizado fue excelente. ¡Hoy tengo la sonrisa que siempre quise!",
    "rating": 5,
    "treatment": "Ortodoncia con Brackets Metálicos"
  },
  {
    "id": 5,
    "name": "Ana López",
    "image": "https://i.pravatar.cc/150?img=47",
    "text": "Perdí varias piezas dentales y me daba vergüenza sonreír. En solo 3 semanas, el Dr. Marcelo me ayudó a recuperar mi sonrisa con prótesis que son increíblemente cómodas y naturales. ¡Ahora puedo comer de todo y sonreír con confianza!",
    "rating": 5,
    "treatment": "Prótesis Dentales Totales Removibles"
  }
];

const Results = () => {
  const [activeTab, setActiveTab] = useState<'cases' | 'testimonials'>('cases');

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-tr from-primary/40 via-primary/80 to-primary-dark/90 py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-6 mt-10"
          >
            Resultados que Transforman Sonrisas
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Descubre los cambios reales que hemos logrado para nuestros pacientes a través de tratamientos dentales de excelencia.
          </motion.p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-6 -mt-8">
        <div className="flex justify-center">
          <div className="flex bg-white rounded-lg shadow-lg overflow-hidden relative z-10">
            <motion.button
              onClick={() => setActiveTab('cases')}
              className={`relative px-8 py-4 font-medium transition-colors duration-300 ${
                activeTab === 'cases' ? 'text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {activeTab === 'cases' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">Casos Clínicos</span>
            </motion.button>
            <motion.button
              onClick={() => setActiveTab('testimonials')}
              className={`relative px-8 py-4 font-medium transition-colors duration-300 ${
                activeTab === 'testimonials' ? 'text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {activeTab === 'testimonials' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">Testimonios</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <AnimatePresence mode="wait">
          {activeTab === 'cases' ? (
            <motion.section
              key="cases"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="space-y-20"
            >
              {beforeAfterCases.map((caseItem) => (
                <div key={caseItem.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-2/3 p-4 p-10">
                    <ReactCompareSlider
                      itemOne={
                        <ReactCompareSliderImage
                          src={caseItem.beforeImage}
                          alt="Antes"
                          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />
                      }
                      itemTwo={
                        <ReactCompareSliderImage
                          src={caseItem.afterImage}
                          alt="Después"
                          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />
                      }
                      className="h-80 w-full max-h-[500px] rounded-lg overflow-hidden"
                    />

                    </div>
                    <div className="md:w-1/3 p-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">{caseItem.title}</h2>
                      <p className="text-gray-600 mb-6">{caseItem.description}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Tratamiento</h3>
                          <p className="text-gray-900">{caseItem.treatment}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Duración</h3>
                          <p className="text-gray-900">{caseItem.duration}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.section>
          ) : (
            <motion.section
              key="testimonials"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid md:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                      />
                      <div className="ml-4">
                        <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-primary font-medium">{testimonial.treatment}</p>
                      </div>
                    </div>
                    <div className="flex mb-4 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.text}"</p>
                  </div>
                </div>
              ))}
            </motion.section>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <section className="mt-24 text-center">
          <div className="bg-[rgb(44,123,183)] rounded-2xl p-12 text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-6">¿Listo para transformar tu sonrisa?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Agenda una consulta y descubre cómo podemos ayudarte a lograr la sonrisa que siempre has deseado.
            </p>
            <Link 
              to="/turnos" 
              className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Reservar Consulta
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Results;