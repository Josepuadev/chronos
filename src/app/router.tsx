// Configuración central de las rutas de Chronos.
//
// Aquí definimos qué página corresponde a cada URL.

import { createBrowserRouter } from 'react-router';

import AppLayout from '../layouts/app-layout/AppLayout';

import DashboardPage from '../pages/dashboard/DashboardPage';
import TimelinePage from '../pages/timeline/TimelinePage';
import MapPage from '../pages/map/MapPage';
import EventsPage from '../pages/events/EventsPage';
import PeoplePage from '../pages/people/PeoplePage';
import CivilizationsPage from '../pages/civilizations/CivilizationsPage';
import SearchPage from '../pages/search/SearchPage';

// Router principal de Chronos.
const router = createBrowserRouter([
	{
		// Layout compartido por las páginas principales.
		element: <AppLayout />,

		// Rutas hijas del layout.
		children: [
			{
				// Página principal.
				path: '/',
				element: <DashboardPage />,
			},
			{
				// Timeline histórica.
				path: '/timeline',
				element: <TimelinePage />,
			},
			{
				// Mapa histórico.
				path: '/map',
				element: <MapPage />,
			},
			{
				// Eventos históricos.
				path: '/events',
				element: <EventsPage />,
			},
			{
				// Personas históricas.
				path: '/people',
				element: <PeoplePage />,
			},
			{
				// Civilizaciones históricas.
				path: '/civilizations',
				element: <CivilizationsPage />,
			},
			{
				// Ruta de búsqueda global.
				path: '/search',
				element: <SearchPage />,
			},
		],
	},
]);

export default router;
