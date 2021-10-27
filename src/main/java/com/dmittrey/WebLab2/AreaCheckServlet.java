package com.dmittrey.WebLab2;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;
import java.util.logging.Logger;

public class AreaCheckServlet extends HttpServlet {
    private static final Logger logger = Logger.getLogger(AreaCheckServlet.class.getName());

    public void init() {

    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/html");

        PrintWriter out = response.getWriter();
        Enumeration<String> iterator = request.getParameterNames();
        while (iterator.hasMoreElements()){
            out.println("<html>");
            out.println("<head>");
            out.println("</head>");
            out.println("<body>");
            out.println("<p>");
            out.println(iterator.nextElement());
            out.println("<p>");
            out.println("</body>");
            out.println("</html>");
//            out.println(iterator.nextElement());
        }
    }

    public void destroy() {
    }
}