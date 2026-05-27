export const GA_MEASUREMENT_ID = 'G-X0ZLVK8D41';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const event = (action: string, params?: Record<string, string>) => {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', action, params);
};
