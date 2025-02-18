

.homepage {
    display: flex; 
    /* Layout flexível */
    /*flex-direction: column; /* Elementos empilhados verticalmente */
    /*align-items: center; /* Centraliza no eixo horizontal */
    /*justify-content: center; /* Centraliza no eixo vertical */
    /*height: 100vh; /* Preenche a altura da tela */
    /*background-color: #f5f5f5; /* Fundo claro */
    /*font-family: Arial, sans-serif; /* Fonte padrão */
   /* padding: 10px; /* Espaçamento interno para telas pequenas */
  }
  
  /* Contêiner vazio */
  .homepage-child {
    position: absolute;
    display: block;
    align-items: center;
    left: calc(50% - 195px);
    /*width: 110%; /* Largura total no mobile */
    /*max-width: 102%; /* Limite de largura no desktop */
    height: 20%; /* Altura fixa */
    background-color: #eee2e2; /* Fundo cinza claro */
    margin-bottom: 20px; /* Espaço inferior */
    
  }
  
  /* Contêiner da seção promocional */
  .banner-promo {
    position: relative; /* Fixa no topo da página */
    top: 0; /* Alinha ao topo */
    width: 100%; /* Faz o banner ocupar toda a largura */
    background-color: #000; /* Cor de fundo preto */
    color: #fff; /* Texto branco */
    display: flex; /* Ativa o flexbox */
    justify-content: center; /* Espaça os elementos */
    align-items: center; /* Centraliza os itens verticalmente */
    padding: 10px 20px; /* Espaçamento interno */
    z-index: 1000; /* Garante que fique acima de outros elementos */
    order: 1; 
    left: -20px;
  }
  
 

  /* Estilizando o texto */
  .banner-texto span {
    font-size: 14px; /* Tamanho padrão */
    color: #f7eded; /* Cor do texto */
    margin-bottom: 9px; /* Espaço inferior entre os textos */
  }
  
  .sign-up-now {
    color: #007bff; /* Cor azul para destaque */
    font-weight: bold; /* Texto em negrito */
    cursor: pointer; /* Cursor de link */
    text-decoration: underline; /* Sublinha o texto */
  }
  
  /* Efeito ao passar o mouse no botão */
  .sign-up-now:hover {
    color: #0056b3; /* Azul mais escuro */
    text-decoration: none; /* Remove o sublinhado */
  }

  /*Começo dos icones*/
  /* Estilo geral da barra de navegação */
