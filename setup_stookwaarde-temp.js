// verwerk buitentemperatuur en set stookwaarde/-correctie

async function setVariableValue(name, value) {
  await tag(name, value);
  await global.set(name, value);
}

console.log(args[0]);

var buiten_temperatuur = args[0] || 20; //de temperatuur krijgen we als argument mee aan deze flowcard

//de defaults
var stookwaarde = 20;
var stookwaarde_correctie = -2;

// maak de tags aan voor verdere verwerking
 setVariableValue('stookwaarde_correctie', -2);
 setVariableValue('stookwaarde', 20);
 setVariableValue('buiten_temperatuur', buiten_temperatuur);

console.log("stookwaarde_correctie: ", stookwaarde_correctie);
console.log("buiten_temperatuur: ", buiten_temperatuur);
console.log("stookwaarde: ", stookwaarde);