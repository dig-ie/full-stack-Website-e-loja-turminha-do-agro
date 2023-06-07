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

   

    
        
        
        