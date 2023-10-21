/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our", "she", "he", "it", "you"];
let adj = ["great", "big", "beautiful", "good", "high", "little", "lucky"];
let noun = ["jogger", "racoon", "tree", "game", "house", "country", "pet"];
let exten = [".com", ".es", ".net", ".us", ".uk", ".ve"];

function random(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

function generateDomains(type, pronoun, adj, noun, exten) {
  const resultArr = [];
  const pronounArr = [];
  const adjArr = [];
  const nounArr = [];
  const extenArr = [];

  // Logica con bucles para todas las posibles combinaciones

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
  } else if (type == undefined) {
    return resultArr;
  }
}

const button = document.getElementById("random");

button.addEventListener("click", () => {
  alert(
    "Your domain name is: " +
      generateDomains("random", pronoun, adj, noun, exten)
  );
});

window.onload = function() {
  const domains = generateDomains(undefined, pronoun, adj, noun, exten);

  for (const domain of domains) {
    console.table(domain);
  }

  console.log("Hello Rigo from the console!");
};
