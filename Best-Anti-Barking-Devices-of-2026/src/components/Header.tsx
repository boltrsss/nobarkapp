import { ShieldCheck, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 shadow-lg sticky top-0 z-50 text-white border-b border-slate-800">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <a href="#" className="flex items-center text-white hover:text-slate-200 transition-colors">
            <div className="bg-blue-600 p-1.5 rounded-lg mr-3">
              <ShieldCheck className="h-7 w-7 text-white" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-white">Consumerskills</span>
          </a>
          <button 
            className="sm:hidden text-white hover:text-blue-400 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
        
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} mt-4 sm:mt-0 sm:flex flex-col sm:flex-row w-full sm:w-auto justify-center items-center gap-4 sm:gap-6 text-sm font-medium`}>
          <a href="#top-picks" className="hover:text-blue-400 transition-colors text-slate-300 py-2 sm:py-0 w-full text-center sm:w-auto" onClick={() => setIsMenuOpen(false)}>Top Picks</a>
          <a href="#in-depth" className="hover:text-blue-400 transition-colors text-slate-300 py-2 sm:py-0 w-full text-center sm:w-auto" onClick={() => setIsMenuOpen(false)}>In-Depth Reviews</a>
          <a href="#other-options" className="hover:text-blue-400 transition-colors text-slate-300 py-2 sm:py-0 w-full text-center sm:w-auto" onClick={() => setIsMenuOpen(false)}>Other Options</a>
          <a href="#faq" className="hover:text-blue-400 transition-colors text-slate-300 py-2 sm:py-0 w-full text-center sm:w-auto" onClick={() => setIsMenuOpen(false)}>FAQ</a>
        </nav>
      </div>
    </header>
  );
}
