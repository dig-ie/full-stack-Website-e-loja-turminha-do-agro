
//script para trocar display dos inputs e textos
const botaoSalvar = document.getElementById("botaoSalvar");
const botaoEditar = document.getElementById("botaoEditar");
const formularioInputs = document.getElementById("formularioInputs");
const infoEnvio = document.getElementById("infoEnvio");

botaoSalvar.addEventListener("click", function() {
  formularioInputs.style.display = "none";
  infoEnvio.style.display = "block";
});

botaoEditar.addEventListener("click", function() {
  formularioInputs.style.display = "block";
  infoEnvio.style.display = "none";
});


// script para o texto receber valor do input

 const botaoSalvar2 = document.getElementById("botaoSalvar");
 botaoSalvar.addEventListener("click", function() {

   const inputNome = document.getElementById("inputNome").value;
   const telefone = document.getElementById("telefone").value;
   const CEP = document.getElementById("CEP").value;
   const numeroCasa = document.getElementById("numeroCasa").value;
   const complemento = document.getElementById("complemento").value;

   document.getElementById("nomeCompleto").innerHTML = inputNome;
   document.getElementById("numTelefone").innerHTML = telefone;
   document.getElementById("numCep").innerHTML = CEP;
   document.getElementById("Rua").innerHTML = numeroCasa;
   document.getElementById("txtComplemento").innerHTML = complemento;
 });



  const inputs = document.querySelectorAll('.inputs');
  const spans = document.querySelectorAll('.span-inputs');
  const boletoRadio = document.querySelector('#boleto');
  const cartaoCreditoRadio = document.querySelector('#cartaoCredito')
  const confirmarButton = document.querySelector('#confirmarPagamento');
  const fundoEscuro = document.querySelector('.fundoEscuro');
  const containerOpcaoBoleto = document.querySelector('#containerOpcaoBoleto');
  const containerOpcaoCartao = document.querySelector('#containerOpcaoCartao');
  const iconeSair = document.querySelector(".iconSair");
  const iconeSairCartao = document.querySelector(".iconSair2");

 // fazendo validacoes de inputs

 let inputErrors = new Array(inputs.length).fill(false);
 function setError(index) {
  inputs[index].style.border = '2px solid #E5524A';
  spans[index].style.display = 'block';
  inputErrors[index] = true;
}

function removeError(index) {
  inputs[index].style.border = '';
  spans[index].style.display = 'none';
  inputErrors[index] = false;
}


  function validandoNome(){
  if(inputs[0].value.length < 3){
    setError(0);
  
  }
  else{
    removeError(0);
  }
  }

  function validandoCpf(){
    if(inputs[1].value.length < 13){
      setError(1);
    }
    else{
      removeError(1);
    }
    }

    function validandoTelefone(){
      if(inputs[2].value.length < 15){
        setError(2);
      }
      else{
        removeError(2);
      }
      }

      function validandoCep(){
        if(inputs[3].value.length < 9){
          setError(3);
        }
        else{
          removeError(3);
        }
        }

 // script para mostrar modals de boleto e cartao de credito

 function confirmarPagamento() {
 
  confirmarButton.addEventListener('click', () => {
    let inputsPreenchidos = true;
    inputs.forEach((input, index) => {
      if (input.value === '') {
        setError(index);
        inputsPreenchidos = false;
      } 
    });

    
    const hasError = inputErrors.some(error => error);


    if (inputsPreenchidos && boletoRadio.checked && !hasError) {
      document.body.style.overflowY = 'hidden';
      fundoEscuro.style.display = 'flex';
      containerOpcaoBoleto.style.display = 'flex';
    }

    if (inputsPreenchidos && cartaoCreditoRadio.checked && !hasError){
      document.body.style.overflowY = 'hidden';
      fundoEscuro.style.display = 'flex';
      containerOpcaoCartao.style.display = 'flex';

    }



  });

  // script para fechar os modals

  iconeSair.addEventListener("click", function(){
    fundoEscuro.style.display = 'none';
    containerOpcaoBoleto.style.display = 'none';
    document.body.style.overflowY = 'auto';
  });

  iconeSairCartao.addEventListener("click", function(){
    fundoEscuro.style.display = 'none';
    containerOpcaoCartao.style.display = 'none';
    document.body.style.overflowY = 'auto';
  });

}
confirmarPagamento();

// colocando mascaras nos inputs

$(document).ready(function() {
  $('#CPF').mask('000.000.000-00');
});

$(document).ready(function() {
  $('#telefone').mask('(00) 00000-0000');
});

$(document).ready(function() {
  $('#CEP').mask('00000-000');
});




