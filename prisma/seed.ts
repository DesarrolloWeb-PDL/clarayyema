import nextEnv from '@next/env';
import { createConfiguredPrismaClient } from '../src/lib/prisma-client';

const { loadEnvConfig } = nextEnv;

loadEnvConfig(process.cwd());

const prisma = createConfiguredPrismaClient();

async function main() {
  console.log('🌱 Iniciando seed de la base de datos...');

  // Crear categorías
  const huevosCategory = await prisma.category.upsert({
    where: { slug: 'huevos' },
    update: {},
    create: {
      name: 'Huevos',
      slug: 'huevos',
      description: 'Huevos caseros de gallinas en libertad',
      order: 1,
    },
  });

  const verdurasCategory = await prisma.category.upsert({
    where: { slug: 'verduras' },
    update: {},
    create: {
      name: 'Verduras',
      slug: 'verduras',
      description: 'Verduras frescas de huerta',
      order: 2,
    },
  });

  const frutasCategory = await prisma.category.upsert({
    where: { slug: 'frutas' },
    update: {},
    create: {
      name: 'Frutas',
      slug: 'frutas',
      description: 'Frutas de temporada',
      order: 3,
    },
  });

  console.log('✅ Categorías creadas');

  // Crear productos de ejemplo
  const products = [
    {
      name: 'Huevos Caseros (docena)',
      slug: 'huevos-caseros-docena',
      description: 'Huevos de gallinas criadas en libertad, alimentadas con maíz yworms. Color cascarón Variable.',
      price: 4.50,
      weight: 800,
      ingredients: 'Huevos de gallina',
      allergens: ['Huevo'],
      riskNote: null,
      imageUrl: '/images/productos/huevos-caseros.jpg',
      imageAlt: 'Huevos caseros docena',
      weeklyStock: 30,
      allowSlicing: false,
      isActive: true,
      categoryId: huevosCategory.id,
    },
    {
      name: 'Huevos de Pato (docena)',
      slug: 'huevos-pato-docena',
      description: 'Huevos de pato, más grandes y con yema más oscura. Ideales para repostería.',
      price: 6.00,
      weight: 900,
      ingredients: 'Huevo de pato',
      allergens: ['Huevo'],
      riskNote: null,
      imageUrl: '/images/productos/huevos-pato.jpg',
      imageAlt: 'Huevos de pato docena',
      weeklyStock: 15,
      allowSlicing: false,
      isActive: true,
      categoryId: huevosCategory.id,
    },
    {
      name: 'Tomate Perita (1 kg)',
      slug: 'tomate-perita-1kg',
      description: 'Tomate perita de huerta, ideal para ensaladas y salsas. Sin conservantes.',
      price: 3.50,
      weight: 1000,
      ingredients: 'Tomate perita',
      allergens: [],
      riskNote: null,
      imageUrl: '/images/productos/tomate-perita.jpg',
      imageAlt: 'Tomate perita 1 kg',
      weeklyStock: 25,
      allowSlicing: false,
      isActive: true,
      categoryId: verdurasCategory.id,
    },
    {
      name: 'Lechuga Romana (unidad)',
      slug: 'lechuga-romana',
      description: 'Lechuga romana fresca, crujiente y sabrosa. Cosecha semanal.',
      price: 1.80,
      weight: 400,
      ingredients: 'Lechuga romana',
      allergens: [],
      riskNote: null,
      imageUrl: '/images/productos/lechuga-romana.jpg',
      imageAlt: 'Lechuga romana',
      weeklyStock: 20,
      allowSlicing: false,
      isActive: true,
      categoryId: verdurasCategory.id,
    },
    {
      name: 'Zanahoria (1 kg)',
      slug: 'zanahoria-1kg',
      description: 'Zanahorias frescas de huerta, dulces y crujientes.',
      price: 2.50,
      weight: 1000,
      ingredients: 'Zanahoria',
      allergens: [],
      riskNote: null,
      imageUrl: '/images/productos/zanahoria.jpg',
      imageAlt: 'Zanahoria 1 kg',
      weeklyStock: 20,
      allowSlicing: false,
      isActive: true,
      categoryId: verdurasCategory.id,
    },
    {
      name: 'Manzana Golden (1 kg)',
      slug: 'manzana-golden-1kg',
      description: 'Manzanas Golden frescas, dulces y jugosas. De temporada.',
      price: 3.00,
      weight: 1000,
      ingredients: 'Manzana Golden',
      allergens: [],
      riskNote: null,
      imageUrl: '/images/productos/manzana-golden.jpg',
      imageAlt: 'Manzana Golden 1 kg',
      weeklyStock: 20,
      allowSlicing: false,
      isActive: true,
      categoryId: frutasCategory.id,
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: {
        ...product,
        allergens: JSON.stringify(product.allergens), // Convertir array a JSON string
      },
    });
  }

  console.log('✅ Productos creados');

  // Crear puntos de recogida
  const pickupPoints = [
    {
      name: 'Mercado Municipal',
      address: 'Plaza del Mercado, s/n',
      city: 'Utrera',
      postalCode: '41710',
      schedule: 'Viernes 17:00-20:00, Sábado 10:00-14:00',
      instructions: 'Preguntar en la entrada principal',
      isActive: true,
      order: 1,
    },
    {
      name: 'Tienda La Esquina',
      address: 'Calle Principal, 45',
      city: 'Utrera',
      postalCode: '41710',
      schedule: 'Viernes 18:00-21:00, Sábado 11:00-14:00',
      instructions: null,
      isActive: true,
      order: 2,
    },
  ];

  // Limpiar puntos existentes y crear nuevos
  await prisma.pickupPoint.deleteMany({});
  await prisma.pickupPoint.createMany({
    data: pickupPoints,
  });

  console.log('✅ Puntos de recogida creados');

  // Configuración del sitio
  const configs = [
    { key: 'time_gating_enabled', value: 'true' },
    { key: 'opening_day', value: '3' }, // Miércoles
    { key: 'opening_hour', value: '18' },
    { key: 'closing_day', value: '0' }, // Domingo
    { key: 'closing_hour', value: '20' },
    { key: 'shipping_cost_national', value: '5.95' },
    { key: 'shipping_cost_local', value: '3.50' },
  ];

  for (const config of configs) {
    await prisma.siteConfig.upsert({
      where: { key: config.key },
      update: { value: config.value },
      create: config,
    });
  }

  console.log('✅ Configuración del sitio creada');
  console.log('🎉 Seed completado exitosamente!');
}

main()
  .catch((e) => {
    console.error('❌ Error durante el seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
