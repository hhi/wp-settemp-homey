// verwerk buitentemperatuur en set stookwaarde/-correctie

async function setVariableValue(name, value) {
  await tag(name, value);
  await global.set(name, value);
}

var buitentemperatuur = args[0] || 20; //de temperatuur krijgen we als argument mee aan deze flowcard

//de defaults
var stookwaarde = 20;
var stookwaarde_correctie = -2;

// maak de tags aan voor verdere verwerking
 setVariableValue('stookwaarde_correctie', -2);
 setVariableValue('stookwaarde', 20);
 setVariableValue('buitentemperatuur', buitentemperatuur);

console.log("stookwaarde_correctie: ", stookwaarde_correctie);
console.log("buitentemperatuur: ", buitentemperatuur);
console.log("stookwaarde: ", stookwaarde);