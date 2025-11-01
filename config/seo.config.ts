const config = {
  titleTemplate: "%s | Dom'Enfance & Famille",
  defaultTitle: "Dom'Enfance & Famille - Association solidaire au service des familles de Guadeloupe",
  description: "Association solidaire (ESS) proposant des micro-crèches, garde à domicile et ateliers parentalité en Guadeloupe. Avec vous, pour eux.",
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://domenfancefamille.fr',
    siteName: "Dom'Enfance & Famille",
    images: [
      {
        url: 'https://domenfancefamille.fr/hero-acceuil.png',
        width: 1200,
        height: 630,
        alt: "Dom'Enfance & Famille - Famille avec enfants",
      },
    ],
  },
  twitter: {
    handle: '@domenfancefamille',
    site: '@domenfancefamille',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=5',
    },
    {
      name: 'keywords',
      content: 'micro-crèche, garde enfants, Guadeloupe, association, ESS, parentalité, famille, bénévolat',
    },
    {
      name: 'author',
      content: "Dom'Enfance & Famille",
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  ],
};

export default config;
