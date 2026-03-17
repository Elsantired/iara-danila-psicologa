import { Headphones, ExternalLink } from "lucide-react";

const SPOTIFY_SHOW_ID = "4yEYbKGrKXm7vmHMYhWVNG";

const EPISODIOS = [
  {
    id: "1",
    titulo: "Epi 01: Bienvenida y presentación",
    descripcion: "El episodio donde todo empezó. Iara cuenta quién es, su historia y la razón detrás de Encontrarme.",
    duracion: "7 min",
    numero: "01",
    url: "https://open.spotify.com/episode/7IMQI0jJgrrHeGvDhd2csn",
  },
  {
    id: "2",
    titulo: "Epi 02: Valentía",
    descripcion: "Ser valiente no es no tener miedo, sino elegir avanzar con él. Pequeños actos de valentía que cambian todo.",
    duracion: "11 min",
    numero: "02",
    url: "https://open.spotify.com/episode/6Aa743mG5dYF75mykfIN3B",
  },
  {
    id: "3",
    titulo: "Epi 03: Resiliencia",
    descripcion: "La capacidad de florecer incluso en medio de la tormenta. Tres pilares clave para transformar el dolor en aprendizaje.",
    duracion: "12 min",
    numero: "03",
    url: "https://open.spotify.com/episode/3WJ6v2pzB0gikLFUWxtOA7",
  },
  {
    id: "4",
    titulo: "Epi 04: Compasión",
    descripcion: "El verdadero cambio empieza cuando decidís tratarte con amabilidad. Sobre autocompasión como fortaleza.",
    duracion: "12 min",
    numero: "04",
    url: "https://open.spotify.com/episode/4HCQBLlvjkZHvjceCJAMOz",
  },
  {
    id: "m1",
    titulo: "Meditación de autocompasión",
    descripcion: "Una práctica de mindfulness para sentir tus emociones sin juicio, con apertura, amabilidad y compasión.",
    duracion: "8 min",
    numero: "✦",
    url: "https://open.spotify.com/episode/0eHQeLk6CxJvvskNO0cWX3",
  },
  {
    id: "5",
    titulo: "Epi 05: Aceptación",
    descripcion: "La aceptación no es resignarse, sino el acto valiente de soltar la lucha contra lo que ya es.",
    duracion: "16 min",
    numero: "05",
    url: "https://open.spotify.com/episode/6lgAYSYBTjw0A3GV0JuXex",
  },
  {
    id: "6",
    titulo: "Epi 06: Momento Presente",
    descripcion: "Una pausa profunda para reconectar con el único lugar donde sucede la vida: el momento presente.",
    duracion: "31 min",
    numero: "06",
    url: "https://open.spotify.com/episode/6y2XiLR2BNq8OQjX8i6fxe",
  },
  {
    id: "7",
    titulo: "Epi 07: Valores",
    descripcion: "Los valores como direcciones que nos sostienen incluso en la dificultad y nos orientan hacia una vida con sentido.",
    duracion: "18 min",
    numero: "07",
    url: "https://open.spotify.com/episode/313wAmTkPqM4P8xNiqzKgy",
  },
  {
    id: "8",
    titulo: "Epi 08: Gratitud y Abundancia",
    descripcion: "Con Virginia Ricordi: la gratitud y la abundancia como prácticas cotidianas que transforman cómo habitamos nuestra vida.",
    duracion: "28 min",
    numero: "08",
    url: "https://open.spotify.com/episode/5YtsuRBfKUZV904YfIojFP",
  },
  {
    id: "9",
    titulo: "Epi 09: Ansiedad y el cuerpo",
    descripcion: "La ansiedad desde una mirada integradora: cuerpo, mente y emociones. Cómo se manifiesta y cómo acompañarla.",
    duracion: "23 min",
    numero: "09",
    url: "https://open.spotify.com/episode/2hOHFToYxcH0HPaERHzqve",
  },
  {
    id: "10",
    titulo: "Epi 10: Ansiedad y pensamientos",
    descripcion: "¡10 episodios! La relación entre los pensamientos y la ansiedad desde una mirada integradora.",
    duracion: "29 min",
    numero: "10",
    url: "https://open.spotify.com/episode/0Umh3H5y4Lm88UTso3cSqx",
  },
  {
    id: "11",
    titulo: "Epi 11: Autoconocimiento y Desarrollo Personal",
    descripcion: "Con Leandra Saillen, coach ontológica, exploramos el autoconocimiento y el desarrollo personal en profundidad.",
    duracion: "41 min",
    numero: "11",
    url: "https://open.spotify.com/episode/6M7TfUp2gSDHfoMMjCJ0js",
  },
  {
    id: "m2",
    titulo: "Recibiendo mis emociones con amabilidad",
    descripcion: "Una práctica de mindfulness para sentir las emociones sin juicio, con apertura, amabilidad y compasión.",
    duracion: "7 min",
    numero: "✦",
    url: "https://open.spotify.com/episode/4jgW6ZzZaURU1CRtx3wESu",
  },
  {
    id: "12",
    titulo: "Epi 12: Trauma",
    descripcion: "No estás sola con tu dolor. Un episodio pensado y sentido para transmitir que el trauma tiene camino de sanación.",
    duracion: "22 min",
    numero: "12",
    url: "https://open.spotify.com/episode/7k7w9P0GduFLhDUSBk8lgf",
  },
  {
    id: "13",
    titulo: "Epi 13: Autoestima",
    descripcion: "Usá la autoestima como interrogante para observarte y enfocarte en dos de sus componentes más transformadores.",
    duracion: "19 min",
    numero: "13",
    url: "https://open.spotify.com/episode/6lsgfjPAS935YMyiaYjp0s",
  },
  {
    id: "14",
    titulo: "Epi 14: Volver a Mí — cuando nos perdemos",
    descripcion: "Los procesos terapéuticos nos invitan a encontrarnos. Este episodio le da nombre al programa terapéutico de Iara.",
    duracion: "15 min",
    numero: "14",
    url: "https://open.spotify.com/episode/3DdZJseBT10Tj1yrmWGhJ2",
  },
  {
    id: "m3",
    titulo: "Meditación: Regreso a mi centro",
    descripcion: "Una pequeña meditación para volver a vos. A veces lo que más necesitamos no está afuera, sino dentro de nosotros.",
    duracion: "3 min",
    numero: "✦",
    url: "https://open.spotify.com/episode/4WnOyaB9qWlWXqn2hohzAn",
  },
  {
    id: "15",
    titulo: "Epi 15: Volver a Mí — la reconexión",
    descripcion: "El malestar también puede ser una señal. Una brújula que nos recuerda que algo dentro nuestro está pidiendo atención.",
    duracion: "21 min",
    numero: "15",
    url: "https://open.spotify.com/episode/3T3hKYVayM1SSZeqYrNJBm",
  },
  {
    id: "16",
    titulo: "Epi 16: Yo Soy — un viaje de regreso al Ser",
    descripcion: "Un viaje hacia lo más importante que podemos hacer: volver a nuestro Yo Soy. Ese espacio donde nada falta.",
    duracion: "27 min",
    numero: "16",
    url: "https://open.spotify.com/episode/0xv04lcprpSbry4UEgulSj",
  },
];

