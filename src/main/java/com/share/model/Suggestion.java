package com.share.model;

/**
 * Created by max on 2016/11/22.
 */
public class Suggestion {

    public String[] keywords;
    public District[] cities;

    public String[] getKeywords() {
        return keywords;
    }

    public void setKeywords(String[] keywords) {
        this.keywords = keywords;
    }

    public District[] getCities() {
        return cities;
    }

    public void setCities(District[] cities) {
        this.cities = cities;
    }
}
