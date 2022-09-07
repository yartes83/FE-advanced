function typeValidation(variable, type) {
    return typeof variable === type;
}
const typeValidation1 = (variable, type) => typeof variable === type ;

function typeValidation2(variable, type) {
    if (typeof variable === 'number' && type === 'number') {
        return true;
    } else if (typeof variable === 'undefined' && type === 'undefined') {
        return true;
    } else if (typeof variable === 'string' && type === 'string') {
        return true;
    } else if (typeof variable === 'boolean' && type === 'boolean') {
        return true;
    } else if (typeof variable === 'object' && type === 'object') {
        return true;
    }
    return false;
}