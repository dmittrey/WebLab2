function detectMouse(e) {
    let R_value = $('#R_value').val();
    let cordX;
    let cordY;
    let x;
    let y;

    if (validateTextExist(R_value) &&
        validateTextForm(R_value) &&
        validateRRange(R_value)) {
        cordX = e.pageX - 200;
        cordY = e.pageY - 183;
        x = (cordX - 150) / 100 * R_value;
        y = (150 - cordY) / 100 * R_value;
        if (validateYRange(y) && validateXRange(x)) {
            send_graph_request(String(x), String(y), R_value);
        } else injectAlerts(String(x), String(y), String(R_value));
    } else injectRAlerts();
}