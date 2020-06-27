import React, { Component } from 'react';
import Header from './components/Header';
import Spinners from './components/Spinners';
import Candidates from './components/Candidates';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      candidates: [],
    };

    /**Setamos o interval como null no constructor para evitar vazamento de memória */
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      /**Aqui poderia ser utilizado async/await mas foi utilizado o fetch com promises.
       * O site consutado pelo fetch é o do backend criado na porta 8080.
       */
      fetch('http://localhost:8080/votes')
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          /**Neste ponto podemos fazer a leitura array montado no console com os
           * dados obtidos no localhost e gerados no json. A seguir utilizamos o
           * setState para reatribuir o nome dos candidatos em candidates.
           */
          //console.log(json);
          this.setState({
            candidates: json.candidates,
          });
        });
    }, 100);
  }

  render() {
    /**Aqui iniciamos a montagem do render extraindo os dados do estado na const
     * criada.
     */
    const { candidates } = this.state;

    if (candidates.length === 0) {
      return <Spinners description="Carregando..." />;
    }
    return (
      /**A classe container é do materialize */
      <div className="container">
        <Header>Votação</Header>
        <Candidates candidates={candidates} />
      </div>
    );
  }
}
