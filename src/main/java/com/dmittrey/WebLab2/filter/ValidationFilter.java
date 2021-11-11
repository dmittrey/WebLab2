package com.dmittrey.WebLab2.filter;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

import com.dmittrey.WebLab2.entities.Coordinates;
import com.dmittrey.WebLab2.exceptions.OutOfBoundCoordinates;
import com.dmittrey.WebLab2.utility.CoordinatesValidator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ValidationFilter implements Filter {
    private final Logger logger = LoggerFactory.getLogger("ValidationFilter");

    @Override
    public void init(FilterConfig filterConfig) {
        logger.info("Validation filter started");
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        logger.info("Got a new {}", servletRequest);
        servletRequest.setAttribute("startTime", System.nanoTime());
        HttpServletRequest httpRequest = (HttpServletRequest) servletRequest;

        if ("POST".equals(httpRequest.getMethod())) {
            try {
                double x = Double.parseDouble(servletRequest.getParameter("x"));
                double y = Double.parseDouble(servletRequest.getParameter("y"));
                double r = Double.parseDouble(servletRequest.getParameter("r"));
                logger.info("Coordinates values are x: {}, y: {}, r: {}", x, y, r);
                Coordinates coordinates = new Coordinates(x, y, r);

                CoordinatesValidator.validate(coordinates);

                servletRequest.setAttribute("coordinates", coordinates);
            } catch (NullPointerException | NumberFormatException | OutOfBoundCoordinates e) {
                logger.info("Error detected by validation filter. Message: {}", e.getMessage());
            }
        } else {
            logger.info("{} request came to Validation Filter", httpRequest.getMethod());
        }
        filterChain.doFilter(servletRequest, servletResponse);
    }

    @Override
    public void destroy() {
        logger.info("Validation filter destroyed");
    }
}