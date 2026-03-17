"use client";

import { useState } from "react";
import { Calendar, Users, Clock, CheckCircle, Bell } from "lucide-react";

const TALLERES = [
  {
    id: "1",
    titulo: "Introducción a la Terapia ACT",
    descripcion:
      "Un taller de 4 encuentros para aprender los fundamentos de la Terapia de Aceptación y Compromiso y comenzar a aplicarlos en tu vida.",
    modality: "Online · Grupal",
    duracion: "4 encuentros de 2hs",
    plazas: "Cupo reducido (8-10 personas)",
    temas: [
      "Hexaflex ACT: los 6 procesos centrales",
      "Defusión cognitiva y aceptación",
      "Contacto con el presente",
      "Clarificación de valores",
    ],
    estado: "Próximamente",
  },
  {
    id: "2",
    titulo: "Trauma y Regulación Emocional",
    descripcion:
      "Taller intensivo para comprender el impacto del trauma en el sistema nervioso y aprender habilidades de regulación emocional.",
    modality: "Online · Grupal",
    duracion: "3 encuentros de 2.5hs",
    plazas: "Cupo reducido (6-8 personas)",
    temas: [
      "El trauma desde la neurobiología",
      "Ventana de tolerancia",
      "Habilidades de regulación",
      "Recursos somáticos básicos",
    ],
    estado: "Próximamente",
  },
  {
    id: "3",
    titulo: "Valores y Acción Comprometida",
    descripcion:
      "Taller de clarificación de valores y construcción de compromisos de acción congruentes para una vida más significativa.",
    modality: "Online · Grupal",
    duracion: "2 encuentros de 2hs",
    plazas: "Cupo reducido (10-12 personas)",
    temas: [
      "Qué son los valores en ACT",
      "Diferencia entre valores y objetivos",
      "Barreras y flexibilidad psicológica",
      "Construcción de compromisos",
    ],
    estado: "Próximamente",
  },
];

