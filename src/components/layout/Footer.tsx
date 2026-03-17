import Link from "next/link";
import { Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

const FOOTER_LINKS = [
  { label: "Inicio",    href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Podcast",  href: "#podcast" },
  { label: "Recursos", href: "#recursos" },
  { label: "Talleres", href: "#talleres" },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href:  "https://www.instagram.com/iaradanila/",
    icon:  Instagram,
  },
  {
    label: "YouTube",
    href:  "https://youtube.com/@iaradanila",
    icon:  Youtube,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-malva-950 text-crema-300/70 border-t border-malva-800/50"
      role="contentinfo"
      aria-label="Pie de página"
    >
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Columna 1: Marca */}
          <div className="space-y-4">
            <div>
              <p className="text-crema-100 font-extrabold text-xl tracking-tight">
                Iara Danila
              </p>
              <p className="text-crema-300/60 text-xs tracking-widest uppercase mt-0.5">
                Psicóloga · MP 1234
              </p>
            </div>
            <p className="text-sm leading-relaxed text-crema-300/60 max-w-xs">
              Especialista en Trauma y Terapia de Aceptación y Compromiso (ACT).
              Atención online para toda Argentina y presencial en Córdoba Capital.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Seguir en ${label}`}
                  className="p-2.5 rounded-full bg-malva-800/60 text-crema-300/70
                             hover:bg-malva-700 hover:text-crema-100
                             transition-colors duration-200"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <nav aria-label="Navegación del pie de página">
            <p className="text-crema-200 font-semibold text-sm uppercase tracking-wider mb-4">
              Navegación
            </p>
            <ul className="space-y-2" role="list">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-crema-100 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Columna 3: Contacto y Ubicación */}
          <div>
            <p className="text-crema-200 font-semibold text-sm uppercase tracking-wider mb-4">
              Contacto
            </p>
            <address className="not-italic space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-lavanda-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  Córdoba Capital, Argentina
                  <br />
                  <span className="text-crema-300/50 text-xs">Atención online para toda Argentina</span>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-lavanda-400 shrink-0" aria-hidden="true" />
                <a
                  href="https://wa.me/5493510000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-crema-100 transition-colors duration-200"
                  aria-label="Contactar por WhatsApp"
                >
                  +54 9 351 000-0000
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-lavanda-400 shrink-0" aria-hidden="true" />
                <a
                  href="mailto:hola@iaradanila.com.ar"
                  className="hover:text-crema-100 transition-colors duration-200"
                >
                  hola@iaradanila.com.ar
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-malva-800/50 pt-8 space-y-3">
          {/* Disclaimer legal */}
          <p className="text-xs text-crema-300/40 leading-relaxed max-w-3xl">
            <strong className="text-crema-300/60">Aviso legal:</strong> El contenido de este sitio es de carácter
            informativo y no reemplaza la consulta psicológica profesional. Si estás en crisis, comunicate
            con el{" "}
            <a
              href="tel:135"
              className="underline hover:text-crema-200 transition-colors"
            >
              Centro de Asistencia al Suicida (135)
            </a>{" "}
            o acudí a la guardia más cercana.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-crema-300/40">
            <p>© {currentYear} Iara Danila. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <Link href="/privacidad" className="hover:text-crema-200 transition-colors">
                Política de privacidad
              </Link>
              <Link href="/terminos" className="hover:text-crema-200 transition-colors">
                Términos de uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
