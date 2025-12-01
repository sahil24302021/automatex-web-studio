import React from 'react';
import { 
  HERO_HEADLINE, HERO_SUBHEADLINE, HERO_CTA, WHATSAPP_LINK, 
  WHY_CHOOSE_US, HOW_IT_WORKS, TESTIMONIALS, FAQ, SERVICES 
} from '../constants';
import { CheckCircle2, MessageCircle, Star, ArrowRight, Zap, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-20 lg:py-28 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-100 rounded-full">
            Trusted by 50+ Small Businesses
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            {HERO_HEADLINE}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            {HERO_SUBHEADLINE}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-secondary hover:bg-emerald-600 text-white text-lg font-bold rounded-xl shadow-lg transition-transform transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              {HERO_CTA}
            </a>
            <Link 
              to="/portfolio"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 hover:border-indigo-500 hover:text-indigo-600 text-lg font-medium rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Services That Help You Sell</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Everything you need to modernize your business without the headache.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="bg-slate-50 p-8 rounded-2xl hover:shadow-xl transition-shadow border border-slate-100">
                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.shortIntro}</p>
                <ul className="space-y-2 mb-6">
                  {service.whatYouGet.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="text-indigo-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-indigo-600 font-bold border-b-2 border-indigo-200 hover:border-indigo-600 pb-1 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Businesses Trust Us</h2>
            <p className="text-indigo-200">We keep it simple, honest, and effective.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div key={idx} className="text-center p-6 bg-indigo-800/50 rounded-xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  {idx === 0 ? <Shield className="text-white" /> : idx === 1 ? <Zap className="text-white"/> : idx === 2 ? <Clock className="text-white"/> : <CheckCircle2 className="text-white"/>}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-indigo-200 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {HOW_IT_WORKS.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center">
                 <div className="w-16 h-16 bg-white border-4 border-indigo-100 rounded-full flex items-center justify-center text-2xl font-bold text-indigo-600 mb-6 shadow-sm z-10">
                   {step.step}
                 </div>
                 {idx !== HOW_IT_WORKS.length - 1 && (
                   <div className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-indigo-100 -z-0"></div>
                 )}
                 <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                 <p className="text-slate-600 max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Happy Clients</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <div className="flex gap-1 mb-4 text-yellow-400">
                  <Star className="fill-current w-5 h-5" />
                  <Star className="fill-current w-5 h-5" />
                  <Star className="fill-current w-5 h-5" />
                  <Star className="fill-current w-5 h-5" />
                  <Star className="fill-current w-5 h-5" />
                </div>
                <p className="text-slate-700 italic mb-6">"{t.text}"</p>
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQ.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-slate-900 text-lg mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="mb-6 text-slate-600">Still have questions?</p>
            <a 
              href={WHATSAPP_LINK}
              className="inline-flex items-center gap-2 bg-secondary hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;