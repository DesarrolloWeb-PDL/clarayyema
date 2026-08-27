export type Lang = "es" | "pt" | "en";

export interface Translations {
  navProductsLabel: string;
  navAboutLabel: string;
  navContactLabel: string;
  footerDescription: string;
  footerScheduleTitle: string;
  footerScheduleText: string;
  footerDeliveryText: string;
  footerContactTitle: string;
  footerLegalNote: string;
  aboutTitle: string;
  aboutBody: string;
  aboutSecondaryBody: string;
  contactTitle: string;
  contactIntro: string;
  contactWhatsappBtn: string;
  deliveryPickupText: string;
  deliveryLocalText: string;
  deliveryCourierText: string;
  homeNoProducts: string;
  homeComingSoon: string;
  homeClosed: string;
  timeOpen: string;
  timeOpenBetween: string;
  timeBadgeOpen: string;
  timeClosed: string;
  timeOpensIn: string;
  timeSchedule: string;
  timeBadgeClosed: string;
  cartTitle: string;
  cartEmpty: string;
  cartEmptyHint: string;
  cartGoShopping: string;
  cartSubtotal: string;
  cartShippingNote: string;
  cartCheckout: string;
  cartContinue: string;
  cartSliced: string;
  cartMaxStock: string;
  checkoutBack: string;
  checkoutTitle: string;
  checkoutStepContact: string;
  checkoutStepDelivery: string;
  checkoutStepReview: string;
  checkoutResumen: string;
  checkoutSubtotal: string;
  checkoutShipping: string;
  checkoutFree: string;
  checkoutTotal: string;
  checkoutNote: string;
  checkoutNoteBank: string;
  checkoutNoteRedirect: string;
  checkoutProcessing: string;
  checkoutPreparingMp: string;
  checkoutPreparingStripe: string;
  checkoutRedirectMp: string;
  checkoutRedirectStripe: string;
  checkoutMpOpened: string;
  checkoutStripeOpened: string;
  checkoutClose: string;
  customerInfoTitle: string;
  customerInfoDesc: string;
  customerEmail: string;
  customerName: string;
  customerPhone: string;
  customerContinue: string;
  customerErrorEmail: string;
  customerErrorName: string;
  customerErrorPhone: string;
  deliveryTitle: string;
  deliveryDesc: string;
  deliveryPickup: string;
  deliveryPickupDesc: string;
  deliveryLocal: string;
  deliveryLocalDesc: string;
  deliveryCourier: string;
  deliveryCourierDesc: string;
  deliverySelectPickup: string;
  deliveryAddress: string;
  deliveryCity: string;
  deliveryPostal: string;
  deliveryBack: string;
  deliveryContinue: string;
  deliveryErrorPickup: string;
  deliveryErrorAddress: string;
  deliveryErrorCity: string;
  deliveryErrorPostal: string;
  reviewTitle: string;
  reviewDesc: string;
  reviewProducts: string;
  reviewContactInfo: string;
  reviewName: string;
  reviewEmail: string;
  reviewPhone: string;
  reviewDeliveryMethod: string;
  reviewPayment: string;
  reviewNotes: string;
  reviewNotesPlaceholder: string;
  reviewChars: string;
  reviewShippingCost: string;
  reviewBack: string;
  reviewPay: string;
  reviewProcessing: string;
  deliveryMethodNamePickup: string;
  deliveryMethodNameLocal: string;
  deliveryMethodNameCourier: string;
  whatsappGreeting: string;
  whatsappFreeMessage: string;
  whatsappRespond: string;
  footerCopyright: string;
}

