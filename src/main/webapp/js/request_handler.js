function send_graph_request(x, y, r) {
    request(x, y, r);
}

function send_origin_request() {
    let X_value = $('.X_value .selected').val();
    let Y_value = $('#Y_value').val();
    let R_value = $('#R_value').val();
    if (validateForm(X_value, Y_value, R_value)) {
        request(X_value, Y_value, R_value);
    } else injectAlerts();

    return false;
}

function request(x, y, r) {
    $.ajax({
        url: "./controller",
        type: "POST",
        data: {'x': x, 'y': y, 'r': r},
        success: function (resp) {
            drawDot(x, y, r, resp.result);
            drawTableRow(x, y, r, resp.currentTime, resp.executionTime, resp.result);
        },
        error: function () {
            alert("Parameter's are incorrect!");
        }
    });
}

function drawTableRow(x, y, r, currentTime, executionTime, result) {
    let newRow = "<tr>";
    newRow += "<th>" + x + "</th>";
    newRow += "<th>" + y + "</th>";
    newRow += "<th>" + r + "</th>";
    newRow += "<th>" + currentTime + "</th>";
    newRow += "<th>" + executionTime + "</th>";
    newRow += (result === "false" || result === undefined)
        ? "<th><span style='color: red'>FALSE</span></th>"
        : "<th><span style='color: green'>TRUE</span></th>";
    newRow += "</tr>";
    $('#table tr:last').after(newRow);
}

function drawDot(x, y, r, result) {
    let cx = 150 + 100 / r * x;
    let cy = 150 - 100 / r * y;
    let color = (result === "false" || result === undefined) ? "red" : "green";

    const svg = $('svg');
    let newDot = svg.html();
    newDot += "<circle fill=\"" + color + "\" color=\"" + color + "\" " +
        "cx=\"" + String(cx) + "\" cy=\"" + String(cy) + "\" r=\"" + String(r) + "\">";
    svg.html(newDot);
}