const SUCCESS_ALERT = "";

const X_RANGE_ALERT = "Параметр X задается числом в промежутке (-3...3)!";
const X_EXIST_ALERT = "Не введён параметр X!";

const Y_RANGE_ALERT = "Параметр Y задается числом в промежутке (-5...5)!";
const Y_FORM_ALERT = "Параметр Y задается числом!";
const Y_EXIST_ALERT = "Не введён параметр Y!";

const R_RANGE_ALERT = "Параметр R задается числом в промежутке (2...5)!";
const R_FORM_ALERT = "Параметр R задается числом!";
const R_EXIST_ALERT = "Не введён параметр R!";

injectAlerts = () => {
    let coordinates = getValues();
    injectXAlert(coordinates.x);
    injectYAlert(coordinates.y);
    injectRAlert(coordinates.r);
}

injectXAlert = (x) => {
    console.log(xAlerts(x));
    $('#X_error').html(xAlerts(x));
}

injectYAlert = (y) => {
    console.log(yAlerts(y));
    $('#Y_error').html(yAlerts(y));
}

injectRAlert = (r) => {
    console.log(rAlerts(r));
    $('#R_error').html(rAlerts(r));
}

xAlerts = (field) => {
    if (validateButtonExist(field)) {
        if (validateXRange(field)) {
            return SUCCESS_ALERT;
        } else return X_RANGE_ALERT;
    } else return X_EXIST_ALERT;
}

yAlerts = (field) => {
    if (validateTextExist(field)) {
        if (validateTextForm(field)) {
            if (validateYRange(field)) {
                return SUCCESS_ALERT;
            } else return Y_RANGE_ALERT;
        } else return Y_FORM_ALERT;
    } else return Y_EXIST_ALERT;
}

rAlerts = (field) => {
    if (validateTextExist(field)) {
        if (validateTextForm(field)) {
            if (validateRRange(field)) {
                return SUCCESS_ALERT;
            } else return R_RANGE_ALERT;
        } else return R_FORM_ALERT;
    } else return R_EXIST_ALERT;
}

clearAlerts = () => {
    $('#X_error').empty();
    $('#Y_error').empty();
    $('#R_error').empty();
}