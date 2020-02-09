const productos = [
  {
    nombre: 'Zapato negro',
    tipo: 'zapato',
    color: 'negro',
    img: './img/taco-negro.jpg',
  },
  {
    nombre: 'Zapato azul',
    tipo: 'zapato',
    color: 'azul',
    img: './img/taco-azul.jpg',
  },
  {
    nombre: 'Bota negra',
    tipo: 'bota',
    color: 'negro',
    img: './img/bota-negra.jpg',
  },
  { nombre: 'Bota azul', tipo: 'bota', color: 'azul', img: './img/bota-azul.jpg' },
  {
    nombre: 'Zapato rojo',
    tipo: 'zapato',
    color: 'rojo',
    img: './img/zapato-rojo.jpg',
  },
];

const inputSearch = document.getElementById("inputSearch");
const btnFilter = document.getElementById("btnFilter");
const cardsContainer = document.getElementById("cards__container");

const search = infoProduct => {
  let filteredProducts = "";

  filteredProducts = productos.reduce((previousValue, currentValue) => {

    if (infoProduct === currentValue.tipo || infoProduct === currentValue.color || infoProduct === "") {

      previousValue += `<div class="card">
        <div class="card__img">
          <img src="${currentValue.img}" alt="${currentValue.nombre}" />
        </div>
        <div class="card__footer">
          <span>${currentValue.nombre}</span>
        </div>
      </div>`;
    }

    return previousValue;
  }, '')

  filteredProducts === "" ? cardsContainer.innerHTML = "" : cardsContainer.innerHTML = filteredProducts;
};

inputSearch.onkeyup = e => {
  e.preventDefault();

  if (e.keyCode === 13) {
    search(e.target.value.toLowerCase());
  }
}

btnFilter.onclick = e => {
  e.preventDefault();
  search(inputSearch.value.toLowerCase());
}