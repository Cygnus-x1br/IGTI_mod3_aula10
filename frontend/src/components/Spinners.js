import React from 'react';

import css from './spinners.module.css';

export default function Spinners({ description }) {
  return (
    //Esta rotina estava no arquivo App.js, mas foi criado este componente para abriga-la.
    //A rotina abaixo faz a animação de espera através do preloader do materialize.
    <div className={css.flexRow}>
      <div className="preloader-wrapper small active">
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
      <div style={{ fontSize: '2rem', marginLeft: '10px' }}>{description}</div>
    </div>
  );
}
