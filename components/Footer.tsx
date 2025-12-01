import React from 'react';
import { Link } from 'react-router-dom';
import { WHATSAPP_LINK } from '../constants';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-lg">
                <Logo className="w-8 h-8" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-extrabold text-xl leading-none text-white tracking-tight">
                  AutomateX
                </span>
                <span className="text-[0.65rem] font-bold text-indigo-200 uppercase tracking-widest mt-0.5">
                  Web Studio
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Helping Indian small businesses grow with simple, effective digital solutions. We automate the boring stuff so you can focus on sales.
            </p>
            <div className="flex space-x-4">
               {/* Social placeholders */}
               <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 transition-colors text-slate-300 hover:text-white"><Facebook size={18}/></a>
               <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 transition-colors text-slate-300 hover:text-white"><Instagram size={18}/></a>
               <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 transition-colors text-slate-300 hover:text-white"><Linkedin size={18}/></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Website Development</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">WhatsApp Automation</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Lead Automation</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Billing Tools</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">AI Chatbots</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link></li>
              <li><Link to="/portfolio" className="hover:text-indigo-400 transition-colors">Our Work</Link></li>
              <li><Link to="/pricing" className="hover:text-indigo-400 transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Resources</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link to="/seo" className="hover:text-indigo-400 transition-colors">SEO Guides</Link></li>
              <li><a href={WHATSAPP_LINK} className="hover:text-indigo-400 transition-colors">Help Center</a></li>
              <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">FAQ</Link></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} AutomateX Web Studio. All rights reserved.</p>
          <p className="flex items-center gap-1">Made with <span className="text-red-500">♥</span> in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;