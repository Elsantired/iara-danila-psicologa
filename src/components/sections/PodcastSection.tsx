"use client";

import { useState } from "react";
import { Headphones, ExternalLink } from "lucide-react";

const SPOTIFY_SHOW_ID = "4yEYbKGrKXm7vmHMYhWVNG";

const EPISODIOS = [
  {
    id: "1",
    titulo: "Epi 01: Bienvenida y presentación",
    descripcion: "El episodio donde todo empezó. Iara cuenta quién es, su historia y la razón detrás de Encontrarme.",
    duracion: "7 min",
    numero: "01",
    episodeId: "7IMQI0jJgrrHeGvDhd2csn",
    url: "https://open.spotify.com/episode/7IMQI0jJgrrHeGvDhd2csn",
  },
  {
    id: "2",
    titulo: "Epi 02: Valentía",
    descripcion: "Ser valiente no es no tener miedo, sino elegir avanzar con él. Pequeños actos de valentía que cambian todo.",
    duracion: "11 min",
    numero: "02",
    episodeId: "6Aa743mG5dYF75mykfIN3B",
    url: "https://open.spotify.com/episode/6Aa743mG5dYF75mykfIN3B",
  },
  {
    id: "3",
    titulo: "Epi 03: Resiliencia",
    descripcion: "La capacidad de florecer incluso en medio de la tormenta. Tres pilares clave para transformar el dolor en aprendizaje.",
    duracion: "12 min",
    numero: "03",
    episodeId: "3WJ6v2pzB0gikLFUWxtOA7",
    url: "https://open.spotify.com/episode/3WJ6v2pzB0gikLFUWxtOA7",
  },
  {
    id: "4",
    titulo: "Epi 04: Compasión",
    descripcion: "El verdadero cambio empieza cuando decidís tratarte con amabilidad. Sobre autocompasión como fortaleza.",
    duracion: "12 min",
    numero: "04",
    episodeId: "4HCQBLlvjkZHvjceCJAMOz",
    url: "https://open.spotify.com/episode/4HCQBLlvjkZHvjceCJAMOz",
  },
  {
    id: "m1",
    titulo: "Meditación de autocompasión",
    descripcion: "Una práctica de mindfulness para sentir tus emociones sin juicio, con apertura, amabilidad y compasión.",
    duracion: "8 min",
    numero: "✦",
    episodeId: "0eHQeLk6CxJvvskNO0cWX3",
    url: "https://open.spotify.com/episode/0eHQeLk6CxJvvskNO0cWX3",
  },
  {
    id: "5",
    titulo: "Epi 05: Aceptación",
    descripcion: "La aceptación no es resignarse, sino el acto valiente de soltar la lucha contra lo que ya es.",
    duracion: "16 min",
    numero: "05",
    episodeId: "6lgAYSYBTjw0A3GV0JuXex",
    url: "https://open.spotify.com/episode/6lgAYSYBTjw0A3GV0JuXex",
  },
  {
    id: "6",
    titulo: "Epi 06: Momento Presente",
    descripcion: "Una pausa profunda para reconectar con el único lugar donde sucede la vida: el momento presente.",
    duracion: "31 min",
    numero: "06",
    episodeId: "6y2XiLR2BNq8OQjX8i6fxe",
    url: "https://open.spotify.com/episode/6y2XiLR2BNq8OQjX8i6fxe",
  },
  {
    id: "7",
    titulo: "Epi 07: Valores",
    descripcion: "Los valores como direcciones que nos sostienen incluso en la dificultad y nos orientan hacia una vida con sentido.",
    duracion: "18 min",
    numero: "07",
    episodeId: "313wAmTkPqM4P8xNiqzKgy",
    url: "https://open.spotify.com/episode/313wAmTkPqM4P8xNiqzKgy",
  },
  {
    id: "8",
    titulo: "Epi 08: Gratitud y Abundancia",
    descripcion: "Con Virginia Ricordi: la gratitud y la abundancia como prácticas cotidianas que transforman cómo habitamos nuestra vida.",
    duracion: "28 min",
    numero: "08",
    episodeId: "5YtsuRBfKUZV904YfIojFP",
    url: "https://open.spotify.com/episode/5YtsuRBfKUZV904YfIojFP",
  },
  {
    id: "9",
    titulo: "Epi 09: Ansiedad y el cuerpo",
    descripcion: "La ansiedad desde una mirada integradora: cuerpo, mente y emociones. Cómo se manifiesta y cómo acompañarla.",
    duracion: "23 min",
    numero: "09",
    episodeId: "2hOHFToYxcH0HPaERHzqve",
    url: "https://open.spotify.com/episode/2hOHFToYxcH0HPaERHzqve",
  },
  {
    id: "10",
    titulo: "Epi 10: Ansiedad y pensamientos",
    descripcion: "¡10 episodios! La relación entre los pensamientos y la ansiedad desde una mirada integradora.",
    duracion: "29 min",
    numero: "10",
    episodeId: "0Umh3H5y4Lm88UTso3cSqx",
    url: "https://open.spotify.com/episode/0Umh3H5y4Lm88UTso3cSqx",
  },
  {
    id: "11",
    titulo: "Epi 11: Autoconocimiento y Desarrollo Personal",
    descripcion: "Con Leandra Saillen, coach ontológica, exploramos el autoconocimiento y el desarrollo personal en profundidad.",
    duracion: "41 min",
    numero: "11",
    episodeId: "6M7TfUp2gSDHfoMMjCJ0js",
    url: "https://open.spotify.com/episode/6M7TfUp2gSDHfoMMjCJ0js",
  },
  {
    id: "m2",
    titulo: "Recibiendo mis emociones con amabilidad",
    descripcion: "Una práctica de mindfulness para sentir las emociones sin juicio, con apertura, amabilidad y compasión.",
    duracion: "7 min",
    numero: "✦",
    episodeId: "4jgW6ZzZaURU1CRtx3wESu",
    url: "https://open.spotify.com/episode/4jgW6ZzZaURU1CRtx3wESu",
  },
  {
    id: "12",
    titulo: "Epi 12: Trauma",
    descripcion: "No estás sola con tu dolor. Un episodio pensado y sentido para transmitir que el trauma tiene camino de sanación.",
    duracion: "22 min",
    numero: "12",
    episodeId: "7k7w9P0GduFLhDUSBk8lgf",
    url: "https://open.spotify.com/episode/7k7w9P0GduFLhDUSBk8lgf",
  },
  {
    id: "13",
    titulo: "Epi 13: Autoestima",
    descripcion: "Usá la autoestima como interrogante para observarte y enfocarte en dos de sus componentes más transformadores.",
    duracion: "19 min",
    numero: "13",
    episodeId: "6lsgfjPAS935YMyiaYjp0s",
    url: "https://open.spotify.com/episode/6lsgfjPAS935YMyiaYjp0s",
  },
  {
    id: "14",
    titulo: "Epi 14: Volver a Mí — cuando nos perdemos",
    descripcion: "Los procesos terapéuticos nos invitan a encontrarnos. Este episodio le da nombre al programa terapéutico de Iara.",
    duracion: "15 min",
    numero: "14",
    episodeId: "3DdZJseBT10Tj1yrmWGhJ2",
    url: "https://open.spotify.com/episode/3DdZJseBT10Tj1yrmWGhJ2",
  },
  {
    id: "m3",
    titulo: "Meditación: Regreso a mi centro",
    descripcion: "Una pequeña meditación para volver a vos. A veces lo que más necesitamos no está afuera, sino dentro de nosotros.",
    duracion: "3 min",
    numero: "✦",
    episodeId: "4WnOyaB9qWlWXqn2hohzAn",
    url: "https://open.spotify.com/episode/4WnOyaB9qWlWXqn2hohzAn",
  },
  {
    id: "15",
    titulo: "Epi 15: Volver a Mí — la reconexión",
    descripcion: "El malestar también puede ser una señal. Una brújula que nos recuerda que algo dentro nuestro está pidiendo atención.",
    duracion: "21 min",
    numero: "15",
    episodeId: "3T3hKYVayM1SSZeqYrNJBm",
    url: "https://open.spotify.com/episode/3T3hKYVayM1SSZeqYrNJBm",
  },
  {
    id: "16",
    titulo: "Epi 16: Yo Soy — un viaje de regreso al Ser",
    descripcion: "Un viaje hacia lo más importante que podemos hacer: volver a nuestro Yo Soy. Ese espacio donde nada falta.",
    duracion: "27 min",
    numero: "16",
    episodeId: "0xv04lcprpSbry4UEgulSj",
    url: "https://open.spotify.com/episode/0xv04lcprpSbry4UEgulSj",
  },
];

