function validateForm(x, y, r) {

    return validateButtonExist(x) &&
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
    return (Number(field) >= -3) && (Number(field) <= 3);
}

function validateYRange(field) {
    return (Number(field) >= -5) && (Number(field) <= 5);
}

function validateRRange(field) {
    return (Number(field) >= 3) && (Number(field) <= 4);
}