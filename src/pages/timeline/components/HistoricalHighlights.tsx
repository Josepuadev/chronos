// Viñetas históricas relacionadas con el año seleccionado.
//
// Esta primera versión utiliza datos locales.
// Posteriormente estos datos procederán de nuestra API REST.

import { useAppSelector } from '../../../app/store/hooks';

import './HistoricalHighlights.scss';

// Representa una viñeta histórica.
interface HistoricalHighlight {
  // Identificador único.
  id: string;

  // Año relacionado con el evento.
  year: number;

  // Título mostrado al usuario.
  title: string;

  // Descripción breve.
  description: string;

  // Tipo de contenido.
  type: 'event' | 'person' | 'civilization';
}

// Datos provisionales.
//
// Más adelante serán sustituidos por información
// obtenida desde Chronos API.
const highlights: HistoricalHighlight[] = [
  {
    id: 'fall-western-roman-empire',
    year: 476,
    title: 'Fall of the Western Roman Empire',
    description:
      'A traditional date associated with the deposition of Romulus Augustulus.',
    type: 'event',
  },
  {
    id: 'battle-hastings',
    year: 1066,
    title: 'Battle of Hastings',
    description:
      'William of Normandy defeated Harold Godwinson in England.',
    type: 'event',
  },
  {
    id: 'discovery-americas',
    year: 1492,
    title: 'Christopher Columbus reaches the Americas',
    description:
      'The first voyage of Columbus reached the Caribbean in October 1492.',
    type: 'event',
  },
  {
    id: 'french-revolution',
    year: 1789,
    title: 'French Revolution',
    description:
      'The French Revolution began a period of profound political and social transformation.',
    type: 'event',
  },
];

// Componente de viñetas históricas.
function HistoricalHighlights() {
  // Leemos el mismo año que utiliza TimelineRail.
  const selectedYear = useAppSelector(
    (state) => state.timeline.selectedYear,
  );

  // Buscamos las viñetas asociadas al año seleccionado.
  const selectedHighlights = highlights.filter(
    (highlight) => highlight.year === selectedYear,
  );

  return (
    <section
      className="historical-highlights"
      aria-live="polite"
      aria-labelledby="historical-highlights-title"
    >
      <header>
        <p>Historical context</p>

        <h2 id="historical-highlights-title">
          {selectedYear < 0
            ? `${Math.abs(selectedYear)} BC`
            : `${selectedYear} AD`}
        </h2>
      </header>

      {selectedHighlights.length > 0 ? (
        <div className="historical-highlights__grid">
          {selectedHighlights.map((highlight) => (
            <article
              key={highlight.id}
              className="historical-highlight"
            >
              <span className="historical-highlight__type">
                {highlight.type}
              </span>

              <h3>{highlight.title}</h3>

              <p>{highlight.description}</p>
            </article>
          ))}
        </div>
      ) : (
        <p className="historical-highlights__empty">
          No highlighted events for this year yet.
        </p>
      )}
    </section>
  );
}

export default HistoricalHighlights;