package com.dmittrey.WebLab2.servlets;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Optional;

public class ControllerServlet extends HttpServlet {
    private final Logger logger = LoggerFactory.getLogger("ControllerServlet");

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        process(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        process(request, response);
    }

    protected void process(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        if (Optional.ofNullable(request.getParameter("session")).orElse("").equals("clear")) {
            logger.info("Client wants to clear session. Redirect to session worker");
            request.getRequestDispatcher("./sessionClear").forward(request, response);
        } else {
            if (request.getAttribute("coordinates") == null) {
                logger.info("Wrong argument's in request");
                response.setStatus(400);
                response.getWriter().println("Server can't validate data!");
            } else {
                logger.info("Coordinates are correct. Redirect to checker");
                request.getRequestDispatcher("./check").forward(request, response);
            }
        }
    }
}