/* Modal */

let modal_demo_button = document.getElementById('modal-demo');
let modal_demo_component = document.querySelector('.modal__overlay');
let modal_demo_close = document.querySelector('.modal__close');

if(modal_demo_button){
    modal_demo_button.addEventListener('click', ()=>{
        modal_demo_component.classList.remove('hide')
    })
}

if(modal_demo_close){
    modal_demo_close.addEventListener('click', ()=>{
        modal_demo_component.classList.add('hide')
    })
}