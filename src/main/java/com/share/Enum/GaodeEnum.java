package com.share.Enum;

/**
 * Created by max on 2016/11/20.
 */
public enum GaodeEnum {
    KEY("key", "3114ff8081f326ceaa944f9ddbcf086f"),
    AREAURL("url", "http://restapi.amap.com/v3/config/district"),
    GEOURL("url", "http://restapi.amap.com/v3/geocode/geo"),
    WEATHERURL("url", "http://restapi.amap.com/v3/weather/weatherInfo"),
    IPURL("url", "http://restapi.amap.com/v3/ip"),
    ;

    private String name;
    private String value;

    private GaodeEnum(String name, String value){
        this.name = name;
        this.value = value;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
