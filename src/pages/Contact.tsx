import { useState } from 'react'
import { motion } from 'framer-motion'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { FaWhatsapp } from 'react-icons/fa';
import * as Yup from 'yup'
import { FormikHelpers } from 'formik'

interface FormValues {
  name: string
  email: string
  phone: string
  message: string
}

const validationSchema = Yup.object({
  name: Yup.string().required('El nombre es requerido'),
  email: Yup.string()
    .required('El email es requerido')
    .matches(
      /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Por favor, ingresa un email válido'
    ),
  phone: Yup.string().required('El teléfono es requerido'),
  message: Yup.string().required('El mensaje es requerido')
})

const Contact = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (_values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    try {
      // Aquí iría la lógica para enviar el formulario
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulación de envío
      setSubmitSuccess(true)
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-6 sm:px-4 py-28 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contacto</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulario de Contacto */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Envíanos un mensaje
            </h2>
            <Formik
              initialValues={{
                name: '',
                email: '',
                phone: '',
                message: ''
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                      Nombre completo
                    </label>
                    <div className="mt-2">
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        className="block rounded-none w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="mt-2 text-sm text-red-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Email
                    </label>
                    <div className="mt-2">
                      <Field
                        type="text"
                        id="email"
                        name="email"
                        className="block rounded-none w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="mt-2 text-sm text-red-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                      Teléfono
                    </label>
                    <div className="mt-2">
                      <Field
                        type="tel"
                        id="phone"
                        name="phone"
                        className="block rounded-none w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="mt-2 text-sm text-red-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                      Mensaje
                    </label>
                    <div className="mt-2">
                      <Field
                        as="textarea"
                        id="message"
                        name="message"
                        rows={4}
                        minLength={10}
                        maxLength={500}
                        style={{ minHeight: '100px', maxHeight: '200px' }}
                        className="block rounded-none w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white"
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="mt-2 text-sm text-red-600"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary rounded-none px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50"
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                    </button>
                  </div>

                  <div>
                          <a
                            href="https://wa.me/2233022929"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex justify-center items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-2 text-sm font-semibold rounded-none shadow-sm transition-colors"
                          >
                            <FaWhatsapp className="w-5 h-5" />
                            Contactar por WhatsApp
                          </a>

                  </div>


                  {submitSuccess && (
                    <div className="rounded-md bg-green-50 p-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-green-800">
                            ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </Form>
              )}
            </Formik>
          </div>

          {/* Información de Contacto y Mapa */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Información de contacto
            </h2>
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Dirección</h3>
                <p className="text-gray-600 flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Av. Principal 123<br />
                  Ciudad, Estado<br />
                  Código Postal
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Teléfono</h3>
                <p className="text-gray-600 flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +54 9 2233 02-2929
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contacto@drmarcelo.com
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Horario</h3>
                <p className="text-gray-600 flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Lunes a Viernes: 9:00 AM - 6:00 PM<br />
                  Sábados: 9:00 AM - 1:00 PM
                </p>
              </div>
            </div>

          {/* Mapa */}
          <div className="rounded-lg overflow-hidden w-full h-96"> {/* Altura fija recomendada */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.4467304654595!2d-57.553719624528306!3d-37.96670264279349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584db0bcfa36805%3A0xbd8f81a0d3afebdc!2sConsultorio%20Odontol%C3%B3gico%20Integral%20constituci%C3%B3n%20-%20Dr.%20Acosta%20Marcelo!5e0!3m2!1ses!2sar!4v1749577839960!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false} // Evita el modo pantalla completa que puede redirigir
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="pointer-events-auto select-none" // select-none evita selección de texto accidental
              title="Ubicación del consultorio"
            />
          </div>
          
          </div>
        </div>
      </motion.div>

      {/* WhatsApp Flotante */}
      <a
        href="https://wa.me/2233022929"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  )
}

export default Contact 