const ES: Translations = {
  navProductsLabel: "Productos",
  navAboutLabel: "Sobre Nosotros",
  navContactLabel: "Contacto",
  footerDescription: "Micropanaderia artesanal por encargo semanal. Horneamos en tandas pequenas para priorizar fermentacion, sabor y producto real.",
  footerScheduleTitle: "Horario de Pedidos",
  footerScheduleText: "La carta abre los miercoles a las 18:00 y cierra el domingo a las 20:00.",
  footerDeliveryText: "Recogida en punto, reparto local y mensajeria urgente el dia del horneado.",
  footerContactTitle: "Contacto",
  footerLegalNote: "Obrador artesanal. Produccion limitada y trabajo bajo pedido para priorizar calidad sobre cantidad.",
  aboutTitle: "Sobre Nosotros",
  aboutBody: "Somos una micropanaderia artesanal y trabajamos bajo pedido. Fermentamos con tiempo, horneamos en tandas pequenas y priorizamos calidad antes que cantidad. Cada semana abrimos una ventana breve de preventa para producir solo lo necesario y entregar pan fresco, real y sin apuro.",
  aboutSecondaryBody: "Nuestra produccion es limitada por diseno. Eso nos permite cuidar masas, tiempos y hornadas, asumir variaciones naturales del pan real y sostener una relacion mas directa con cada pedido y cada punto de entrega.",
  contactTitle: "Contacto",
  contactIntro: "Escribinos para encargos, dudas sobre recogida, reparto o mensajeria. Si necesitas seguimiento de tu pedido, te respondemos por email o WhatsApp.",
  contactWhatsappBtn: "Escribinos por WhatsApp",
  deliveryPickupText: "Al hacer tu pedido podes elegir el punto de recogida que mas te convenga. Horneamos nosotros, vos decis donde retirar.",
  deliveryLocalText: "El reparto local se ofrece unicamente dentro del casco urbano y se coordina el mismo dia del horneado.",
  deliveryCourierText: "Tambien podes optar por mensajeria urgente. El pedido sale el mismo dia del horneado programado.",
  homeNoProducts: "No hay productos disponibles",
  homeComingSoon: "Pronto agregaremos productos para esta semana.",
  homeClosed: "Vuelve cuando abramos para ver los productos disponibles.",
  timeOpen: "Estamos abiertos!",
  timeOpenBetween: "Realiza tu pedido entre",
  timeBadgeOpen: "Abierto",
  timeClosed: "Temporalmente cerrado",
  timeOpensIn: "Abrimos en:",
  timeSchedule: "Horario de pedidos:",
  timeBadgeClosed: "Cerrado",
  cartTitle: "Tu Carrito",
  cartEmpty: "Tu carrito esta vacio",
  cartEmptyHint: "Agrega algunos productos para empezar!",
  cartGoShopping: "Ir a comprar",
  cartSubtotal: "Subtotal",
  cartShippingNote: "Los gastos de envio se calcularan en el checkout",
  cartCheckout: "Proceder al Checkout",
  cartContinue: "Seguir comprando",
  cartSliced: "Rebanado",
  cartMaxStock: "Stock maximo alcanzado",
  checkoutBack: "Volver a la tienda",
  checkoutTitle: "Checkout",
  checkoutStepContact: "Contacto",
  checkoutStepDelivery: "Entrega",
  checkoutStepReview: "Revisar",
  checkoutResumen: "Resumen del pedido",
  checkoutSubtotal: "Subtotal",
  checkoutShipping: "Envio",
  checkoutFree: "Gratis",
  checkoutTotal: "Total",
  checkoutNote: "Nota:",
  checkoutNoteBank: "No vas a ser redirigido: vas a recibir los datos para hacer la transferencia al confirmar el pedido.",
  checkoutNoteRedirect: "Seras redirigido a",
  checkoutProcessing: "Procesando tu pedido",
  checkoutPreparingMp: "Preparando conexion con Mercado Pago...",
  checkoutPreparingStripe: "Preparando conexion con Stripe...",
  checkoutRedirectMp: "Seras redirigido a Mercado Pago para completar el pago...",
  checkoutRedirectStripe: "Seras redirigido a Stripe para completar el pago...",
  checkoutMpOpened: "Mercado Pago se abrio en una nueva pestana. Completa el pago ahi y vuelve a esta ventana.",
  checkoutStripeOpened: "Stripe se abrio en una nueva pestana. Completa el pago ahi y vuelve a esta ventana.",
  checkoutClose: "Cerrar y volver al checkout",
  customerInfoTitle: "Informacion de contacto",
  customerInfoDesc: "Te enviaremos la confirmacion de pedido a este email",
  customerEmail: "Email *",
  customerName: "Nombre completo *",
  customerPhone: "Telefono *",
  customerContinue: "Continuar",
  customerErrorEmail: "Email invalido",
  customerErrorName: "El nombre debe tener al menos 2 caracteres",
  customerErrorPhone: "El telefono debe tener al menos 9 digitos",
  deliveryTitle: "Metodo de entrega",
  deliveryDesc: "Selecciona como quieres recibir tu pedido",
  deliveryPickup: "Recogida en punto",
  deliveryPickupDesc: "Gratis - Recoge en uno de nuestros puntos de venta",
  deliveryLocal: "Envio local (Utrera)",
  deliveryLocalDesc: "Entrega a domicilio en Utrera",
  deliveryCourier: "Mensajeria nacional",
  deliveryCourierDesc: "Envio a toda Espana",
  deliverySelectPickup: "Selecciona punto de recogida *",
  deliveryAddress: "Direccion *",
  deliveryCity: "Ciudad *",
  deliveryPostal: "Codigo Postal *",
  deliveryBack: "Atras",
  deliveryContinue: "Continuar",
  deliveryErrorPickup: "Selecciona un punto de recogida",
  deliveryErrorAddress: "La direccion es requerida",
  deliveryErrorCity: "La ciudad es requerida",
  deliveryErrorPostal: "El codigo postal es requerido",
  reviewTitle: "Revisa tu pedido",
  reviewDesc: "Verifica que todo es correcto antes de proceder al pago",
  reviewProducts: "Productos",
  reviewContactInfo: "Informacion de contacto",
  reviewName: "Nombre:",
  reviewEmail: "Email:",
  reviewPhone: "Telefono:",
  reviewDeliveryMethod: "Metodo de entrega",
  reviewPayment: "Pago",
  reviewNotes: "Notas adicionales (opcional)",
  reviewNotesPlaceholder: "Alguna peticion especial? Dejanos tus comentarios aqui...",
  reviewChars: "/500 caracteres",
  reviewShippingCost: "Gastos de envio",
  reviewBack: "Atras",
  reviewPay: "Proceder al pago",
  reviewProcessing: "Procesando...",
  deliveryMethodNamePickup: "Recogida en punto",
  deliveryMethodNameLocal: "Envio local",
  deliveryMethodNameCourier: "Mensajeria nacional",
  whatsappGreeting: "Hola! Elegi una pregunta frecuente o escribinos directo:",
  whatsappFreeMessage: "Escribir mensaje libre",
  whatsappRespond: "Respondemos al instante",
  footerCopyright: "Todos los derechos reservados.",
};

