package com.dmittrey.WebLab2.utility;

import com.dmittrey.WebLab2.entities.Coordinates;
import com.dmittrey.WebLab2.exceptions.OutOfBoundCoordinates;
import lombok.NoArgsConstructor;

@NoArgsConstructor
public class CoordinatesValidator {

    public static void validate(Coordinates coordinates) {
        validateX(coordinates.getX());
        validateY(coordinates.getY());
        validateR(coordinates.getR());
    }

    private static void validateX(double xCoordinate) {
        if (xCoordinate < -3 || xCoordinate > 3)
            throw new OutOfBoundCoordinates("x", xCoordinate);
    }

    private static void validateY(double yCoordinate) {
        if (yCoordinate < -5 || yCoordinate > 5)
            throw new OutOfBoundCoordinates("y", yCoordinate);
    }

    private static void validateR(double rCoordinate) {
        if (rCoordinate < 2 || rCoordinate > 5)
            throw new OutOfBoundCoordinates("r", rCoordinate);
    }
}