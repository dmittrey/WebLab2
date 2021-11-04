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
            // console.log(resp.length);
            $('#Alert_text').empty();
            console.log(resp);
            drawPoint(resp.x, resp.y, resp.result, resp.r * 2);
            drawTableRow(resp.x, resp.y, resp.r, resp.currentTime, resp.executionTime, resp.result);
        },
        error: function () {
            $('#Alert_text').html("The parameters go out of the acceptable range!");
        }
    });
}

function drawTableRow(x, y, r, currentTime, executionTime, result) {
    let newRow = "<tr>";
    newRow += "<th>" + parseFloat(x).toFixed(2) + "</th>";
    newRow += "<th>" + parseFloat(y).toFixed(2) + "</th>";
    newRow += "<th>" + parseFloat(r).toFixed(2) + "</th>";
    newRow += "<th>" + currentTime + "</th>";
    newRow += "<th>" + executionTime + "</th>";
    newRow += (result === "false" || result === undefined)
        ? "<th><span style='color: red'>FALSE</span></th>"
        : "<th><span style='color: green'>TRUE</span></th>";
    newRow += "</tr>";
    $('#table tr:last').after(newRow);
}