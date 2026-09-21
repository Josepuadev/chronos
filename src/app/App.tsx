// Componente raíz de Chronos.
//
// App conecta Redux y React Router con nuestra aplicación.

import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';

import router from './router';
import { store } from './store/store';

// Componente raíz de la aplicación.
function App() {
	return (
		// Provider hace que el Redux Store esté disponible
		// para todos los componentes descendientes.
		<Provider store={store}>
			{/* RouterProvider proporciona el contexto
          de navegación SPA. */}
			<RouterProvider router={router} />
		</Provider>
	);
}

export default App;
