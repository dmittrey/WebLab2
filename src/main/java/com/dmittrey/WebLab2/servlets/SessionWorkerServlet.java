package com.dmittrey.WebLab2.servlets;

import com.dmittrey.WebLab2.beans.HitStorage;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class SessionWorkerServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) {
        ((HitStorage) request.getSession().getAttribute("hitStorage")).clear();
        response.setStatus(200);
    }
}
