package com.dmittrey.WebLab2;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class ControllerServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        request.setAttribute("startTime", System.nanoTime());
        PrintWriter out = response.getWriter();
        boolean dataIsCorrect = validateX(request.getParameter("x"), out) &&
                validateY(request.getParameter("y"), out) &&
                validateR(request.getParameter("r"), out);

        RequestDispatcher dispatcher;
        if (dataIsCorrect) {
            dispatcher = request.getRequestDispatcher("./check");
        } else {
            dispatcher = request.getRequestDispatcher("./index.jsp");
        }
        dispatcher.forward(request, response);
    }

    private boolean validateX(String xString, PrintWriter out) {
        if (xString == null) {
            out.println("X is not assigned");
            return false;
        } else {
            try {
                float x = Float.parseFloat(xString);
                if (x < -3 || x > 6) {
                    out.println("X is not valid");
                    return false;
                }
            } catch (NumberFormatException e) {
                out.println("X can not be parsed");
                return false;
            }
        }
        return true;
    }

    private boolean validateY(String yString, PrintWriter out){
        if (yString == null) {
            out.println("Y is not assigned");
            return false;
        } else {
            try {
                float y = Float.parseFloat(yString);
                if (y<-5 || y>5) {
                    out.println("Y is not valid");
                    return false;
                }
            } catch (NumberFormatException e) {
                out.println("Y can not be parsed");
                return false;
            }
        }
        return true;
    }

    private boolean validateR(String rString, PrintWriter out){
        if (rString == null) {
            out.println("R is not assigned");
            return false;
        } else {
            try {
                float r = Float.parseFloat(rString);
                if (r<2 || r>5) {
                    out.println("R is not valid");
                    return false;
                }
            } catch (NumberFormatException e) {
                out.println("R can not be parsed");
                return false;
            }
        }
        return true;
    }
}