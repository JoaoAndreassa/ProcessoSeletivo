const sp = 67.83643;
const rj = 36.67866;
const mg = 29.22988;
const es = 27.16548;
const out = 19.84953;

const total = sp + rj + mg + es + out;
const psp = ((sp/total)*100);
const prj = ((rj/total)*100);
const pmg = ((mg/total)*100);
const pes = ((es/total)*100);
const pout = ((out/total)*100);

console.log(`Porcentagem de SP: ${psp.toFixed(2)}%`);
console.log(`Porcentagem de RJ: ${prj.toFixed(2)}%`);
console.log(`Porcentagem de MG: ${pmg.toFixed(2)}%`);
console.log(`Porcentagem de ES: ${pes.toFixed(2)}%`);
console.log(`Porcentagem de OUT: ${pout.toFixed(2)}%`);
