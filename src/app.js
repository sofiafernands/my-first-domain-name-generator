/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const pronoun = ["the", "our"];
  const adj = ["great", "big"];
  const noun = ["jogger", "comelones", "telecom"];
  const extensions = [".com", ".net", ".es", ".gt"];
  let HacksDomains = [];

  function shortUrl(domain, position) {
    // se crea un string last con las ultimas posiciones del string domain
    let hackExtension =
      "." + domain.substring(domain.length - position, domain.length);
    //se comprubea que exista last en el arreglo de extensions  y en caso de existir agrega en
    //hackdomains la url
    if (extensions.includes(hackExtension)) {
      HacksDomains.push(
        domain.substring(0, domain.length - position) + hackExtension
      );
    }
  }
  function diferentesDominios(pronoun, adj, noun, extensions) {
    const DomainNames = [];
    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          //comprobamos si se puede sugerir una url hack
          shortUrl(pronoun[i] + adj[j] + noun[k], 3);
          shortUrl(pronoun[i] + adj[j] + noun[k], 2);
          for (let l = 0; l < extensions.length; l++) {
            const combination = `${pronoun[i]}${adj[j]}${noun[k]}${extensions[l]}`;
            DomainNames.push(combination);
          }
        }
      }
    }
    return DomainNames;
  }

  const dominios = diferentesDominios(pronoun, adj, noun, extensions);
  //se muestran todas las urls
  console.log(dominios);
  //se muestran las url hacks
  console.log(HacksDomains);
};
