export const ShortName = (name) => {
    var result = name;
    if (name.length >= 12) {
        result = name.substring(0, 10) + '...'
    }
    return result;
}

export const DateConverter = (date) => {
    var year = date.substring(0, 4);
    var month = date.substring(5, 7);
    var day = date.substring(8, 10);
    var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    month = parseInt(month);
    var result = `${day} / ${months[month - 1]} / ${year}`;
    return result;
}