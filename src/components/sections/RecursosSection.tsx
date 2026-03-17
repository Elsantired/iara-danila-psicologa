import { BookOpen, Download, ExternalLink, FileText } from "lucide-react";

const LIBROS = [
  {
    id: "1",
    titulo: "Sal de tu mente, entra en tu vida",
    autor: "Steven C. Hayes",
    descripcion:
      "El libro que introdujo la ACT al público general. Una guía práctica para dejar de luchar contra tus pensamientos.",
    categoria: "ACT · Fundamentos",
    url: "https://www.amazon.com.ar",
    color: "from-malva-600/40 to-lavanda-400/30",
  },
  {
    id: "2",
    titulo: "El cuerpo lleva la cuenta",
    autor: "Bessel van der Kolk",
    descripcion:
      "La referencia mundial sobre trauma. Explica cómo el cuerpo almacena las experiencias traumáticas.",
    categoria: "Trauma · Neurociencia",
    url: "https://www.amazon.com.ar",
    color: "from-lavanda-500/40 to-malva-700/30",
  },
  {
    id: "3",
    titulo: "La trampa de la felicidad",
    autor: "Russ Harris",
    descripcion:
      "Una guía accesible sobre los principios ACT para liberarte del ciclo del sufrimiento.",
    categoria: "ACT · Divulgación",
    url: "https://www.amazon.com.ar",
    color: "from-malva-500/40 to-crema-400/20",
  },
  {
    id: "4",
    titulo: "Trauma y memoria",
    autor: "Peter A. Levine",
    descripcion:
      "Cómo el cerebro y el cuerpo procesan el trauma, y estrategias de sanación con enfoque somático.",
    categoria: "Trauma · Somático",
    url: "https://www.amazon.com.ar",
    color: "from-lavanda-400/40 to-malva-600/30",
  },
  {
    id: "5",
    titulo: "Mindfulness para el tratamiento del trauma",
    autor: "Múltiples autores",
    descripcion:
      "Protocolo basado en evidencia que integra mindfulness en el trabajo con experiencias traumáticas.",
    categoria: "Mindfulness · Trauma",
    url: "https://www.amazon.com.ar",
    color: "from-malva-700/40 to-lavanda-300/30",
  },
  {
    id: "6",
    titulo: "Valores en acción",
    autor: "Kelly Wilson",
    descripcion:
      "Una exploración profunda del concepto de valores en ACT y cómo usarlos como guía de vida.",
    categoria: "ACT · Valores",
    url: "https://www.amazon.com.ar",
    color: "from-crema-300/20 to-lavanda-400/40",
  },
];

const MATERIAL_GRATUITO = [
  {
    id: "g1",
    titulo: "Guía de valores ACT",
    descripcion: "Ejercicio práctico para identificar y clarificar tus valores personales.",
    formato: "PDF",
    icon: FileText,
  },
  {
    id: "g2",
    titulo: "Registro de defusión cognitiva",
    descripcion: "Hoja de trabajo para practicar la distancia de los pensamientos problemáticos.",
    formato: "PDF",
    icon: FileText,
  },
  {
    id: "g3",
    titulo: "Meditación de aceptación",
    descripcion: "Meditación guiada de 10 minutos para practicar la apertura y la aceptación.",
    formato: "Audio",
    icon: Download,
  },
];

export default function RecursosSection() {
  return (
    <section
      id="recursos"
      className="py-20 md:py-28 bg-gradient-malva relative overflow-hidden"
      aria-labelledby="recursos-heading"
    >
      {/* Decoración */}
      <div
        className="absolute top-1/4 right-[-5%] w-64 h-64
                   bg-crema-100/5 rounded-[60%_40%_55%_45%_/_45%_55%_45%_55%]
                   blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">

        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="badge-light mb-4 inline-flex">
            <BookOpen size={12} aria-hidden="true" />
            Recursos
          </span>
          <h2
            id="recursos-heading"
            className="heading-display text-display-lg text-crema-50 mb-4"
          >
            Material recomendado
          </h2>
          <p className="text-crema-200/70 text-lg leading-relaxed">
            Libros, guías y recursos que uso y recomiendo en mi práctica clínica.
          </p>
        </div>

        {/* Grid de libros */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {LIBROS.map(({ id, titulo, autor, descripcion, categoria, url, color }) => (
            <article key={id} className="card-dark group flex flex-col">
              {/* Cover placeholder con gradiente */}
              <div
                className={`w-full h-28 rounded-2xl bg-gradient-to-br ${color}
                            mb-4 flex items-center justify-center`}
                aria-hidden="true"
              >
                <BookOpen size={28} className="text-crema-200/40" />
              </div>

              {/* Info */}
              <div className="flex-1 space-y-2">
                <span
                  className="text-xs text-lavanda-300/70 font-medium tracking-wide"
                >
                  {categoria}
                </span>
                <h3 className="text-crema-100 font-bold text-base leading-tight">
                  {titulo}
                </h3>
                <p className="text-lavanda-300/60 text-sm font-medium">{autor}</p>
                <p className="text-crema-300/60 text-sm leading-relaxed">
                  {descripcion}
                </p>
              </div>

              {/* Link externo */}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-1.5
                           text-lavanda-300 hover:text-crema-100
                           text-sm font-medium transition-colors duration-200
                           focus-visible:outline-none focus-visible:underline"
                aria-label={`Ver ${titulo} de ${autor} en Amazon`}
              >
                Ver libro
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        {/* Material gratuito */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div
              className="h-px flex-1 bg-crema-100/10"
              aria-hidden="true"
            />
            <h3 className="text-crema-200 font-semibold text-sm uppercase tracking-widest whitespace-nowrap">
              Material gratuito
            </h3>
            <div
              className="h-px flex-1 bg-crema-100/10"
              aria-hidden="true"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {MATERIAL_GRATUITO.map(({ id, titulo, descripcion, formato, icon: Icon }) => (
              <div
                key={id}
                className="card-dark flex items-start gap-4 cursor-pointer
                           hover:border-lavanda-400/40 group"
              >
                <div
                  className="w-10 h-10 rounded-xl bg-lavanda-400/20
                             flex items-center justify-center shrink-0
                             group-hover:bg-lavanda-400/30 transition-colors"
                  aria-hidden="true"
                >
                  <Icon size={18} className="text-lavanda-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-crema-100 font-semibold text-sm">{titulo}</p>
                  <p className="text-crema-300/60 text-xs mt-1 leading-relaxed">
                    {descripcion}
                  </p>
                  <span
                    className="inline-block mt-2 text-xs text-lavanda-300/70
                               bg-lavanda-400/10 border border-lavanda-400/20
                               rounded-full px-2 py-0.5"
                  >
                    {formato} — Próximamente
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
