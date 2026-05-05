let temDinheiro = true;
let estaChovendo = false;
let carroEstaNaGaragem = false;

 logicaAnd = "#AND Vocë vai ao cinema?"
 logicaAnd += temDinheiro && estaChovendo;
 console.log(logicaAnd);

let logicaOr = "#OR Vocë vai ao cinema?";
logicaOr += estaChovendo || carroEstaNaGaragem;
console.log(logicaOr);
