
function cambiarFormatoFecha(fecha, formato) {
    const nuevaFecha = new Date(fecha).toDateString(formato);
    console.log(nuevaFecha)
    if (nuevaFecha === "") {
        console.log("El formato de fecha no es válido.");
    } else {
        console.log("El formato de fecha es válido.");
    }
    return nuevaFecha;
}

export {cambiarFormatoFecha};