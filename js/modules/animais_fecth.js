import initAnimaNumeros from "./anima-numeros.js";

/**
 * Fetch Animais
 */

export default function initAnimaisFetch() {
  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      animaisJSON.forEach(animal => {
        const divAnimal = createAnimal(animal);
        const numerosGrid = document.querySelector(
          '[data-create="div-animal"]'
        );

        numerosGrid.appendChild(divAnimal);

        initAnimaNumeros();
      });
    } catch (erro) {
      console.log(erro);
    }
  }

  function createAnimal(animal) {
    const div = document.createElement("div");

    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${
      animal.total
    }</span>`;

    return div;
  }

  fetchAnimais("./animais_api.json");
}

/**
 * end Fetch Animais
 */
