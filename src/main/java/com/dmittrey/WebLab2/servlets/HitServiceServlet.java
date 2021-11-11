package com.dmittrey.WebLab2.servlets;

import com.dmittrey.WebLab2.beans.HitStorage;
import com.dmittrey.WebLab2.entities.Coordinates;
import com.dmittrey.WebLab2.entities.Hit;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class HitServiceServlet extends HttpServlet {

    private final Logger logger = LoggerFactory.getLogger("HitServiceServlet");

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        process(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        process(request, response);
    }

    private void process(HttpServletRequest request, HttpServletResponse response) throws IOException {

        Coordinates coordinates = (Coordinates) request.getAttribute("coordinates");

        Hit hit = new Hit();
        hit.setX(coordinates.getX());
        hit.setY(coordinates.getY());
        hit.setR(coordinates.getR());
        hit.setCurrentTime(LocalDateTime.now().format(DateTimeFormatter.ofPattern("HH:mm:ss")));
        hit.setExecutionTime((double) (System.nanoTime() - (Long) request.getAttribute("startTime")) / 1000000);
        hit.setResult((boolean) request.getAttribute("hitResult"));

        ((HitStorage) request.getSession().getAttribute("hitStorage")).add(hit);

        logger.info("Sending {}", hit);

        response.setHeader("Cache-Control", "no-cache");
        response.setContentType("application/json; charset=UTF-8");
        response.getWriter().println(hit.jsonHit());
    }
}