/**
 * constructor Date('Dia Mes Ano 00:00:00 -200');
 *
 * Dia - Fri, Mon, Sat...
 * Mes - Jan, May, Apr...
 * Ano - 2018, 2019...
 * Hora - 00:00:00...
 * Fuso - +200, -60, +20...
 *
 * Os dados que não forem preenchidos serão gerados automáticamente com o valor correto ou apenas 0.
 *
 * Retorna um objeto com a data da instancia gerada
 *
 */
const agora = new Date();
console.log(agora);
console.log(agora.getDate());

const natal = new Date("24 Dec 2019 18:00:00 -200"); //Fri May 01 2020 17:00:00 GMT-0300 (Horário Padrão de Brasília)
console.log(natal);

//getTime() - retorna os milisegundos desde 1 de janeiro de 1970
console.log(agora.getTime());
console.log(natal.getTime());

function toDays(time) {
  return time / (24 * 60 * 60 * 1000);
}

const diaAgora = Math.floor(toDays(agora.getTime()));
const diaNatal = Math.floor(toDays(natal.getTime()));

const diasRestantesNatal = Math.floor(diaNatal - diaAgora);
console.log("Faltam", diasRestantesNatal, "para o Natal");
