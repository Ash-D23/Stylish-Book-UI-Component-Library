let doc__menu = document.querySelector('.navbar__menu');
let doc__icon__menu = document.querySelector('.icon__menu');
let doc__icon__times = document.querySelector('.icon__times');
let doc__drawer = document.querySelector('.doc__drawer');
let navbar__list = document.querySelector('.navbar__list-container')

if(doc__menu){
    doc__menu.addEventListener('click', ()=>{
        doc__icon__menu.classList.toggle('hide');
        doc__icon__times.classList.toggle('hide');
        doc__drawer.classList.toggle('doc__drawer--display');
        navbar__list.classList.toggle('navbar__display');
    })
}

