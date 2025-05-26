import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Ana Sayfa', href: '/' },
    {
      text: 'Blog',
      links: [
        { text: 'Genel', href: getPermalink('/blog') },
        { text: 'Siber Güvenlik', href: getPermalink('/category/siber-guvenlik') },
        { text: 'Yazılım Geliştirme', href: getPermalink('/category/yazilim-gelistirme') },
        { text: 'Yazılım Güvenliği', href: getPermalink('/category/yazilim-guvenligi' ) },
      ],
    },
    {
      text: 'Sayfalar',
      links: [
        { text: 'Özellikler', href: getPermalink('/#features') },
        { text: 'Hizmetler', href: getPermalink('/services') },
        { text: 'Fiyatlandırma', href: getPermalink('/pricing') },
        { text: 'Hakkımızda', href: getPermalink('/about') },
        { text: 'İletişim', href: getPermalink('/contact') },
        { text: 'Referanslar', href: getPermalink('/testimonials') },
      ],
    },
    {
      text: 'Yasal',
      links: [
        { text: 'Kullanım Koşulları', href: getPermalink('/terms') },
        { text: 'Gizlilik Politikası', href: getPermalink('/privacy') },
      ],
    },
  ],
  actions: [{ text: 'İletişim', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Menü',
      links: [
        { text: 'Ana Sayfa', href: getPermalink('/') },
        { text: 'Blog', href: getPermalink('/blog') },
        { text: 'Hakkımızda', href: getPermalink('/about') },
        { text: 'İletişim', href: getPermalink('/contact') },
      ],
    },
        {
      title: 'Blog',
      links: [
        { text: 'Genel', href: getPermalink('/blog') },
        { text: 'Siber Güvenlik', href: getPermalink('/category/siber-guvenlik') },
        { text: 'Yazılım Geliştirme', href: getPermalink('/category/yazilim-gelistirme') },
        { text: 'Yazılım Güvenliği', href: getPermalink('/category/yazilim-guvenligi' ) },
      ],
    },
    {
      title: 'Sayfalar',
      links: [
        { text: 'Özellikler', href: getPermalink('/#features') },
        { text: 'Hizmetler', href: getPermalink('/services') },
        { text: 'Fiyatlandırma', href: getPermalink('/pricing') },
        { text: 'Referanslar', href: getPermalink('/testimonials') },
      ],
    },
    {
      title: 'Yasal',
      links: [
        { text: 'Kullanım Koşulları', href: getPermalink('/terms') },
        { text: 'Gizlilik Politikası', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Kullanım Koşulları', href: getPermalink('/terms') },
    { text: 'Gizlilik Politikası', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/emadocsyazilim' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/emadocsyazilim' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/emadocsyazilim' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://emadocs.com/">EmaDocs Yazılım</a> · Tüm hakları saklıdır.
  `,
};
