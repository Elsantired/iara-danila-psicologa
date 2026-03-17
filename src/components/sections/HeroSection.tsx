import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero"
      aria-labelledby="hero-heading"
    >
      {/* Formas decorativas orgánicas */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px]
                   bg-lavanda-400/20 rounded-[60%_40%_55%_45%_/_45%_55%_45%_55%]
                   blur-3xl pointer-events-none animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px]
                   bg-malva-500/20 rounded-[50%_50%_40%_60%_/_55%_45%_55%_45%]
                   blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Patrón de puntos sutil */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #E0DBE8 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10 py-32 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Contenido */}
          <div className="space-y-8 text-center lg:text-left">

            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <span className="badge-light">
                <Star size={12} aria-hidden="true" />
                Psicología Online · Córdoba Capital
              </span>
            </div>

            {/* H1 con keyword principal */}
            <h1
              id="hero-heading"
              className="heading-display text-display-xl text-crema-50"
            >
              Psicología{" "}
              <span className="relative inline-block">
                Online y Presencial
                {/* Subrayado decorativo */}
                <span
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-lavanda-400/60 rounded-full"
                  aria-hidden="true"
                />
              </span>
              {" "}en Córdoba
            </h1>

            {/* Subtítulo */}
            <p className="text-crema-200/80 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
              Soy Iara Danila, psicóloga especializada en{" "}
              <strong className="text-crema-100 font-semibold">
                Trauma y Terapia ACT
              </strong>
              . Acompañarte a conectar con lo que realmente importa y construir una
              vida con sentido, desde un lugar cálido y sin juicio.
            </p>

            {/* Propuesta de valor */}
            <ul
              className="flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center lg:justify-start"
              aria-label="Características del servicio"
            >
              {[
                "Turnos online para toda Argentina",
                "Presencial en Córdoba Capital",
                "Especialista en Trauma y ACT",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-crema-200/70 text-sm"
                >
                  <span
                    className="w-5 h-5 rounded-full bg-lavanda-400/30 flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <span className="w-2 h-2 rounded-full bg-lavanda-300" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#contacto"
                className="btn-primary"
                aria-label="Pedir turno de consulta con Iara Danila"
              >
                Pedir turno
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                href="#sobre-mi"
                className="btn-secondary"
                aria-label="Conocer más sobre Iara Danila"
              >
                Conocer más
              </Link>
            </div>
          </div>

          {/* Visual / Foto */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Forma orgánica de fondo detrás de la foto */}
              <div
                className="absolute inset-[-8%]
                           bg-crema-200/15 rounded-[60%_40%_55%_45%_/_45%_55%_45%_55%]
                           blur-sm"
                aria-hidden="true"
              />

              {/* Placeholder foto — reemplazar con <Image> real */}
              <div
                className="relative w-72 h-72 md:w-96 md:h-96
                           rounded-[60%_40%_55%_45%_/_45%_55%_45%_55%]
                           bg-gradient-to-br from-malva-600/60 to-lavanda-400/40
                           border-2 border-crema-100/20
                           flex items-center justify-center
                           shadow-glow"
                role="img"
                aria-label="Foto de perfil de Iara Danila, psicóloga"
              >
                <span className="text-crema-200/50 text-sm text-center px-8">
                  [Foto de Iara]
                  <br />
                  <span className="text-xs mt-1 block">
                    Reemplazar con &lt;Image&gt;
                  </span>
                </span>
              </div>

              {/* Tarjeta flotante — social proof */}
              <div
                className="absolute -bottom-4 -left-4 md:-left-8
                           card-dark py-3 px-4 flex items-center gap-3"
                aria-label="Más de 5 años de experiencia"
              >
                <div
                  className="w-10 h-10 rounded-full bg-lavanda-400/20
                             flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <Star size={18} className="text-lavanda-300" />
                </div>
                <div>
                  <p className="text-crema-100 font-bold text-sm leading-none">
                    +5 años
                  </p>
                  <p className="text-crema-300/60 text-xs mt-0.5">
                    acompañando procesos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transición suave hacia la siguiente sección */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24
                   bg-gradient-to-t from-crema-100/5 to-transparent
                   pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