const PT: Translations = {
  navProductsLabel: "Produtos",
  navAboutLabel: "Sobre Nos",
  navContactLabel: "Contato",
  footerDescription: "Micropanificacao artesanal por encomenda semanal. Assamos em tandas pequenas para priorizar fermentacao, sabor e produto real.",
  footerScheduleTitle: "Horario de Encomendas",
  footerScheduleText: "O cardapio abre as quartas-feira as 18:00 e fecha domingo as 20:00.",
  footerDeliveryText: "Retirada no ponto, entrega local e mensageria urgente no dia do forno.",
  footerContactTitle: "Contato",
  footerLegalNote: "Fabrica artesanal. Producao limitada e trabalho sob encomenda para priorizar qualidade sobre quantidade.",
  aboutTitle: "Sobre Nos",
  aboutBody: "Somos uma micropanificacao artesanal e trabalhamos sob encomenda. Fermentamos com tempo, assamos em tandas pequenas e priorizamos qualidade antes de quantidade. Toda semana abrimos uma breve janela de pre-venda para produzir apenas o necessario e entregar pao fresco, real e sem pressa.",
  aboutSecondaryBody: "Nossa producao e limitada por designo. Isso nos permite cuidar de massas, tempos e fornos, assumir variacoes naturais do pao real e manter uma relacao mais direta com cada encomenda e cada ponto de entrega.",
  contactTitle: "Contato",
  contactIntro: "Escreva para encomendas, duvidas sobre retirada, entrega ou mensageria. Se precisar de acompanhamento do seu pedido, respondemos por email ou WhatsApp.",
  contactWhatsappBtn: "Escreva por WhatsApp",
  deliveryPickupText: "Ao fazer sua encomenda, voce pode escolher o ponto de retirada que mais convier. Assamos nos, voce decide onde retirar.",
  deliveryLocalText: "A entrega local e oferecida apenas dentro do casco urbano e e coordenada no mesmo dia do forno.",
  deliveryCourierText: "Voce tambem pode optar por mensageria urgente. A encomenda sai no mesmo dia do forno programado.",
  homeNoProducts: "Nao ha produtos disponiveis",
  homeComingSoon: "Em breve adicionaremos produtos para esta semana.",
  homeClosed: "Volte quando abrirmos para ver os produtos disponiveis.",
  timeOpen: "Estamos abertos!",
  timeOpenBetween: "Faca sua encomenda entre",
  timeBadgeOpen: "Aberto",
  timeClosed: "Temporalmente fechado",
  timeOpensIn: "Abrimos em:",
  timeSchedule: "Horario de encomendas:",
  timeBadgeClosed: "Fechado",
  cartTitle: "Seu Carrinho",
  cartEmpty: "Seu carrinho esta vazio",
  cartEmptyHint: "Adicione alguns produtos para comecar!",
  cartGoShopping: "Ir as compras",
  cartSubtotal: "Subtotal",
  cartShippingNote: "As despesas de frete serao calculadas no checkout",
  cartCheckout: "Prosseguir para o Checkout",
  cartContinue: "Continuar comprando",
  cartSliced: "Fatado",
  cartMaxStock: "Estoque maximo atingido",
  checkoutBack: "Voltar a loja",
  checkoutTitle: "Checkout",
  checkoutStepContact: "Contato",
  checkoutStepDelivery: "Entrega",
  checkoutStepReview: "Revisar",
  checkoutResumen: "Resumo do pedido",
  checkoutSubtotal: "Subtotal",
  checkoutShipping: "Frete",
  checkoutFree: "Gratis",
  checkoutTotal: "Total",
  checkoutNote: "Nota:",
  checkoutNoteBank: "Voce nao sera redirecionado: recebera os dados para fazer a transferencia ao confirmar o pedido.",
  checkoutNoteRedirect: "Voce sera redirecionado para",
  checkoutProcessing: "Processando seu pedido",
  checkoutPreparingMp: "Preparando conexao com Mercado Pago...",
  checkoutPreparingStripe: "Preparando conexao com Stripe...",
  checkoutRedirectMp: "Voce sera redirecionado ao Mercado Pago para completar o pagamento...",
  checkoutRedirectStripe: "Voce sera redirecionado ao Stripe para completar o pagamento...",
  checkoutMpOpened: "Mercado Pago abriu em uma nova aba. Complete o pagamento la e volte para esta janela.",
  checkoutStripeOpened: "Stripe abriu em uma nova aba. Complete o pagamento la e volte para esta janela.",
  checkoutClose: "Fechar e voltar ao checkout",
  customerInfoTitle: "Informacoes de contato",
  customerInfoDesc: "Enviaremos a confirmacao do pedido para este email",
  customerEmail: "Email *",
  customerName: "Nome completo *",
  customerPhone: "Telefone *",
  customerContinue: "Continuar",
  customerErrorEmail: "Email invalido",
  customerErrorName: "O nome deve ter pelo menos 2 caracteres",
  customerErrorPhone: "O telefone deve ter pelo menos 9 digitos",
  deliveryTitle: "Metodo de entrega",
  deliveryDesc: "Selecione como deseja receber seu pedido",
  deliveryPickup: "Retirada no ponto",
  deliveryPickupDesc: "Gratis - Retire em um dos nossos pontos de venda",
  deliveryLocal: "Entrega local (Utrera)",
  deliveryLocalDesc: "Entrega a domicilio em Utrera",
  deliveryCourier: "Mensageria nacional",
  deliveryCourierDesc: "Envio para toda a Espanha",
  deliverySelectPickup: "Selecione o ponto de retirada *",
  deliveryAddress: "Endereco *",
  deliveryCity: "Cidade *",
  deliveryPostal: "Codigo Postal *",
  deliveryBack: "Voltar",
  deliveryContinue: "Continuar",
  deliveryErrorPickup: "Selecione um ponto de retirada",
  deliveryErrorAddress: "O endereco e obrigatorio",
  deliveryErrorCity: "A cidade e obrigatoria",
  deliveryErrorPostal: "O codigo postal e obrigatorio",
  reviewTitle: "Revise seu pedido",
  reviewDesc: "Verifique que tudo esta correto antes de prosseguir ao pagamento",
  reviewProducts: "Produtos",
  reviewContactInfo: "Informacoes de contato",
  reviewName: "Nome:",
  reviewEmail: "Email:",
  reviewPhone: "Telefone:",
  reviewDeliveryMethod: "Metodo de entrega",
  reviewPayment: "Pagamento",
  reviewNotes: "Notas adicionais (opcional)",
  reviewNotesPlaceholder: "Alguma picao especial? Deixe seus comentarios aqui...",
  reviewChars: "/500 caracteres",
  reviewShippingCost: "Despesas de frete",
  reviewBack: "Voltar",
  reviewPay: "Prosseguir ao pagamento",
  reviewProcessing: "Processando...",
  deliveryMethodNamePickup: "Retirada no ponto",
  deliveryMethodNameLocal: "Entrega local",
  deliveryMethodNameCourier: "Mensageria nacional",
  whatsappGreeting: "Ola! Escolha uma pergunta frequente ou escreva diretamente:",
  whatsappFreeMessage: "Escrever mensagem livre",
  whatsappRespond: "Respondemos instantaneamente",
  footerCopyright: "Todos os direitos reservados.",
};

