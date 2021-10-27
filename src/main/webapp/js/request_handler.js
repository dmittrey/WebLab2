function send_request() {

    let X_value = $('.X_value .selected').val();
    let Y_value = $('#Y_value').val();
    let R_value = $('#R_value').val();

    if (validateForm(X_value, Y_value, R_value)) {
        return true;
    } else injectAlerts();
}