import React from 'react';
import { MapPin, Phone, Facebook, Instagram, MessageCircle, UtensilsCrossed } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-charcoal text-white py-20 relative overflow-hidden">
      {/* Chalkboard Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-60 pointer-events-none mix-blend-overlay" 
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/chalkboard.png')" }}
      ></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-12">
          <div className="inline-block p-5 border-2 border-dashed border-white/40 rounded-full mb-6">
            <UtensilsCrossed className="w-12 h-12 text-white" />
          </div>
          <h2 className="font-bevan text-4xl md:text-5xl mb-4 tracking-tight">Carnicería El Barrio</h2>
          <div className="h-1.5 w-32 bg-classic-crimson mx-auto mb-10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto mb-16">
          <div className="flex flex-col items-center gap-4 group p-8 border-2 border-white/10 rounded-xs hover:border-white transition-all">
            <div className="w-16 h-16 rounded-full border-2 border-white/40 flex items-center justify-center group-hover:bg-white group-hover:text-charcoal transition-all">
              <MapPin className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-bevan text-2xl mb-1 text-white uppercase tracking-wider">Visítanos</h4>
              <p className="text-xl font-kalam text-chalk">789 Plaza Central, Pueblo Viejo</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 group p-8 border-2 border-white/10 rounded-xs hover:border-white transition-all">
            <div className="w-16 h-16 rounded-full border-2 border-white/40 flex items-center justify-center group-hover:bg-white group-hover:text-charcoal transition-all">
              <Phone className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-bevan text-2xl mb-1 text-white uppercase tracking-wider">Llámanos</h4>
              <p className="text-xl font-kalam text-chalk">555-CARNE (555-2276)</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-8 mb-16">
          <a href="#" className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center hover:bg-white hover:text-charcoal transition-all">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center hover:bg-white hover:text-charcoal transition-all">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center hover:bg-white hover:text-charcoal transition-all">
            <MessageCircle className="w-6 h-6" />
          </a>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/50 text-lg">
          <p>&copy; 2024 Carnicería El Barrio. La Tradición que se Saborea.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
