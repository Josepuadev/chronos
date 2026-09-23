 // Página principal de Timeline.
 //
 // Esta página utiliza Redux para mantener el año seleccionado.
 // Otros módulos de Chronos podrán leer exactamente el mismo estado.

import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { setSelectedYear } from '../../features/timeline/timelineSlice';

import './TimelinePage.scss';

// Años que mostraremos inicialmente en nuestra Timeline.
// Más adelante estos datos procederán del dominio histórico.
const timelineYears = [-44, 476, 800, 1066, 1492, 1789, 1914, 1945];

// Página de Timeline.
function TimelinePage() {
  // Leemos el año actualmente seleccionado desde Redux.
  const selectedYear = useAppSelector(
    (state) => state.timeline.selectedYear,
  );

  // Obtenemos dispatch para modificar el estado global.
  const dispatch = useAppDispatch();

  // Cambia el año seleccionado.
  const handleYearChange = (year: number) => {
    dispatch(setSelectedYear(year));
  };

  return (
    <section className="timeline-page">
      {/* Cabecera de la página. */}
      <header className="timeline-page__header">
        <p className="timeline-page__eyebrow">CHRONOS / TIMELINE</p>

        <h1>Explore history through time.</h1>

        <p>
          Select a point in history and use it as the temporal context
          for the rest of the application.
        </p>
      </header>

      {/* Panel que muestra el año seleccionado. */}
      <section
        className="timeline-page__selected"
        aria-labelledby="selected-year-title"
      >
        <span id="selected-year-title">
          Selected year 
        </span>

        <strong> 
          {selectedYear < 0
            ? `${Math.abs(selectedYear)} BC`
            : `${selectedYear} AD`}
        </strong>
      </section>

      {/* Timeline interactiva. */}
      <div
        className="timeline-page__track"
        role="list"
        aria-label="Historical years"
      >
        {timelineYears.map((year) => {
          // Comprobamos si este punto temporal está seleccionado.
          const isSelected = year === selectedYear;

          return (
            <button
              key={year}
              type="button"
              className={`timeline-page__year ${
                isSelected ? 'timeline-page__year--selected' : ''
              }`}
              onClick={() => handleYearChange(year)}
              aria-pressed={isSelected}
            >
              {/* Punto visual de la Timeline. */}
              <span
                className="timeline-page__marker"
                aria-hidden="true"
              />

              {/* Etiqueta del año. */}
              <span className="timeline-page__year-label">
                {year < 0
                  ? `${Math.abs(year)} BC`
                  : year}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default TimelinePage;