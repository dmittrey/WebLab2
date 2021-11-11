package com.dmittrey.WebLab2.entities;

import lombok.*;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Coordinates implements Serializable {
    private double x;
    private double y;
    private double r;
}