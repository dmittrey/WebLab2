package com.dmittrey.WebLab2.utility;

import com.dmittrey.WebLab2.beans.HitStorage;
import lombok.AllArgsConstructor;
import org.kopitubruk.util.json.JSONUtil;

import java.util.HashSet;
import java.util.Set;

@AllArgsConstructor
public class  HitListFormatter {

    private final HitStorage hitStorage;

    public String getRows() {
        StringBuilder rows = new StringBuilder();
        hitStorage.getHitList().forEach(hit -> rows.append("<tr>")
                .append("<th>").append(String.format("%.3f", hit.getX())).append("</th>")
                .append("<th>").append(String.format("%.3f", hit.getY())).append("</th>")
                .append("<th>").append(String.format("%.3f", hit.getR())).append("</th>")
                .append("<th>").append(hit.getCurrentTime()).append("</th>")
                .append("<th>").append(hit.getExecutionTime()).append("</th>")
                .append("<th>")
                .append(((hit.isResult()) ? "<span style='color: green'>TRUE" : "<span style='color: red'>FALSE"))
                .append("</span>").append("</th>")
                .append("</tr>"));
        return rows.toString();
    }

    public String getJson() {
        Set<String> jsonHitList = new HashSet<>();
        hitStorage.getHitList().forEach(hit -> {
            String jsonHit = hit.jsonHit();
            jsonHitList.add(jsonHit);
        });
        return JSONUtil.toJSON(jsonHitList);
    }
}