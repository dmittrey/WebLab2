function send_request() {

    let X_value = $('.X_value .selected').val();
    let Y_value = $('#Y_value').val();
    let R_value = $('#R_value').val();

    if (validateForm(X_value, Y_value, R_value)) {
        $.ajax({
            url: "./controller",
            type: "POST",
            data: {'x': X_value, 'y': Y_value, 'r': R_value},
            success: function(response){
                // alert(response);
                window.location.reload(true);
            },
            error: function (response) {
                alert("err: " + response);
            }
        });
    } else injectAlerts();

    return false;
}