export default function PodcastSection() {
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
        <div className="text-center max-w-2xl mx-auto mb-14">
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Columna: Spotify Embed */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-malva-800 rounded-3xl p-4 shadow-malva-md overflow-hidden">
              <p className="text-crema-200/70 text-xs uppercase tracking-wider font-semibold mb-3 px-1">
                Escuchá en Spotify
              </p>
              <iframe
                title="Podcast Encontrarme en Spotify"
                src={`https://open.spotify.com/embed/show/${SPOTIFY_SHOW_ID}?utm_source=generator&theme=0`}
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-2xl"
                aria-label="Reproductor del podcast Encontrarme en Spotify"
              />
            </div>

            <a
              href={`https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2
                         bg-[#1DB954] text-white font-semibold text-sm
                         px-6 py-3 rounded-full w-full
                         hover:bg-[#1aa34a] transition-colors duration-200
                         focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1DB954]/50"
              aria-label="Abrir el podcast en Spotify"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Abrir en Spotify
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>

          {/* Columna: Lista de episodios */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center justify-between mb-2">
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

            <ul className="space-y-3" role="list" aria-label="Episodios del podcast Encontrarme">
              {EPISODIOS.map((ep) => (
                <li key={ep.id}>
                  <a
                    href={ep.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-2xl
                               bg-crema-100 border border-crema-300/60
                               hover:border-lavanda-300 hover:shadow-malva-sm
                               transition-all duration-200 group"
                    aria-label={`${ep.titulo} — ${ep.duracion}`}
                  >
                    <span
                      className="text-malva-400/60 font-extrabold text-2xl
                                 leading-none shrink-0 w-8"
                      aria-hidden="true"
                    >
                      {ep.numero}
                    </span>

                    <div className="flex-1 min-w-0">
                      <p className="text-malva-800 font-semibold text-sm leading-tight
                                   group-hover:text-malva-600 transition-colors">
                        {ep.titulo}
                      </p>
                      <p className="text-text-medium text-xs mt-1 leading-relaxed line-clamp-2">
                        {ep.descripcion}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <ExternalLink
                        size={14}
                        className="text-malva-400/40 group-hover:text-malva-600 transition-colors"
                        aria-hidden="true"
                      />
                      <span className="text-xs text-text-medium whitespace-nowrap">
                        {ep.duracion}
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Banner YouTube */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4
                        bg-crema-100 border border-crema-300/60 rounded-3xl px-8 py-5">
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
