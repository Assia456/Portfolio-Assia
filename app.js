const liens = document.querySelectorAll(".droite a")
liens.forEach(a=>{
    a.addEventListener('mouseenter',()=>{
        console.log("enter")
        const num= a.id.split('-')[1]
        const vignette = document.querySelector("#vignette-"+num)
        vignette.style.opacity= 1
    })
    a.addEventListener('mouseleave',()=>{
        const num= a.id.split('-')[1]
        const vignette = document.querySelector("#vignette-"+num)
        vignette.style.opacity= 0
    })
    
})