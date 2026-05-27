import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { defaultSeo, routeSeo, SITE_URL } from '../lib/seo';

const setMeta = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
  let el = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attribute, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setCanonical = (href: string) => {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = href;
};

const SeoManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = routeSeo[pathname] ?? defaultSeo;
    const path = pathname === '/' ? '' : pathname;
    const url = `${SITE_URL}${path}`;

    document.title = seo.title;
    setMeta('description', seo.description);
    setMeta('og:title', seo.title, 'property');
    setMeta('og:description', seo.description, 'property');
    setMeta('og:url', url, 'property');
    setMeta('twitter:title', seo.title, 'property');
    setMeta('twitter:description', seo.description, 'property');
    setCanonical(url);
  }, [pathname]);

  return null;
};

export default SeoManager;
