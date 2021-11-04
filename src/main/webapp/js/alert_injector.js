function injectAlerts(X_value, Y_value, R_value) {
    let Error_text = $('.Error_text');
    Error_text.html("");
    Error_text.append("<span>" + xAlerts(X_value) + "</span>");
    Error_text.append("<span>" + yAlerts(Y_value) + "</span>");
    Error_text.append("<span>" + rAlerts(R_value) + "</span>");

    return false;
}

function xAlerts(field) {
    if (validateButtonExist(field)) {
        if (validateXRange(field)) {
            return "";
        } else return "Параметр X задается числом в промежутке (-3...3)!\n";
    } else return "Не введён параметр X!\n";
}

function yAlerts(field) {
    if (validateTextExist(field)) {
        if (validateTextForm(field)) {
            if (validateYRange(field)) {
                return "";
            } else return "Параметр Y задается числом в промежутке (-5...5)!\n";
        } else return "Параметр Y задается числом!\n";
    } else return "Не введён параметр Y!\n";
}

function rAlerts(field) {
    if (validateTextExist(field)) {
        if (validateTextForm(field)) {
            if (validateRRange(field)) {
                return "";
            } else return "Параметр R задается числом в промежутке (2...5)!\n";
        } else return "Параметр R задается числом!\n";
    } else return "Не введён параметр R!\n";
}

function injectRAlerts() {
    let Error_text = $('.Error_text');
    Error_text.html("");
    let field = $('#R_value').val();
    let alert;
    if (validateTextExist(field)) {
        if (validateTextForm(field)) {
            if (validateRRange(field)) {
                alert = "";
            } else alert = "Параметр R задается числом в промежутке (2...5)!\n";
        } else alert = "Параметр R задается числом!\n";
    } else alert = "Не введён параметр R!\n";
    Error_text.append(alert);
}