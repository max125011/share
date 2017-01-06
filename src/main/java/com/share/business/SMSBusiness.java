package com.share.business;

import com.share.Enum.AlibabaEnum;
import com.taobao.api.DefaultTaobaoClient;
import com.taobao.api.TaobaoClient;
import com.taobao.api.request.AlibabaAliqinFcSmsNumSendRequest;
import com.taobao.api.response.AlibabaAliqinFcSmsNumSendResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by max on 2016/12/17.
 */
@Component
public class SMSBusiness {

    private static Logger logger = LoggerFactory.getLogger(SMSBusiness.class);

    /**
     *  短信发送接口，对接阿里大于的短信平台
     *  为了减少短信消耗，服务端做严格参数严格验证，确保所有入参均无误情况下再调用发短信接口
     *
     * @param tel
     * @param type
     * @param user
     * @param product
     * @param days
     * @param begin
     */
    public void send(String tel, String type, String user, String product, String days, Date begin){

        if(tel == null || user ==null || product == null || days == null || begin == null || type == null)
            return;
        TaobaoClient client = new DefaultTaobaoClient(AlibabaEnum.SMSSENDURL.getValue(), AlibabaEnum.APPKEY.getValue(), AlibabaEnum.SECRET.getValue());
        AlibabaAliqinFcSmsNumSendRequest req = new AlibabaAliqinFcSmsNumSendRequest();
        req.setSmsType("normal");
        req.setSmsFreeSignName("马雄");
        req.setRecNum(tel);
        if (type.equals("1"))
            req.setSmsTemplateCode(AlibabaEnum.SMS_CAR.getValue());
        else if (type.equals("2"))
            req.setSmsTemplateCode(AlibabaEnum.SMS_HOUSE.getValue());
        else
            return;
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        String params = "{\"user\":\"" + user + "\",\"product\":\"" + product + "\",\"days\":\"" + days + "\",\"begin\":\"" + format.format(begin) + "\"}";
        req.setSmsParamString(params);
        try {
            AlibabaAliqinFcSmsNumSendResponse rsp = client.execute(req);
            logger.info(rsp.getBody());
        }catch (Exception e){
            logger.info("SMS发送接口异常：" + e.getCause());
            logger.info(e.getStackTrace().toString());
        }

    }
}
