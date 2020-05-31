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