const body = document.querySelector('body');
const btnOpen = document.getElementById('btn-open');
const closeMenu = document.querySelectorAll('[data-close="menu"]');

btnOpen.addEventListener('click', e => {
    body.classList.add('open-menu');
});

closeMenu.forEach( el => {
    el.addEventListener('click', e => {
        body.classList.remove('open-menu');
    });
});

function typeWrite(elemento) {
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 250 * i)
    })
}

const title = document.querySelector('title');
typeWrite(title);

/* function typeWrite2(elemento) {
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 40 * i)
    })
}

const h1 = document.querySelector('h1');
typeWrite2(h1); */

function populateUfs() {
    const ufSelect = document.querySelector('select[name=uf]')

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then( (res) => res.json() )
        .then(states => {
            for( const state of states ) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }

        })
}

populateUfs()

function getCities(event) {
    const citySelect = document.querySelector('select[name=city]')
    const stateInput = document.querySelector('input[name=state]')

    const ufValue = event.target.value;

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

    fetch(url)
      .then( (res) => res.json() )
        .then(cities => {
            for( const city of cities ) {
                citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
            }

            citySelect.disabled = false;

        })
}


document
  .querySelector('select[name=uf]')
  .addEventListener('change', getCities)
