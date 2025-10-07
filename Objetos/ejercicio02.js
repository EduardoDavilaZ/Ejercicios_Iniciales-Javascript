/**********************************************************************************************
*               EJERCICIOS PARA PRACTICAR EL ACCESO A OBJETOS DENTRO DE UN ARRAY              *
*                    Cada actividad tiene dos opciones, ambas válidas                         *
**********************************************************************************************/

/**********************************************************************************************
 *     - ACT 1 - Realizar una función para filtrar los jugadores que tengan más de 20 goles   *
 *     - ACT 2 - Obtener el total de goles de todos los jugadores                             *
 *     - ACT 3 - Ordenar los jugadores por asistencias (de mayor a menor)   	              *
 *     - ACT 4 - Contar tarjetas rojas y amarillas por equipo                                 *
 *     - ACT 5 - Obtener el promedio de goles por partido para cada jugador                   *
 *     - ACT 6 - Encontrar el jugador con más asistencias                                     *
 *     - ACT 7 - Listar los nombres de los jugadores por posición                             *
 *********************************************************************************************/

const futbolistas = [
    {
        nombre: "Lionel Messi",
        equipo: "Inter Miami",
        posicion: "Delantero",
        goles: 40,
        asistencias: 18,
        partidosJugados: 30,
        tarjetaAmarilla: 3,
        tarjetaRoja: 0
    },
    {
        nombre: "Cristiano Ronaldo",
        equipo: "Al Nassr",
        posicion: "Delantero",
        goles: 35,
        asistencias: 12,
        partidosJugados: 28,
        tarjetaAmarilla: 5,
        tarjetaRoja: 1
    },
    {
        nombre: "Kevin De Bruyne",
        equipo: "Manchester City",
        posicion: "Mediocampista",
        goles: 10,
        asistencias: 22,
        partidosJugados: 25,
        tarjetaAmarilla: 2,
        tarjetaRoja: 0
    },
    {
        nombre: "Virgil van Dijk",
        equipo: "Liverpool",
        posicion: "Defensa",
        goles: 5,
        asistencias: 3,
        partidosJugados: 27,
        tarjetaAmarilla: 4,
        tarjetaRoja: 1
    },
    {
        nombre: "Thibaut Courtois",
        equipo: "Real Madrid",
        posicion: "Portero",
        goles: 0,
        asistencias: 1,
        partidosJugados: 29,
        tarjetaAmarilla: 2,
        tarjetaRoja: 0
    },
    {
        nombre: "Erling Haaland",
        equipo: "Manchester City",
        posicion: "Delantero",
        goles: 45,
        asistencias: 5,
        partidosJugados: 30,
        tarjetaAmarilla: 3,
        tarjetaRoja: 0
    },
    {
        nombre: "Kylian Mbappé",
        equipo: "Paris Saint-Germain",
        posicion: "Delantero",
        goles: 42,
        asistencias: 10,
        partidosJugados: 29,
        tarjetaAmarilla: 2,
        tarjetaRoja: 0
    },
    {
        nombre: "Neymar Jr",
        equipo: "Al-Hilal",
        posicion: "Delantero",
        goles: 20,
        asistencias: 15,
        partidosJugados: 26,
        tarjetaAmarilla: 4,
        tarjetaRoja: 1
    }
];


let filtrarPorGoles = (lim) => {
    let cont = 0;
    for (let futbolista of futbolistas){
        if (futbolista.goles > lim) cont++;
    }
    console.log(`Jugadores con más de ${lim} goles: ${cont}.`);
}

let totalDeGoles = () => {
    let cont = 0;
    for (let futbolista of futbolistas){
        cont += futbolista.goles;
    }
    console.log(`Total de goles: ${cont}.`);
}

let ordenarPorAsistencias = () => {
    futbolistas.sort((a, b) => b.asistencias - a.asistencias);
    console.log("Ordenado");
    for (let futbolista of futbolistas){
        console.log(futbolista);
    }
}

let contarTarjetasPorEquipo = () => {
    const equipos = [];

    for (let futbolista of futbolistas) {
        let equipo = equipos.find((equipo) => equipo.nombre == futbolista.equipo);

        if (equipo) {
            equipo.amarillas += futbolista.tarjetaAmarilla;
            equipo.rojas += futbolista.tarjetaRoja;
        } else {
            equipos.push({
                nombre: futbolista.equipo,
                amarillas: futbolista.tarjetaAmarilla,
                rojas: futbolista.tarjetaRoja
            });
        }
    }

    for (let equipo of equipos){
        console.log(equipo);
    }
}

let promedioDeGolesPorPartido = () => {
    for (let futbolista of futbolistas){
        let p = 0;
        futbolista.goles != 0 ? p = futbolista.partidosJugados / futbolista.goles : p = 0;
        p = parseFloat(p).toFixed(2);
        console.log(`Promedio de goles de ${futbolista.nombre} : ${p}`);
    }
}

let jugadorConMasAsistencias = () => {
    let max = futbolistas[0];
    for (let futbolista of futbolistas){
        if (futbolista.asistencias > max.asistencias){
            max = futbolista;
        }
    }
    console.log(max);
}

let listarJugadoresPorPosicion = () => {
    futbolistas.sort((a, b) => a.posicion.localeCompare(b.posicion));
    console.log("Ordenado");
    for (let futbolista of futbolistas){
        console.log(futbolista);
    }
}

function opciones (){
    alert("** OPCIONES **\n 1. Filtrar \n 2. Total de goles \n 3. Ordenar por asistencias \n 4. Contar tarjetas rojas y amarillas por equipo \n 5. Promedio de goles \n 6. Jugador con más asistencias \n 7. Ordenar por prioridad");
}

function menu (){
    let op;
    do{
        opciones();
        op = Number(prompt("Introduce la opción: "));
        switch (op){
            case 1: filtrarPorGoles(20); break;
            case 2: totalDeGoles(); break;
            case 3: ordenarPorAsistencias(); break;
            case 4: contarTarjetasPorEquipo(); break;
            case 5: promedioDeGolesPorPartido(); break;
            case 6: jugadorConMasAsistencias(); break;
            case 7: listarJugadoresPorPosicion(); break;
        }
    } while (op != 0)
}

menu();