"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Inicio",    href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Podcast",  href: "#podcast" },
  { label: "Recursos", href: "#recursos" },
  { label: "Talleres", href: "#talleres" },
];

export default function Navbar() {
  const [isOpen,      setIsOpen]      = useState(false);
  const [isScrolled,  setIsScrolled]  = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isOpen
          ? "bg-malva-900/95 backdrop-blur-md shadow-malva-md border-b border-malva-700/40"
          : "bg-transparent"
      )}
      role="banner"
    >
      <div className="container-custom">
        <nav
          className="flex items-center justify-between h-16 md:h-20"
          aria-label="Navegación principal"
        >
          {/* Logo / Marca */}
          <Link
            href="#inicio"
            className="flex flex-col leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crema-300 rounded"
            aria-label="Iara Danila – Volver al inicio"
          >
            <span className="text-crema-100 font-extrabold text-xl tracking-tight">
              Iara Danila
            </span>
            <span className="text-crema-300/80 text-xs font-medium tracking-widest uppercase">
              Psicóloga
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-crema-200/80 hover:text-crema-100 text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200 hover:bg-malva-700/50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <Link
              href="#contacto"
              className="btn-primary text-sm px-6 py-3"
            >
              Pedir turno
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-crema-100 p-2 rounded-lg hover:bg-malva-700/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crema-300"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-96 pb-6" : "max-h-0"
          )}
          aria-hidden={!isOpen}
        >
          <ul className="flex flex-col gap-1 pt-2" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={handleNavClick}
                  className="block text-crema-200/90 hover:text-crema-100 font-medium px-4 py-3 rounded-xl hover:bg-malva-700/50 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="#contacto"
                onClick={handleNavClick}
                className="btn-primary text-sm w-full"
              >
                Pedir turno
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
