package com.dmittrey.WebLab2.servlets;

import com.dmittrey.WebLab2.beans.HitStorage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class SessionWorkerServlet extends HttpServlet {

    private final Logger logger = LoggerFactory.getLogger("SessionWorkerServlet");

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) {
        process(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) {
        process(request, response);
    }

    private void process(HttpServletRequest request, HttpServletResponse response) {
        logger.info("Session cleared");
        ((HitStorage) request.getSession().getAttribute("hitStorage")).clear();
        response.setStatus(200);
    }
}