package com.dmittrey.WebLab2.beans;

import com.dmittrey.WebLab2.entities.Hit;
import jdk.nashorn.internal.runtime.logging.Logger;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.inject.Named;
import java.io.Serializable;
import java.util.*;

@Logger
@Named()
@NoArgsConstructor
public class HitStorage implements Serializable {

    @Setter
    private List<Hit> hitList = Collections.synchronizedList(new LinkedList<>());

    public List<Hit> getHitList(){
        return hitList;
    }

    public int getCount(){
        return hitList.size();
    }

    public void add(Hit aHit) {
        hitList.add(aHit);
    }
}