import React from 'react';
import { UtensilsCrossed } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-sm border-b-4 border-classic-crimson">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-classic-crimson flex items-center justify-center rounded-xs shadow-neobrutal">
          <UtensilsCrossed className="text-white w-6 h-6" />
        </div>
        <span className="font-bevan text-xl md:text-2xl text-charcoal tracking-tight">
          Carnicería El Barrio
        </span>
      </div>
      
      <div className="hidden md:flex items-center gap-10">
        <a href="#carnes" className="text-lg font-kalam font-bold hover:text-classic-crimson transition-colors">
          Carnes
        </a>
        <a href="#historia" className="text-lg font-kalam font-bold washi-tape">
          Historia
        </a>
        <a href="#contacto" className="text-lg font-kalam font-bold hover:text-classic-crimson transition-colors">
          Contacto
        </a>
      </div>

      <button className="bg-classic-crimson text-white px-5 py-2 md:px-6 md:py-3 font-bevan rounded-sm shadow-neobrutal hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#555555] transition-all cursor-pointer">
        Llamar Ahora
      </button>
    </nav>
  );
};

export default Navbar;
