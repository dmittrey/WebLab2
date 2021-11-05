window.onload = () => {
    {drawPlot()}

    $("#plot").on("click", (e) => {
        clickPointEvent(e);
    });

    $(".X_value").on("click", (e) => {
        let x = e.target;
        if (validateX(x.value)) {
            setXValue(x);
        }
        injectXAlert(x.value);
    });

    $('#Y_value').on("change", (e) => {
        let y = e.target;
        if (validateY(y.value)) {
            setYValue(y);
        }
        injectYAlert(y.value);
    });

    $('#R_value').on("change", (e) => {
        let r = e.target;
        if (validateR(r.value)) {
            setRValue(r);
            switchRadius(getValues());
        }
        injectRAlert(r.value);
    });

    $('#cleaner').on("click", (e) => {
        cleanPlot();
        cleanTable();
    });
}