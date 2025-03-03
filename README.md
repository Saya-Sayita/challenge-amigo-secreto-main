![Descubre a tu amigo Secreto](https://github.com/Saya-Sayita/challenge-amigo-secreto-main/blob/main/Logo.jpg)
<h1> Challenge Amigo Secreto </h1>
#Indice
##Descripcion del Proyecto
##Caracteristicas de la aplicacion
##Funcionalidades de la aplicacion
##Funciones de la aplicacion

### Descripcion del Proyecto:
El Challenge del amigo secreto es mi primer codigo desarrollado en JavaScript, el primero desafio deonde se utilizo Funciones propias de JS como para tomar o sortear un amigo al azar contenido en una lista o arreglo.

### Caracteristicas de la aplicacion: 
Para dar vida a esta codificacion utilizamos 2 listas una para guardar a los amigos que juegan y otra para guardar a los amigos sorteados(numero de posicion del amigo seleccionado al azar) para evitar repetir el amigo toda vez que se escoja un amigo. adicionalmente al sortear como al ingresar un amigo se valida que este no haya sido ingresado con anterioridad o bien que no se haya sorteado a mas de un amigo. 

### Funcionalidades de la aplicacion
1. `Agregar amigos`: Ingresar amigos en la lista para sorteo
2. `Sortear amigo` : Seleccionar de forma automatica y al azar un amigo inscrito en la lista quien sera el amigo secreto
   
### :hammer:Funciones tecnicas del proyecto:
Se crearon distintas funciones tanto para validacion como para asegurar la correcta funcionalidad del juego. tales como:
1. `limpiar campo amigos`: limpiar campo de ingreso de amigos. sta accion es transparente para el usuario.
2. `Agregar amigos a sortear`: agregar amigo, en esta funcion se valida el ingreso de un amigo valido, y adicionalmente se valida que se ingrese al mismo amigo 2 veces
3. `Desplegar la lista de amigos y amigo secreto sorteado en pantalla`: Desplegar la lista de los amigos ingresados en pantalla y ademas el amigo secreto sorteado una vez se vayan ingresando y/o sea sorteado el amigo.
4. `Sortear amigos`: En esta funcion, una vez el usuario presiona el boton Sortear, automaticamente el sistema escoge un amigo desde la lista ingresada, el sistema internamente valida que una vez se escojan a todos los amigos inscritos en la lista se reinicia el juego.
5. `Guardar amigos sorteados`: En esta funcion el sistema agrega en una lista los amigos escogidos y adicionalmente valida internamente que el amigo no se encuentre ya ingresado en esta lista, lo anterior para evitar que se asignen 2 veces al mismo amigo.
6. `reiniciar Juego`: Esta funcion se ejecuta una vez que se sortean todos los amigos disponibles que no se hallan seleccionado o sorteados, una vez sorteados se limpian las listas y la pantalla para volver a jugar e ingresar nuevos amigos. Esta accion es transparente para el usuario.
   
