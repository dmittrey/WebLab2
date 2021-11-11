package com.dmittrey.WebLab2.beans;

import com.dmittrey.WebLab2.entities.Hit;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.*;

@NoArgsConstructor
public class HitStorage implements Serializable {

    @Setter
    private List<Hit> hitList = Collections.synchronizedList(new LinkedList<>());

    public List<Hit> getHitList() {
        return hitList;
    }

    public void add(Hit aHit) {
        hitList.add(aHit);
    }

    public void clear() {
        hitList.clear();
    }
}