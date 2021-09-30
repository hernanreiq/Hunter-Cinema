export const DateConverter = (date) => {
    var year = date.substring(0, 4);
    var month = date.substring(5, 7);
    var day = date.substring(8, 10);
    var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    month = parseInt(month);
    var result = `${day} / ${months[month - 1]} / ${year}`;
    console.log(result)
    return result;
}