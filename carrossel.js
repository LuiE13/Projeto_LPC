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
        
        
    
})

function slider(imag) {
    let imagem1 = document.querySelector("#i1"), imagem2 = document.querySelector("#i2"), imagem3 = document.querySelector("#i3")
    let bota1 = document.querySelector("#b1"), bota2 = document.querySelector("#b2"), bota3 = document.querySelector("#b3")
    switch (imag) {
        case 1:
            imagem1.style.translate="0"
            imagem2.style.translate="0"
            imagem3.style.translate="0"
            bota1.style.width='25px'
            bota1.style.height='25px'
            bota2.style.width='20px'
            bota2.style.height='20px'
            bota3.style.width='20px'
            bota3.style.height='20px'
            bota1.style.background='#8a6040'
            bota2.style.background='#bea08a'
            bota3.style.background='#bea08a'
            break;
    
        case 2:
            imagem1.style.translate="-100%"
            imagem2.style.translate="-100%"
            imagem3.style.translate="-100%"
            bota2.style.width='25px'
            bota2.style.height='25px'
            bota1.style.width='20px'
            bota1.style.height='20px'
            bota3.style.width='20px'
            bota3.style.height='20px'
            bota2.style.background='#8a6040'
            bota1.style.background='#bea08a'
            bota3.style.background='#bea08a'
            break;
        case 3:
            imagem1.style.translate="-200%"
            imagem2.style.translate="-200%"
            imagem3.style.translate="-200%"
            bota3.style.width='25px'
            bota3.style.height='25px'
            bota1.style.width='20px'
            bota1.style.height='20px'
            bota2.style.width='20px'
            bota2.style.height='20px'
            bota3.style.background='#8a6040'
            bota2.style.background='#bea08a'
            bota1.style.background='#bea08a'
            break;
    }
    
}

//imagem que mexe

const rolaarola = document.querySelector('.faixada')

const olhano = new IntersectionObserver( (asvezes) => {
    console.log(asvezes)
})

olhano.observe(rolaarola)

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


