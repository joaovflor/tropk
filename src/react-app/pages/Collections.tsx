import Layout from '@/react-app/components/Layout';
import { Heart, MessageCircle, Filter, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { openWhatsApp, whatsappMessages } from '../utils/whatsapp';

export default function Collections() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'tops', name: 'Tops' },
    { id: 'bolsas', name: 'Bolsas' },
    { id: 'conjuntos', name: 'Conjuntos' },
    { id: 'acessorios', name: 'Acessórios' },
    { id: 'cardigans', name: 'Cardigans' }
  ];

  const products = [
    {
      id: 1,
      name: "Top Cropped Vintage",
      price: "R$ 89,90",
      priceValue: 89.90,
      category: "tops",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop&crop=center",
      description: "Peça exclusiva feita em crochê com fio 100% algodão",
      isNew: true,
      isAvailable: true
    },
    {
      id: 2,
      name: "Bolsa Artesanal Boho",
      price: "R$ 129,90",
      priceValue: 129.90,
      category: "bolsas",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop&crop=center",
      description: "Bolsa espaçosa com detalhes únicos em crochê",
      isNew: false,
      isAvailable: true
    },
    {
      id: 3,
      name: "Conjunto Verão",
      price: "R$ 159,90",
      priceValue: 159.90,
      category: "conjuntos",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba810db?w=400&h=500&fit=crop&crop=center",
      description: "Top + saia midi em crochê delicado",
      isNew: true,
      isAvailable: false
    },
    {
      id: 4,
      name: "Cardigan Oversized",
      price: "R$ 189,90",
      priceValue: 189.90,
      category: "cardigans",
      image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=500&fit=crop&crop=center",
      description: "Peça coringa para looks despojados",
      isNew: false,
      isAvailable: true
    },
    {
      id: 5,
      name: "Brincos Artesanais",
      price: "R$ 39,90",
      priceValue: 39.90,
      category: "acessorios",
      image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=400&h=500&fit=crop&crop=center",
      description: "Brincos delicados em crochê e miçangas",
      isNew: false,
      isAvailable: true
    },
    {
      id: 6,
      name: "Top Frente Única",
      price: "R$ 79,90",
      priceValue: 79.90,
      category: "tops",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=500&fit=crop&crop=center",
      description: "Design moderno com amarração nas costas",
      isNew: true,
      isAvailable: true
    },
    {
      id: 7,
      name: "Clutch Festa",
      price: "R$ 89,90",
      priceValue: 89.90,
      category: "bolsas",
      image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=500&fit=crop&crop=center",
      description: "Perfeita para ocasiões especiais",
      isNew: false,
      isAvailable: true
    },
    {
      id: 8,
      name: "Conjunto Noite",
      price: "R$ 199,90",
      priceValue: 199.90,
      category: "conjuntos",
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=400&h=500&fit=crop&crop=center",
      description: "Top + short para looks noturnos",
      isNew: true,
      isAvailable: true
    }
  ];

  const filteredProducts = selectedCategory === 'todos' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const toggleProductSelection = (productId: number, product: any) => {
    if (!product.isAvailable) return;
    
    setSelectedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const sendToWhatsApp = () => {
    const selectedItems = products.filter(p => selectedProducts.includes(p.id));
    
    let message = "Olá! Gostaria de saber mais sobre os seguintes produtos:\n\n";
    
    let totalValue = 0;
    
    selectedItems.forEach((product, index) => {
      message += `${index + 1}. *${product.name}*\n`;
      message += `   ${product.description}\n`;
      message += `   Valor: ${product.price}\n\n`;
      totalValue += product.priceValue;
    });
    
    // Adiciona o valor total formatado
    const formattedTotal = totalValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
    
    message += `💰 *Valor Total: ${formattedTotal}*\n\n`;
    message += "Aguardo retorno. Obrigada! 🌸";
    
    openWhatsApp(message);
  };

  return (
    <Layout>
      {/* Estilos CSS para efeito polaroid */}
      <style>{`
        .polaroid-container {
          perspective: 1000px;
        }

        .polaroid-frame {
          background: white;
          padding: 12px;
          padding-bottom: 50px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 4px;
          transition: transform 0.6s ease;
          transform-style: preserve-3d;
          cursor: pointer;
        }

        .polaroid-frame.selected {
          box-shadow: 0 10px 40px rgba(178, 130, 93, 0.4), 0 4px 12px rgba(178, 130, 93, 0.2);
        }

        .polaroid-container:hover .polaroid-frame {
          transform: rotateY(5deg) rotateX(-5deg) scale(1.02);
        }

        .polaroid-image {
          width: 100%;
          aspect-ratio: 3/4;
          object-fit: cover;
          display: block;
          cursor: pointer;
        }

        .floating-cart {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 1000;
          animation: slideUp 0.3s ease-out;
        }

        @keyframes slideUp {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .cart-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background: #B2825D;
          color: white;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 600;
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>

      <div 
        style={{
          backgroundImage: 'url(/fundosemflor-01.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          padding: '40px 0',
          position: 'relative'
        }}
      >

        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 
              style={{
                fontFamily: 'Aileron, sans-serif',
                fontWeight: 900,
                color: '#6B4423',
                fontSize: '60px',
                lineHeight: '1.25',
                wordSpacing: '10px',  
                marginBottom: '24px'
              }}
              className="sm:[letter-spacing:-7px] [letter-spacing:-3px]"
            >
              NOSSA <span style={{ fontFamily: 'Aileron, sans-serif', fontWeight: 200 }}>COLEÇÃO</span>
            </h1>
            <p 
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '18px',
                fontWeight: 300,
                color: '#B2825D',
                lineHeight: '1.7',
                maxWidth: '700px',
                margin: '0 auto'
              }}
            >
              Descubra peças únicas e exclusivas, feitas à mão com muito carinho. 
              Cada produto é limitado e especial.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <div 
              className="flex items-center space-x-2 mb-4"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '16px',
                fontWeight: 300,
                color: '#B2825D'
              }}
            >
              <Filter className="w-4 h-4" />
              <span>Filtrar por:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '18px',
                    fontWeight: 300
                  }}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-amber-800 text-white'
                      : 'bg-white/60 backdrop-blur-sm hover:bg-white/80'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group polaroid-container">
                <div 
                  className={`polaroid-frame relative ${selectedProducts.includes(product.id) ? 'selected' : ''}`}
                  onClick={() => toggleProductSelection(product.id, product)}
                  style={{
                    cursor: product.isAvailable ? 'pointer' : 'not-allowed'
                  }}
                >
                  {product.isNew && (
                    <div 
                      className="absolute top-4 left-4 z-10"
                      style={{
                        background: '#B2825D',
                        color: 'white',
                        fontSize: '12px',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 500
                      }}
                    >
                      Novo
                    </div>
                  )}
                  {!product.isAvailable && (
                    <div 
                      className="absolute top-4 left-4 z-10"
                      style={{
                        background: '#6B4423',
                        color: 'white',
                        fontSize: '12px',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 500
                      }}
                    >
                      Esgotado
                    </div>
                  )}
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleProductSelection(product.id, product);
                    }}
                    disabled={!product.isAvailable}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center z-10 transition-all duration-300"
                    style={{
                      background: selectedProducts.includes(product.id) 
                        ? '#B2825D' 
                        : 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      transform: selectedProducts.includes(product.id) ? 'scale(1.1)' : 'scale(1)'
                    }}
                  >
                    <Heart 
                      className="w-4 h-4 transition-colors" 
                      style={{
                        color: selectedProducts.includes(product.id) ? 'white' : '#6B4423',
                        fill: selectedProducts.includes(product.id) ? 'white' : 'none'
                      }}
                    />
                  </button>
                  
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`polaroid-image ${!product.isAvailable ? 'grayscale' : ''}`}
                  />
                  
                  {product.isAvailable && (
                    <div className="absolute bottom-16 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          const message = `Olá! Gostaria de saber mais sobre:\n\n*${product.name}*\n${product.description}\nValor: ${product.price}\n\nAguardo retorno. Obrigada! 🌸`;
                          openWhatsApp(message);
                        }}
                        className="w-full bg-white/90 backdrop-blur-sm py-2 rounded-full hover:bg-white transition-colors flex items-center justify-center space-x-2"
                        style={{
                          fontFamily: 'Montserrat, sans-serif',
                          fontSize: '18px',
                          fontWeight: 500,
                          color: '#6B4423'
                        }}
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Consultar</span>
                      </button>
                    </div>
                  )}
                </div>
                
                <div className="space-y-2 mt-4">
                  <h3 
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '18px',
                      color: '#B2825D',
                      fontStyle: 'italic',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '-0.5px',
                      marginBottom: '12px'
                    }}
                    className="group-hover:text-amber-700 transition-colors"
                  >
                    {product.name}
                  </h3>
                  <p 
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '18px',
                      fontWeight: 300,
                      color: '#B2825D',
                      lineHeight: '1.6'
                    }}
                  >
                    {product.description}
                  </p>
                  <p 
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '18px',
                      fontWeight: 300,
                      color: '#B2825D',
                      lineHeight: '1.6'
                    }}
                  >
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 p-8 backdrop-blur-lg bg-gradient-to-br from-amber-50/30 to-orange-50/30 border border-white/30 rounded-2xl shadow-lg">
            <h3 
              style={{
                fontFamily: 'Aileron, sans-serif',
                fontWeight: 900,
                color: '#6B4423',
                lineHeight: '95%',
                marginBottom: '16px',
                wordSpacing: '10px'
              }}
              className="sm:[letter-spacing:-7px] [letter-spacing:-2px] sm:[font-size:55px] [font-size:45px]"
            >
              NÃO <span style={{ fontFamily: 'Aileron, sans-serif', fontWeight: 200 }}>ENCONTROU</span><br />A PEÇA<br />PERFEITA?
            </h3>

            <p 
              style={{ 
                fontFamily: 'Montserrat, sans-serif', 
                fontWeight: 300, 
                color: '#b88860ff' 
              }} 
              className="text-lg leading-relaxed max-w-lg mx-auto mb-6"
            >
              Entre em contato e vamos <span className="font-semibold">criar</span> algo <span className="font-semibold">especial juntas!</span>
            </p>
            <button 
              onClick={() => openWhatsApp(whatsappMessages.customOrder)}
              className="backdrop-blur-md bg-amber-800/90 hover:bg-amber-900/90 text-white px-4 sm:px-8 py-3 rounded-full border border-amber-700/50 shadow-lg transition-all duration-300 font-medium cursor-pointer"
            >
              Fazer Pedido Personalizado
            </button>
          </div>
        </div>

        {/* Floating WhatsApp Button */}
        {selectedProducts.length > 0 && (
          <div className="floating-cart">
            <button
              onClick={sendToWhatsApp}
              className="relative"
              style={{
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                color: 'white',
                padding: '16px 24px',
                borderRadius: '50px',
                boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(37, 211, 102, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.4)';
              }}
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Pedir no WhatsApp</span>
              <span className="cart-badge">{selectedProducts.length}</span>
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}
