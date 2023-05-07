<<<<<<< HEAD
function alternarPersonagem (personagem){
//função que desativa display de todos os personagens e ativa o do personagem escolhido
var lista = document.querySelectorAll('.personagem');
console.log(lista);
switch (personagem){
    case 'img#flora.personagem': 
    lista[0].style.display = 'initial';
    lista[1].style.display = 'none';
    lista[2].style.display = 'none';
    lista[3].style.display = 'none';
    lista[4].style.display = 'none';
    break;
    case 'img#caca.personagem': 
    lista[0].style.display = 'none';
    lista[1].style.display = 'initial';
    lista[2].style.display = 'none';
    lista[3].style.display = 'none';
    lista[4].style.display = 'none';
    break;
    case 'img#zeca.personagem':
    lista[0].style.display = 'none';
    lista[1].style.display = 'none';
    lista[2].style.display = 'initial';
    lista[3].style.display = 'none';
    lista[4].style.display = 'none';
    break;
    case 'img#vanvan.personagem':
    lista[0].style.display = 'none';
    lista[1].style.display = 'none';
    lista[2].style.display = 'none';
    lista[3].style.display = 'initial';
    lista[4].style.display = 'none';
    case 'img#neco.personagem':
        lista[0].style.display = 'none';
        lista[1].style.display = 'none';
        lista[2].style.display = 'none';
        lista[3].style.display = 'none';
        lista[4].style.display = 'initial';
        break;
}
}








=======
var listaPersonagens = document.querySelectorAll("#section1 img");

console.log(listaPersonagens[3].src);


function alternaPersonagem (personagem){


}
>>>>>>> 2dcd9900710a452dd55c8418ff05ae0174915061
