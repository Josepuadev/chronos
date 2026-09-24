// Regla temporal interactiva de Chronos.
//
// Permite:
// - desplazamiento horizontal mediante scroll,
// - arrastre con el cursor,
// - selección del año situado cerca del centro,
// - navegación mediante teclado.
//
// El año seleccionado se almacena en Redux.

import {
  useEffect,
  useRef,
  type PointerEvent,
} from 'react';

import { useAppDispatch, useAppSelector } from '../../../app/store/hooks';
import { setSelectedYear } from '../../../features/timeline/timelineSlice';

import './TimelineRail.scss';

// Número de años que mantenemos aproximadamente
// alrededor del año seleccionado.
//
// No renderizamos una Timeline infinita real.
// Renderizamos una ventana y la desplazamos.
const YEARS_BEFORE = 150;

const YEARS_AFTER = 150;

// Distancia visual entre dos años.
// Un año ocupa 40px.
const YEAR_WIDTH = 40;

// Intervalo utilizado para las etiquetas principales.
const MAJOR_TICK_INTERVAL = 10;

// Componente de la regla temporal.
function TimelineRail() {
  // Referencia al elemento que contiene el scroll horizontal.
  const railRef = useRef<HTMLDivElement>(null);

  // Guarda si actualmente estamos arrastrando la Timeline.
  const isDraggingRef = useRef(false);

  // Guarda la posición X inicial del puntero.
  const dragStartXRef = useRef(0);

  // Guarda la posición inicial del scroll.
  const initialScrollLeftRef = useRef(0);

  // Leemos el año actual desde Redux.
  const selectedYear = useAppSelector(
    (state) => state.timeline.selectedYear,
  );

  // Dispatch permite actualizar el año seleccionado.
  const dispatch = useAppDispatch();

  // Generamos los años visibles alrededor del año seleccionado.
  const years = Array.from(
    { length: YEARS_BEFORE + YEARS_AFTER + 1 },
    (_, index) => selectedYear - YEARS_BEFORE + index,
  );

  // Coloca el año seleccionado aproximadamente en el centro.
  const centerSelectedYear = () => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    const selectedIndex = YEARS_BEFORE;

    const targetScrollLeft =
      selectedIndex * YEAR_WIDTH -
      rail.clientWidth / 2 +
      YEAR_WIDTH / 2;

    rail.scrollTo({
      left: targetScrollLeft,
      behavior: 'smooth',
    });
  };

  // Cuando cambia selectedYear desde Redux,
  // recolocamos visualmente la Timeline.
  useEffect(() => {
    centerSelectedYear();
  }, [selectedYear]);

  // Convierte una posición horizontal del scroll
  // en el año situado aproximadamente en el centro.
  const updateYearFromScroll = () => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    // Calculamos la posición del centro visual.
    const centerPosition =
      rail.scrollLeft + rail.clientWidth / 2;

    // Calculamos qué índice de año está en ese punto.
    const yearIndex = Math.round(
      centerPosition / YEAR_WIDTH - 0.5,
    );

    // Convertimos el índice en año real.
    const year =
      selectedYear - YEARS_BEFORE + yearIndex;

    // Evitamos actualizaciones innecesarias.
    if (year !== selectedYear) {
      dispatch(setSelectedYear(year));
    }
  };

  // Comienza el arrastre con el cursor.
  const handlePointerDown = (
    event: PointerEvent<HTMLDivElement>,
  ) => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    isDraggingRef.current = true;

    // Guardamos dónde empezó el puntero.
    dragStartXRef.current = event.clientX;

    // Guardamos dónde estaba el scroll.
    initialScrollLeftRef.current = rail.scrollLeft;

    // Capturamos el puntero para continuar recibiendo
    // eventos aunque salga momentáneamente del elemento.
    rail.setPointerCapture(event.pointerId);

    // Indicamos visualmente que estamos arrastrando.
    rail.classList.add('timeline-rail--dragging');
  };

  // Mueve la Timeline mientras arrastramos.
  const handlePointerMove = (
    event: PointerEvent<HTMLDivElement>,
  ) => {
    const rail = railRef.current;

    if (!rail || !isDraggingRef.current) {
      return;
    }

    // Distancia recorrida por el puntero.
    const deltaX =
      event.clientX - dragStartXRef.current;

    // Invertimos el movimiento para conseguir
    // el comportamiento habitual de una Timeline.
    rail.scrollLeft =
      initialScrollLeftRef.current - deltaX;

    // Actualizamos el año situado en el centro.
    updateYearFromScroll();
  };

  // Finaliza el arrastre.
  const handlePointerUp = (
    event: PointerEvent<HTMLDivElement>,
  ) => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    isDraggingRef.current = false;

    // Liberamos la captura del puntero.
    rail.releasePointerCapture(event.pointerId);

    rail.classList.remove('timeline-rail--dragging');
  };

  return (
    <section
      className="timeline-rail"
      aria-label="Historical timeline"
    >
      {/* Año actualmente seleccionado. */}
      <div className="timeline-rail__current">
        <span>Selected year</span>

        <strong>
          {selectedYear < 0
            ? `${Math.abs(selectedYear)} BC`
            : `${selectedYear} AD`}
        </strong>
      </div>

      {/* Línea central que representa el punto seleccionado. */}
      <div
        className="timeline-rail__center-marker"
        aria-hidden="true"
      />

      {/* Zona horizontal arrastrable. */}
      <div
        ref={railRef}
        className="timeline-rail__viewport"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        tabIndex={0}
        role="slider"
        aria-label="Selected historical year"
        aria-valuemin={-100000}
        aria-valuemax={100000}
        aria-valuenow={selectedYear}
        onKeyDown={(event) => {
          // Flecha izquierda retrocede un año.
          if (event.key === 'ArrowLeft') {
            event.preventDefault();
            dispatch(setSelectedYear(selectedYear - 1));
          }

          // Flecha derecha avanza un año.
          if (event.key === 'ArrowRight') {
            event.preventDefault();
            dispatch(setSelectedYear(selectedYear + 1));
          }
        }}
      >
        <div className="timeline-rail__track">
          {years.map((year) => {
            // Determinamos si este año es múltiplo de 10.
            const isMajorTick =
              year % MAJOR_TICK_INTERVAL === 0;

            return (
              <div
                key={year}
                className={`timeline-rail__year ${
                  isMajorTick
                    ? 'timeline-rail__year--major'
                    : ''
                }`}
              >
                <span
                  className="timeline-rail__tick"
                  aria-hidden="true"
                />

                {isMajorTick && (
                  <span className="timeline-rail__label">
                    {year < 0
                      ? `${Math.abs(year)} BC`
                      : year}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TimelineRail;