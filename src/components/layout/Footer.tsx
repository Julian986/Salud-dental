import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="h-8 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent" />
      <footer className="bg-gray-50 border-t border-gray-100"> {/* Cambiado a gris claro */}
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-12 sm:py-16 lg:py-20"> {/* Ajuste de padding lateral y vertical */}
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Dr. Acosta Marcelo</h2> {/* Color más oscuro */}
              <p className="text-sm text-gray-500 leading-relaxed"> {/* Texto más suave */}
                Tu sonrisa en las mejores manos. Especialista en odontología estética y general.
              </p>
              <div className="flex space-x-4"> {/* Espaciado reducido entre íconos */}
                <a href="#" className="text-gray-400 hover:text-primary transition-colors"> {/* Efecto hover con color primario */}
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Servicios</h3>
                  <ul className="mt-4 space-y-3">
                    <li>
                      <Link to="/servicios" className="text-sm text-gray-500 hover:text-primary transition-colors">
                        Ortodoncia
                      </Link>
                    </li>
                    <li>
                      <Link to="/servicios" className="text-sm text-gray-500 hover:text-primary transition-colors">
                        Implantes
                      </Link>
                    </li>
                    <li>
                      <Link to="/servicios" className="text-sm text-gray-500 hover:text-primary transition-colors">
                        Blanqueamiento
                      </Link>
                    </li>
                    <li>
                      <Link to="/servicios" className="text-sm text-gray-500 hover:text-primary transition-colors">
                        Estética Dental
                      </Link>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-8 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Información</h3>
                  <ul className="mt-4 space-y-3">
                    <li>
                      <Link to="/sobre-mi" className="text-sm text-gray-500 hover:text-primary transition-colors">
                        Sobre mí
                      </Link>
                    </li>
                    <li>
                      <Link to="/resultados" className="text-sm text-gray-500 hover:text-primary transition-colors">
                        Resultados
                      </Link>
                    </li>
                    <li>
                      <Link to="/turnos" className="text-sm text-gray-500 hover:text-primary transition-colors">
                        Reservar turno
                      </Link>
                    </li>
                    <li>
                      <Link to="/contacto" className="text-sm text-gray-500 hover:text-primary transition-colors">
                        Contacto
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Horarios</h3>
                  <ul className="mt-4 space-y-3">
                    <li className="text-sm text-gray-500">Lunes - Viernes: 9:00 - 18:00</li>
                    <li className="text-sm text-gray-500">Sábados: 9:00 - 13:00</li>
                    <li className="text-sm text-gray-500">Domingos: Cerrado</li>
                  </ul>
                </div>
                
                <div className="mt-8 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Contacto</h3>
                  <ul className="mt-4 space-y-3">
                    <li className="text-sm text-gray-500">
                      <span className="font-medium block">Dirección:</span>
                      Av. Principal 123, Ciudad
                    </li>
                    <li className="text-sm text-gray-500">
                      <span className="font-medium block">Teléfono:</span>
                      +54 123 456 7890
                    </li>
                    <li className="text-sm text-gray-500">
                      <span className="font-medium block">Email:</span>
                      contacto@drmarcelo.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-xs text-gray-400 text-center">
              &copy; {new Date().getFullYear()} Dr. Acosta Marcelo. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer