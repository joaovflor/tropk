// Mensagens pré-definidas para WhatsApp
export const whatsappMessages = {
  // Mensagem padrão
  default: "Olá! Vi seu trabalho no site da tropkshop e gostaria de saber mais sobre as peças disponíveis. 😍",
  
  // Pedido personalizado (bem fofa e conversora)
  customOrder: `Olá! 💕

Estava navegando pelo site da tropkshop e me apaixonei pelo trabalho de vocês! ✨

Gostaria de fazer um pedido *totalmente personalizado*, algo único e especial feito especialmente para mim. 🧶💖

Podemos conversar sobre cores, modelos e detalhes? Adoraria criar algo exclusivo! 😍`,

  // Ver coleção pronta
  readyCollection: `Olá! 🌸

Vi as peças no site da tropkshop e estou encantada! 😍

Gostaria de conhecer a *coleção pronta* e ver quais modelos vocês têm disponíveis no momento. 

Pode me mostrar as opções? 💕`,

  // Produtos específicos com exemplos
  products: {
    headpiece: {
      simple: `Olá! 💕

Me interessei pelo *Headpiece Simples* (R$ 20,00) que vi no site! 

Gostaria de saber:
✨ Quais cores estão disponíveis?
✨ Quanto tempo leva para fazer?
✨ Posso personalizar algum detalhe?

Aguardo retorno! 😍`,
      
      withCharms: `Olá! 🌟

Adorei o *Headpiece com Pingentes* (R$ 25,00)! 

Gostaria de mais informações:
💫 Quais tipos de pingentes vocês têm?
💫 Posso escolher as cores?
💫 Quanto tempo demora para confeccionar?

Mal posso esperar para ter o meu! 💖`,
    },

    short: `Olá! 🌺

Estou interessada no *Short de Crochê* (R$ 90,00 - R$ 120,00)!

Poderia me passar:
🌸 Os modelos disponíveis
🌸 Tabela de medidas
🌸 Cores disponíveis
🌸 Prazo de entrega

Estou ansiosa para conhecer os detalhes! 😍`,

    topCropped: `Olá! ✨

O *Top Cropped* (R$ 70,00 - R$ 100,00) chamou minha atenção! 

Gostaria de saber:
💕 Quais estilos vocês fazem?
💕 Como funciona a escolha das cores?
💕 Tabela de tamanhos
💕 Tempo de produção

Obrigada! 💖`,

    bag: `Olá! 👜

Me apaixonei pela *Bolsa Artesanal* (R$ 80,00 - R$ 150,00)!

Poderia me mostrar:
✨ Os diferentes tamanhos
✨ Estilos disponíveis
✨ Opções de cores
✨ Fotos de modelos prontos

Adoraria ver mais detalhes! 🌸`,
  },

  // Dúvidas gerais
  generalQuestion: `Olá! 🌟

Estou conhecendo o trabalho da tropkshop e fiquei encantada! 

Gostaria de tirar algumas dúvidas sobre as peças, preços e prazos de entrega. 

Podemos conversar? 💕`,

  // Presente
  gift: `Olá! 🎁

Estou procurando um *presente especial* e me apaixonei pelas peças da tropkshop! 

É para presentear alguém muito especial e queria algo único e feito com carinho. 💖

Podemos conversar sobre opções? 😍`,
};

// Função principal para abrir WhatsApp
export const openWhatsApp = (customMessage?: string) => {
  const defaultMessage = whatsappMessages.default;
  const message = encodeURIComponent(customMessage || defaultMessage);
  window.open(`https://wa.me/5521993867224?text=${message}`, '_blank');
};

// Funções específicas para facilitar o uso
export const openWhatsAppCustomOrder = () => {
  openWhatsApp(whatsappMessages.customOrder);
};

export const openWhatsAppReadyCollection = () => {
  openWhatsApp(whatsappMessages.readyCollection);
};

export const openWhatsAppProduct = (productType: keyof typeof whatsappMessages.products, variant?: string) => {
  const product = whatsappMessages.products[productType];
  
  if (productType === 'headpiece' && variant) {
    const message = variant === 'simple' 
      ? whatsappMessages.products.headpiece.simple 
      : whatsappMessages.products.headpiece.withCharms;
    openWhatsApp(message);
  } else if (typeof product === 'string') {
    openWhatsApp(product);
  }
};

export const openWhatsAppGift = () => {
  openWhatsApp(whatsappMessages.gift);
};

export const openWhatsAppGeneralQuestion = () => {
  openWhatsApp(whatsappMessages.generalQuestion);
};
