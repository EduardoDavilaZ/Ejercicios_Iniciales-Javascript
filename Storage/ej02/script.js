/*EJERCICIO PARA PRACTICAR 
 *  1. Crea un formulario con un campo para el nombre del usuario.2
 *  2. Cuando el usuario escriba su nombre y pulse un botón, guarda el nombre en sessionStorage.
 *  3. Al recargar la página, muestra un mensaje tipo:
 *      Bienvenido de nuevo, [nombre]", si el dato existe en sessionStorage.
 *  4. Añade un botón “Cerrar sesión” que elimine los datos de sessionStorage.
 *  
 *  (Este ejercicio no requiere todavía manipular el DOM a fondo; puedes hacerlo con prompt() y alert()*/

let titulo = document.getElementById("titulo");

let guardar = () => {
    let nombre = document.getElementById("nombre").value;
    console.log(nombre);
    sessionStorage.setItem("usuario", nombre);

    if (sessionStorage.getItem("usuario")){
        titulo.innerHTML = 'Hola de nuevo ' + sessionStorage.getItem("usuario");
    }

    visualizarSesion();
}

let cerrarsesion = () => {
    sessionStorage.clear();
    localStorage.clear();
    titulo.innerHTML = "";

    visualizarSesion();
}

let visualizarSesion = () => {
    if (sessionStorage.length > 0){
        for (let i = 0; i < sessionStorage.length; i++) {
            const key = sessionStorage.key(i);
            const value = sessionStorage.getItem(key);
            console.log(`${key}=${value}`);
        }
    } else {
        console.log("Nada en sesión");
    }
    
}