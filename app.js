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
