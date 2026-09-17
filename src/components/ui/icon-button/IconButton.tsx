// Botón reutilizable para acciones representadas mediante
// un icono.
//
// El componente exige una etiqueta accesible mediante
// aria-label para evitar botones cuyo propósito no pueda
// ser entendido por usuarios de tecnologías asistivas.

import type { ButtonHTMLAttributes, ReactNode } from 'react';

import './IconButton.scss';

// Props del IconButton.
interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	// Elemento visual que representa la acción.
	icon: ReactNode;

	// Nombre accesible de la acción.
	'aria-label': string;
}

// Componente IconButton.
function IconButton({ icon, className = '', ...nativeProps }: IconButtonProps) {
	// Construimos las clases CSS del componente.
	const buttonClassName = ['icon-button', className].filter(Boolean).join(' ');

	return (
		<button className={buttonClassName} {...nativeProps}>
			{/* El icono es decorativo porque la acción ya está
          descrita mediante aria-label. */}
			<span aria-hidden="true">{icon}</span>
		</button>
	);
}

export default IconButton;
