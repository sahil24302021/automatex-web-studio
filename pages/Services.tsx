import React from 'react';
import { SERVICES, WHATSAPP_LINK } from '../constants';
import { Check, Globe, MessageCircle, Zap, Bot, LayoutDashboard, Receipt } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-8 h-8 text-indigo-600" />,
  MessageCircle: <MessageCircle className="w-8 h-8 text-indigo-600" />,
  Zap: <Zap className="w-8 h-8 text-indigo-600" />,
  Bot: <Bot className="w-8 h-8 text-indigo-600" />,
  LayoutDashboard: <LayoutDashboard className="w-8 h-8 text-indigo-600" />,
  Receipt: <Receipt className="w-8 h-8 text-indigo-600" />,
};

const Services: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Our Services</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Simple, effective digital solutions designed to help your business run smoother and grow faster.
          </p>
        </div>

        <div className="space-y-12">
          {SERVICES.map((service) => (
            <div key={service.id} id={service.id} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/3">
                  <div className="bg-indigo-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    {iconMap[service.iconName]}
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h2>
                  <p className="text-lg font-medium text-indigo-600 mb-4">{service.shortIntro}</p>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.explanation}</p>
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-100">
                    <span className="text-sm text-slate-500 block mb-1">Estimated Investment</span>
                    <span className="text-xl font-bold text-slate-900">{service.priceRange}</span>
                  </div>
                </div>

                <div className="lg:w-1/3">
                  <h3 className="font-bold text-slate-900 mb-4">What You Get</h3>
                  <ul className="space-y-3">
                    {service.whatYouGet.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 bg-indigo-100 rounded-full p-1">
                          <Check className="w-3 h-3 text-indigo-600" />
                        </div>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:w-1/3">
                  <h3 className="font-bold text-slate-900 mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 bg-green-100 rounded-full p-1">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                     <a 
                      href={WHATSAPP_LINK}
                      className="block w-full text-center bg-secondary hover:bg-emerald-600 text-white font-bold py-3 rounded-lg transition-colors"
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;