import React from 'react';
import FlipMove from 'react-flip-move';

import Card from './Card';
import Candidate from './Candidate';

export default function Candidates({ candidates }) {
  return (
    //Colocamos o index no map de cadidate para fazer o cáculo de Position
    /**O componente FlipMove faz a animação do movimento dos cards. Para ele
     * funcionar precisamos criar uma nova div e reordenar o key para hierarquisar
     * as tags.(Verificar a documentação do componente.)
     */
    <div>
      <FlipMove>
        {candidates.map((candidate, index) => {
          const { id } = candidate;
          return (
            <div key={id}>
              <Card>
                <Candidate candidate={candidate} position={index + 1} />
              </Card>
            </div>
          );
        })}
      </FlipMove>
    </div>
  );
}
