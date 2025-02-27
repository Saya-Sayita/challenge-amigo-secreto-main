/* ----
 El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
 Aquí deberás desarrollar la lógica para resolver el problema.
-----
Funcionalidades
1. Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán
                    a una lista visible al hacer clic en "Adicionar".
2. Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
3. Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
4. Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre
                    de la lista y se mostrará en la página. */

/*
function declaracionInicial(){
    //document.querySelector('#reiniciar').setAttribute('disabled','false');
    console.log('entro a declaracion Inicial');
}*/
                    

function limpiarAmigo(){
    document.querySelector('#amigo').value = ''; 
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
             
function listarAmigos(){
    let listaAmigos=document.getElementById("listaAmigos");
    listaAmigos.innerHTML="";
    for (let i=0;i<listaDeAmigos.length; i++){
        let etiqueta = document.createElement('li');
        etiqueta.textContent=listaDeAmigos[i];
        listaAmigos.appendChild(etiqueta);
    }
}

function agregarAmigo(){ 
    let nombreAmigo= document.getElementById('amigo').value;
    if (nombreAmigo==''){
        alert('Ingrese un Nombre Valido');
    } else {

        if (listaDeAmigos.includes(nombreAmigo)){
            alert('Amigo ya ingresado');
            limpiarAmigo();
        } else {
            // ingresa y lista amigo (s)
            listaDeAmigos.push(nombreAmigo);
            //console.log(listaDeAmigos);
           // asignarTextoElemento('ul',listaDeAmigos);
           listarAmigos();
            console.log(listaDeAmigos);
            limpiarAmigo();          
        }
    }
}

function numerosSorteados(posicion){
    if (listaNumerosSorteados.includes(num)) {
        return generarNumeroSecreto()==num;
    } else {
        listaNumerosSorteados.push(num);
        return numeroGenerado;
    }  
}

function reiniciarJuego(){
    listaDeAmigos.splice(0, listaDeAmigos.length);
    listaNumerosSorteados.splice(0, listaNumerosSorteados.length);
    asignarTextoElemento('ul',listaDeAmigos);
    asignarTextoElemento('.result-list',"");
}

function sortearAmigo(){

  if (listaDeAmigos.length == 0){
    alert('Ingresar amigos para sortear');
    return;
  }
  
  let numeroMaximo = listaDeAmigos.length;
  let amigoSecreto =  parseInt(Math.floor(Math.random()*numeroMaximo));

  if (listaNumerosSorteados.length==numeroMaximo) {
        alert('Todos los amigos fueron asignados');
        reiniciarJuego();
         
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(amigoSecreto)) {
            console.log(`Amigo: ${listaDeAmigos[amigoSecreto]} ya sorteado`);
            return sortearAmigo();
        } else {
            asignarTextoElemento('.result-list',`Tu amigo secreto es: ${listaDeAmigos[amigoSecreto]}`);
            console.log(`Tu amigo secreto es: ${listaDeAmigos[amigoSecreto]} y su posicion en lista es ${amigoSecreto}`);
            listaNumerosSorteados.push(amigoSecreto);
            console.log(`numero de sorteos validos: ${listaNumerosSorteados.length}`);
            console.log(`lista posiciones sorteadas: ${listaNumerosSorteados}`);
            return amigoSecreto;
        }
    }  
}

let listaDeAmigos=[];
let listaNumerosSorteados=[];
//declaracionInicial();
