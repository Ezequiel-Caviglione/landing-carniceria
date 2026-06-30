import React from 'react';

const FeaturedMeats: React.FC = () => {
  return (
    <section id="carnes" className="py-24 bg-floral-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="font-bevan text-4xl md:text-5xl text-charcoal relative inline-block">
            Cortes de la Semana
            <img 
              src="https://cdn.jsdelivr.net/npm/game-icons-transparent@latest/svgs/delapouite/paint-brush.svg" 
              className="absolute -bottom-6 left-0 w-full opacity-20 h-4" 
              style={{ filter: 'brightness(0) saturate(100%) invert(17%) sepia(87%) saturate(5833%) hue-rotate(345deg) brightness(88%) contrast(92%)' }}
              alt=""
            />
          </h2>
        </div>

        <div className="space-y-40">
          {/* Asado Criollo */}
          <div data-scroll className="flex flex-col lg:flex-row items-center gap-12 w-full lg:w-[90%] mr-auto">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -inset-4 border-2 border-charcoal rounded-xs rotate-3"></div>
              <div className="relative z-10 aspect-video overflow-hidden rounded-xs border-8 border-white shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/15082943/pexels-photo-15082943.jpeg?auto=compress&cs=tinysrgb&w=1000&q=80" 
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-1000" 
                  alt="Asado Criollo Tradicional" 
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative px-4">
              <img 
                src="https://cdn.jsdelivr.net/npm/game-icons-transparent@latest/svgs/delapouite/large-paint-brush.svg" 
                className="absolute -top-16 -left-16 w-48 opacity-5 -z-10 pointer-events-none" 
                style={{ filter: 'brightness(0) saturate(100%) invert(17%) sepia(87%) saturate(5833%) hue-rotate(345deg) brightness(88%) contrast(92%)' }}
                alt=""
              />
              <h3 className="font-bevan text-4xl text-classic-crimson mb-6 uppercase">Asado Criollo</h3>
              <p className="text-lg text-charcoal leading-relaxed font-medium">
                Nuestra pieza estrella. Ternera seleccionada de las pampas, cortada con precisión quirúrgica para asegurar una cocción perfecta. El sabor de los domingos reunidos.
              </p>
              <div className="mt-6">
                <span className="font-kalam font-bold text-lg bg-charcoal text-white px-4 py-1 rounded-sm -rotate-2 inline-block">
                  Corte Premium
                </span>
              </div>
            </div>
          </div>

          {/* Chorizo del Abuelo */}
          <div data-scroll className="flex flex-col lg:flex-row-reverse items-center gap-12 w-full lg:w-[90%] ml-auto">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -inset-4 border-2 border-classic-crimson rounded-full rotate-[-2deg] opacity-20"></div>
              <div className="relative z-10 aspect-video overflow-hidden rounded-full border-8 border-white shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/28881687/pexels-photo-28881687.jpeg?auto=compress&cs=tinysrgb&w=1000&q=80" 
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-1000" 
                  alt="Chorizos del Abuelo" 
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative lg:text-right px-4">
              <img 
                src="https://cdn.jsdelivr.net/npm/game-icons-transparent@latest/svgs/delapouite/paint-brush.svg" 
                className="absolute -top-16 -right-16 w-48 opacity-5 -z-10 rotate-180 pointer-events-none" 
                style={{ filter: 'brightness(0) saturate(100%) invert(32%) sepia(0%) saturate(1471%) hue-rotate(134deg) brightness(97%) contrast(85%)' }}
                alt=""
              />
              <h3 className="font-bevan text-4xl text-classic-crimson mb-6 uppercase">Chorizo del Abuelo</h3>
              <p className="text-lg text-charcoal leading-relaxed font-medium">
                Receta guardada bajo llave por tres generaciones. Ahumado con maderas nobles y sazonado con pimentón de la vera. Sin conservantes, puro corazón.
              </p>
            </div>
          </div>

          {/* Costillas de Oro */}
          <div data-scroll className="flex flex-col lg:flex-row items-center gap-12 w-full lg:w-[85%] mx-auto">
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-3 bg-charcoal rotate-1 rounded-xs group-hover:rotate-0 transition-transform"></div>
              <div className="relative z-10 aspect-video overflow-hidden rounded-xs border-4 border-white shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/37049890/pexels-photo-37049890.jpeg?auto=compress&cs=tinysrgb&w=1000&q=80" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                  alt="Costillas de Oro" 
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative px-4">
              <h3 className="font-bevan text-4xl text-classic-crimson mb-4 uppercase">Costillas de Oro</h3>
              <p className="text-lg text-charcoal leading-relaxed font-medium">
                Carne que se deshace al tacto. Una selección premium para paladares exigentes que buscan redescubrir la esencia de una buena barbacoa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMeats;
