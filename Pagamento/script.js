
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