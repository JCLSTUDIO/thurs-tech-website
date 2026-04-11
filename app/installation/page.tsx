"use client";

import React, { useState } from "react";
import Link from "next/link";
import CalendarPopup from "../_components/CalendarPopup";

export default function InstallationPage() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    propertyType: "residential",
    acType: "",
    units: "1",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Installation request submitted! We will contact you shortly on the number you provided. You can also reach us at +234 803 406 0091");
  };

  const packages = [
    {
      name: "Basic Installation",
      price: "₦25,000",
      features: ["Standard wall bracket", "3m copper pipe", "Basic insulation", "1 year warranty"],
      recommended: false
    },
    {
      name: "Standard Package",
      price: "₦45,000",
      features: ["Heavy-duty bracket", "5m copper pipe", "Premium insulation", "Drain pipe", "2 years warranty", "First maintenance free"],
      recommended: true
    },
    {
      name: "Premium Package",
      price: "₦75,000",
      features: ["Industrial bracket", "10m copper pipe", "Premium insulation", "Drain pipe & pump", "Electrical wiring", "3 years warranty", "Annual maintenance"],
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="blue-gradient-bg py-16 relative overflow-hidden">
        <div className="absolute inset-0 engineering-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Book Your <span className="text-cream-200">Installation</span>
          </h1>
          <p className="text-xl text-blue-100">
            Professional AC installation with flexible scheduling
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding cream-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-cream-200">
                <h2 className="text-2xl font-bold text-brand-800 mb-6 flex items-center">
                  <span className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                  </span>
                  Installation Request
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="install-name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        id="install-name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-400 focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label htmlFor="install-phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="install-phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-400 focus:border-transparent outline-none transition-all"
                        placeholder="+234 800 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="install-email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="install-email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-400 focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div>
                    <label htmlFor="install-address" className="block text-sm font-medium text-slate-700 mb-2">Installation Address</label>
                    <textarea
                      id="install-address"
                      name="address"
                      required
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-400 focus:border-transparent outline-none transition-all"
                      placeholder="Full address including city and state"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="install-propertyType" className="block text-sm font-medium text-slate-700 mb-2">Property Type</label>
                      <select
                        id="install-propertyType"
                        name="propertyType"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-400 focus:border-transparent outline-none transition-all"
                        value={formData.propertyType}
                        onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                      >
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial">Industrial</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="install-acType" className="block text-sm font-medium text-slate-700 mb-2">AC Type</label>
                      <select
                        id="install-acType"
                        name="acType"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-400 focus:border-transparent outline-none transition-all"
                        value={formData.acType}
                        onChange={(e) => setFormData({...formData, acType: e.target.value})}
                      >
                        <option value="">Select Type</option>
                        <option value="split">Split Unit</option>
                        <option value="floor">Floor Standing</option>
                        <option value="cassette">Cassette</option>
                        <option value="portable">Portable</option>
                        <option value="window">Window Unit</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="install-units" className="block text-sm font-medium text-slate-700 mb-2">Number of Units</label>
                      <select
                        id="install-units"
                        name="units"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-400 focus:border-transparent outline-none transition-all"
                        value={formData.units}
                        onChange={(e) => setFormData({...formData, units: e.target.value})}
                      >
                        {[1,2,3,4,5,"6+"].map(num => (
                          <option key={num} value={num}>{num} Unit{num !== 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Calendar Selection */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Preferred Installation Dates (Select up to 3)
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsCalendarOpen(true)}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white hover:bg-cream-50 transition-all text-left flex items-center justify-between"
                      id="calendar-open-button"
                    >
                      <span className={selectedDates.length > 0 ? "text-brand-800" : "text-slate-400"}>
                        {selectedDates.length > 0 
                          ? `${selectedDates.length} date(s) selected` 
                          : "Click to select dates"}
                      </span>
                      <span className="text-2xl">📅</span>
                    </button>
                    {selectedDates.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {selectedDates.sort((a, b) => a.getTime() - b.getTime()).map((date, idx) => (
                          <span key={idx} className="inline-flex items-center px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm font-medium border border-brand-100">
                            {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="install-message" className="block text-sm font-medium text-slate-700 mb-2">Additional Notes</label>
                    <textarea
                      id="install-message"
                      name="message"
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-400 focus:border-transparent outline-none transition-all"
                      placeholder="Any specific requirements or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-500 text-white font-bold py-4 rounded-lg hover:bg-brand-600 transition-all transform hover:scale-[1.02] shadow-lg"
                    id="installation-submit-button"
                  >
                    Submit Installation Request
                  </button>
                </form>
              </div>
            </div>

            {/* Packages Sidebar */}
            <div>
              <h3 className="text-xl font-bold text-brand-800 mb-6">Installation Packages</h3>
              <div className="space-y-6">
                {packages.map((pkg, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-2xl p-6 border-2 transition-all hover:shadow-lg ${
                      pkg.recommended ? 'border-brand-500 shadow-lg' : 'border-cream-200'
                    }`}
                  >
                    {pkg.recommended && (
                      <span className="inline-block bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                        RECOMMENDED
                      </span>
                    )}
                    <h4 className="text-lg font-bold text-brand-800 mb-2">{pkg.name}</h4>
                    <p className="text-3xl font-bold text-brand-500 mb-4">{pkg.price}</p>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-slate-600">
                          <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 blue-gradient-bg rounded-2xl p-6 text-white">
                <h4 className="font-bold text-lg mb-4">Need Help?</h4>
                <p className="text-blue-100 text-sm mb-4">
                  Our team is available to help you choose the right package for your needs.
                </p>
                <a href="tel:+2348034060091" className="flex items-center space-x-2 text-cream-200 hover:text-white transition-colors mb-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-semibold">+234 803 406 0091</span>
                </a>
                <a href="tel:+2348175578322" className="flex items-center space-x-2 text-cream-200 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-semibold">+234 817 557 8322</span>
                </a>
                <a href="mailto:thurstechnigitd@gmail.com" className="flex items-center space-x-2 text-cream-200 hover:text-white transition-colors mt-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-semibold text-sm">thurstechnigitd@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CalendarPopup
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
        onSelectDates={setSelectedDates}
        selectedDates={selectedDates}
      />
    </div>
  );
}