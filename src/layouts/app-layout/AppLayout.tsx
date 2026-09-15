import type React from 'react';
import './AppLayout.scss';

interface AppLayoutProps {
	children: React.ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
	return (
		// Contenedor general de toda la aplicación.
		<div className="app-layout">
			<header className="app-layout__header">
				{/* Marca principal de la aplicación. */}
				<a className="app-layout__brand" href="/">
					CRHONOS
				</a>

				<div className="app-layout__header-actions">
					{/* Buscador global.
              Por ahora es únicamente visual. */}
					<button type="button">Search</button>

					{/* Acceso temporal al perfil.
              La funcionalidad llegará posteriormente. */}
					<button type="button" aria-label="Open profile">
						👤
					</button>
				</div>
			</header>

			<div className="app-layout__body">
				{/* Navegación lateral principal. */}
				<aside className="app-layout__sidebar">
					<nav aria-label="Main navigation">
						<ul className="app-layout__navigation">
							<li>Dashboard</li>
							<li>Linea temporal</li>
							<li>Mapa</li>
							<li>Eventos</li>
							<li>Personas</li>
							<li>Civilizaciones</li>
						</ul>
					</nav>
				</aside>

				{/* Contenido específico de cada página. */}
				<main className="app-layout__content">{children}</main>
			</div>
		</div>
	);
}

export default AppLayout;
