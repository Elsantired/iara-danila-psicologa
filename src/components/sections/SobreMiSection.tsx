import { GraduationCap, Heart, BookOpen, Users } from "lucide-react";

const FORMACION = [
  {
    icon: GraduationCap,
    title: "Licenciatura en Psicología",
    detail: "Universidad Nacional de Córdoba",
  },
  {
    icon: BookOpen,
    title: "Especialización en Terapia ACT",
    detail: "Terapia de Aceptación y Compromiso · ACBS",
  },
  {
    icon: Heart,
    title: "Formación en Trauma",
    detail: "EMDR y Trauma Complejo · Nivel 1 y 2",
  },
  {
    icon: Users,
    title: "Clínica Psicológica",
    detail: "+5 años de práctica clínica individual y grupal",
  },
];

export default function SobreMiSection() {
  return (
    <section
      id="sobre-mi"
      className="py-20 md:py-28 bg-gradient-crema"
      aria-labelledby="sobre-mi-heading"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Visual / Foto */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative">
              {/* Forma decorativa de fondo */}
              <div
                className="absolute inset-[-12%] bg-lavanda-200/50
                           rounded-[50%_50%_40%_60%_/_55%_45%_55%_45%]"
                aria-hidden="true"
              />

              {/* Placeholder foto */}
              <div
                className="relative w-64 h-80 md:w-80 md:h-96
                           rounded-3xl bg-gradient-to-br from-malva-700 to-malva-500
                           overflow-hidden shadow-malva-lg
                           flex items-center justify-center"
                role="img"
                aria-label="Foto de Iara Danila"
              >
                <span className="text-crema-200/50 text-sm text-center px-6">
                  [Foto de Iara]
                </span>
              </div>

              {/* Badge de especialidad */}
              <div
                className="absolute -top-4 -right-4 md:-right-6
                           bg-malva-700 text-crema-100
                           rounded-2xl px-4 py-2 shadow-malva-md"
              >
                <p className="text-xs font-semibold tracking-wide">
                  Especialista en
                </p>
                <p className="text-sm font-bold">Trauma · ACT</p>
              </div>
            </div>
          </div>

          {/* Contenido */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Badge */}
            <span className="badge-accent">Sobre mí</span>

            <h2
              id="sobre-mi-heading"
              className="heading-display text-display-lg text-malva-800"
            >
              Un espacio para vos,
              <br />
              <span className="text-malva-600">sin juicio y con presencia</span>
            </h2>

            <div className="space-y-4 text-text-medium leading-relaxed">
              <p>
                Hola, soy <strong className="text-malva-700 font-semibold">Iara</strong>.
                Me dedico a la psicología porque creo que el sufrimiento humano merece ser
                escuchado con honestidad y ternura. Trabajo con personas que atraviesan
                experiencias de dolor, trauma o que sienten que algo las frena de vivir
                la vida que quieren.
              </p>
              <p>
                Mi formación en{" "}
                <strong className="text-malva-700 font-semibold">
                  Terapia de Aceptación y Compromiso (ACT)
                </strong>{" "}
                y en{" "}
                <strong className="text-malva-700 font-semibold">trauma complejo</strong>{" "}
                me permite acompañar procesos profundos de cambio, donde lo que más importa
                no es eliminar el malestar, sino aprender a relacionarte con él de una
                manera diferente.
              </p>
              <p>
                Atiendo de forma presencial en{" "}
                <strong className="text-malva-700 font-semibold">Córdoba Capital</strong>{" "}
                y online para toda Argentina.
              </p>
            </div>

            {/* Grid de formación */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {FORMACION.map(({ icon: Icon, title, detail }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 p-4 rounded-2xl
                             bg-crema-100 border border-crema-300/60
                             hover:border-lavanda-300 transition-colors duration-200"
                >
                  <div
                    className="w-9 h-9 rounded-xl bg-malva-700/10
                               flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <Icon size={18} className="text-malva-700" />
                  </div>
                  <div>
                    <p className="text-malva-800 font-semibold text-sm leading-tight">
                      {title}
                    </p>
                    <p className="text-text-medium text-xs mt-0.5">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
