import React from "react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="blue-gradient-bg py-16 relative overflow-hidden">
        <div className="absolute inset-0 engineering-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Contact <span className="text-cream-200">Us</span>
          </h1>
          <p className="text-xl text-blue-100">
            Get in touch with our team for inquiries and support
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-brand-800 mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-cream-50 border border-cream-200 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-800 text-lg">Head Office</h3>
                    <p className="text-slate-600">NPO 50 Kajola Street,<br />Ajaka Makun, Sagamu,<br />Ogun State, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl bg-cream-50 border border-cream-200 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-800 text-lg">Phone</h3>
                    <a href="tel:+2348034060091" className="text-slate-600 hover:text-brand-500 transition-colors block">+234 803 406 0091</a>
                    <a href="tel:+2348175578322" className="text-slate-600 hover:text-brand-500 transition-colors block">+234 817 557 8322</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl bg-cream-50 border border-cream-200 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-800 text-lg">Email</h3>
                    <a href="mailto:thurstechnigitd@gmail.com" className="text-slate-600 hover:text-brand-500 transition-colors block">thurstechnigitd@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl bg-cream-50 border border-cream-200 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-800 text-lg">Business Hours</h3>
                    <p className="text-slate-600">Monday - Saturday: 8:00 AM - 6:00 PM<br />Sunday: Emergency Services Only</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl bg-brand-50 border border-brand-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-800 text-lg">Registration</h3>
                    <p className="text-slate-600">RC Number: <span className="font-bold text-brand-700">1577031</span></p>
                    <p className="text-xs text-slate-500 mt-1">ThursTech Nigeria Limited</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8">
                <a 
                  href="https://wa.me/2348034060091" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center space-x-3 bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors shadow-md"
                  id="whatsapp-contact-button"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-cream-50 p-8 rounded-2xl border border-cream-200">
              <h2 className="text-2xl font-heading font-bold text-brand-800 mb-6">Send us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-firstName" className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input type="text" id="contact-firstName" name="firstName" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-400 focus:border-transparent outline-none bg-white" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="contact-lastName" className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input type="text" id="contact-lastName" name="lastName" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-400 focus:border-transparent outline-none bg-white" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input type="email" id="contact-email" name="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-400 focus:border-transparent outline-none bg-white" placeholder="john@example.com" />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" id="contact-phone" name="phone" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-400 focus:border-transparent outline-none bg-white" placeholder="+234 800 000 0000" />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                  <select id="contact-subject" name="subject" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-400 focus:border-transparent outline-none bg-white">
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="product">Product Information</option>
                    <option value="installation">Installation Request</option>
                    <option value="maintenance">Maintenance Service</option>
                    <option value="complaint">Complaint</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea id="contact-message" name="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-400 focus:border-transparent outline-none bg-white" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="w-full bg-brand-500 text-white font-bold py-4 rounded-lg hover:bg-brand-600 transition-all shadow-lg hover:shadow-xl" id="contact-form-submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location */}
      <section className="cream-section py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="blue-gradient-bg rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-heading font-bold mb-4">Visit Our Office</h2>
            <p className="text-blue-100 mb-2 text-lg">NPO 50 Kajola Street, Ajaka Makun, Sagamu</p>
            <p className="text-blue-200 mb-6">Ogun State, Nigeria</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+2348034060091" className="bg-cream-200 text-brand-700 px-6 py-3 rounded-lg font-bold hover:bg-cream-300 transition-colors inline-flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call Us Now
              </a>
              <Link href="/installation" className="border-2 border-cream-200/40 text-cream-100 hover:bg-cream-200 hover:text-brand-700 px-6 py-3 rounded-lg font-semibold transition-all inline-flex items-center justify-center">
                Book Installation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}