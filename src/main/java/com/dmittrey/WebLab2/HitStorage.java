package com.dmittrey.WebLab2;

import java.util.LinkedList;
import java.util.List;

public class HitStorage {

    private final List<Hit> hitList;
    private static HitStorage instance;

    private HitStorage(){
        hitList = new LinkedList<>();
    }

    public static HitStorage getInstance(){
        if (instance == null) instance = new HitStorage();
        return instance;
    }

    public synchronized void addHit(Hit aHit) {
        hitList.add(aHit);
    }
}
