package com.dmittrey.WebLab2.exceptions;

public class OutOfBoundCoordinates extends RuntimeException {
    public OutOfBoundCoordinates(String coordinateName, double coordinateValue) {
        super("Coordinate " + coordinateName + " is out of bounds(" + coordinateValue + ").");
    }
}