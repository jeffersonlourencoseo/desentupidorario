export const SITE_CONFIG = {
  domain: 'https://desentupidorario.com.br',
  siteName: 'Desentupidora Rio de Janeiro',
  tagline: 'Desentupidora no Rio de Janeiro com atendimento 24h',
  description:
    'Desentupidora no Rio de Janeiro com atendimento 24h. Desentupimento de esgoto, cano, pia, ralo, vaso sanitário, fossa e caixa de gordura. Orçamento grátis.',
  language: 'pt-BR',
  city: 'Rio de Janeiro',
  state: 'RJ',
  country: 'BR',

  // NAP (Name, Address, Phone) — dados reais do negócio
  companyName: 'Desentupidora Rio de Janeiro',
  legalName: 'Desentupidora Rio de Janeiro',
  phone: '+5521997751577',
  whatsapp: '5521997751577',
  email: 'contato@desentupidorario.com.br',
  address: {
    street: 'Av. Brasil',
    number: '10946',
    neighborhood: 'Penha',
    city: 'Rio de Janeiro',
    state: 'RJ',
    postalCode: '21012-350',
    country: 'BR',
  },
  fullAddress: 'Av. Brasil, 10946 — Penha, Rio de Janeiro - RJ, 21012-350',
  openingHours: 'Mo-Su 00:00-23:59',
  priceRange: '$$',
  // cnpj: '[SUBSTITUIR: CNPJ da empresa - adicionar quando houver]',

  // Social / contato
  whatsappMessage: 'Olá! Preciso de uma desentupidora no Rio de Janeiro. Pode me ajudar?',
};

export function whatsappLink(message: string = SITE_CONFIG.whatsappMessage) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encoded}`;
}

export function phoneLink() {
  return `tel:${SITE_CONFIG.phone}`;
}

export function emailLink() {
  return `mailto:${SITE_CONFIG.email}`;
}
