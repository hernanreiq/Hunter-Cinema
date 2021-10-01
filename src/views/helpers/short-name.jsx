export const ShortName = (name) => {
    var result = name;
    if (name.length >= 12) {
        result = name.substring(0, 10) + '...'
    }
    return result;
}