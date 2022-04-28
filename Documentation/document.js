let moon = document.querySelector('.moon');
let sun = document.querySelector('.sun');

let theme = localStorage.getItem("datatheme");

if(theme === 'dark'){
    document.body.setAttribute('data-theme', 'dark');
    sun.classList.remove('hide')
}else{
    document.body.setAttribute('data-theme', 'light');
    moon.classList.remove('hide')
}

if(moon){
    moon.addEventListener('click', ()=>{
        console.log("moon")
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem("datatheme", "dark");
        moon.classList.toggle('hide')
        sun.classList.toggle('hide')
    })
}

if(sun){
    sun.addEventListener('click', ()=>{
        console.log('sun')
        document.body.setAttribute('data-theme', 'light');
        localStorage.setItem("datatheme", "light");
        moon.classList.toggle('hide')
        sun.classList.toggle('hide')
    })
}

let doc__menu = document.querySelector('.navbar__menu');
let doc__icon__menu = document.querySelector('.icon__menu');
let doc__icon__times = document.querySelector('.icon__times');
let doc__drawer = document.querySelector('.doc__drawer');
let navbar__list = document.querySelector('.navbar__list-container')

if(doc__menu){
    doc__menu.addEventListener('click', ()=>{
        doc__icon__menu.classList.toggle('hide');
        doc__icon__times.classList.toggle('hide');
        doc__drawer?.classList.toggle('doc__drawer--display');
        navbar__list.classList.toggle('navbar__display');
    })
}

let sidebars = document.querySelectorAll('.doc__drawer .drawer__navigation-items')
let mainSections = document.querySelectorAll('.doc__section')

let activeIndex = 0

const updateActiveIndex = (index) => {

    let activeElement = document.querySelector('.doc__drawer .active')
    activeElement.classList.remove('active')
    sidebars[index].classList.add('active')
    activeIndex = index

}

window.addEventListener("scroll", (event) => {

    let currentScrollPosition = window.pageYOffset

    let calculatedActiveIndex = 0

    mainSections.forEach((item, index)=>{
        let itemScrollPosition = item.offsetTop
        if(currentScrollPosition > itemScrollPosition-2){
            calculatedActiveIndex = index
        }
    })

    if(calculatedActiveIndex !== activeIndex){
        updateActiveIndex(calculatedActiveIndex)
    }
    
});





