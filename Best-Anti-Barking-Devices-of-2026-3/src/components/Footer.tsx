import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 mt-20 border-t border-slate-800 font-sans">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-10 border-b border-slate-800">
          <div className="flex items-center mb-6 md:mb-0">
            <ShieldCheck className="h-8 w-8 mr-3 text-blue-500" />
            <span className="font-bold text-2xl tracking-tight text-white">Consumerskills</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
            <a href="https://www.consumerskills.org/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="https://www.consumerskills.org/terms-and-conditions/" className="hover:text-blue-400 transition-colors">Terms & Conditions</a>
            <a href="https://www.consumerskills.org/#contact" className="hover:text-blue-400 transition-colors">Contact Us</a>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-slate-400 text-sm mb-4 font-semibold tracking-wide">&copy; 2026 Consumerskills. All Rights Reserved.</p>
          <p className="text-slate-500 text-xs max-w-2xl mx-auto leading-relaxed">
            Consumerskills.com is a reader-supported site. We may earn a commission if you make a purchase through our links, at no extra cost to you. This helps us continue to test and review products honestly.
          </p>
        </div>
      </div>
    </footer>
  );
}