.navbar {
    
    display: flex; /*Ativa o layout flexível*/
    width: 100%;
    flex-wrap: wrap; /* Permite que os itens "quebrem" para a próxima linha*/
    align-items: baseline;
    justify-content: center;
    padding: 10px 20px; /* Adiciona espaçamento interno: 10px nas partes superior/inferior e 20px nas laterais */
    background-color: #fff; /* Fundo branco */
    border-bottom: 1px solid #ddd; /* Linha inferior */
    font-family: Arial, sans-serif;
    
  }
  
  /* Logotipo */
  .logo {
    font-size: 30px;
    font-weight: bold;
    color: #000;
    position: relative;
    left: calc(50% - 246px);
  }
  
  /* Menu de navegação */
  .nav-menu {
    display: flex;
    gap: 20px; /* Espaçamento entre os links */
    
  }
  
  .nav-link {
    text-decoration: none;
    color: #000;
    font-size: 14px;
    display: none;
  }
  
  .nav-link:hover {
    text-decoration: underline;
  }
  
  /* Barra de pesquisa*/
  .search-container {
    display: flex;
    align-items: center;
    background-color: #f5f5f5; /* Fundo cinza claro */
    padding: 5px 10px;
    border-radius: 25px; /* Cantos arredondados */
    flex-grow: 1; /* Faz a barra de pesquisa expandir */
    max-width: 21px; /* Limita a largura máxima */
    margin: 0 20px; /* Espaçamento lateral */
  }
  .search-icon {
    width: 16px;
    height: 16px;
    margin-right: 10px; /* Espaço entre o ícone e o input */
  }
  
  
  .search-input {
    border: none;
    background: none;
    outline: none;
    width: 100%;
    font-size: 14px;
    color: #000;
  }
  
  /* Ícones de carrinho e perfil */
  .icon-container {
    display: flex;
    align-items: center;
    gap: 15px; /* Espaçamento entre os ícones */
  }
  
  .icon {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  /*botão de menu*/
  .menu-toggle {
    display: block; /* Mostra o botão de menu */
    background: none;
    border: none;
    font-size: 30px;
    cursor: pointer;
    position: relative;
    left: -64px;
  }

  /*Fim da primeira sessão*/


  .titulo-principal {
    font-size: 40px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    position: relative;
    top: 29px;
    left: calc(50% - 376px);

  }

  .sub-titulo {
    font-size: 15px;
    color: #807d7d;
    position: relative;
    top: 39px;
    left: 15px;
  }
/*Parte do botão shop now*/
  .shop-now-wrapper {
    text-align: center; /* Centraliza o botão horizontalmente */
    margin-top: 20px; /* Adiciona espaço acima do botão */
    position: relative;
    height: 105px;
  }

  .shop-now button {
    display: flex;
    justify-content: center;
    width: 44%; /* Largura total no mobile */
    max-width: 100%; /* Limite de largura no desktop */
    background-color: black; /* Fundo preto */
    color: white; /* Texto branco */
    padding: 15px 30px; /* Espaçamento interno do botão */
    border: none; /* Remove a borda padrão */
    border-radius: 150px; /* Bordas arredondadas para criar o efeito oval */
    font-size: 16px; /* Tamanho da fonte */
    font-family: Arial, sans-serif; /* Escolha uma fonte clean */
    cursor: pointer; /* Adiciona o cursor de mão ao passar sobre o botão */
    transition: transform 0.2s, background-color 0.2s; /* Animações suaves */
    position: relative;
    left: 253px;
    top: -25px;  
  }

  .shop-now button:hover {
    background-color: #807d7d;
    transform: scale(1.05);
  }

  .fontes-img {
    display: flex;
    position: relative; /* Permite o posicionamento absoluto dos elementos filhos */
    width: 100%; /* Ajuste conforme necessário */
    height: 500px; /* Ajuste conforme necessário */
    margin: 0 auto; /* Centraliza o contêiner horizontalmente */
  }

  .casal {
    position: absolute;
    top: 368px; /* Ajusta a posição vertical */
    left: 50%; /* Centraliza horizontalmente */
    transform: translateX(-50%); /* Garante que a imagem do casal fique centralizada */
    width: 316px; /* Define o tamanho da imagem do casal */
 
  }
  
  .estrela2m-sem {
    display: flex;
    position: absolute;
    top: 455px; /* Ajusta a posição vertical */
    width: 10%; /* Define o tamanho da estrela menor */
    left: calc(50% + -160px);
}

  .estrela1-sem {
    position: absolute;
    top: 370px; /* Ajusta a altura para ficar alinhada à cabeça do homem */
    left: calc(50% + 95px); /* Move a estrela maior para o lado direito da cabeça */
    width: 19%; /* Define o tamanho da estrela maior */
}

/*PRDUTOS- NUMEROS*/
    .parent {
      font-family: Arial, sans-serif;
      flex-direction: row;
      display: flex;
      position: relative;
      top: -35px; /* Ajusta a posição vertical altura */
      left: calc(50% - 372px);
      flex-direction: column;
    }

    .parent p {
      margin-top: -50px;
      font-size: 16px;
      font-family: sans-serif;
      color: #807d7d;
    }

    .numeros {
        font-family: sans-serif;
        font-size: 30px;
        margin-top: 5px;

    }


    .High-Quality {
      font-family: Arial, sans-serif;
        flex-direction: row;
        display: flex;
        position: relative;
        top: -237px; /* Ajusta a posição vertical altura */
        left: calc(50% - 184px);
        flex-direction: column;
    }
    .High-Quality p {
      margin-top: -50px;
      font-size: 16px;
      font-family: sans-serif;
      color: #807d7d;
    }

    .container {
        font-family: Arial, sans-serif;
        flex-direction: row;
        display: flex;
        position: relative;
        top: 386px; /* Ajusta a posição vertical altura */
        left: calc(50% - 80px);
        flex-direction: column;
    }
    .container p {
      margin-top: -50px;
      font-size: 16px;
      font-family: sans-serif;
      color: #807d7d;
    }

    

    .marcas {
      position: absolute;
      background-color: #000;
      height: 4%;
      top: 913px;
      flex-direction: column;
      left: 0px;
    }

    .marcas img {
      
      position: relative;
      border-radius: 10px;
      height: 47px;
      padding: 5px;
      
    }
    .versace {
      
      left: calc(50% - 249px);
      width: 64%;
      top: 23px;
      
    }

    .zara {
      
      left: calc(50% - 309px);
      width: 21%;
      top: 21px;
    }

    .gucci {
      
      left: calc(50% + 27px);
      width: 44%;
      top: -39px;
    }
      
    .prada {
      
      left: calc(50% - 353px);
      width: 40%;
      top: 25px;
    }

    .calvin {
      
      left: calc(50% - 29px);
      width: 60%;
      top: -36px;
    }
/*parte de produtos*/

.new-arrivals {
  text-align: center;
  padding: 20px;
  position: relative;
  top: 375px;
  
}

.new-arrivals h1 {
  font-size: 3rem !important;
  margin-bottom: 49px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
 
  
}

.top-selling {
  text-align: center;
  padding: 20px;
  position: relative;
  top: 355px; 
}

.top-selling h1 {
  font-size: 3rem !important;
  margin-bottom: 20px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;

 
}

.produtos-link {
  display: none;
}
.products {
  display: grid;
  /*grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));*/
  grid-template-columns: repeat(2, 1fr); /* 2 colunas */
  gap: 0px;
  padding: 0 0px;
  position: relative;
  top: -29px;
}

.product-card {
  background: white;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.product-card img {
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
}

.product-card h3 {
  font-size: 1rem;
  margin: 10px 0;
  font-weight: 600;

}

.rating {
  font-size: 1.5rem;
  color: #ffa500;
}

.rating span {
  color: #333;
  font-size: 0.7rem;
  margin-left: 5px;
}

.price {
  font-size: 1rem;
  font-weight: bold;
  margin: 10px 0;
  text-align: left;
}

.old-price {
  text-decoration: line-through;
  color: gray;
  margin-right: 5px;
  font-size: 1rem;
}

.discount {
  color: red;
  font-size: 0.8rem;
}

.view-all {
    display: flex;
    justify-content: center;
    width: 100%; /* Largura total no mobile */
    max-width: 100%; /* Limite de largura no desktop */
    background-color: rgb(247, 247, 247); /* Fundo preto */
    color: rgb(0, 0, 0); /* Texto branco */
    padding: 15px 30px; /* Espaçamento interno do botão */
    border: none; /* Remove a borda padrão */
    border-radius: 150px; /* Bordas arredondadas para criar o efeito oval */
    font-size: 20px !important; /* Tamanho da fonte */
    font-family:'Courier New', Courier, monospace; /* Escolha uma fonte clean */
    cursor: pointer; /* Adiciona o cursor de mão ao passar sobre o botão */
    transition: transform 0.2s, background-color 0.2s; /* Animações suaves */
    position: relative;
    top: 5px;
}

.view-all:hover {
  background: #333;
}

@media (max-width: 400px) {
  .new-arrivals h1 {
      font-size: 1.5rem;
  }

  .product-card h3 {
      font-size: 0.9rem;
  }

  .price {
      font-size: 0.9rem;
  }

  .view-all {
      font-size: 0.9rem;
      padding: 8px 16px;
  }
}
/*Seccão 3 */
.testimonials-section {
  padding: 20px;
  background-color: #f8f8f8;
  text-align: center;
}

h2 {
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  position: relative;
  left: -77px;
  top: 3px;
}

.testimonial-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  max-width: 100%;
  border-radius: 15px;
  left: -6px;
}

.testimonial-slider {
  display: flex;
  transition: transform 0.5s ease-in-out;

}


.testimonial {
  flex: 0 0 100%; /* Cada comentário ocupa toda a largura */
  padding: 10px;
  background: rgb(228, 222, 222);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 10px;
  text-align: left;
  position: relative;
  left: calc(50% - 183px);
  font-size: 17px;
}

  

.stars {
  font-size: 30px;
  color: gold;
  margin-bottom: 10px;
}

.verified {
  color: green;
  font-size: 15px;
}

.arrow {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: black;
  z-index: 2;
}

.arrow.left {
  left: 5px;
}

.arrow.right {
  right: 5px;
}

.newsletter {
  margin-top: 20px;
  padding: 10px;
  background: black;
  color: white;
  border-radius: 20px;
  left: -8px;
  height: 305px;
  width: 332px;
}

.newsletter h3 {
  left: 13px;
  font-size: 40px;
  text-align: left;
  margin-bottom: 15px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  top: 0px;
  width: 305px;
  left: 12px; 
}

form input {
  padding: 12px;
  border: none;
  border-radius: 20px;
  font-size: 14px;
}


form button {
  height: 42px;
  padding: 12px;
  background: white;
  color: black;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
/*segunda parte| Browse*/
/* Container */
.browse-style {
  max-width: 300px;
  margin: 197px auto;
  padding: 20px;
  background-color: #d8d0d0;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgb(14, 13, 13);
  text-align: center;
  position: relative;
  top: 213px;
  height: 1100px;
}

/* Title */
.browse-style h2 {
  position: relative;
  font-size: 50px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #0e0d0d;
  top: -15px;
}

/* Style List */
.style-list {
  display: grid;
  grid-template-columns: 1fr; /* Uma coluna para mobile */
  gap: 15px;
}

/* Style Item */
.style-item {
  position: relative;
  width: 93%;
  height: 204px;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  left: calc(5%);
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}

.style-item img {
  position: relative;
  width: 164%;
  height: 377px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 10px;
  left: calc(50% + -100px);
  top: -89px;
}

.style-item p {
  position: absolute;
  bottom: 10px;
  left: 20px;
  margin: 0;
  color: rgb(7, 7, 7); /* Texto em branco para contraste */
  font-size: 25px;
  font-weight: bold;
  text-shadow: 0 1px 4px rgba(250, 246, 246, 0.7); /* Cria contraste com a imagem */
}


.Formal {
  position: relative;
  width: 93%;
  height: 204px;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  left: calc(5%);
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  top: 6px;
}

.Formal img {
    position: relative;
    width: 229%;
    height: 459px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 10px;
    left: calc(50% + -157px);
    top: -86px;
}

.Party {
  position: relative;
  width: 93%;
  height: 204px;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  left: calc(5%);
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  top: 15px
}

.Party img {
    position: relative;
    width: 95%;
    height: 332px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 10px;
    left: calc(50% + -111px);
    top: -85px;
}

.Gym {
  position: relative;
  width: 93%;
  height: 204px;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  left: calc(5%);
  display: grid;
  grid-template-columns: 1fr;
  gap: 22px;
  top: 25px
}

.Gym img {
  position: relative;
    width: 98%;
    height: 239px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 10px;
    left: calc(50% + -111px);
    top: +00px;
  
}


/*ultima parte | creditos*/
  .footer {
  background-color: #b4b3b3;
  padding: 15px;
  font-family: Arial, sans-serif;
  text-align: center;
  height: 1050px;
  margin-top: -180px;
  
}

.footer-brand h1 {
  position: relative;
  top: 148px;
  left: 0px;
  font-size: 35px;
  margin-bottom: 10px;
  text-align: left;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.footer-brand p {
  font-size: 15px;
  color: #666;
  margin-bottom: 15px;
  text-align: left;
  top: 137px;
  left: 1px;
}

.footer-social img {
  width: 50%;
  height: 30px;
  overflow: hidden;
}

.footer-social {
  height: 10px;
  position: relative;
  left: calc(-11%);
  top: 145px;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 colunas */
  gap: 25px; /* Espaçamento entre os itens */
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  left: 18px;
  top: 147px;
}

.footer-links div {
  position: relative;
  left: calc(-26%); /*uso com o position*/
  background: #b6b4b4;
  /*border-radius: 10px;*/ 
  padding: 15px;
  text-align: left;
  box-shadow: 0 4px 6px rgba(151, 146, 146, 0.1);
}

.footer-links h4 {
  margin-bottom: 20px;
  font-size: 20px;
  font-family:monospace;

}

.footer-links ul {
  list-style: none;
  padding: 1px;
  left: 10px;
  gap: 10px;

}

.footer-links ul li {
  margin: 5px 0;
  height: 40px;
}

.footer-links ul li a {
  text-decoration: none;
  color: #4d4b4b;
  transition: color 0.3s;
  top: 100px;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  

}

.footer-links ul li a:hover {
  color: #007bff;
}

.footer-bottom {
  border-top: 1px solid #aa9d9d;
  padding-top: 10px;
  font-size: 15px;
  color: #666;
}

.footer-bottom p {
  position: relative;
  left: 505px;
  top: 278px;
}

.payment-methods {
    position: relative;
    left: calc(50% + 337px);
    width: 328px;
    top: 274px;
  
}

.payment-methods img {
  
  width: 10%;
  position: relative;
  border-radius: 10px;
  height: 25.7px;
  padding: 5px;
}


/* Mobile Responsiveness */
@media (max-width: 400px) {
  .footer-links {
    flex-direction: column;
    text-align: center;
  }
}
