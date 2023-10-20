let pronoun = ["the", "our", "she", "he", "it", "you"];
let adj = ["great", "big", "beautiful", "good", "high", "little", "lucky"];
let noun = ["jogger", "racoon", "tree", "game", "house", "country", "pet"];
let exten = [".com", ".es", ".net", ".us", ".uk", ".ve"];

// funcion main que se encarga de validar el argumento pasado en terminal y llamar al generador segun sus necesidades

function _main() {
  if (process.argv[2] == "random") {
    console.log(generateDomains(process.argv[2], pronoun, adj, noun, exten));
  } else if (process.argv[2] == "all") {
    const domains = generateDomains(process.argv[2], pronoun, adj, noun, exten);
    for (let domain of domains) {
      console.log(domain);
    }
  } else {
    console.log("you must select a type. ('all' or 'random')");
  }
}

// metodo para generar numero random

function random(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

// metodo para generar el nombre de dominio aleatorio o todas las posibles combinaciones

function generateDomains(type, pronoun, adj, noun, exten) {
  const resultArr = [];
  const pronounArr = [];
  const adjArr = [];
  const nounArr = [];
  const extenArr = [];

  // logica con bucles para las posibles combinaciones

  for (let index = 0; index < pronoun.length; index++) {
    const elementPronoun = pronoun[index];
    pronounArr.push(elementPronoun);
    for (let index = 0; index < adj.length; index++) {
      const elementAdj = adj[index];
      adjArr.push(elementAdj);
      for (let index = 0; index < noun.length; index++) {
        const elementNoun = noun[index];
        nounArr.push(elementNoun);
        for (let index = 0; index < exten.length; index++) {
          const elementExten = exten[index];
          extenArr.push(elementExten);
          const result =
            elementPronoun + elementAdj + elementNoun + elementExten;
          resultArr.push(result);
        }
      }
    }
  }

  // generar un nombre de dominio random

  const randomResult =
    pronounArr[random(0, pronounArr.length)] +
    adjArr[random(0, adjArr.length)] +
    nounArr[random(0, nounArr.length)] +
    extenArr[random(0, extenArr.length)];

  // valida el parametro que se pasa por terminal

  if (type == "random") {
    return randomResult;
  } else if (type == "all") {
    return resultArr;
  }
}

_main();
