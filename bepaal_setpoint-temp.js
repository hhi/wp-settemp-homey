// Bepaling setpoint obv Buitentemp naar Stooklijn (BerndGaykema)

class HomeyVars {
  async getVariableValue(name, defaultValue) {
    const variable = await global.get(name);
    return variable !== undefined ? variable : defaultValue;
  }

  async setVariableValue(name, value) {
    await tag(name, value);
    await global.set(name, value);
  }
}

//haal de gerelateerde tags op 
const homeyVars = new HomeyVars();
var stookwaarde_correctie = await homeyVars.getVariableValue('stookwaarde_correctie', -2)
var stookwaarde = await homeyVars.getVariableValue('stookwaarde', 20)
var buiten_temperatuur = await homeyVars.getVariableValue('buiten_temperatuur',20);

// Array van temperatuurgrenzen en bijbehorende stookwaarden
var grenswaarden = [
  { grens: 15, stook: 23 },
  { grens: 12, stook: 24 },
  { grens: 9, stook: 25 },
  { grens: 6, stook: 26 },
  { grens: 3, stook: 27 },
  { grens: 0, stook: 27 },
  { grens: -3, stook: 28 },
  { grens: -6, stook: 28 },
  { grens: -9, stook: 29 },
  { grens: -12, stook: 29 },
  { grens: -15, stook: 30 },
  { grens: -18, stook: 30 }
];



//actualiseer de stookwaarde obv de buitentemperatuur naar stookwaarde mapping
for (var i = 0; i < grenswaarden.length; i++) {
  if (buiten_temperatuur > grenswaarden[i].grens) {
    stookwaarde = grenswaarden[i].stook;
    break;
  }
}

// Zet de stookwaarde
var setpoint_temperatuur = stookwaarde + stookwaarde_correctie;

homeyVars.setVariableValue('setpoint_temperatuur', setpoint_temperatuur);


console.log("actuele stookwaarde_correctie: ", stookwaarde_correctie);
console.log("actuele buitentemperatuur: ", buiten_temperatuur);
console.log("actuele stookwaarde: ", stookwaarde);
console.log("setpoint temperatuur: ", setpoint_temperatuur);

return true;