// Página principal de Chronos.
//
// Una "page" representa una pantalla completa de la aplicación.
// En esta fase todavía no tiene lógica de negocio.
//
// Más adelante esta página podrá componerse de componentes
// específicos como TimelinePreview, RecentEvents, etc.

import './DashboardPage.scss';

// Página principal de Chronos.
function DashboardPage() {
	return (
		// Contenedor semántico de la página.
		<section className="dashboard-page">
			{/* Introducción principal de la aplicación. */}
			<header className="dashboard-page__hero">
				{/* Título principal de la pantalla. */}
				<p className="dashboard-page__eyebrow">CHRONOS</p>

				<h1>EXPLORA LA HISTORIA A TRAVÉS DEL TIEMPO.</h1>

				{/* Descripción del producto. */}
				<p className="dashboard-page__description">
					Descubre, personas, eventos, civilaziones y mucho más...
				</p>
			</header>

			{/* Zona reservada para el contenido del dashboard. */}
			<div className="dashboard-page__content">
				<p>Historical exploration starts here.</p>
			</div>
		</section>
	);
}

export default DashboardPage;