export default function TalleresSection() {
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [selectedTaller, setSelectedTaller] = useState<string>("todos");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !nombre) return;

    setIsLoading(true);
    // Simulación de envío — conectar con servicio real (Formspree, Resend, etc.)
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="talleres"
      className="py-20 md:py-28 bg-gradient-crema relative overflow-hidden"
      aria-labelledby="talleres-heading"
    >
      <div
        className="absolute bottom-0 left-0 w-80 h-80
                   bg-lavanda-200/30 rounded-[50%_50%_40%_60%_/_55%_45%_55%_45%]
                   blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/3"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">

        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="badge-accent mb-4 inline-flex">
            <Calendar size={12} aria-hidden="true" />
            Talleres
          </span>
          <h2
            id="talleres-heading"
            className="heading-display text-display-lg text-malva-800 mb-4"
          >
            Talleres y espacios grupales
          </h2>
          <p className="text-text-medium text-lg leading-relaxed">
            Próximamente. Anotate en la lista de espera para ser la primera en enterarte.
          </p>
        </div>

        {/* Grid de talleres preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TALLERES.map(({ id, titulo, descripcion, modality, duracion, plazas, temas, estado }) => (
            <article
              key={id}
              className="card relative flex flex-col"
              aria-label={`Taller: ${titulo}`}
            >
              {/* Badge estado */}
              <span
                className="absolute top-4 right-4 text-xs font-semibold
                           bg-lavanda-100 text-malva-700 border border-lavanda-300
                           rounded-full px-2.5 py-1"
              >
                {estado}
              </span>

              {/* Icono */}
              <div
                className="w-11 h-11 rounded-2xl bg-malva-700/10
                           flex items-center justify-center mb-4"
                aria-hidden="true"
              >
                <Calendar size={20} className="text-malva-700" />
              </div>

              <h3 className="text-malva-800 font-bold text-base mb-2 pr-20">
                {titulo}
              </h3>
              <p className="text-text-medium text-sm leading-relaxed mb-4 flex-1">
                {descripcion}
              </p>

              {/* Meta */}
              <div className="space-y-1.5 mb-4 text-xs text-text-medium">
                <div className="flex items-center gap-2">
                  <Users size={13} className="text-malva-500 shrink-0" aria-hidden="true" />
                  {modality}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={13} className="text-malva-500 shrink-0" aria-hidden="true" />
                  {duracion}
                </div>
                <div className="flex items-center gap-2">
                  <Users size={13} className="text-malva-500 shrink-0" aria-hidden="true" />
                  {plazas}
                </div>
              </div>

              {/* Temas */}
              <ul className="space-y-1" aria-label={`Temas del taller ${titulo}`}>
                {temas.map((tema) => (
                  <li
                    key={tema}
                    className="flex items-start gap-2 text-xs text-text-medium"
                  >
                    <CheckCircle
                      size={13}
                      className="text-malva-500 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    {tema}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Formulario Waitlist */}
        <div
          className="max-w-2xl mx-auto bg-gradient-malva rounded-4xl p-8 md:p-12
                     shadow-malva-lg"
          aria-labelledby="waitlist-heading"
        >
          {!submitted ? (
            <>
              <div className="text-center mb-8">
                <div
                  className="w-12 h-12 rounded-full bg-crema-100/20
                             flex items-center justify-center mx-auto mb-4"
                  aria-hidden="true"
                >
                  <Bell size={22} className="text-crema-100" />
                </div>
                <h3
                  id="waitlist-heading"
                  className="text-crema-100 font-bold text-2xl mb-2"
                >
                  Unite a la lista de espera
                </h3>
                <p className="text-crema-300/70 text-sm leading-relaxed">
                  Te avisamos cuando abramos inscripciones. Sin spam, prometido.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                aria-label="Formulario de lista de espera para talleres"
              >
                {/* Nombre */}
                <div>
                  <label
                    htmlFor="waitlist-nombre"
                    className="block text-crema-200/80 text-sm font-medium mb-1.5"
                  >
                    Nombre
                  </label>
                  <input
                    id="waitlist-nombre"
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="¿Cómo te llamás?"
                    required
                    autoComplete="given-name"
                    className="w-full bg-malva-800/60 border border-malva-600/50
                               text-crema-100 placeholder-crema-400/40
                               rounded-2xl px-4 py-3 text-sm
                               focus:outline-none focus:ring-2 focus:ring-lavanda-400/60
                               focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="waitlist-email"
                    className="block text-crema-200/80 text-sm font-medium mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="waitlist-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                    autoComplete="email"
                    className="w-full bg-malva-800/60 border border-malva-600/50
                               text-crema-100 placeholder-crema-400/40
                               rounded-2xl px-4 py-3 text-sm
                               focus:outline-none focus:ring-2 focus:ring-lavanda-400/60
                               focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Taller de interés */}
                <div>
                  <label
                    htmlFor="waitlist-taller"
                    className="block text-crema-200/80 text-sm font-medium mb-1.5"
                  >
                    Taller de interés
                  </label>
                  <select
                    id="waitlist-taller"
                    value={selectedTaller}
                    onChange={(e) => setSelectedTaller(e.target.value)}
                    className="w-full bg-malva-800/60 border border-malva-600/50
                               text-crema-100 rounded-2xl px-4 py-3 text-sm
                               focus:outline-none focus:ring-2 focus:ring-lavanda-400/60
                               focus:border-transparent transition-all duration-200
                               appearance-none cursor-pointer"
                  >
                    <option value="todos">Todos los talleres</option>
                    {TALLERES.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.titulo}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary w-full mt-2"
                  aria-live="polite"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <span
                        className="w-4 h-4 border-2 border-malva-700/30 border-t-malva-700
                                   rounded-full animate-spin"
                        aria-hidden="true"
                      />
                      Enviando...
                    </span>
                  ) : (
                    <>
                      <Bell size={16} aria-hidden="true" />
                      Anotarme en la lista de espera
                    </>
                  )}
                </button>

                <p className="text-crema-400/50 text-xs text-center">
                  Al suscribirte aceptás recibir comunicaciones sobre los talleres.
                  Podés darte de baja cuando quieras.
                </p>
              </form>
            </>
          ) : (
            <div
              className="text-center py-8"
              role="status"
              aria-live="polite"
            >
              <div
                className="w-16 h-16 rounded-full bg-crema-100/20
                           flex items-center justify-center mx-auto mb-5"
                aria-hidden="true"
              >
                <CheckCircle size={32} className="text-crema-100" />
              </div>
              <h3 className="text-crema-100 font-bold text-2xl mb-2">
                ¡Ya estás en la lista!
              </h3>
              <p className="text-crema-300/70 text-sm">
                Gracias {nombre}. Te voy a avisar en cuanto abramos inscripciones.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
