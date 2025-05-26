import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Ana Sayfa',
      href: '/',
    },
    {
      text: 'Sayfalar',
      links: [
        {
          text: 'Özellikler (Bağlantı)',
          href: getPermalink('/#features'),
        },
        {
          text: 'Hizmetler',
          href: getPermalink('/services'),
        },
        {
          text: 'Fiyatlandırma',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Hakkımızda',
          href: getPermalink('/about'),
        },
        {
          text: 'İletişim',
          href: getPermalink('/contact'),
        },
      ],
    },
{
      text: 'Şartlar & Politikalar',
      links: [
        {
          text: 'Kullanım Koşulları',
          href: getPermalink('/terms'),
        },
        {
          text: 'Gizlilik Politikası',
          href: getPermalink('/privacy'),
        },
      ],
    },
  ],
  actions: [{ text: 'İletişim', href: '/contact' }],
};

export const footerData = {
  links: [
    {
      title: 'Menü',
      links: [
        { text: 'Ana Sayfa', href: '/' },
      ],
    },
    {
      title: 'Sayfalar',
      links: [
        { text: 'Özellikler (Bağlantı)', href: getPermalink('/#features') },
        { text: 'Hizmetler', href: getPermalink('/services') },
        { text: 'Fiyatlandırma', href: getPermalink('/pricing') },
        { text: 'Hakkımızda', href: getPermalink('/about') },
        { text: 'İletişim', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Şartlar & Politikalar',
      links: [
        { text: 'Kullanım Koşulları', href: getPermalink('/terms') },
        { text: 'Gizlilik Politikası', href: getPermalink('/privacy') },
      ],
    },
    {
      title: 'Şirket',
      links: [
        { text: 'Hakkımızda', href: getPermalink('/about') },
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

    Made by <a class="text-blue-600 underline dark:text-muted" href="https://emadocs.com/"> EmaDocs Yazılım</a> · Tüm hakları saklıdır.
  `,
};
