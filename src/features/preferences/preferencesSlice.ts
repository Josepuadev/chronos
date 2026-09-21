// Slice de preferencias globales de Chronos.
//
// Un slice agrupa:
// - estado inicial
// - reducers
// - actions
//
// Todo ello pertenece al mismo dominio funcional.

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// Preferencias globales de la aplicación.
interface PreferencesState {
	// Tema visual actual.
	theme: 'dark' | 'light';
}

// Estado inicial.
//
// Chronos comenzará utilizando el tema oscuro.
const initialState: PreferencesState = {
	theme: 'dark',
};

// Creamos el slice de preferencias.
const preferencesSlice = createSlice({
	// Nombre utilizado internamente por Redux.
	name: 'preferences',

	// Estado inicial del slice.
	initialState,

	// Reducers que describen las modificaciones
	// permitidas sobre este estado.
	reducers: {
		// Cambia el tema de la aplicación.
		setTheme: (state, action: PayloadAction<'dark' | 'light'>) => {
			// Redux Toolkit permite escribir esta mutación
			// aparentemente directa porque internamente utiliza
			// Immer para producir un nuevo estado inmutable.
			state.theme = action.payload;
		},

		// Alterna entre los dos temas disponibles.
		toggleTheme: (state) => {
			state.theme = state.theme === 'dark' ? 'light' : 'dark';
		},
	},
});

// Exportamos las actions generadas automáticamente
// por Redux Toolkit.
export const { setTheme, toggleTheme } = preferencesSlice.actions;

// Exportamos el reducer para registrarlo en el store.
export default preferencesSlice.reducer;
