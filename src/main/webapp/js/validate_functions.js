function validateForm(x, y, r) {

    return validateButtonExist(x) &&
        validateXRange(x) &&
        validateTextExist(y) &&
        validateTextForm(y) &&
        validateYRange(y) &&
        validateTextExist(r) &&
        validateTextForm(r) &&
        validateRRange(r);
}

function validateTextExist(field) {
    return !(field.trim() === "");
}

function validateButtonExist(field) {
    return !(field === undefined);
}

function validateTextForm(field) {
    return (/^(0$|-?[1-9]\d*(\.\d*[1-9]$)?|-?0\.\d*[1-9])$/).test(field);
}

function validateXRange(field) {
    return (parseInt(field) > -3) && (parseInt(field) < 3);
}

function validateYRange(field) {
    return (parseInt(field) > -5) && (parseInt(field) < 5);
}

function validateRRange(field) {
    return (parseInt(field) > 2) && (parseInt(field) < 5);
}