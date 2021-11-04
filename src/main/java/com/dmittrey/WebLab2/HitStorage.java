package com.dmittrey.WebLab2;

import jdk.nashorn.internal.runtime.logging.Logger;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.kopitubruk.util.json.JSONUtil;

import javax.inject.Named;
import java.io.Serializable;
import java.util.*;

@Logger
@Named()
@NoArgsConstructor
public class HitStorage implements Serializable {

    @Setter
    private List<Hit> hitList = Collections.synchronizedList(new LinkedList<>());

    public void clear() {
        hitList.clear();
    }

    public Hit[] getHitList(){
        return hitList.toArray(new Hit[0]);
    }

    public int getCount(){
        return hitList.size();
    }

    public String jsonHitList() {
        Set<String> jsonHitList = new HashSet<>();
        hitList.forEach(hit -> {
            String jsonHit = hit.jsonHit();
            jsonHitList.add(jsonHit);
        });
        return JSONUtil.toJSON(jsonHitList);
    }

    public void add(Hit aHit) {
        hitList.add(aHit);
    }
}