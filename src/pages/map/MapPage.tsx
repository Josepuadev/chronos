// Página principal del mapa histórico.
//
// El mapa utiliza el mismo selectedYear que Timeline.
// De esta forma ambos módulos comparten contexto temporal
// sin necesidad de pasarse props entre ellos.

import { useAppSelector } from '../../app/store/hooks';

import './MapPage.scss';

// Página de mapa.
function MapPage() {
  // Leemos directamente el año seleccionado desde Redux.
  const selectedYear = useAppSelector(
    (state) => state.timeline.selectedYear,
  );

  // Convertimos el año a una etiqueta legible.
  const yearLabel =
    selectedYear < 0
      ? `${Math.abs(selectedYear)} BC`
      : `${selectedYear} AD`;

  return (
    <section className="map-page">
      {/* Cabecera del mapa. */}
      <header className="map-page__header">
        <p className="map-page__eyebrow">CHRONOS / MAP</p>

        <h1>Historical Map</h1>

        <p>
          This map represents the geographic context of the
          currently selected moment in history.
        </p>
      </header>

      {/* Contexto temporal compartido con Timeline. */}
      <div className="map-page__context">
        <span>Temporal context</span>

        <strong>{yearLabel}</strong>
      </div>

      {/* Placeholder visual del futuro mapa. */}
      <div
        className="map-page__canvas"
        aria-label={`Historical map for ${yearLabel}`}
      >
        <span>Historical map</span>
      </div>
    </section>
  );
}

export default MapPage;