export const fechaDeHoy = () => {
    const fechaHoy = new Date();
    const dia = fechaHoy.getDate();
    const mes = fechaHoy.getMonth() + 1; // Los meses se cuentan desde 0, por lo que sumamos 1.
    const año = fechaHoy.getFullYear();
  
    // Formatea la fecha como una cadena "dd/mm/aaaa" (puedes ajustar el formato según tus preferencias).
    const fechaFormateada = `${dia}/${mes}/${año}`;
  
    return fechaFormateada;
}