/**Este arquivo faz a formatação dos numeros de votação. A function formatNumber
 *converte o numero para o padrão brasileiro, já a function formatPercentage
 faz a formatação do percentual de forma manual (conforme a construção da função). 
 */

const formatter = Intl.NumberFormat('pt-BR');

function formatNumber(value) {
  return formatter.format(value);
}

function formatPercentage(value) {
  const stringValue = value.toFixed(2);

  return stringValue.replace('.', ',') + '%';
}

export { formatNumber, formatPercentage };
