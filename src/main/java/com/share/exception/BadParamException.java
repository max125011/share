package com.share.exception;

/**
 * Created by max on 2016/12/14.
 */
public class BadParamException extends Exception {

    public BadParamException(String message){
        super("入参：" + message + "错误或者缺失，请检查！");
    }
}
