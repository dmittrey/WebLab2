package com.dmittrey.WebLab2;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.LocalDateTime;

public class AreaCheckServlet extends HttpServlet {

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        int x = Integer.parseInt(request.getParameter("x"));
        float y = Float.parseFloat(request.getParameter("y"));
        float r = Float.parseFloat(request.getParameter("r"));

        boolean hitResult = checkHitResult(x, y, r);
        Object startTime = request.getAttribute("startTime");

        Hit hit = new Hit();

        hit.setX(x);
        hit.setY(y);
        hit.setR(r);
        hit.setCurrentTime(LocalDateTime.now().toString());
        hit.setExecutionTime((double) (System.nanoTime() - (Long) startTime) / 1000000);
        hit.setResult(hitResult);

        HitStorage.getInstance().addHit(hit);

        RequestDispatcher dispatcher = request.getRequestDispatcher("./index.jsp");
        dispatcher.forward(request, response);
    }

    private boolean checkHitResult(int x, float y, float r) {
        return isBlueZone(x, y, r) || isGreenZone(x, y, r) || isYellowZone(x, y, r);
    }

    private boolean isBlueZone(int x, float y, float r) {
        return (x >= -r) && (x <= 0) && (y <= r / 2) && (y >= 0);
    }

    private boolean isGreenZone(int x, float y, float r) {
        return (x >= 0) && (y >= 0) && (Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(r, 2));
    }

    private boolean isYellowZone(int x, float y, float r) {
        return (y <= 0) && (x >= 0) && (y >= x - r / 2);
    }
}