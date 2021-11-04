<jsp:useBean id="hitStorage" scope="session" class="com.dmittrey.WebLab2.HitStorage"/>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
    System.out.println(hitStorage.getCount());
    System.out.println(hitStorage.jsonHitList());
%>
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <title>Web2Lab</title>
    <script src="js/svg.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script type="text/javascript" src="js/graphHandler.js"></script>
    <script type="text/javascript" src="js/requestHandler.js"></script>
    <%--    <script type="text/javascript" src="js/Connector.js"></script>--%>
    <%--    <script type="text/javascript" src="js/CoordinatesValidator.js"></script>--%>
    <%--    <script type="text/javascript" src="js/processData.js"></script>--%>
    <%--    <link rel="stylesheet" href="styles/main.css">--%>
    <%--    <link rel="stylesheet" href="styles/mobile.css">--%>
    <%--    <link rel="stylesheet" href="styles/screen.css">--%>
    <link rel="icon" href="icon/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="styles/body_style.css">
    <link rel="stylesheet" type="text/css" href="styles/header_style.css">
    <link rel="stylesheet" type="text/css" href="styles/table_section_style.css">
    <link rel="stylesheet" type="text/css" href="styles/user_input_style.css">
</head>

<body onload='{drawPlot(${hitStorage.jsonHitList()})}'>

<!-- Шапка с именем и группой -->
<header>
    <div>
        <span>Dmitry Zubakhin</span>
        <span>P3221</span>
        <span>Variant 5487</span>
    </div>
</header>

<!-- Основные элементы -->
<main>
    <section class="user_input">

        <!-- Координатная плоскость с содержимым -->
        <div id='plot'></div>

        <!-- Форма для отправки данных серверу с помощью метода POST -->
        <form id="form"
              onclick="switchRadius($('#R_value').val())"
              onsubmit=""
              onreset="">

            <!-- Блок для ввода значений переменных -->
            <div class="values">

                <!-- Блок для значения Y -->
                <div class="X_value">
                    <!-- Кнопки для ввода значения X -->
                    <label>X value:
                        <input type="button" name="X_value" value="-3">
                        <input type="button" name="X_value" value="-2">
                        <input type="button" name="X_value" value="-1">
                        <input type="button" name="X_value" value="0">
                        <input type="button" name="X_value" value="1">
                        <input type="button" name="X_value" value="2">
                        <input type="button" name="X_value" value="3">
                    </label>
                </div>

                <!-- Блок для значения Y -->
                <div class="Y_value">

                    <!-- Поле ввода значения Y -->
                    <label for="Y_value">Y value:</label>
                    <input type="text" id="Y_value" name="Y_value" placeholder="Enter coordinate Y">
                </div>

                <!-- Блок для значения R -->
                <div class="R_value">

                    <!-- Поле ввода значения R -->
                    <label for="R_value">R value:</label>
                    <input type="text" id="R_value" name="R_value" placeholder="Enter coordinate R">
                </div>
            </div>

            <div class="Error_text">
                <span id="Y_error"></span>
                <span id="X_error"></span>
                <span id="R_error"></span>
            </div>

            <!-- Блок для кнопок отправки и обнуления -->
            <div class="buttons">
                <input id="submit" type="submit" value="SUBMIT">
                <input id="reset" type="reset" value="RESET">
            </div>

            <p id="Alert_text"></p>
        </form>

    </section>

    <!-- Блоки связанные с таблицей -->
    <section class="table_section">

        <!-- Кнопка очистки таблицы -->
        <div id="cleaner">
            <button onclick="cleanTable()">CLEAN TABLE</button>
        </div>

        <!-- Таблица регистрирующая попадания -->
        <div>
            <table id="table">
                <tr>
                    <th>X</th>
                    <th>Y</th>
                    <th>R</th>
                    <th>CURRENT TIME</th>
                    <th>EXECUTION TIME</th>
                    <th>HIT RESULT</th>
                </tr>
            </table>
        </div>
    </section>
</main>
<script>
    window.onload = $("#plot").on("click", function (e) {
        clickPointEvent(e);
    });
</script>
</body>
</html>