import { prisma as db } from '@/lib/db'
import { normalizePublicAssetUrl } from '@/lib/url-normalizer'

export interface AppTheme {
  appTitle: string
  appSubtitle: string
  logoUrl: string
  heroImageUrl: string
  primaryColor: string
  secondaryColor: string
  accentColor: string
  heroTitle: string
  heroSubtitle: string
  infoTitle1: string
  infoSubtitle1: string
  infoTitle2: string
  infoSubtitle2: string
  infoTitle3: string
  infoSubtitle3: string
}

const DEFAULT_THEME: AppTheme = {
  appTitle: 'Clara y Yema',
  appSubtitle: 'Productos frescos de huerta directo al consumidor',
  logoUrl: '/img/espiga.png',
  heroImageUrl: '/img/hero-bg.png',
  primaryColor: '#d89a44',
  secondaryColor: '#2c2c2c',
  accentColor: '#f5f5f5',
  heroTitle: 'Productos Frescos de Huerta',
  heroSubtitle: 'Huevos caseros, verduras, frutas y más. Directo del campo a tu mesa.',
  infoTitle1: 'Compra Semanal',
  infoSubtitle1: 'Pedidos de miércoles a domingo. Entrega en fin de semana.',
  infoTitle2: 'Directo del Campo',
  infoSubtitle2: 'Productos frescos sin intermediarios. Calidad garantizada.',
  infoTitle3: 'Reparto a Domicilio',
  infoSubtitle3: 'Retirá en punto de recogida o recibe en tu casa.',
}

export async function getThemeConfig(): Promise<AppTheme> {
  try {
    const configs = await db.siteConfig.findMany({
      where: {
        key: {
          in: [
            'theme_appTitle',
            'theme_appSubtitle',
            'theme_logoUrl',
            'theme_heroImageUrl',
            'theme_primaryColor',
            'theme_secondaryColor',
            'theme_accentColor',
            'theme_heroTitle',
            'theme_heroSubtitle',
            'theme_infoTitle1',
            'theme_infoSubtitle1',
            'theme_infoTitle2',
            'theme_infoSubtitle2',
            'theme_infoTitle3',
            'theme_infoSubtitle3',
          ],
        },
      },
    })

    const theme: Partial<AppTheme> = {}
    configs.forEach((config) => {
      const key = config.key.replace('theme_', '') as keyof AppTheme
      ;(theme as any)[key] = config.value
    })

    const mergedTheme = { ...DEFAULT_THEME, ...theme }
    return {
      ...mergedTheme,
      logoUrl: normalizePublicAssetUrl(mergedTheme.logoUrl),
      heroImageUrl: normalizePublicAssetUrl(mergedTheme.heroImageUrl),
    }
  } catch (error) {
    console.error('Error fetching theme config:', error)
    return DEFAULT_THEME
  }
}
