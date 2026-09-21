// Hooks tipados de Redux.
//
// Centralizamos aquí useDispatch y useSelector para que
// nuestros componentes no tengan que repetir los tipos
// manualmente.

import { useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from './store';

// Hook para ejecutar actions en Redux.
//
// AppDispatch contiene el tipo exacto del dispatch
// configurado para nuestra aplicación.
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

// Hook para leer datos del estado global.
//
// RootState representa la estructura completa
// de nuestro Redux Store.
export const useAppSelector = useSelector.withTypes<RootState>();
