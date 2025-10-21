/**********************************************************************************************
*             EJERCICIOS EXTRAS PARA PRACTICAR EL ACCESO A OBJETOS DENTRO DE UN ARRAY         *                                   
**********************************************************************************************/

const futbolistas = [
    {
        nombre: "Lionel Messi",
        equipo: "Inter Miami",
        posicion: "Delantero",
        partidosJugados: [
            { rival: "Orlando City", goles: 1, asistencias: 2, tarjetaAmarilla: false, tarjetaRoja: false },
            { rival: "LA Galaxy", goles: 2, asistencias: 1, tarjetaAmarilla: true, tarjetaRoja: false },
            { rival: "New York Red Bulls", goles: 1, asistencias: 0, tarjetaAmarilla: false, tarjetaRoja: false }
        ]
    },
    {
        nombre: "Cristiano Ronaldo",
        equipo: "Al Nassr",
        posicion: "Delantero",
        partidosJugados: [
            { rival: "Al Hilal", goles: 1, asistencias: 0, tarjetaAmarilla: true, tarjetaRoja: false },
            { rival: "Al Shabab", goles: 2, asistencias: 1, tarjetaAmarilla: false, tarjetaRoja: false },
            { rival: "Al Ahli", goles: 0, asistencias: 1, tarjetaAmarilla: false, tarjetaRoja: true }
        ]
    },
    {
        nombre: "Kevin De Bruyne",
        equipo: "Manchester City",
        posicion: "Mediocampista",
        partidosJugados: [
            { rival: "Liverpool", goles: 1, asistencias: 2, tarjetaAmarilla: false, tarjetaRoja: false },
            { rival: "Chelsea", goles: 0, asistencias: 1, tarjetaAmarilla: true, tarjetaRoja: false },
            { rival: "Manchester United", goles: 0, asistencias: 3, tarjetaAmarilla: false, tarjetaRoja: false }
        ]
    }
];

/**
 * ACT 1 - EXTRA: Calcular el total de goles y asistencias de cada jugador: Usa map() y reduce() para calcular el total de goles y asistencias de cada jugador en sus partidos.
 */

let calcularGoles = futbolistas.map(x => {
    let datos = {};
    datos.nombre = x.nombre;
    datos.totalGoles = x.partidosJugados.reduce((a, b) => a + b.goles, 0);
    datos.totalAsistencias = x.partidosJugados.reduce((a, b) => a + b.asistencias, 0);
    return datos;
});

for (let datos of calcularGoles){
    console.log(datos);
}

/**
 * ACT 2 - EXTRA: Filtrar jugadores con tarjetas rojas en algún partido: Encuentra a los jugadores que hayan recibido al menos una tarjeta roja en algún partido.
 */

let filtrarJugadores = futbolistas.filter(x =>
    x.partidosJugados.some(partido => partido.tarjetaRoja)
);

for (let datos of filtrarJugadores){
    console.log(datos);
}

/**
 * ACT 3 - EXTRA: Listar los rivales en los que un jugador específico anotó: Pide el nombre de un jugador y, si existe en el array, devuelve una lista de los equipos rivales contra los que anotó.
 */

let listarRivales = () => {
    let nombre = "Cristiano Ronaldo";
    let futbolista = futbolistas.find(x => x.nombre == nombre);
    let equipos = [];
    if (futbolista){
        equipos = futbolista.partidosJugados.filter(x => x.goles > 0).map(x => x.rival);
    }
    for (let equipo of equipos){
        console.log(equipo);
    }
}

listarRivales();

/**
 * ACT 4 - EXTRA: Calcular el promedio de tarjetas amarillas por jugador en sus partidos: Calcula el promedio de tarjetas amarillas recibidas en los partidos para cada jugador.
 */

let promedioAmarillas = futbolistas.map(x => (x.partidosJugados.filter(x => x.tarjetaAmarilla == true)).length / x.partidosJugados.length);
console.log(promedioAmarillas);

/**
 * ACT 5 - EXTRA: Contar los jugadores con al menos un gol en todos sus partidos: Filtra los jugadores que hayan anotado al menos un gol en cada uno de sus partidos.
 */

let contarJugadoresConGol = futbolistas.filter(x => x.partidosJugados.every(x => x.goles > 0));
console.log(contarJugadoresConGol[0]);