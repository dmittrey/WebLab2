package com.dmittrey.WebLab2;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ControllerServlet extends HttpServlet {
//    Logger logger = Logger.getLogger(ControllerServlet.class.getName());

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

//        logger.info("request is come");
        request.setAttribute("startTime", System.nanoTime());

//        Object hitStorage = request.getSession().getAttribute("hitStorage");
//        if (hitStorage == null) request.getSession().setAttribute("hitStorage", new HitStorage());

        boolean dataIsCorrect = validateX(request.getParameter("x")) &&
                validateY(request.getParameter("y")) &&
                validateR(request.getParameter("r"));

        if (dataIsCorrect) {
//            logger.info("data is correct");
            RequestDispatcher dispatcher = request.getRequestDispatcher("./check");
            dispatcher.forward(request, response);
        } else {
//            logger.info("data is incorrect");
            response.sendError(400, "Server can't validate data!");
        }
    }

    private boolean validateX(String xString) {
        if (xString == null) {
            return false;
        } else {
            try {
                float x = Float.parseFloat(xString);
                if (x < -3 || x > 3) {
                    return false;
                }
            } catch (NumberFormatException e) {
                return false;
            }
        }
//        logger.info(xString);
        return true;
    }

    private boolean validateY(String yString) {
        if (yString == null) {
            return false;
        } else {
            try {
                float y = Float.parseFloat(yString);
                if (y < -5 || y > 5) {
                    return false;
                }
            } catch (NumberFormatException e) {
                return false;
            }
        }
//        logger.info(yString);
        return true;
    }

    private boolean validateR(String rString) {
        if (rString == null) {
            return false;
        } else {
            try {
                float r = Float.parseFloat(rString);
                if (r < 2 || r > 5) {
                    return false;
                }
            } catch (NumberFormatException e) {
                return false;
            }
        }
//        logger.info(rString);
        return true;
    }
}