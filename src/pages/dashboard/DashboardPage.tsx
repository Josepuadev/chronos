// Página principal de Chronos.
//
// Esta página empieza a utilizar componentes del Design System
// en lugar de definir estilos y comportamientos desde cero.

import Button from '../../components/ui/button/Button';
import Card from '../../components/ui/card/Card';
import IconButton from '../../components/ui/icon-button/IconButton';

import './DashboardPage.scss';

// Página principal de Chronos.
function DashboardPage() {
	return (
		<section className="dashboard-page">
			{/* Hero principal de la aplicación. */}
			<header className="dashboard-page__hero">
				<p className="dashboard-page__eyebrow">CHRONOS</p>

				<h1>Explore history through time.</h1>

				<p className="dashboard-page__description">
					Discover events, people and civilizations through an interactive historical experience.
				</p>

				{/* Ejemplo de utilización del Button reutilizable. */}
				<Button>Explore timeline</Button>
			</header>

			{/* Contenido provisional del dashboard. */}
			<div className="dashboard-page__content">
				{/* Primera Card reutilizable. */}
				<Card>
					<h2>Historical timeline</h2>

					<p>
						Explore events across centuries and discover how historical moments connect with each
						other.
					</p>
				</Card>

				{/* Segunda Card reutilizable. */}
				<Card>
					<h2>Discover civilizations</h2>

					<p>Explore civilizations, their territories, important figures and historical periods.</p>
				</Card>

				{/* Ejemplo del IconButton. */}
				<IconButton type="button" aria-label="Open dashboard options" icon="⋮" />
			</div>
		</section>
	);
}

export default DashboardPage;
