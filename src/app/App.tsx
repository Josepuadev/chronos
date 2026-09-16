// Componente raíz de Chronos.
//
// App se encarga de ensamblar las piezas principales
// de nuestra aplicación.
//
// Actualmente solo tenemos una página.
// React Router se encargará posteriormente de seleccionar
// la página correspondiente según la URL.

import AppLayout from '../layouts/app-layout/AppLayout';
import DashboardPage from '../pages/dashboard/DashboardPage';

// Componente raíz de la aplicación.
function App() {
	return (
		// El layout proporciona la estructura visual común.
		<AppLayout>
			{/* La página concreta se introduce como children. */}
			<DashboardPage />
		</AppLayout>
	);
}

export default App;
