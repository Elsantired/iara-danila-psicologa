import { Monitor, MapPin, Brain, Heart, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const SERVICIOS = [
  {
    icon: Monitor,
    titulo: "Consulta Online",
    descripcion:
      "Sesiones individuales por videollamada para toda Argentina. Misma calidad y presencia que en persona, desde la comodidad de tu espacio.",
    tags: ["Toda Argentina", "Flexible", "Privado"],
  },
  {
    icon: MapPin,
    titulo: "Consulta Presencial",
    descripcion:
      "Atención en consultorio en Córdoba Capital. Un espacio cálido y seguro para tu proceso terapéutico.",
    tags: ["Córdoba Capital", "Consultorio"],
  },
  {
    icon: Brain,
    titulo: "Tratamiento de Trauma",
    descripcion:
      "Acompañamiento especializado para experiencias traumáticas, incluyendo trauma complejo y PTSD, con enfoque basado en evidencia.",
    tags: ["EMDR", "Trauma Complejo", "PTSD"],
  },
  {
    icon: Heart,
    titulo: "Terapia ACT",
    descripcion:
      "Terapia de Aceptación y Compromiso para conectar con tus valores y construir una vida significativa, incluso con el malestar presente.",
    tags: ["Valores", "Flexibilidad Psicológica"],
  },
  {
    icon: Users,
    titulo: "Talleres Grupales",
    descripcion:
      "Espacios grupales de aprendizaje y práctica de habilidades ACT. Próximas ediciones disponibles en lista de espera.",
    tags: ["Grupal", "Habilidades ACT", "Próximamente"],
  },
];

export default function ServiciosSection() {
  return (
    <section
      id="servicios"
      className="py-20 md:py-28 bg-gradient-malva relative overflow-hidden"
      aria-labelledby="servicios-heading"
    >
      {/* Decoraciones */}
      <div
        className="absolute top-[-5%] left-[-5%] w-72 h-72
                   bg-lavanda-400/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="badge-light mb-4 inline-flex">Servicios</span>
          <h2
            id="servicios-heading"
            className="heading-display text-display-lg text-crema-50 mb-4"
          >
            ¿En qué te puedo
            <br />
            acompañar?
          </h2>
          <p className="text-crema-200/70 text-lg leading-relaxed">
            Ofrezco diferentes modalidades de atención para adaptarme a tus necesidades
            y posibilidades.
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICIOS.map(({ icon: Icon, titulo, descripcion, tags }) => (
            <article
              key={titulo}
              className="card-dark group"
            >
              <div
                className="w-12 h-12 rounded-2xl bg-lavanda-400/20
                           flex items-center justify-center mb-4
                           group-hover:bg-lavanda-400/30 transition-colors duration-200"
                aria-hidden="true"
              >
                <Icon size={22} className="text-lavanda-300" />
              </div>

              <h3 className="text-crema-100 font-bold text-lg mb-2">{titulo}</h3>
              <p className="text-crema-300/70 text-sm leading-relaxed mb-4">
                {descripcion}
              </p>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-lavanda-300/80 bg-lavanda-400/10
                               border border-lavanda-400/20 rounded-full px-2.5 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}

          {/* CTA Card */}
          <div
            className="card-dark flex flex-col items-center justify-center
                       text-center py-10 border-dashed border-crema-300/20"
          >
            <p className="text-crema-200/70 text-base mb-4 leading-relaxed">
              ¿Querés saber si es el espacio adecuado para vos?
            </p>
            <Link
              href="#contacto"
              className="btn-primary text-sm px-6 py-3"
              aria-label="Pedir turno de consulta"
            >
              Pedir turno
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
