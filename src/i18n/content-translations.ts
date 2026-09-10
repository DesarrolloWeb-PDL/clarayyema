import { type Lang } from './translations';

type ContentFields = {
  heroTitle: string;
  heroSubtitle: string;
  infoTitle1: string;
  infoSubtitle1: string;
  infoTitle2: string;
  infoSubtitle2: string;
  infoTitle3: string;
  infoSubtitle3: string;
};

const CONTENT_PT: ContentFields = {
  heroTitle: 'Produtos Frescos da Horta',
  heroSubtitle: 'Ovos caseiros, verduras, frutas e mais. Direto do campo à sua mesa.',
  infoTitle1: 'Compra Semanal',
  infoSubtitle1: 'Encomendas de quarta a domingo. Entrega no fim de semana.',
  infoTitle2: 'Direto do Campo',
  infoSubtitle2: 'Produtos frescos sem intermediários. Qualidade garantida.',
  infoTitle3: 'Entrega a Domicílio',
  infoSubtitle3: 'Retire no ponto ou receba em casa.',
};

const CONTENT_EN: ContentFields = {
  heroTitle: 'Fresh Farm Products',
  heroSubtitle: 'Farm eggs, vegetables, fruits and more. Straight from the field to your table.',
  infoTitle1: 'Weekly Order',
  infoSubtitle1: 'Orders from Wednesday to Sunday. Weekend delivery.',
  infoTitle2: 'Straight from the Farm',
  infoSubtitle2: 'Fresh products without middlemen. Quality guaranteed.',
  infoTitle3: 'Home Delivery',
  infoSubtitle3: 'Pick up at a point or receive at home.',
};

const contentTranslations: Record<Exclude<Lang, 'es'>, ContentFields> = {
  pt: CONTENT_PT,
  en: CONTENT_EN,
};

/**
 * Returns translated content for theme fields.
 * Falls back to the original DB value for 'es' or missing translations.
 */
export function getTranslatedContent(
  lang: Lang,
  theme: ContentFields
): ContentFields {
  if (lang === 'es') return theme;

  const translations = contentTranslations[lang];
  if (!translations) return theme;

  return {
    heroTitle: translations.heroTitle || theme.heroTitle,
    heroSubtitle: translations.heroSubtitle || theme.heroSubtitle,
    infoTitle1: translations.infoTitle1 || theme.infoTitle1,
    infoSubtitle1: translations.infoSubtitle1 || theme.infoSubtitle1,
    infoTitle2: translations.infoTitle2 || theme.infoTitle2,
    infoSubtitle2: translations.infoSubtitle2 || theme.infoSubtitle2,
    infoTitle3: translations.infoTitle3 || theme.infoTitle3,
    infoSubtitle3: translations.infoSubtitle3 || theme.infoSubtitle3,
  };
}
