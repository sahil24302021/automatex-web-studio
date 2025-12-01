import React from 'react';
import { PRICING_PACKAGES, WHATSAPP_LINK } from '../constants';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg text-slate-600">Choose the package that fits your business stage.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PACKAGES.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`relative bg-white rounded-2xl p-8 flex flex-col ${
                pkg.recommended 
                  ? 'border-2 border-indigo-500 shadow-xl scale-105 z-10' 
                  : 'border border-slate-200 shadow-lg'
              }`}
            >
              {pkg.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                <p className="text-slate-500 mb-6 text-sm">{pkg.subtitle}</p>
                <div className="text-4xl font-extrabold text-slate-900 mb-2">{pkg.price}</div>
                <div className="text-slate-400 text-sm">one-time investment</div>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                      <Check className={`w-5 h-5 ${pkg.recommended ? 'text-indigo-600' : 'text-slate-400'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-bold text-center transition-colors ${
                  pkg.recommended
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                }`}
              >
                Choose {pkg.name}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-white p-8 rounded-2xl max-w-3xl mx-auto border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Need something specific?</h3>
          <p className="text-slate-600 mb-6">We also offer custom packages for specific automation needs or larger projects.</p>
          <a href={WHATSAPP_LINK} className="text-indigo-600 font-bold hover:underline">Chat with us for a custom quote</a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;