package com.share.Enum;

/**
 * Created by max on 2016/11/27.
 */
public enum TXCloudEnum {
    APPID("APPID", "1251841039"),
    BUCKET001("bucketName", "share0001"),
    SECRETID("SecretId","AKID2OcTFw6LsEOExGmx4zhDXjsIkhYMdIoJ"),
    SECRETKEY("SecretKey", "cu8A4lJoFViqpiT2Tils6d0GJApPsIeq"),
    LOCALPATH("localPath", "C:/code/share/src/main/resources/static/tempFile/"),
    ;

    private String name;
    private String value;
    private TXCloudEnum(String name, String value){
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
