package com.dmittrey.WebLab2;

import java.util.HashMap;
import java.util.Map;

/**
 * Bean class to save hits
 */
public class Hit {
    private double x;
    private double y;
    private double r;
    private String currentTime;
    private double executionTime;
    private boolean result;

    public Hit() {
    }

    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getR() {
        return r;
    }

    public void setR(double r) {
        this.r = r;
    }

    public String getCurrentTime() {
        return currentTime;
    }

    public void setCurrentTime(String currentTime) {
        this.currentTime = currentTime;
    }

    public double getExecutionTime() {
        return executionTime;
    }

    public void setExecutionTime(double executionTime) {
        this.executionTime = executionTime;
    }

    public boolean isResult() {
        return result;
    }

    public void setResult(boolean result) {
        this.result = result;
    }

    public Map<String, String> getMap() {
        Map<String, String> fields = new HashMap<>();
        fields.put("x", String.valueOf(x));
        fields.put("y", String.valueOf(y));
        fields.put("r", String.valueOf(r));
        fields.put("currentTime", String.valueOf(currentTime));
        fields.put("executionTime", String.valueOf(executionTime));
        System.out.println(result);
        fields.put("result", String.valueOf(result));
        return fields;
    }
}
