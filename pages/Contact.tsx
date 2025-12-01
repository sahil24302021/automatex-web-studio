import React, { useState } from 'react';
import { PHONE_NUMBER } from '../constants';
import { MessageCircle, Clock, Mail, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    service: 'Website Development',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // -------------------------------------------------------------------------
    // IMPORTANT: Replace 'YOUR_FORMSPREE_ID' below with your actual Formspree ID.
    // 1. Go to https://formspree.io/
    // 2. Create a new form
    // 3. Set the email to automatexwebstudio@gmail.com
    // 4. Copy the 8-character ID from the integration URL
    // -------------------------------------------------------------------------
    const FORMSPREE_ID = "mgvgagde"; 
    const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', mobile: '', service: 'Website Development', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Left Side: Info */}
            <div className="bg-indigo-900 text-white p-10 md:w-2/5 flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-6">Let's Talk</h1>
                <p className="text-indigo-200 mb-8 leading-relaxed">
                  Ready to grow your business? Send us a message below or email us directly. We usually reply within 30 minutes.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-800 p-3 rounded-full shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-indigo-300 uppercase font-bold mb-1">WhatsApp / Phone</p>
                      <p className="font-medium text-lg">{PHONE_NUMBER}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-800 p-3 rounded-full shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-indigo-300 uppercase font-bold mb-1">Support Timing</p>
                      <p className="font-medium">Mon - Sat: 10AM - 7PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-800 p-3 rounded-full shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-indigo-300 uppercase font-bold mb-1">Email</p>
                      <p className="font-medium break-all text-sm sm:text-base leading-tight">
                        automatexwebstudio@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 md:mt-0 pt-8 border-t border-indigo-800">
                <p className="text-indigo-300 text-sm">
                  We respect your privacy. Your details are safe with us.
                </p>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="p-8 md:p-10 md:w-3/5 bg-white">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
              
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center animate-fade-in-up">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700">Thank you for contacting us. We will get back to you shortly.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-green-700 font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" 
                      placeholder="e.g. Rahul Sharma" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="mobile" className="block text-sm font-semibold text-slate-700 mb-2">Mobile Number</label>
                    <input 
                      type="tel" 
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" 
                      placeholder="+91 98765 43210" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">Service Interested In</label>
                    <select 
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all cursor-pointer"
                    >
                      <option>Website Development</option>
                      <option>WhatsApp Automation</option>
                      <option>Business Lead Automation</option>
                      <option>AI Customer Support</option>
                      <option>Custom Dashboard</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message (Optional)</label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none" 
                      placeholder="Tell us a bit about your business..." 
                    />
                  </div>
                  
                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
                      <AlertCircle className="w-5 h-5" />
                      <span>Message failed. Please check your connection or try again.</span>
                    </div>
                  )}
                  
                  <div className="pt-2">
                    <button 
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold py-3.5 rounded-lg text-center transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-4">
                      We'll get back to you via WhatsApp or Email.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;