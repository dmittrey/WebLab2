package com.dmittrey.WebLab2.utility;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class CoordinatesValidator {

    public boolean validate(String xCoordinate, String yCoordinate, String rCoordinate) {
        return validateX(xCoordinate) &&
                validateY(yCoordinate) &&
                validateR(rCoordinate);
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
        return true;
    }
}