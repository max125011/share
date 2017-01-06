package com.share.Enum;

/**
 * Created by max on 2016/11/21.
 */
public enum BaiduMapEnum {

    AK("ak", "PWEa49UgM9KCilWtxShHpiNWof1erT9Q"),
    SEARCHURL("url", "http://api.map.baidu.com/place/v2/search"),
    ;

    private String name;
    private String value;

    private BaiduMapEnum(String name, String value){
        this.name = name;
        this.value = value;
    }

}
