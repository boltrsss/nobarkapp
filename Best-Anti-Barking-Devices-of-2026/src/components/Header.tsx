import { ShieldCheck, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100 transition-all duration-300">
      <div className="container mx-auto px-4 py-3 sm:py-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-xl group-hover:scale-105 transition-transform shadow-md">
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
              Consumer<span className="text-blue-600 font-bold">skills</span>
            </span>
          </a>
          <button 
            className="md:hidden text-slate-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-colors focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        <nav className={`${isMenuOpen ? 'flex bg-white shadow-xl md:shadow-none absolute md:relative top-full left-0 right-0 p-4 md:p-0 border-b md:border-none border-gray-100 flex-col md:flex-row w-full md:w-auto mt-0 md:mt-0 z-50' : 'hidden md:flex flex-row w-auto'} justify-center items-center gap-2 md:gap-8 text-[15px] font-semibold transition-all duration-300`}>
          <a href="#top-picks" className="hover:text-blue-600 transition-colors text-slate-600 hover:bg-slate-50 md:hover:bg-transparent py-3 md:py-0 px-4 md:px-0 w-full md:w-auto text-center rounded-lg" onClick={() => setIsMenuOpen(false)}>Top Picks</a>
          <a href="#in-depth" className="hover:text-blue-600 transition-colors text-slate-600 hover:bg-slate-50 md:hover:bg-transparent py-3 md:py-0 px-4 md:px-0 w-full md:w-auto text-center rounded-lg" onClick={() => setIsMenuOpen(false)}>In-Depth Reviews</a>
          <a href="#other-options" className="hover:text-blue-600 transition-colors text-slate-600 hover:bg-slate-50 md:hover:bg-transparent py-3 md:py-0 px-4 md:px-0 w-full md:w-auto text-center rounded-lg" onClick={() => setIsMenuOpen(false)}>Other Options</a>
          <a href="#faq" className="hover:text-blue-600 transition-colors text-slate-600 hover:bg-slate-50 md:hover:bg-transparent py-3 md:py-0 px-4 md:px-0 w-full md:w-auto text-center rounded-lg" onClick={() => setIsMenuOpen(false)}>FAQ</a>
          
          <a href="#top-picks" className={`${isMenuOpen ? 'block' : 'hidden md:inline-flex'} mt-2 md:mt-0 w-full md:w-auto text-center bg-slate-900 hover:bg-blue-600 text-white px-5 py-2.5 rounded-full transition-colors shadow-sm`}>
            See Ranking
          </a>
        </nav>
      </div>
    </header>
  );
}
