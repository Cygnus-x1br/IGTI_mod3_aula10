import React from 'react';

import css from './card.module.css';

export default function Card({ children }) {
  /**Tinhamos utilizado uma estilização em css mas foi alterado pela estilização
   * card do materialize. Para adicionar mais de uma classe de estillização fazemos
   * a concatenação da classe card do materialize com a classe cardExtra do arquivo
   * css criado.
   */
  const classes = `card ${css.cardExtra}`;
  return <div className={classes}>{children}</div>;
  //return <div className={css.card}>{children}</div>;
}
