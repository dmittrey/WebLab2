package com.dmittrey.WebLab2.utility;

import com.dmittrey.WebLab2.beans.HitStorage;
import com.dmittrey.WebLab2.entities.Hit;
import org.kopitubruk.util.json.JSONUtil;

import java.util.HashSet;
import java.util.List;
import java.util.ListIterator;
import java.util.Set;

public class HitListFormatter {

    public static String getRows(HitStorage hitStorage) {
        List<Hit> hitList = hitStorage.getHitList();
        ListIterator<Hit> hitListIterator = hitList.listIterator(hitList.size());
        StringBuilder rows = new StringBuilder();
        while (hitListIterator.hasPrevious()) {
            Hit hit = hitListIterator.previous();
            rows.append("<tr>")
                    .append("<th>").append(String.format("%.3f", hit.getX())).append("</th>")
                    .append("<th>").append(String.format("%.3f", hit.getY())).append("</th>")
                    .append("<th>").append(String.format("%.3f", hit.getR())).append("</th>")
                    .append("<th>").append(hit.getCurrentTime()).append("</th>")
                    .append("<th>").append(hit.getExecutionTime()).append("</th>")
                    .append("<th>")
                    .append(((hit.isResult()) ? "<span style='color: green'>TRUE" : "<span style='color: red'>FALSE"))
                    .append("</span>").append("</th>")
                    .append("</tr>");
        }
        return rows.toString();
    }

    public static String getJson(HitStorage hitStorage) {
        Set<String> jsonHitList = new HashSet<>();
        hitStorage.getHitList().forEach(hit -> {
            String jsonHit = hit.jsonHit();
            jsonHitList.add(jsonHit);
        });
        return JSONUtil.toJSON(jsonHitList);
    }
}