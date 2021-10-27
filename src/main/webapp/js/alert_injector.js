function injectAlerts() {

    let X_value = $('#X_value').val();
    let Y_value = $('#Y_value').val();
    let R_value = $('#R_value').val();
    let Error_text = $('.Error_text');

    Error_text.html("")
    Error_text.append("<span>" + xAlerts(X_value) + "</span>");
    Error_text.append("<span>" + yAlerts(Y_value) + "</span>");
    Error_text.append("<span>" + rAlerts(R_value) + "</span>");
}

function xAlerts(field) {
    // alert(field);
    if (field === undefined) {
        return "Не введён параметр X!\n";
    } else return "";
}

function yAlerts(field) {
    // alert(field);
    if (validateTextExist(field)) {
        if (validateTextForm(field)) {
            if (validateYRange(field)) {
                return "";
            } else return "Параметр Y задается числом в промежутке (-5...5)!\n";
        } else return "Параметр Y задается числом!\n";
    } else return "Не введён параметр Y!\n";
}

function rAlerts(field) {
    // alert(field);
    if (validateTextExist(field)) {
        if (validateTextForm(field)) {
            if (validateRRange(field)) {
                return "";
            } else return "Параметр R задается числом в промежутке (2...5)!\n";
        } else return "Параметр R задается числом!\n";
    } else return "Не введён параметр R!\n";
}