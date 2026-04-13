"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-brand-500/5"
          : "bg-brand-800/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className={`hidden md:flex items-center justify-between text-xs py-1.5 border-b transition-all duration-300 ${
          isScrolled ? "border-slate-100 text-slate-500" : "border-white/10 text-cream-200"
        }`}>
          <div className="flex items-center space-x-6">
            <a href="tel:+2348034060091" className="flex items-center space-x-1 hover:text-brand-400 transition-colors">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span>+234 803 406 0091</span>
            </a>
            <a href="mailto:thurstechnigitd@gmail.com" className="flex items-center space-x-1 hover:text-brand-400 transition-colors">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span>thurstechnigltd@gmail.com</span>
            </a>
          </div>
          <span className="font-medium">RC: 1577031</span>
        </div>

        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 z-10 group">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 overflow-hidden ${
              isScrolled 
                ? "bg-brand-500 shadow-md p-1" 
                : "bg-white p-1"
            }`}>
              <img src="/thurstechlogo.png" alt="ThursTech Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className={`font-heading font-bold text-xl tracking-tight transition-colors ${
                isScrolled ? "text-brand-800" : "text-white"
              }`}>
                Thurs<span className={`transition-colors ${
                  isScrolled ? "text-brand-500" : "text-cream-200"
                }`}>Tech</span>
              </h1>
              <p className={`text-[10px] tracking-[0.2em] uppercase font-medium transition-colors ${
                isScrolled ? "text-slate-400" : "text-cream-300"
              }`}>HVAC Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 z-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  pathname === link.href
                    ? isScrolled
                      ? "bg-brand-500 text-white shadow-md"
                      : "bg-white/20 text-white"
                    : isScrolled
                      ? "text-slate-600 hover:text-brand-500 hover:bg-brand-50"
                      : "text-cream-100 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/installation"
              className={`ml-4 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md ${
                isScrolled
                  ? "bg-brand-500 hover:bg-brand-600 text-white"
                  : "bg-cream-200 hover:bg-cream-300 text-brand-700"
              }`}
            >
              Book Installation
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden z-10 p-2 rounded-lg transition-colors ${
              isScrolled ? "text-brand-800 hover:bg-slate-100" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
            id="mobile-menu-button"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}>
          <nav className={`py-4 border-t ${isScrolled ? "border-slate-100" : "border-white/10"}`}>
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    pathname === link.href
                      ? isScrolled
                        ? "bg-brand-50 text-brand-600"
                        : "bg-white/20 text-white"
                      : isScrolled
                        ? "text-slate-600 hover:bg-slate-50"
                        : "text-cream-100 hover:bg-white/10"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/installation"
                className="mt-2 bg-brand-500 text-white px-4 py-3 rounded-lg font-semibold text-center text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Installation
              </Link>
              <div className={`mt-3 pt-3 border-t flex flex-col space-y-2 text-xs ${
                isScrolled ? "border-slate-100 text-slate-400" : "border-white/10 text-cream-300"
              }`}>
                <a href="tel:+2348034060091" className="flex items-center space-x-2">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span>+234 803 406 0091</span>
                </a>
                <a href="mailto:thurstechnigitd@gmail.com" className="flex items-center space-x-2">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span>thurstechnigitd@gmail.com</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;