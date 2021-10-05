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

export const TextVerify = (text) => {
    var textLowerCase = text.toLowerCase();
    var textSplit = textLowerCase.match(/.{1,1}/g);
    var textLength = textSplit.length;
    var counter_VowelAndNumber = 0;
    for (var i = 0; i <= textLength; i++) {
        if (textSplit[i] === 'a' || textSplit[i] === 'e' || textSplit[i] === 'i' || textSplit[i] === 'o' || textSplit[i] === 'u') {
            counter_VowelAndNumber += 1;
        } else {
            textSplit[i] = parseInt(textSplit[i]);
            if (textSplit[i] >= 0) {
                counter_VowelAndNumber += 1;
            }
        }
    }
    if (counter_VowelAndNumber > 1) {
        return true;
    } else {
        return false;
    }
}