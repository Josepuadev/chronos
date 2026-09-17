// Layout principal de Chronos.
//
// Este componente contiene la estructura visual compartida
// por todas las páginas de la aplicación.
//
// React Router utilizará <Outlet /> para insertar aquí
// la página correspondiente a la URL actual.

import { NavLink, Outlet } from 'react-router';

import './AppLayout.scss';

// Layout principal de la aplicación.
function AppLayout() {
	return (
		<div className="app-layout">
			{/* Cabecera global de Chronos. */}
			<header className="app-layout__header">
				{/* Marca principal de la aplicación. */}
				<NavLink className="app-layout__brand" to="/">
					CHRONOS
				</NavLink>

				{/* Acciones globales de la cabecera. */}
				<div className="app-layout__header-actions">
					{/* Buscador provisional.
              La funcionalidad llegará posteriormente. */}
					<NavLink to="/search">Search</NavLink>

					{/* Acceso provisional al perfil. */}
					<button type="button" aria-label="Open profile">
						👤
					</button>
				</div>
			</header>

			{/* Zona inferior de la aplicación. */}
			<div className="app-layout__body">
				{/* Navegación principal. */}
				<aside className="app-layout__sidebar">
					<nav aria-label="Main navigation">
						<ul className="app-layout__navigation">
							<li>
								{/* NavLink conoce automáticamente si la ruta
                    actual está activa. */}
								<NavLink to="/">Dashboard</NavLink>
							</li>

							<li>
								<NavLink to="/timeline">Timeline</NavLink>
							</li>

							<li>
								<NavLink to="/map">Map</NavLink>
							</li>

							<li>
								<NavLink to="/events">Events</NavLink>
							</li>

							<li>
								<NavLink to="/people">People</NavLink>
							</li>

							<li>
								<NavLink to="/civilizations">Civilizations</NavLink>
							</li>
						</ul>
					</nav>
				</aside>

				{/* Outlet es el punto donde React Router
            renderiza la página correspondiente. */}
				<main className="app-layout__content">
					<Outlet />
				</main>
			</div>
		</div>
	);
}

export default AppLayout;
