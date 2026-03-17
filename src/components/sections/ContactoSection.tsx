"use client";

import { useState } from "react";
import { Send, MessageCircle, CheckCircle, AlertCircle } from "lucide-react";

const MOTIVOS = [
  "Consulta individual",
  "Información sobre talleres",
  "Dudas sobre la modalidad de trabajo",
  "Otra consulta",
];

export default function ContactoSection() {
  const [form, setForm]       = useState({ nombre: "", email: "", motivo: "", mensaje: "" });
  const [status, setStatus]   = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // TODO: conectar con Formspree/Resend/API Route real
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
  };

  return (
    <section
      id="contacto"
      className="py-20 md:py-28 bg-gradient-malva relative overflow-hidden"
      aria-labelledby="contacto-heading"
    >
      {/* Formas decorativas */}
      <div
        className="absolute top-0 right-0 w-80 h-80
                   bg-lavanda-400/10 rounded-full blur-3xl pointer-events-none
                   -translate-y-1/3 translate-x-1/4"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Info */}
          <div className="space-y-8">
            <div>
              <span className="badge-light mb-4 inline-flex">Contacto</span>
              <h2
                id="contacto-heading"
                className="heading-display text-display-lg text-crema-50 mb-4"
              >
                Empecemos a
                <br />
                <span className="text-lavanda-300">trabajar juntos</span>
              </h2>
              <p className="text-crema-200/70 text-lg leading-relaxed">
                Completá el formulario o escribime directamente por WhatsApp.
                Las primeras consultas son para conocernos y ver si es el espacio
                adecuado para vos.
              </p>
            </div>

            {/* Tarjeta WhatsApp */}
            <a
              href="https://wa.me/5493515197687?text=Hola+Iara%2C+me+gustar%C3%ADa+pedir+un+turno+para+una+consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 card-dark group w-full
                         hover:border-[#25D366]/40 transition-colors"
              aria-label="Contactar a Iara Danila por WhatsApp"
            >
              <div
                className="w-12 h-12 rounded-2xl bg-[#25D366]/20
                           flex items-center justify-center shrink-0
                           group-hover:bg-[#25D366]/30 transition-colors"
                aria-hidden="true"
              >
                <MessageCircle size={22} className="text-[#25D366]" />
              </div>
              <div>
                <p className="text-crema-100 font-semibold text-base">
                  Escribime por WhatsApp
                </p>
                <p className="text-crema-300/60 text-sm mt-0.5">
                  Respondo en el horario de atención Mo-Vi 9–19hs
                </p>
              </div>
            </a>

            {/* Info adicional */}
            <div className="space-y-3 text-sm text-crema-300/60">
              <p>
                <strong className="text-crema-200/80">Modalidad:</strong>{" "}
                Online (toda Argentina) y presencial en Córdoba Capital
              </p>
              <p>
                <strong className="text-crema-200/80">Honorarios:</strong>{" "}
                Se informan en la primera consulta
              </p>
              <p>
                <strong className="text-crema-200/80">Primera sesión:</strong>{" "}
                Entrevista de evaluación sin compromiso
              </p>
            </div>
          </div>

          {/* Formulario */}
          <div className="card-dark">
            {status === "success" ? (
              <div
                className="text-center py-8"
                role="status"
                aria-live="polite"
              >
                <div
                  className="w-16 h-16 rounded-full bg-lavanda-400/20
                             flex items-center justify-center mx-auto mb-5"
                  aria-hidden="true"
                >
                  <CheckCircle size={32} className="text-lavanda-300" />
                </div>
                <h3 className="text-crema-100 font-bold text-xl mb-2">
                  ¡Mensaje recibido!
                </h3>
                <p className="text-crema-300/70 text-sm leading-relaxed">
                  Gracias {form.nombre}. Te voy a responder a la brevedad posible.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                aria-label="Formulario de contacto"
                noValidate
              >
                <h3 className="text-crema-100 font-bold text-lg mb-1">
                  Escribime
                </h3>

                {/* Nombre */}
                <div>
                  <label
                    htmlFor="contact-nombre"
                    className="block text-crema-200/80 text-sm font-medium mb-1.5"
                  >
                    Nombre <span aria-label="requerido">*</span>
                  </label>
                  <input
                    id="contact-nombre"
                    name="nombre"
                    type="text"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    autoComplete="given-name"
                    className="w-full bg-malva-900/50 border border-malva-600/50
                               text-crema-100 placeholder-crema-400/40
                               rounded-2xl px-4 py-3 text-sm
                               focus:outline-none focus:ring-2 focus:ring-lavanda-400/60
                               transition-all duration-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-crema-200/80 text-sm font-medium mb-1.5"
                  >
                    Email <span aria-label="requerido">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    autoComplete="email"
                    className="w-full bg-malva-900/50 border border-malva-600/50
                               text-crema-100 placeholder-crema-400/40
                               rounded-2xl px-4 py-3 text-sm
                               focus:outline-none focus:ring-2 focus:ring-lavanda-400/60
                               transition-all duration-200"
                  />
                </div>

                {/* Motivo */}
                <div>
                  <label
                    htmlFor="contact-motivo"
                    className="block text-crema-200/80 text-sm font-medium mb-1.5"
                  >
                    Motivo de consulta
                  </label>
                  <select
                    id="contact-motivo"
                    name="motivo"
                    value={form.motivo}
                    onChange={handleChange}
                    className="w-full bg-malva-900/50 border border-malva-600/50
                               text-crema-100 rounded-2xl px-4 py-3 text-sm
                               focus:outline-none focus:ring-2 focus:ring-lavanda-400/60
                               transition-all duration-200 appearance-none cursor-pointer"
                  >
                    <option value="">Seleccioná una opción</option>
                    {MOTIVOS.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label
                    htmlFor="contact-mensaje"
                    className="block text-crema-200/80 text-sm font-medium mb-1.5"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="contact-mensaje"
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="Contame brevemente qué te trae por acá..."
                    rows={4}
                    className="w-full bg-malva-900/50 border border-malva-600/50
                               text-crema-100 placeholder-crema-400/40
                               rounded-2xl px-4 py-3 text-sm resize-none
                               focus:outline-none focus:ring-2 focus:ring-lavanda-400/60
                               transition-all duration-200"
                  />
                </div>

                {/* Error state */}
                {status === "error" && (
                  <div
                    className="flex items-center gap-2 text-red-300 text-sm
                               bg-red-900/20 border border-red-500/20 rounded-xl px-3 py-2"
                    role="alert"
                  >
                    <AlertCircle size={15} aria-hidden="true" />
                    Hubo un error. Intentá de nuevo o escribime por WhatsApp.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full"
                  aria-live="polite"
                >
                  {status === "loading" ? (
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
                      <Send size={16} aria-hidden="true" />
                      Enviar mensaje
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
