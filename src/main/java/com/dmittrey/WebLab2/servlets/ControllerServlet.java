package com.dmittrey.WebLab2.servlets;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ControllerServlet extends HttpServlet {

    CoordinatesValidator coordinatesValidator = new CoordinatesValidator();

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        request.setAttribute("startTime", System.nanoTime());

        boolean dataIsCorrect = coordinatesValidator.validate(
                request.getParameter("x"),
                request.getParameter("y"),
                request.getParameter("r")
        );

        if (dataIsCorrect) {
            RequestDispatcher dispatcher = request.getRequestDispatcher("./check");
            dispatcher.forward(request, response);
        } else {
            response.sendError(400, "Server can't validate data!");
        }
    }
}