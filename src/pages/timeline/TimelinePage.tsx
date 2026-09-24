// Página principal de Timeline.
//
// La página compone los diferentes bloques del dominio.
// La interacción temporal está encapsulada en componentes específicos.

import HistoricalHighlights from './components/HistoricalHighlights';
import TimelineRail from './components/TimelineRail';
import './TimelinePage.scss';

// Página de Timeline.
function TimelinePage() {
  return (
    <section className="timeline-page">
      {/* Introducción de la Timeline. */}
      <header className="timeline-page__header">
        <p className="timeline-page__eyebrow">
          CHRONOS / TIMELINE
        </p>

        <h1>Explore history through time.</h1>

        <p>
          Drag the timeline to explore different moments
          throughout history.
        </p>
      </header>

      {/* Regla temporal interactiva. */}
      <TimelineRail />

      {/* Contenido histórico dependiente del año seleccionado. */}
      <HistoricalHighlights />
    </section>
  );
}

export default TimelinePage;