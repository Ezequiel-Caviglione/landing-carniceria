import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';

const OurStory: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const cursor = cursorRef.current;
    if (!title || !cursor) return;

    const text = title.innerText.trim();
    title.innerText = '';

    let started = false;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started) {
        started = true;
        
        let i = 0;
        function type() {
          if (i < text.length) {
            title!.innerText += text.charAt(i);
            i++;
            setTimeout(type, 40);
          }
        }
        type();

        animate(cursor, {
          opacity: [1, 0],
          duration: 600,
          loop: true,
          alternate: true,
          ease: 'linear'
        });
      }
    }, { threshold: 0.3 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="historia" ref={sectionRef} className="py-24 bg-floral-white">
      <div className="container mx-auto max-w-5xl px-6 md:px-12">
        <div className="newspaper-container bg-white border-4 border-charcoal p-8 md:p-16 relative">
          
          <div className="text-center border-b-2 border-charcoal pb-8 mb-12">
            <p className="text-sm font-bold text-charcoal uppercase tracking-[0.3em] mb-4 italic">El Diario del Buen Gusto</p>
            <div className="relative inline-block">
              <h2 ref={titleRef} className="font-bevan text-4xl md:text-7xl text-classic-crimson leading-none">
                Nuestra Historia
              </h2>
              <span ref={cursorRef} className="cursor-blink"></span>
            </div>
            <div className="flex items-center justify-between mt-6 text-xs md:text-sm font-bold text-charcoal border-t border-charcoal pt-3">
              <span>EST. 1955</span>
              <span className="hidden md:inline">VOL. LXIX ... NO. 001</span>
              <span>789 PLAZA CENTRAL</span>
            </div>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-6">
              <h3 className="font-bevan text-3xl md:text-4xl text-charcoal leading-tight mb-8 uppercase">
                Un Cuchillo, Una Familia y un Siglo de Compromiso
              </h3>
              <div className="text-lg md:text-xl text-charcoal leading-relaxed text-justify relative overflow-hidden">
                <span className="float-left text-8xl font-bevan text-classic-crimson mr-4 leading-[0.7] pt-4 mb-2">T</span>
                <span className="inline-block pt-2">
                  odo comenzó con el abuelo Mateo en una pequeña esquina de la Plaza Central. Con apenas un mostrador de madera y su cuchillo favorito, se propuso una meta simple: vender solo lo que él mismo serviría en su propia mesa.
                </span>
              </div>
              <p className="text-lg md:text-xl text-charcoal leading-relaxed text-justify italic font-medium">
                Esa filosofía de honestidad y calidad nos ha guiado a través de los años. No somos una cadena masiva, somos sus vecinos. Conocemos sus nombres y sabemos exactamente cómo le gusta su corte para el asado del domingo.
              </p>
              <p className="text-lg md:text-xl text-charcoal leading-relaxed text-justify">
                Hoy, la tercera generación continúa afilando los mismos valores. La tecnología ha cambiado, pero el respeto por el animal y el cliente permanece intacto. Bienvenido a casa.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full mb-8">
                <div className="absolute -inset-2 border-2 border-classic-crimson translate-x-3 translate-y-3"></div>
                <div className="relative z-10 border-2 border-charcoal overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1612012060851-20f943c02d3d?auto=format&w=600&q=80&fit=crop" 
                    className="w-full grayscale contrast-125 sepia-[0.3]" 
                    alt="Vintage Meat Scale used by the family" 
                  />
                </div>
              </div>
              <div className="bg-floral-white p-6 border-l-8 border-classic-crimson italic">
                <p className="text-lg text-charcoal leading-relaxed">
                  "En 'El Barrio', el peso es justo y el trato es de familia. Aquí no solo vendemos carne, alimentamos recuerdos compartidos."
                </p>
                <p className="text-right mt-4 font-bold text-classic-crimson">— Mateo Sr.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t-2 border-dashed border-charcoal text-center">
            <p className="font-bevan text-lg text-charcoal/40 uppercase tracking-widest">Servicio a Domicilio: 555-CARNE</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
