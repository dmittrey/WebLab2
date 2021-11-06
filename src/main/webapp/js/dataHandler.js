const X_START = -3;
const X_END = 5;

const Y_START = -5;
const Y_END = 5;

const R_START = 2;
const R_END = 5

let values = {
    x: null,
    y: null,
    r: null
};

getValues = () => {
    return values;
}

setXValue = (target) => {
    $('.X_value input[type="button"]').removeClass('selected');
    $(target).addClass('selected');
    values.x = target.value;
    console.log("value x: " + values.x);
}

setYValue = (target) => {
    values.y = target.value;
    console.log("value y: " + values.y);
}

setRValue = (target) => {
    values.r = target.value;
    console.log("value r: " + values.r);

}

validateForm = () => {
    return validateX(values.x) &&
        validateY(values.y) &&
        validateR(values.r);
}

validateX = (x) => {
    console.log(validateButtonExist(x) &&
        validateXRange(x))
    return validateButtonExist(x) &&
        validateXRange(x);
}

validateY = (y) => {
    console.log(validateTextExist(y) &&
        validateTextForm(y) &&
        validateYRange(y));
    return validateTextExist(y) &&
        validateTextForm(y) &&
        validateYRange(y);
}

validateR = (r) => {
    console.log(validateTextExist(r) &&
        validateTextForm(r) &&
        validateRRange(r));
    return validateTextExist(r) &&
        validateTextForm(r) &&
        validateRRange(r);
}

validateButtonExist = (field) => {
    return !jQuery.isEmptyObject(field);
}

validateXRange = (field) => {
    return (Number(field) >= X_START) && (Number(field) <= X_END);
}

validateTextExist = (field) => {
    return !jQuery.isEmptyObject(field) && (field.trim() !== "");
}

validateTextForm = (field) => {
    return (/^(0$|-?[1-9]\d*(\.\d*[1-9]$)?|-?0\.\d*[1-9])$/).test(field);
}

validateXRange = (field) => {
    return (Number(field) >= X_START) && (Number(field) <= X_END);
}

validateYRange = (field) => {
    return (Number(field) > Y_START) && (Number(field) < Y_END);
}

validateRRange = (field) => {
    return (Number(field) > R_START) && (Number(field) < R_END);
}