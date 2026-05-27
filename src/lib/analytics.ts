import { event } from './gtag';

const pagePath = () => window.location.pathname;

/** Clic en "Reservar turno", "Turnos online" o equivalente que lleva a /turnos */
export const trackReservarTurno = (buttonLocation: string) => {
  event('reservar_turno_click', {
    button_location: buttonLocation,
    page_path: pagePath(),
  });
};

/** Clic en "Contactar por WhatsApp" o botón flotante de WhatsApp */
export const trackWhatsApp = (buttonLocation: string) => {
  event('whatsapp_click', {
    button_location: buttonLocation,
    page_path: pagePath(),
  });
};
