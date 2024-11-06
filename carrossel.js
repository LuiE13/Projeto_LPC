//rolagem do menu

window.addEventListener('scroll', function(){
    let header = document.querySelector('#boxoofgg')
    header.classList.toggle('rolarola',window.scrollY > 750)
})


function mudabola(numbola) {
    
}
//carrossel

var radio = document.querySelector('.btnmanu')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
}


