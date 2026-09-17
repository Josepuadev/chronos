// Componente Card reutilizable.
//
// Card proporciona una superficie visual común para
// diferentes tipos de contenido de Chronos.

import type { HTMLAttributes } from 'react';

import './Card.scss';

// Props de Card.
//
// Extendemos HTMLAttributes para poder utilizar propiedades
// estándar de un elemento <article>, como id, aria-*,
// data-* o className.
interface CardProps extends HTMLAttributes<HTMLElement> {
	// Contenido que aparecerá dentro de la tarjeta.
	children: React.ReactNode;
}

// Componente Card.
function Card({ children, className = '', ...nativeProps }: CardProps) {
	// Construimos las clases CSS.
	const cardClassName = ['card', className].filter(Boolean).join(' ');

	return (
		<article className={cardClassName} {...nativeProps}>
			{children}
		</article>
	);
}

export default Card;
