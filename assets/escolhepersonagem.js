var principal = document.getElementsById("section2")[0]; // div principal
var lista = principal.getElementsByTagName("button"); // pega os itens da lista

document.getElementById('btn1').addEventListener('click', function() {
    principal.insertBefore( lista[(lista.length - 1)],lista[0] ); // move a última para antes da primeira 
});

document.getElementById('btn2').addEventListener('click', function() {
       
    insertAfter( lista[0],lista[(lista.length - 1)] ); // move a primeira para depois da última
});



