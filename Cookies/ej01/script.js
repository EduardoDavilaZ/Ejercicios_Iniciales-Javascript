let crear = () => {
    let nombre = document.getElementById("nombre").value;
    let valor = document.getElementById("valor").value;
    let dias = document.getElementById("dias").value;
    let expiracion = "";

	if (dias > 0) {
        const fecha = new Date();
    	fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
        expiracion = `; expires=${fecha.toUTCString()}`;
	}
    
	document.cookie = `${nombre}=${valor || ""}${expiracion}; path=/`;

    leer();
};

let leer = () => {
    let cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        let [clave, valor] = cookie.split("=");
        console.log("Clave: " + clave + " Valor: " + valor);
    }
};

let eliminar = () => {
    let nombre = document.getElementById("nombre").value;
    document.cookie = `${nombre}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    console.log("Cookie eliminada: ")
    leer();
};