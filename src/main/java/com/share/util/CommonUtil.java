package com.share.util;

import sun.misc.BASE64Encoder;

import java.security.MessageDigest;
import java.util.UUID;

/**
 * Created by max on 2016/11/27.
 */
public class CommonUtil {

    public static String getUUID(){
        UUID id = UUID.randomUUID();
        String str = id.toString();
        return str.substring(0, 8) + str.substring(9, 13) + str.substring(14, 18) + str.substring(19, 23) + str.substring(24);
    }

    public static String getMD5(String str){
        try{
            MessageDigest md5= MessageDigest.getInstance("MD5");
            BASE64Encoder base64en = new BASE64Encoder();
            String newstr = base64en.encode(md5.digest(str.getBytes("utf-8")));
            return newstr;
        }catch (Exception e){
            return null;
        }
    }

}
