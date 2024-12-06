//rolagem do menu

window.addEventListener('scroll', function(){
    let header = document.querySelector('#boxoofgg')
    header.classList.toggle('rolarola',window.scrollY > 750)
    let i=2
    if (window.scrollY>450 && window.scrollY<1100 ) {
        setInterval(() => {
                
                i++,slider(i)
                if (i==4) {
                    i=0
                }
        }, 10000);
    }   
    let imag = document.querySelector('#xicras')
    
     if (window.scrollY>2500 && window.scrollY<3275 ){
        imag.style.left=imagem((window.scrollY-2500)/10)+"%"
        if (window.scrollY<2700) {
            imag.src='fotinhas/Muji_Beige_Porcelain_Mug_Cup_Small_210ml_15916245_Made_In_Japan_Microwave_Safe-removebg-preview.png'
        }else if (window.scrollY<2900) {
            imag.src='fotinhas/ghsdfys-removebg-preview.png'
        }else if (window.scrollY<3200) {
            imag.src='fotinhas/ghsdfys2-removebg-preview.png'
        }else if (window.scrollY<3350) {
            imag.src='fotinhas/ghsdfys3-removebg-preview.png'
        }
     }  
    
})

function imagem(caceta) {
    let left 
    left=caceta+5
    return left
}
function slider(imag) {
    let imagem1 = document.querySelector("#i1"), imagem2 = document.querySelector("#i2"), imagem3 = document.querySelector("#i3")
    let bota1 = document.querySelector("#b1"), bota2 = document.querySelector("#b2"), bota3 = document.querySelector("#b3")
    switch (imag) {
        case 1:
            imagem1.style.translate="0"
            imagem2.style.translate="0"
            imagem3.style.translate="0"
            bota1.style.background='#8a6040'
            bota2.style.background='#bea08a'
            bota3.style.background='#bea08a'
            break;
    
        case 2:
            imagem1.style.translate="-100%"
            imagem2.style.translate="-100%"
            imagem3.style.translate="-100%"
            bota2.style.background='#8a6040'
            bota1.style.background='#bea08a'
            bota3.style.background='#bea08a'
            break;
        case 3:
            imagem1.style.translate="-200%"
            imagem2.style.translate="-200%"
            imagem3.style.translate="-200%"
            bota3.style.background='#8a6040'
            bota2.style.background='#bea08a'
            bota1.style.background='#bea08a'
            break;
    }
    
}


//imagem que mexe

const olhano = new IntersectionObserver( (asvezes) => {
    asvezes.forEach( (felas) => {
        if (felas.isIntersecting){
            felas.target.classList.add('apareceu')
        } //else {
          //  felas.target.classList.remove('apareceu')
        //}
    } )
})

const rolaarola = document.querySelectorAll('.tudo')

rolaarola.forEach( (element) => olhano.observe(element))






//carrossel

// var radio = document.querySelector('.btnmanu')
// var cont = 1

// document.getElementById('radio1').checked = true

// setInterval(() => {
//     proximaImg()
// }, 5000)

// function proximaImg(){
//     cont++

//     if(cont > 3){
//         cont = 1
//     }

//     document.getElementById('radio'+cont).checked = true
// }
