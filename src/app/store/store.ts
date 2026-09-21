// Configuración central del Redux Store de Chronos.
//
// El store será el punto único desde el que Redux
// conocerá todos nuestros slices globales.

import { configureStore } from '@reduxjs/toolkit';

import preferencesReducer from '../../features/preferences/preferencesSlice';

// Creamos el Redux Store.
export const store = configureStore({
	// Cada propiedad representa un dominio del estado global.
	reducer: {
		// Estado relacionado con las preferencias.
		preferences: preferencesReducer,
	},
});

// Tipo que representa todo el estado global de Chronos.
export type RootState = ReturnType<typeof store.getState>;

// Tipo que representa la función dispatch
// configurada por nuestro store.
export type AppDispatch = typeof store.dispatch;
