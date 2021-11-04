let WIDTH = 400;
let HEIGHT = 400;
const X_CENTER = 200;
const Y_CENTER = 200;
let CANVAS = null;
const AXES_COLOR = '#a2a2a2';
const CIRCLE_COLOR = '#234a23';
const TRIANGLE_COLOR = '#707023';
const RECTANGLE_COLOR = '#232370';
const BACKGROUND_COLOR = '#1d1d1d';
let scale = 0.015;
const scaleLastPoint = 10;
const pointsScale = 5;

let clearedAt = 0;
let lastElementNum = 0;
let DEFAULT_R = 5;

drawPlot = () => {
    CANVAS = SVG()
        .addTo('#plot')
        .size(WIDTH, HEIGHT);
    $('#plot').on('click', function (e) {
        clickPointEvent(e);
    });

    initPlot();
}

initPlot = () => {
    drawArea(DEFAULT_R);
    drawAxes();
    drawAxesScaleLabels(DEFAULT_R);
    drawRValue(DEFAULT_R);
}

drawPlotWithPoints = (attemptsArray) => {
    console.log('Ready to draw plot!');
    let pointsArray = [];
    attemptsArray.forEach(point => {
        pointsArray.push({
            x: (point.coordinates).x,
            y: (point.coordinates).y,
            r: (point.coordinates).r,
            result: point.doFitArea,
        });
    });
    lastElementNum = pointsArray.length - 1;
    scale = countScale(pointsArray);
    let lastPoint = pointsArray[pointsArray.length - 1];
    const r = lastPoint.r;
    console.log('R = ' + r);
    drawArea(r);

    drawAxes();
    drawAxesScaleLabels(r);

    for (let i = clearedAt; i <= lastElementNum - 1; i++) {
        let point = pointsArray[i];
        drawPoint(point.x, point.y, point.result, pointsScale);
    }
    drawPoint(lastPoint.x, lastPoint.y, lastPoint.result, scaleLastPoint);
    drawRValue(r);
}

clearPlot = () => {
    if (submitGetRequest({session: "clear"}, "/web-lab-2-1.2/controller")) {
        initPlot();
        $("#table_body").empty();
    } else {
        removeErrors();
        printError("can't clear session", "clear session",
            "Can't clear plot and table", document.getElementById("clearButton"));
    }
}

convertX = (x) => {
    return X_CENTER + x / (2 * scale);
}

convertY = (y) => {
    return Y_CENTER - y / (2 * scale);
}

convertToCoordinatesX = (xPoint) => {
    return (xPoint - X_CENTER) * 2 * scale;
}

convertToCoordinatesY = (yPoint) => {
    return (Y_CENTER - yPoint) * 2 * scale;
}

drawAxes = () => {
    const arrowSize = 10
    // axis y
    CANVAS.line(0, (HEIGHT / 2), WIDTH, (HEIGHT / 2)).stroke({width: 1, color: AXES_COLOR});
    // axis arrow
    const triangleX = (WIDTH - arrowSize) + ',' + (HEIGHT / 2 - arrowSize / 2) + ' ' +
        (WIDTH - arrowSize) + ',' + (HEIGHT / 2 + arrowSize / 2) + ' ' +
        (WIDTH) + ',' + (HEIGHT / 2)
    CANVAS.polygon(triangleX).fill(AXES_COLOR)
    CANVAS.text('x').font({
        size: 16,
        family: 'Menlo, sans-serif',
        anchor: 'end',
        fill: AXES_COLOR
    }).move(WIDTH - 2 * arrowSize, HEIGHT / 2 - 2 * arrowSize)

    //axis y
    CANVAS.line(WIDTH / 2, 0, WIDTH / 2, HEIGHT).stroke({width: 1, color: AXES_COLOR});
    //axis arrow
    const triangleY = (WIDTH / 2 - arrowSize / 2) + ',' + (arrowSize) + ' ' +
        (WIDTH / 2 + arrowSize / 2) + ',' + (arrowSize) + ' ' +
        (WIDTH / 2) + ',' + (0);
    console.log('y arrow coordinates ' + triangleY)
    CANVAS.polygon(triangleY).fill(AXES_COLOR)
    CANVAS.text('y').font({
        size: 16,
        family: 'Menlo, sans-serif',
        anchor: 'end',
        fill: AXES_COLOR
    }).move(WIDTH / 2 - 1.5 * arrowSize, 1.7 * arrowSize)
}

function drawScaleLabel(xStart, xStop, yStart, yStop, labelX, labelY, label) {
    CANVAS.line(convertX(xStart), convertY(yStart), convertX(xStop), convertY(yStop))
        .stroke({width: 2, color: AXES_COLOR});
    CANVAS.text(label).font({
        size: 16,
        family: 'Menlo, sans-serif',
        anchor: 'end',
        fill: AXES_COLOR
    }).move(convertX(labelX), convertY(labelY));
}

drawRValue = (r) => {
    CANVAS.text('R = ' + r).font({
        size: 16,
        family: 'Menlo, sans-serif',
        anchor: 'end',
        fill: AXES_COLOR
    }).move(WIDTH - 50, HEIGHT - 50);
}

