let toast_demo = document.querySelector('#toast__demo');

if(toast_demo){
    toast_demo.addEventListener('click', ()=>{
        let newtoast = document.createElement('div')
        let toastmessage = document.createElement('p')
        let toasticon = document.createElement('i')

        toastmessage.innerText = "This is a message";  
        toasticon.classList.add('fas')
        toasticon.classList.add('fa-times')
        toasticon.classList.add('margin-lr--medium')
        toastmessage.classList.add('toast__message')

        newtoast.appendChild(toastmessage)
        newtoast.appendChild(toasticon)

        newtoast.classList.add('toast-container')
        newtoast.classList.add('toast-bottom')
        newtoast.classList.add('background--success')
        newtoast.classList.add('clr--primary')
        
        document.body.appendChild(newtoast)

        const timerid = setTimeout(()=>{
            newtoast.remove()
        }, 5000)

        toasticon.addEventListener('click', ()=>{
            clearTimeout(timerid);
            toasticon.parentElement.remove()
            
        })
    })
}
