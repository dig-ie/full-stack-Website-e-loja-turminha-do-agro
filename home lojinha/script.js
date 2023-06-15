    //js para passar as imagens do carrosel automatico 

    let contador =1;
    document.getElementById("radio1").checked = true;

    setInterval( function(){
        nextImage();
    }, 5000)

    function nextImage(){
        contador++;
        if(contador>4){
            contador = 1;
        }
        document.getElementById("radio"+contador).checked = true;
    }
    

        

    // js para hover aparecer Compre por Categoria

        const ComprePorCategoria = document.getElementById('comprePorCategoria');

        const bonecaHover = document.getElementById('bonecaHover');

        const containerCategorias = document.querySelector('.containerCategorias');

        let timeoutId;

        ComprePorCategoria.addEventListener('mouseover', () => {
        
        bonecaHover.style.display = 'block';
        containerCategorias.style.display = 'flex';

        clearTimeout(timeoutId);
        });

        ComprePorCategoria.addEventListener('mouseout', () => {
      
        timeoutId = setTimeout(() => {
            
            bonecaHover.style.display = 'none';
            containerCategorias.style.display = 'none';
        }, 200);
        });

        containerCategorias.addEventListener('mouseover', () => {
        
        clearTimeout(timeoutId);
        });
        
        containerCategorias.addEventListener('mouseout', () => {

        timeoutId = setTimeout(() => {

            bonecaHover.style.display = 'none';
            containerCategorias.style.display = 'none';
        }, 200);
        });



        // js hover Por Idade

        const porIdade = document.getElementById('porIdade');

        const bonecaHover2 = document.getElementById('bonecaHover2');

        const containerPorIdade = document.querySelector('.containerPorIdade');

        let timeoutIdade;

        porIdade.addEventListener('mouseover', () => {

        bonecaHover2.style.display = 'block';
        containerPorIdade.style.display = 'block';
        
        clearTimeout(timeoutIdade);
        });

        porIdade.addEventListener('mouseout', () => {
  
        timeoutIdade = setTimeout(() => {
 
            bonecaHover2.style.display = 'none';
            containerPorIdade.style.display = 'none';
            
        }, 200);
        });

        containerPorIdade.addEventListener('mouseover', () => {

        clearTimeout(timeoutIdade);
        });

        containerPorIdade.addEventListener('mouseout', () => {

        timeoutIdade = setTimeout(() => {

            bonecaHover2.style.display = 'none';
            containerPorIdade.style.display = 'none';
            
        }, 200);
        });

        // js hover estilo de brincar

        const estiloDeBrincar = document.getElementById('estiloDeBrincar');

        const bonecaHover3 = document.getElementById('bonecaHover3');

        const containerEstiloBrincar = document.querySelector('.containerEstiloBrincar');

        let timeoutIdBrincar;

        estiloDeBrincar.addEventListener('mouseover', () => {
       
        bonecaHover3.style.display = 'block';
        containerEstiloBrincar.style.display = 'block';
        
        clearTimeout(timeoutIdBrincar);
        });

        estiloDeBrincar.addEventListener('mouseout', () => {

        timeoutIdBrincar = setTimeout(() => {

            bonecaHover3.style.display = 'none';
            containerEstiloBrincar.style.display = 'none';
        }, 200);
        });

        containerEstiloBrincar.addEventListener('mouseover', () => {

        clearTimeout(timeoutIdBrincar);
        });

        containerEstiloBrincar.addEventListener('mouseout', () => {
  
        timeoutIdBrincar = setTimeout(() => {

            bonecaHover3.style.display = 'none';
            containerEstiloBrincar.style.display = 'none';
        }, 200);
        });

    // js para hover aparecer opcoes do produto
   
        const produtos = document.querySelectorAll('.produto');

        produtos.forEach(produto => {

        const adcSacola = produto.querySelector('.adcSacola');
        const detalhesProduto = produto.querySelector('.detalhesProduto');

        produto.addEventListener('mouseover', () => {
    
            adcSacola.style.display = 'initial';
            detalhesProduto.style.display = 'initial';
        });
        
    produto.addEventListener('mouseout', () => {
     
        adcSacola.style.display = 'none';
        detalhesProduto.style.display = 'none';
         });
         });
    
    
    // carrosel produtos
    const containers = document.querySelectorAll('.slider');
    const btnPrev = document.querySelectorAll('.botaoVoltarProdutos');
    const btnNext = document.querySelectorAll('.botaoPassarProdutos');
    const step = 1200; // define o tamanho do passo de rolagem em pixels

    for (let i = 0; i < containers.length; i++) {
        btnPrev[i].addEventListener('click', function () {
            containers[i].scrollBy(-step, 0); // rola o container para a esquerda
        });

        btnNext[i].addEventListener('click', () => {
            containers[i].scrollBy(step, 0); // rola o container para a direita
        });
    }

    // js modal sacola
    const botaoSacola = document.getElementById('sacola');
    const fundoEscuro = document.getElementById('fundoEscuro');
    const modalSacola = document.getElementById('modalSacola');
    const botaoContinuarComprando = document.querySelector('.botaoContinuarComprando');

    botaoSacola.addEventListener('click', () =>  {
        document.body.style.overflowY = 'hidden';
        fundoEscuro.style.display = 'flex';
        modalSacola.style.display = 'block';
    });


    fundoEscuro.addEventListener('click', () =>{
        fundoEscuro.style.display = 'none';
        modalSacola.style.display = 'none';
        document.body.style.overflowY = 'auto';
    });

    botaoContinuarComprando.addEventListener('click', () => {
        fundoEscuro.style.display = 'none';
        modalSacola.style.display = 'none';
        document.body.style.overflowY = 'auto';
    });
    // fim modal sacola

    const botaoAdcSacola = document.querySelectorAll('.adcSacola');
    for(var i =0; i < botaoAdcSacola.length; i++){
        botaoAdcSacola[i].addEventListener("click", adcProtutoSacola)
    }


    //js adicionando produtos ao carrinho
    function adcProtutoSacola(event){
        const botao = event.target
        const ProdutoMoldura = botao.parentElement
        const produtoImagem = ProdutoMoldura.querySelector('.imgProduto').src
        const produtoInformacoes = botao.parentElement.parentElement
        const produtoNome = produtoInformacoes.querySelector('.nomeProduto').innerText
        const produtoPreco = produtoInformacoes.querySelector('.preco').innerText

         let produtosSelecionados =  document.createElement('li')
         

         produtosSelecionados.innerHTML = 
         `
         <div class="produtosSelecionados">
                    <div class="imgProdutoSacola"> <img src="${produtoImagem}" alt="${produtoNome}"></div>
                    <p class="nomeProdutoSacola">${produtoNome}</p>
                    
                    <p class="quantidadeProdutoSacola"> Qtd: <span> 1 </span></p>
                    <p class="precoProdutoSacola" data-preco-inical="${parseFloat(produtoPreco)}"> ${produtoPreco} </p>
        </div>

                <div>
                    <div id="botaoLixo"> <img src="imagens/iconeLixo.png" alt=""> </div>
                    <div id="botoesQuantidade">
                        <button class="botaoMais">+</button>
                        <button class="botaoMenos">-</button>
                    </div>
                </div>
         `
         const listaProdutos = document.querySelector('.listaProdutos')
         listaProdutos.append(produtosSelecionados);

         const produto = {
            imagem: produtoImagem,
            nome: produtoNome,
            preco: parseFloat(produtoPreco),
            quantidade: 1
          };
        
          // Recupere a lista de produtos do localStorage (se houver) ou crie uma lista vazia
          const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
        
          // Adicione o produto à lista
          produtos.push(produto);
        
          // Atualize a lista de produtos no localStorage
          sessionStorage.setItem("produtos", JSON.stringify(produtos));

         atualizarSubtotal();
         produtosSelecionados.querySelector('#botaoLixo').addEventListener('click', apagarProduto())
         produtosSelecionados.querySelector('.botaoMais').addEventListener('click', alterarQuantidade())
         produtosSelecionados.querySelector('.botaoMenos').addEventListener('click', alterarQuantidade())
         

    }

