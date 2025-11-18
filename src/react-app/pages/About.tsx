import Layout from '@/react-app/components/Layout';
import { Heart, Award, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <Layout>
      <section 
      className="py-16 relative"
      style={{
        backgroundImage: 'url(/fundooutro-01.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '40px 0px'
      }}
    >
        <div className="relative">
          <div className="relative z-10">
            <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 
            style={{
              fontFamily: 'Aileron, sans-serif',
              fontWeight: 900,
              color: '#6B4423',
              letterSpacing: '-6px',
              fontSize: '60px',
              lineHeight: '1.25',
              wordSpacing: '10px',
              marginBottom: '8px'
            }}
            className="text-3xl lg:text-4xl font-light text-neutral-800 mb-4"
          >
            SOBRE A<span style={{ fontFamily: 'Aileron, sans-serif', fontWeight: 200 }}> CRIADORA</span> 
              </h1>
              <p 
            style={{ 
              fontFamily: 'Montserrat, sans-serif', 
              fontWeight: 300,
              color: '#b88860ff' 
            }} 
            className="text-lg leading-relaxed max-w-lg mx-auto"
          >
            Cada <span className="font-semibold">fio</span> tem uma<span className="font-semibold"> história</span>, cada ponto carrega <span className="font-semibold">amor. </span>Conheça a jornada por trás das <span className="font-semibold">peças exclusivas </span>da <span className="font-semibold">Tropkshop.</span>
          </p>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div className="space-y-6">
                <h3 style={{ fontFamily: 'Aileron, sans-serif', fontWeight: 900, color: '#6B4423'  }} className="text-4xl lg:text-4xl text-neutral-800 leading-tight">
                MINHA HISTÓRIA COM O <span style={{ color:'#6B4423', fontWeight: 200 }} className="text-amber-700 font-normal">CROCHÊ</span>
                </h3>
                <p 
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif', 
                    fontWeight: 400,
                    color: '#b88860ff' 
                  }} 
                  className="text-lg leading-relaxed mx-auto"
                >
                  Tudo começou com minha avó, que me ensinou os primeiros pontos quando eu ainda era criança. 
                  O que era apenas um hobby se transformou em paixão, e depois em uma missão: criar peças 
                  únicas que fazem cada mulher se sentir especial e confiante.
                </p>
                <p 
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif', 
                    fontWeight: 400,
                    color: '#b88860ff' 
                  }} 
                  className="text-lg leading-relaxed mx-auto"
                >
                  Há mais de 5 anos dedico meu tempo ao crochê artesanal, aperfeiçoando técnicas e 
                  desenvolvendo designs exclusivos. Cada peça que crio é pensada para a mulher moderna 
                  que valoriza a autenticidade e a qualidade do trabalho manual.
                </p>
                <p 
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif', 
                    fontWeight: 400,
                    color: '#b88860ff' 
                  }} 
                  className="text-lg leading-relaxed mx-auto"
                >
                  Na tropkshop, acredito que cada mulher merece ter algo único em seu guarda-roupa. 
                  Por isso, trabalho com peças limitadas e designs exclusivos, garantindo que você 
                  tenha algo verdadeiramente especial.
                </p>
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=600&fit=crop&crop=center"
                  alt="Criadora da tropkshop"
                  className="w-full rounded-3xl shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="w-8 h-8 text-amber-800" />
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-8 mb-16 ">
              <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl text-center mt-12 p-8 backdrop-blur-lg bg-gradient-to-br from-amber-50/30 to-orange-50/30 border border-white/30 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 style={{ 
                      fontFamily: 'Aileron, sans-serif',
                      fontWeight: '900',
                      color: 'rgb(107, 68, 35)',
                      lineHeight: '1.25',
                      marginBottom: '12px'
                      }}  className="text-xl font-medium text-neutral-800 mb-3">EXCLUSIVIDADE</h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700', color: 'rgb(184, 136, 96)'}} className="text-neutral-600 font-light text-sm">
                  Cada peça é única e produzida em quantidade limitada, garantindo que você tenha algo especial.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl text-center mt-12 p-8 backdrop-blur-lg bg-gradient-to-br from-amber-50/30 to-orange-50/30 border border-white/30 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 style={{ 
                      fontFamily: 'Aileron, sans-serif',
                      fontWeight: '900',
                      color: 'rgb(107, 68, 35)',
                      lineHeight: '1.25',
                      marginBottom: '12px'
                      }}  className="text-xl font-medium text-neutral-800 mb-3">QUALIDADE</h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700', color: 'rgb(184, 136, 96)'}} className="text-neutral-600 font-light text-sm">
                  Utilizamos apenas materiais premium e técnicas artesanais tradicionais.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl text-center mt-12 p-8 backdrop-blur-lg bg-gradient-to-br from-amber-50/30 to-orange-50/30 border border-white/30 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 style={{ 
                      fontFamily: 'Aileron, sans-serif',
                      fontWeight: '900',
                      color: 'rgb(107, 68, 35)',
                      lineHeight: '1.25',
                      marginBottom: '12px'
                      }}  className="text-xl font-medium text-neutral-800 mb-3">CARINHO</h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700', color: 'rgb(184, 136, 96)'}} className="text-neutral-600 font-light text-sm">
                  Cada ponto é feito com amor e dedicação, pensando na mulher que vai usar a peça.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Layout>
  );
}
