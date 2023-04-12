document.addEventListener("DOMContentLoaded", () => {
  const cardsAdj = [
    {
      name: "Vaquitas",
      img: "imagenes/vaca1.jpg"
    },

    {
      name: "Vaquitas",
      img: "imagenes/vaca2.jpg"
    },

    {
      name: "Vaquitas",
      img: "imagenes/vaca3.jpg"
    },
    {
      name: "Vaquitas",
      img: "imagenes/vaca4.jpg"
    },
    {
      name: "Vaquitas",
      img: "imagenes/vaca5.jpg"
    },
    {
      name: "Vaquitas",
      img: "imagenes/vaca6.jpg"
    },
    {
      name: "Vaquitas",
      img: "imagenes/vaca1.jpg"
    },

    {
      name: "Vaquitas",
      img: "imagenes/vaca2.jpg"
    },

    {
      name: "Vaquitas",
      img: "imagenes/vaca3.jpg"
    },
    {
      name: "Vaquitas",
      img: "imagenes/vaca4.jpg"
    },
    {
      name: "Vaquitas",
      img: "imagenes/vaca5.jpg"
    },
    {
      name: "Vaquitas",
      img: "imagenes/vaca6.jpg"
    }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  //----------------- lecture_03 ----------------------------------//
  function crearTablero() {
    for (let i = 0; i < cardsAdj.length; i++) {
      var carta = document.createElement("img");
      carta.setAttribute("src", "imagenes/reverso.png");

      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);

      cuadricula.appendChild(carta);
    }
  }
  function verificarPareja() {
    var cards = document.querySelectorAll("ing");
    const opcionUnoId = cartasEscogidasId[0];
    const opcionDosId = cartasEscogidasId[1];

    if (opcionUnoId === opcionDosId) {
      cards[opcionUnoId].setAttribute("src", "imagenes/reverso.png");
      cards[opcionDosId].setAttribute("src", "imagenes/reverso.png");
      alert("¡Diste click a la misma imagen!");
    } else if (cartasEscogidas[0] === cartasEscogidas[1]) {
      alert("¡Correcto!");
      cards[opcionUnoId].setAttribute("src", "imagenes/blank.png");
      cards[opcionDosId].setAttribute("src", "imagenes/blank.png");
      cards[opcionUnoId].removeEventListener("click", voltearCarta);
      cards[opcionDosId].removeEventListener("click", voltearCarta);
      cartasGanadas.push(cartasEscogidas);
    } else {
      cards[opcionUnoId].setAttribute("src", "imagenes/reverso.png");
      cards[opcionDosId].setAttribute("src", "imagenes/reverso.png");
      alert("¡Intenta de nuevo!");
    }
    cartasEscogidas = [];
    cartasEscogidasId = [];

    resultado.textContent = cartasGanadas.length;

    if (cartasGanadas.length === cardsAdj.length / 2) {
      resultado.textContent = "¡Felicidades, encontraste todos los pares";
    }
  }

  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardsAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardsAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1000);
    }
  }
  crearTablero();
});
