package com.share.Enum;

/**
 * Created by max on 2016/12/18.
 */
public enum AlibabaEnum {
    SMSSENDURL("url", "http://gw.api.taobao.com/router/rest"),
    APPKEY("appkey", "23569523"),
    SECRET("secret", "8dcfaa180b15033c78d61193bd5ed9e0"),
    SMS_CAR("share_sms_001", "SMS_34750190"),
    SMS_HOUSE("share_sms_002", "SMS_34765287"),
    ;

    private String name;
    private String value;

    private AlibabaEnum(String name, String value){
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
