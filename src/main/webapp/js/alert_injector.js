function injectAlerts() {
    let Error_text = $('.Error_text');
    Error_text.html("");
    injectXAlerts(Error_text);
    injectYAlerts(Error_text);
    injectRAlerts(Error_text);
    return false;
}

function injectXAlerts() {
    let Error_text = $('.Error_text');
    Error_text.html("");
    let field = $('.X_value .selected').val();
    let alert;
    if (!validateButtonExist(field)) {
        alert = "Не введён параметр X!\n";
    } else alert = "";
    Error_text.append(alert);
}

function injectYAlerts() {
    let Error_text = $('.Error_text');
    Error_text.html("");
    let field = $('#Y_value').val();
    let alert;
    if (validateTextExist(field)) {
        if (validateTextForm(field)) {
            if (validateYRange(field)) {
                alert = "";
            } else alert = "Параметр Y задается числом в промежутке (-5...5)!\n";
        } else alert = "Параметр Y задается числом!\n";
    } else alert = "Не введён параметр Y!\n";
    Error_text.append(alert);
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