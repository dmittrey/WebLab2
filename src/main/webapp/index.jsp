<%@ page pageEncoding="UTF-8" isELIgnored="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page import="com.dmittrey.WebLab2.HitResult" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Web1Lab</title>
    <link rel="icon" href="icon/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="styles/body_style.css">
    <link rel="stylesheet" type="text/css" href="styles/header_style.css">
    <link rel="stylesheet" type="text/css" href="styles/table_section_style.css">
    <link rel="stylesheet" type="text/css" href="styles/user_input_style.css">
    <script src="js/validate_functions.js"></script>
    <script src="js/alert_injector.js"></script>
    <script src="js/dot_animation.js"></script>
    <script src="js/request_handler.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="js/table_cleaner.js"></script>
`    <script>
        $(document).on('click', 'input[type="button"]', function () {
            $('.X_value input[type="button"]').removeClass('selected');
            $(this).addClass('selected');
            doAnimate();
        });
    </script>`
    <script>
        function reset_page(){
            $('.Error_text').html('');
            $('#dot').attr('r', '0');
        }
    </script>
</head>
<body>

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

    <!-- Блок, отвечающий за взаимодействие с пользователем -->
    <section class="user_input">

        <!-- Координатная плоскость с содержимым -->
        <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
            <!-- Оси координат -->
            <line x1="0" x2="300" y1="150" y2="150"></line>
            <line x1="150" x2="150" y1="0" y2="300"></line>
            <!-- Стрелки к осям -->
            <polygon points="150,0 145,15 155,15" stroke="black"></polygon>
            <polygon points="300,150 285,145 285,155" stroke="black"></polygon>
            <!-- Метки для значений R на оси X -->
            <line x1="50" x2="50" y1="140" y2="160"></line>
            <line x1="100" x2="100" y1="140" y2="160"></line>
            <line x1="200" x2="200" y1="140" y2="160"></line>
            <line x1="250" x2="250" y1="140" y2="160"></line>
            <!-- Метки для значений R на оси Y -->
            <line x1="140" x2="160" y1="50" y2="50"></line>
            <line x1="140" x2="160" y1="100" y2="100"></line>
            <line x1="140" x2="160" y1="200" y2="200"></line>
            <line x1="140" x2="160" y1="250" y2="250"></line>
            <!-- Прямоугольник в первой четверти -->
            <polygon stroke="blue" fill="blue" fill-opacity="0.3" points="50,150 50,100 150,100 150,150"></polygon>
            <!-- Четверть круга во второй четверти -->
            <path stroke="green" fill="green" fill-opacity="0.3"
                  d="M150,50 A100,100 90 0,1 250,150 L 150,150 Z"></path>
            <!-- Треугольник в третьей четверти -->
            <polygon stroke="yellow" fill="yellow" fill-opacity="0.3" points="150,150 200,150 150,200"></polygon>
            <!-- Подписи к осям -->
            <text x="285" y="135">X</text>
            <text x="160" y="15">Y</text>
            <!-- Значения R на оси X -->
            <text x="40" y="130">-R</text>
            <text x="85" y="130">-R/2</text>
            <text x="190" y="130">R/2</text>
            <text x="245" y="130">R</text>
            <!-- Значения R на оси Y -->
            <text x="170" y="52.5">R</text>
            <text x="170" y="102.5">R/2</text>
            <text x="170" y="202.5">-R/2</text>
            <text x="170" y="252.5">-R</text>
            <!-- Точка показывающая выбор -->
            <circle id="dot" fill="white" color="white" r="0" cx="0" cy="0"></circle>
        </svg>

        <!-- Форма для отправки данных серверу с помощью метода POST -->
        <form id="form"
              onsubmit="return send_request()"
              onreset="reset_page()">

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
        </form>

    </section>

    <!-- Блоки связанные с таблицей -->
    <section class="table_section">

        <!-- Кнопка очистки таблицы -->
        <div id="cleaner">
            <input type="button" value="CLEAN TABLE" onclick="cleanTable()">
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
</body>
</html>