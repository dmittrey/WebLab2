function send_graph_request(x, y, r) {
    return request(x, y, r)
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
    // alert(x);
    // alert(y);
    // alert(r);
    $.ajax({
        url: "./controller",
        type: "POST",
        data: {'x': x, 'y': y, 'r': r},
        success: function (response) {
            // alert(response);
            window.location.reload(true);
        },
        error: function (response) {
            alert("err: " + response.val());
        }
    });
}