export default function PodcastSection() {
  const [activeId, setActiveId] = useState(EPISODIOS[0].episodeId);

  return (
    <section
      id="podcast"
      className="py-20 md:py-28 bg-gradient-crema relative overflow-hidden"
      aria-labelledby="podcast-heading"
    >
      <div
        className="absolute bottom-0 right-0 w-96 h-96
                   bg-lavanda-200/40 rounded-[60%_40%_55%_45%_/_45%_55%_45%_55%]
                   blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">

        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="badge-accent mb-4 inline-flex">
            <Headphones size={12} aria-hidden="true" />
            Podcast
          </span>
          <h2
            id="podcast-heading"
            className="heading-display text-display-lg text-malva-800 mb-4"
          >
            Encontrarme
          </h2>
          <p className="text-text-medium text-lg leading-relaxed">
            Un espacio donde nos damos permiso para mirarnos con autenticidad, conectarnos
            con nuestro ser y recuperar esa confianza que a veces sentimos perdida.
            Autoestima, autoconocimiento y desarrollo personal.
          </p>
        </div>

        {/* Reproductor compacto sticky */}
        <div className="max-w-2xl mx-auto mb-8">
          <iframe
            key={activeId}
            title="Reproductor del podcast Encontrarme"
            style={{ borderRadius: "12px" }}
            src={`https://open.spotify.com/embed/episode/${activeId}?utm_source=generator`}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            aria-label="Reproductor de episodio en Spotify"
          />
        </div>

        {/* Lista de episodios */}
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <p className="text-malva-700 font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
              <Headphones size={16} className="text-malva-600" aria-hidden="true" />
              Episodios
            </p>
            <a
              href={`https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-malva-600 hover:text-malva-800 font-medium
                         flex items-center gap-1 transition-colors duration-200"
              aria-label="Ver todos los episodios en Spotify"
            >
              Ver todos
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          </div>

          <ul className="space-y-2" role="list" aria-label="Episodios del podcast Encontrarme">
            {EPISODIOS.map((ep) => {
              const isActive = activeId === ep.episodeId;
              return (
                <li key={ep.id}>
                  <button
                    onClick={() => setActiveId(ep.episodeId)}
                    className={`w-full flex items-start gap-4 p-4 rounded-2xl text-left
                                border transition-all duration-200 group
                                ${isActive
                                  ? "bg-malva-700 border-malva-600 shadow-malva-md"
                                  : "bg-crema-100 border-crema-300/60 hover:border-lavanda-300 hover:shadow-malva-sm"
                                }`}
                    aria-pressed={isActive}
                    aria-label={`Reproducir ${ep.titulo}`}
                  >
                    <span
                      className={`font-extrabold text-2xl leading-none shrink-0 w-8
                                  ${isActive ? "text-crema-200/60" : "text-malva-400/60"}`}
                      aria-hidden="true"
                    >
                      {ep.numero}
                    </span>

                    <div className="flex-1 min-w-0">
                      <p className={`font-semibold text-sm leading-tight
                                    ${isActive ? "text-crema-100" : "text-malva-800 group-hover:text-malva-600"}`}>
                        {ep.titulo}
                      </p>
                      <p className={`text-xs mt-1 leading-relaxed line-clamp-2
                                    ${isActive ? "text-crema-300/70" : "text-text-medium"}`}>
                        {ep.descripcion}
                      </p>
                    </div>

                    <span className={`text-xs whitespace-nowrap shrink-0 self-center
                                     ${isActive ? "text-crema-300/70" : "text-text-medium"}`}>
                      {ep.duracion}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Banner YouTube */}
        <div className="mt-10 max-w-2xl mx-auto flex flex-col sm:flex-row items-center
                        justify-center gap-4 bg-crema-100 border border-crema-300/60
                        rounded-3xl px-8 py-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-red-600" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <p className="text-text-dark font-medium text-sm">
              También podés escucharlos en{" "}
              <strong className="text-malva-700">YouTube</strong>
            </p>
          </div>
          <a
            href="https://www.youtube.com/@iaradanila"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent text-sm px-6 py-2.5 whitespace-nowrap"
            aria-label="Ver el canal de YouTube de Encontrarme"
          >
            Ver canal
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  );
}