drawAxesScaleLabels = (r) => {
    console.log('Start drawing axes labels')
    const hatchLen = 0.1;
    console.log("R value while drawing labels: " + r);
    //x axis labels
    drawScaleLabel(-r, -r, hatchLen, -hatchLen, -r, -2 * hatchLen, "-R");
    drawScaleLabel(-r / 2, -r / 2, hatchLen, -hatchLen, -r / 2, -2 * hatchLen, "-R/2");
    drawScaleLabel(r / 2, r / 2, hatchLen, -hatchLen, r / 2, -2 * hatchLen, "R/2");
    drawScaleLabel(r, r, hatchLen, -hatchLen, r, -2 * hatchLen, "R");

    //y axis labels
    drawScaleLabel(hatchLen, -hatchLen, -r, -r, -4 * hatchLen, -r, "-R");
    drawScaleLabel(hatchLen, -hatchLen, -r / 2, -r / 2, -4 * hatchLen, -r / 2, "-R/2");
    drawScaleLabel(hatchLen, -hatchLen, r / 2, r / 2, -4 * hatchLen, r / 2, "R/2");
    drawScaleLabel(hatchLen, -hatchLen, r, r, -4 * hatchLen, r, "R");
}


drawArea = (r) => {
    const circlePath = 'M ' + (convertX(0)) + ', ' + (convertY(r)) + ' ' +
        'A' + r / (2 * scale) + ', ' + r / (2 * scale) + ' ' +
        '90 0,1 ' + (convertX(r)) + ', ' + (convertY(0)) + ' L 200,200 Z'
    const triangle = (convertX(0)) + ', ' + (convertY(0)) + ' ' +
        (convertX(r/2)) + ', ' + (convertY(0)) + ' ' +
        (convertX(0)) + ', ' + (convertY(-r/2));
    CANVAS.path(circlePath)
        .fill(CIRCLE_COLOR)
        .move(convertX(0), convertY(r));
    CANVAS.rect(r / (2* scale), r / (4 * scale))
        .fill(RECTANGLE_COLOR)
        .move(convertX(-r), convertY(r / 2));
    CANVAS.polygon(triangle)
        .fill(TRIANGLE_COLOR);
    // CANVAS.rect(r / (2* scale), r / (4 * scale)).fill(RECTANGLE_COLOR).move(convertX(-r), convertY(r / 2));
    // const fillUnusedCircle = (convertX(0)) + ',' + (convertY(0)) + ' ' +
    //     (convertX(-r / 2)) + ',' + (convertY(0)) + ' ' +
    //     (convertX(-r / 2)) + ',' + (convertY(r / 2)) + ' ' +
    //     (convertX(r / 2)) + ',' + (convertY(r / 2)) + ' ' +
    //     (convertX(r / 2)) + ',' + (convertY(-r / 2)) + ' ' +
    //     (convertX(0)) + ',' + (convertY(-r / 2));

    // CANVAS.polygon(fillUnusedCircle).fill(BACKGROUND_COLOR)
    // const area = (convertX(0)) + ',' + (convertY(0)) + ' ' +
    //     (convertX(0)) + ',' + (convertY(r)) + ' ' +
    //     (convertX(r)) + ',' + (convertY(r)) + ' ' +
    //     (convertX(r)) + ',' + (convertY(0)) + ' ' +
    //     (convertX(0)) + ',' + (convertY(-r / 2));
    // console.log('area coordinates ' + area)
    // CANVAS.polygon(area).fill(BACKGROUND_COLOR)
}

drawPoint = (x, y, result, pointScale) => {
    let color = result === true ? '#0f0' : '#f00';
    CANVAS.circle(pointScale).fill(color).move(convertX(x) - pointScale / 2, convertY(y) - pointScale / 2);
}

getCoordinates = () => {
    let x = parseInt(document.getElementById('x').value)
    let y = parseFloat(document.getElementById('y').value)
    let r = parseFloat(document.getElementById('r').value)
    console.log(x + ', ' + y + ', ' + r)
    return [x, y, r]
}

function clickPointEvent(event) {
    console.log('Start drawing point after click! Received coords: ' + event.pageX + ', ' + event.pageY);
    let coordinates = getCoords(event);
    if (!(coordinates.r === "")) {
        // document.getElementById('x').value = coordinates.x;
        // document.getElementById('y').value = coordinates.y;
        // document.getElementById('r').value = coordinates.r;
        drawPoint(coordinates.x, coordinates.y, false, coordinates.r * 2);
        // removeErrors();
        // if (checkValues(coordinates)) {
        //     console.log('Try to draw point after click. Coordinates: x: ' + coordinates.x + ', y: ' + coordinates.y + ', r: ' + coordinates.r);
        //     document.getElementById('form').submit();
        // }
    }
}

function getCoords(event) {
    let coordinates = {};
    coordinates.x = convertToCoordinatesX(event.pageX - 100);
    coordinates.y = convertToCoordinatesY(event.pageY - 183);
    coordinates.r = $("#R_value").val();
    console.log('X: ' + coordinates.x);
    console.log('Y: ' + coordinates.y);
    console.log('R: ' + coordinates.r);
    return coordinates;
}

function switchRadius(r) {
    DEFAULT_R = $('#R_value').val();
    $('#plot').empty();
    drawPlot();
}