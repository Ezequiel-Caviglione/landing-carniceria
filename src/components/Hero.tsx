import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Award } from 'lucide-react';

const Hero: React.FC = () => {
  const ctaRef = useRef<HTMLButtonElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ctaRef.current) {
      gsap.from(ctaRef.current, {
        scale: 0,
        rotate: -15,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.8)",
        delay: 0.5
      });
    }

    if (badgeRef.current) {
      gsap.from(badgeRef.current, {
        scale: 0,
        rotate: 15,
        opacity: 0,
        duration: 1,
        ease: "back.out(2)",
        delay: 0.8
      });
    }
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col lg:flex-row overflow-hidden bg-floral-white">
      {/* Content */}
      <div className="flex-1 p-8 md:p-16 lg:p-24 flex flex-col justify-center items-start z-10">
        <h1 className="font-bevan text-6xl md:text-7xl lg:text-8xl text-classic-crimson leading-none mb-6">
          LA CARNE DE <br /> TU BARRIO, <br /> COMO ANTES
        </h1>
        <p className="font-kalam text-2xl md:text-3xl text-charcoal max-w-lg leading-relaxed mb-10">
          Seleccionamos cada pieza con el cuidado de antaño. Tradición familiar directa a su mesa.
        </p>
        <button 
          ref={ctaRef}
          className="bg-classic-crimson text-white px-8 py-4 md:px-12 md:py-6 text-xl md:text-2xl font-bevan rounded-sm shadow-neobrutal-lg hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neobrutal cursor-pointer"
        >
          Ver Especiales
        </button>
      </div>

      {/* Image with Diagonal Split */}
      <div className="flex-1 relative min-h-[400px] lg:min-h-auto overflow-hidden">
        <div className="absolute inset-0 bg-classic-crimson lg:[clip-path:polygon(0_0,100%_0,100%_100%,15%_100%)]">
          <img 
            src="https://images.unsplash.com/photo-1767587886972-3a097117622d?auto=format&w=1200&q=80&fit=crop" 
            className="w-full h-full object-cover mix-blend-multiply grayscale brightness-75 contrast-125" 
            alt="Friendly Butcher smiling" 
          />
        </div>
        
        {/* Badge */}
        <div 
          ref={badgeRef}
          className="absolute bottom-10 right-10 z-20 bg-white p-4 rounded-full shadow-xl border-4 border-classic-crimson -rotate-12 flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40"
        >
          <span className="font-bevan text-classic-crimson text-center text-sm md:text-base leading-tight">
            100%<br />NATURAL
          </span>
          <Award className="text-classic-crimson w-8 h-8 mt-1" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
