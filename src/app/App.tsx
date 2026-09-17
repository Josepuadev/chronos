// Componente raíz de Chronos.
//
// App conecta la aplicación React con nuestro router.
// La definición concreta de las rutas vive en router.tsx.

import { RouterProvider } from 'react-router';

import router from './router';

// Componente raíz de la aplicación.
function App() {
	return (
		// RouterProvider proporciona el contexto de navegación
		// a todos los componentes de la aplicación.
		<RouterProvider router={router} />
	);
}

export default App;
