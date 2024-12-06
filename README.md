# Projeto_LPC

Bia e Jubs façam o commit na branch principal a outra eu fiz só pra botar a minha versão do carrossel ja q a bia não deixou eu alterar a home page

luiz se mata fazendo o favor ! mas só se possivel, claro 

eu adicionei mais uma fonte no projeto que combinasse com as outras. motivo: a fonte principal usada é muito grossa e deixa o design grosseiro demais - jubs


Mentira mano, vc só espalha fake news


CSS
/*Rodape*/
.rodaopé{
    background-color: var(--marrom-claro);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 80px 6%;    
}

.rodaopé ul li a{
    list-style: none;
    text-decoration: none;
    list-style-type: none;
    color: var(--marrom-escuro);
}

.navgSite ul li a:hover{
    color: var(--marrom-bem-escuro);
}

.fala{
    width: 20%;
    color: #000;  
}

.falar li{
    list-style-type: none;
    list-style: none;
    color: var(--marrom-escuro);
    font-size: 12px;
}

.falar ul li a :hover{
    list-style-type: none;
    list-style: none;
    color: var(--marrom-escuro);
    font-size: 12px;
}

.navgSite{
    width: 40%;  
    display: flex;
    flex-direction: column;
    align-items: center;  
}

.navgSite li{
    text-align: center;
    width: 15%;
}

.navegaNSite{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
}

.direitos{
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
}

.redspe{
    width: 20%;
    display: flex;
    justify-content: right;
}

.redspe a{
    width: 10%;
    margin: 2px;
}

.redspe img{
    width: 100%;
    transition: 0.3s;
}

.redspe img:hover {
    transform: scale(1.6); 
}


HTML
<footer class="rodaopé">
        <div class="fala">
            <ul class="falar">
                <li><a href="#"><strong>Endereço:</strong> Localizados na Av. Pipipi, N°20<br>
                    Inferno, São Paulo | SP, Brasil</a></li>
                <li><a href="#"><strong>Telefone:</strong> 3793-6501</a></li>
                <li><a href="#"><strong>Email:</strong> cafedeLaLune@gmail.com</a></li>   
            </ul>
        </div>
        <div class="navgSite">
            <ul class="navegaNSite">
                <li><a href="sobre.html">Início</a></li>
                <li><a href="sobre.html">Sobre</a></li>
                <li><a href="cardapio.html">Cardápio</a></li>
                <li><a href="produtos.html">Produtos</a></li>
                <li><a href="localizacao.html">Localização</a></li>
            </ul>
            <br><br>
            <p class="direitos">© 2024 | Todos os direitos reservados.</p>
        </div>
        <div class="redspe">
            <a href="https://www.instagram.com/"><img src="/fotinhas/instagram.png" alt=""></a>
            <a href="https://www.facebook.com/?locale=pt_BR"><img src="/fotinhas/facebook.png" alt=""></a>
            <a href="#"><img src="/fotinhas/tiktok.png" alt=""></a><br>
            <a href="#"><img src="/fotinhas/twitter.png" alt=""></a>
        </div>
    </footer>
    


Tudo isso é inveção do governo para vender site