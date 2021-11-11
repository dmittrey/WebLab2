package com.dmittrey.WebLab2.servlets;

import com.dmittrey.WebLab2.entities.Coordinates;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AreaCheckServlet extends HttpServlet {
    private final Logger logger = LoggerFactory.getLogger("AreaCheckServlet");

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        process(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        process(request, response);
    }

    private void process(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        Coordinates coordinates = (Coordinates) request.getAttribute("coordinates");

        boolean hitResult = checkHitResult(coordinates);
        logger.info("Hit result is {}", hitResult);
        request.setAttribute("hitResult", hitResult);

        request.getRequestDispatcher("./hitService").forward(request, response);
    }

    private boolean checkHitResult(Coordinates coordinates) {
        return isBlueZone(coordinates) || isGreenZone(coordinates) || isYellowZone(coordinates);
    }

    private boolean isBlueZone(Coordinates coordinates) {
        double x = coordinates.getX();
        double y = coordinates.getY();
        double r = coordinates.getR();

        return (x >= -r) && (x <= 0) && (y <= r / 2) && (y >= 0);
    }

    private boolean isGreenZone(Coordinates coordinates) {
        double x = coordinates.getX();
        double y = coordinates.getY();
        double r = coordinates.getR();

        return (x >= 0) && (y >= 0) && (Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(r, 2));
    }

    private boolean isYellowZone(Coordinates coordinates) {
        double x = coordinates.getX();
        double y = coordinates.getY();
        double r = coordinates.getR();

        return (y <= 0) && (x >= 0) && (y >= x - r / 2);
    }
}