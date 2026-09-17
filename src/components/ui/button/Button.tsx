// Componente Button reutilizable.
//
// Centraliza los botones principales de Chronos para que
// todas las partes de la aplicación compartan la misma
// API y el mismo comportamiento visual.

import type { ButtonHTMLAttributes } from 'react';

import './Button.scss';

// Variantes visuales disponibles para el botón.
type ButtonVariant = 'primary' | 'secondary' | 'ghost';

// Props específicas de nuestro Button.
//
// Extendemos las props nativas de HTMLButtonElement para
// conservar propiedades como:
// disabled, type, onClick, aria-label, etc.
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	// Define la apariencia visual del botón.
	variant?: ButtonVariant;
}

// Componente Button.
function Button({ variant = 'primary', className = '', children, ...nativeProps }: ButtonProps) {
	// Construimos las clases CSS del componente.
	const buttonClassName = ['button', `button--${variant}`, className].filter(Boolean).join(' ');

	return (
		<button className={buttonClassName} {...nativeProps}>
			{/* children representa el contenido del botón. */}
			{children}
		</button>
	);
}

export default Button;