// js  botoes diminuir e aumentar
    
function alterarQuantidade() {
    const botoesMais = document.querySelectorAll('.botaoMais');
    const botoesMenos = document.querySelectorAll('.botaoMenos');

    botoesMais.forEach((botao, index) => {
        botao.addEventListener('click', function() {
            alterarQuantidade(index, 1);
        });
    });

    botoesMenos.forEach((botao, index) => {
        botao.addEventListener('click', function() {
            alterarQuantidade(index, -1);
        });
    });

    function alterarQuantidade(index, valor) {
        const spansQuantidade = document.querySelectorAll('.quantidadeProdutoSacola span');
        const precosProduto = document.querySelectorAll('.precoProdutoSacola');
        let quantidadeAtual = parseInt(spansQuantidade[index].textContent);
        quantidadeAtual += valor;

        if (quantidadeAtual < 1) {
            quantidadeAtual = 1;
        }

        spansQuantidade[index].textContent = quantidadeAtual;

        // Atualizar o preço do produto
        const precoUnitario = parseFloat(precosProduto[index].data-preco);
        const novoPreco = (quantidadeAtual * precoUnitario).toFixed(2);
        precosProduto[index].textContent = 'R$ ' + novoPreco;

        atualizarSubtotal();
    }
}

// Chame a função quando o evento 'DOMContentLoaded' for disparado
document.addEventListener('DOMContentLoaded', alterarQuantidade);


    //js para atualizar preco subtotal
    
        function atualizarSubtotal() {
            const precosProduto = document.querySelectorAll('.precoProdutoSacola');
            let subtotal = 0;

            precosProduto.forEach(preco => {
                subtotal += parseFloat(preco.textContent.replace('R$', '').trim());
            });

            const elementoSubtotal = document.querySelector('#precoSacola');
            elementoSubtotal.textContent = 'R$' + subtotal.toFixed(2);
        }

        // Atualizar o subtotal inicial
        atualizarSubtotal();


         // excluindo produto do carrinho 

        function apagarProduto(){
    const botaoRemover = document.querySelectorAll('#botaoLixo');
    const elementoSubtotal = document.querySelector('#precoSacola');

    for (var i = 0; i < botaoRemover.length; i++) {
    botaoRemover[i].addEventListener("click", function remove(event) {
        const produto = event.target.parentElement.parentElement.parentElement;
        const precoProduto = parseFloat(produto.querySelector('.precoProdutoSacola').textContent.replace('R$', '').trim());

        produto.remove();

        const subtotalAtual = parseFloat(elementoSubtotal.textContent.replace('R$', '').trim());
        const novoSubtotal = subtotalAtual - precoProduto;

        elementoSubtotal.textContent = 'R$' + novoSubtotal.toFixed(2);

        });
    }
}

       

        