const EN: Translations = {
  navProductsLabel: "Products",
  navAboutLabel: "About Us",
  navContactLabel: "Contact",
  footerDescription: "Artisanal microbakery with weekly pre-orders. We bake in small batches to prioritize fermentation, flavor, and real bread.",
  footerScheduleTitle: "Order Schedule",
  footerScheduleText: "The menu opens on Wednesday at 6:00 PM and closes on Sunday at 8:00 PM.",
  footerDeliveryText: "Pickup points, local delivery, and urgent courier on bake day.",
  footerContactTitle: "Contact",
  footerLegalNote: "Artisanal bakery. Limited production and made-to-order to prioritize quality over quantity.",
  aboutTitle: "About Us",
  aboutBody: "We are an artisanal microbakery and we work on a pre-order basis. We ferment with time, bake in small batches, and prioritize quality over quantity. Every week we open a brief pre-sale window to produce only what's needed and deliver fresh, real bread without rush.",
  aboutSecondaryBody: "Our production is limited by design. That allows us to care for doughs, timing, and batches, embrace natural variations of real bread, and maintain a more direct relationship with every order and every pickup point.",
  contactTitle: "Contact",
  contactIntro: "Write to us for orders, questions about pickup, delivery, or courier. If you need order tracking, we'll respond by email or WhatsApp.",
  contactWhatsappBtn: "Write to us on WhatsApp",
  deliveryPickupText: "When placing your order you can choose the most convenient pickup point. We bake, you decide where to collect.",
  deliveryLocalText: "Local delivery is available within the town center only and is coordinated on the same bake day.",
  deliveryCourierText: "You can also choose urgent courier. Your order ships on the same scheduled bake day.",
  homeNoProducts: "No products available",
  homeComingSoon: "We'll add products for this week soon.",
  homeClosed: "Come back when we're open to see available products.",
  timeOpen: "We're open!",
  timeOpenBetween: "Place your order between",
  timeBadgeOpen: "Open",
  timeClosed: "Temporarily closed",
  timeOpensIn: "We open in:",
  timeSchedule: "Order schedule:",
  timeBadgeClosed: "Closed",
  cartTitle: "Your Cart",
  cartEmpty: "Your cart is empty",
  cartEmptyHint: "Add some products to get started!",
  cartGoShopping: "Go shopping",
  cartSubtotal: "Subtotal",
  cartShippingNote: "Shipping costs will be calculated at checkout",
  cartCheckout: "Proceed to Checkout",
  cartContinue: "Continue shopping",
  cartSliced: "Sliced",
  cartMaxStock: "Max stock reached",
  checkoutBack: "Back to shop",
  checkoutTitle: "Checkout",
  checkoutStepContact: "Contact",
  checkoutStepDelivery: "Delivery",
  checkoutStepReview: "Review",
  checkoutResumen: "Order summary",
  checkoutSubtotal: "Subtotal",
  checkoutShipping: "Shipping",
  checkoutFree: "Free",
  checkoutTotal: "Total",
  checkoutNote: "Note:",
  checkoutNoteBank: "You won't be redirected: you'll receive the bank transfer details when you confirm the order.",
  checkoutNoteRedirect: "You'll be redirected to",
  checkoutProcessing: "Processing your order",
  checkoutPreparingMp: "Connecting to Mercado Pago...",
  checkoutPreparingStripe: "Connecting to Stripe...",
  checkoutRedirectMp: "You'll be redirected to Mercado Pago to complete payment...",
  checkoutRedirectStripe: "You'll be redirected to Stripe to complete payment...",
  checkoutMpOpened: "Mercado Pago opened in a new tab. Complete the payment there and return to this window.",
  checkoutStripeOpened: "Stripe opened in a new tab. Complete the payment there and return to this window.",
  checkoutClose: "Close and return to checkout",
  customerInfoTitle: "Contact information",
  customerInfoDesc: "We'll send your order confirmation to this email",
  customerEmail: "Email *",
  customerName: "Full name *",
  customerPhone: "Phone *",
  customerContinue: "Continue",
  customerErrorEmail: "Invalid email",
  customerErrorName: "Name must be at least 2 characters",
  customerErrorPhone: "Phone must be at least 9 digits",
  deliveryTitle: "Delivery method",
  deliveryDesc: "Choose how you'd like to receive your order",
  deliveryPickup: "Pickup point",
  deliveryPickupDesc: "Free - Collect from one of our pickup points",
  deliveryLocal: "Local delivery (Utrera)",
  deliveryLocalDesc: "Home delivery in Utrera",
  deliveryCourier: "National courier",
  deliveryCourierDesc: "Shipping throughout Spain",
  deliverySelectPickup: "Select pickup point *",
  deliveryAddress: "Address *",
  deliveryCity: "City *",
  deliveryPostal: "Postal code *",
  deliveryBack: "Back",
  deliveryContinue: "Continue",
  deliveryErrorPickup: "Select a pickup point",
  deliveryErrorAddress: "Address is required",
  deliveryErrorCity: "City is required",
  deliveryErrorPostal: "Postal code is required",
  reviewTitle: "Review your order",
  reviewDesc: "Make sure everything is correct before proceeding to payment",
  reviewProducts: "Products",
  reviewContactInfo: "Contact information",
  reviewName: "Name:",
  reviewEmail: "Email:",
  reviewPhone: "Phone:",
  reviewDeliveryMethod: "Delivery method",
  reviewPayment: "Payment",
  reviewNotes: "Additional notes (optional)",
  reviewNotesPlaceholder: "Any special requests? Leave your comments here...",
  reviewChars: "/500 characters",
  reviewShippingCost: "Shipping costs",
  reviewBack: "Back",
  reviewPay: "Proceed to payment",
  reviewProcessing: "Processing...",
  deliveryMethodNamePickup: "Pickup point",
  deliveryMethodNameLocal: "Local delivery",
  deliveryMethodNameCourier: "National courier",
  whatsappGreeting: "Hi! Choose a frequent question or write to us directly:",
  whatsappFreeMessage: "Write free message",
  whatsappRespond: "We respond instantly",
  footerCopyright: "All rights reserved.",
};

const translations: Record<Lang, Translations> = { es: ES, pt: PT, en: EN };

export function getTranslations(lang: Lang): Translations {
  return translations[lang] ?? ES;
}
