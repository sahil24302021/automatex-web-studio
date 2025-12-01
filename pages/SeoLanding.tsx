import React from 'react';
import { SEO_CONTENT, WHATSAPP_LINK } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const SeoLanding: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Digital Growth Resources for Indian Businesses
          </h1>
          <p className="text-lg text-slate-600">
            Expert insights on modernizing your business, automation, and web development.
          </p>
        </div>

        <div className="space-y-20">
          {SEO_CONTENT.map((section, idx) => (
            <article key={idx} className="prose lg:prose-xl max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-6 border-b border-indigo-100 pb-2">
                {section.title}
              </h2>
              
              <div className="text-slate-700 space-y-4 mb-8 leading-relaxed">
                {section.content.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-8">
                <h3 className="font-bold text-slate-900 mb-4 text-lg">Key Benefits:</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {section.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-sm md:text-base text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center md:text-left">
                <a 
                  href={WHATSAPP_LINK}
                  className="inline-block bg-white text-indigo-600 font-bold border-2 border-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-50 transition-colors"
                >
                  Discuss {section.title} on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeoLanding;