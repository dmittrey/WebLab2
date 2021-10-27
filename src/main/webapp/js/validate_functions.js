function validateForm() {

    let X_value = $('#X_value').val();
    let Y_value = $('#Y_value').val();
    let R_value = $('#R_value').val();

    return validateButtonExist(X_value) &&
        validateXRange(X_value) &&
        validateTextExist(Y_value) &&
        validateTextForm(Y_value) &&
        validateYRange(Y_value) &&
        validateTextExist(R_value) &&
        validateTextForm(R_value) &&
        validateRRange(R_value);
}

function validateTextExist(field) {
    return !(field.trim() === "");
}

function validateButtonExist(field) {
    return !(field === null);
}

function validateTextForm(field) {
    return (/^(0$|-?[1-9]\d*(\.\d*[1-9]$)?|-?0\.\d*[1-9])$/).test(field);
}

function validateXRange(field) {
    return (parseInt(field) > -3) && (parseInt(field) < 3);
}

function validateYRange(field) {
    return (parseInt(field) > -3) && (parseInt(field) < 3);
}

function validateRRange(field) {
    return (parseInt(field) > -3) && (parseInt(field) < 3);
}