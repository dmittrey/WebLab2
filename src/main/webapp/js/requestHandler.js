send_graph_request = (coordinates) => {
    if (coordinates.r !== "") {
        request(coordinates);
    }
}

send_origin_request = () => {
    if (validateForm()) {
        request(getValues());
    } else injectAlerts();
    return false;
}

request = (coordinates) => {
    $.ajax({
        url: "./controller",
        type: "POST",
        data: {'x': coordinates.x, 'y': coordinates.y, 'r': coordinates.r},
        success: function (resp) {
            // console.log(resp.length);
            // $('#Alert_text').empty();
            // cleanAlerts();
            console.log(resp);
            addPoint(resp.x, resp.y, resp.r, resp.result);
            drawPoint(resp.x, resp.y, resp.result, resp.r);
            drawTableRow(resp.x, resp.y, resp.r, resp.currentTime, resp.executionTime, resp.result);
            $('#Alert_text').empty();
        },
        error: function () {
            $('#Alert_text').html("The parameters go out of the acceptable range!");
        }
    });
}