import React from 'react';

/**Aqui utilizamos uma propriedade do react que é o children. Utilizamos o children
 * no lugar de props. Poderíamos ter criado uma props com um nome qualquer (title)
 * por exemplo, desestruturar ele aqui em header e chamá-lo no h1 mas podemos
 * utilizar neste caso o children.
 */
export default function Header({ children }) {
  return <h1 style={{ textAlign: 'center' }}>{children}</h1>;
}
