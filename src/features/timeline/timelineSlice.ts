// Slice de Timeline.
//
// Este slice contiene únicamente el estado global necesario
// para coordinar la exploración histórica.
//
// No almacenamos aquí los eventos históricos completos.
// Los datos del servidor pertenecen a otro nivel de la arquitectura.
// Aquí mantenemos el estado de interacción del usuario.

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// Estado global relacionado con la exploración temporal.
interface TimelineState {
  // Año actualmente seleccionado por el usuario.
  //
  // En nuestra aplicación utilizaremos inicialmente números
  // para representar años históricos.
  selectedYear: number;

  // Primer año visible del intervalo temporal.
  rangeStart: number;

  // Último año visible del intervalo temporal.
  rangeEnd: number;

  // Civilización seleccionada como filtro.
  //
  // null significa que no hay ningún filtro de civilización.
  selectedCivilization: string | null;

  // Tipos de eventos seleccionados como filtro.
  //
  // Ejemplo:
  // ['war', 'political', 'cultural']
  selectedEventTypes: string[];

  // Evento actualmente seleccionado.
  //
  // null significa que no hay ningún evento seleccionado.
  selectedEventId: string | null;
}

// Estado inicial de Timeline.
//
// Elegimos valores sencillos para poder empezar a probar
// el comportamiento antes de conectar una API real.
const initialState: TimelineState = {
  selectedYear: 476,
  rangeStart: 400,
  rangeEnd: 600,
  selectedCivilization: null,
  selectedEventTypes: [],
  selectedEventId: null,
};

// Creamos el slice de Timeline.
const timelineSlice = createSlice({
  // Nombre interno utilizado por Redux.
  name: 'timeline',

  // Estado inicial del slice.
  initialState,

  // Actions que permiten modificar el estado.
  reducers: {
    // Cambia el año seleccionado.
    setSelectedYear: (state, action: PayloadAction<number>) => {
      state.selectedYear = action.payload;
    },

    // Cambia el inicio del intervalo temporal.
    setRangeStart: (state, action: PayloadAction<number>) => {
      state.rangeStart = action.payload;
    },

    // Cambia el final del intervalo temporal.
    setRangeEnd: (state, action: PayloadAction<number>) => {
      state.rangeEnd = action.payload;
    },

    // Selecciona una civilización como filtro.
    setSelectedCivilization: (
      state,
      action: PayloadAction<string | null>,
    ) => {
      state.selectedCivilization = action.payload;
    },

    // Reemplaza los tipos de eventos seleccionados.
    setSelectedEventTypes: (
      state,
      action: PayloadAction<string[]>,
    ) => {
      state.selectedEventTypes = action.payload;
    },

    // Selecciona un evento concreto.
    setSelectedEventId: (
      state,
      action: PayloadAction<string | null>,
    ) => {
      state.selectedEventId = action.payload;
    },

    // Limpia todos los filtros de Timeline.
    resetTimelineFilters: (state) => {
      state.selectedCivilization = null;
      state.selectedEventTypes = [];
    },
  },
});

// Exportamos las actions generadas por Redux Toolkit.
export const {
  setSelectedYear,
  setRangeStart,
  setRangeEnd,
  setSelectedCivilization,
  setSelectedEventTypes,
  setSelectedEventId,
  resetTimelineFilters,
} = timelineSlice.actions;

// Exportamos el reducer para registrarlo posteriormente
// en nuestro Redux Store.
export default timelineSlice.reducer;