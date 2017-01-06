package com.share.restController;

import com.share.Enum.GaodeEnum;
import com.share.business.GaodeBusiness;
import com.share.model.CityVo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

/**
 * Created by max on 2016/11/19.
 */

@RestController
@RequestMapping("/gaode")
public class GaodeController {

    private static Logger logger = LoggerFactory.getLogger(GaodeController.class);

    @Autowired
    GaodeBusiness gaodeBusiness;

    @RequestMapping("/city/info")
    public CityVo getCity(String city){
        CityVo message = gaodeBusiness.getCity(city);
        return message;
    }

    @RequestMapping("/test")
    public String test(@RequestParam Map<String, String> map){

        logger.info(map.get("city"));
        return "";
    }

    @RequestMapping("/geo")
    public String getLngAndLat(String address, String city){
        RestTemplate restTemplate  = new RestTemplate();
        String url = GaodeEnum.GEOURL.getValue() + "?" + GaodeEnum.KEY.getName() + "=" + GaodeEnum.KEY.getValue() + "&address=" + address + "&city=" + city;
        String message = restTemplate.getForObject(url, String.class);
        logger.info("访问地址："+ url);
        logger.info("返回结果：" + message);
        return message;
    }

    @RequestMapping("/weather")
    public String getWeather(String city){
        String message = gaodeBusiness.getWeather(city);
        return message;
    }

    @RequestMapping("/ip")
    public String getCityByIP(String ip){
        String message = gaodeBusiness.getCityByIP(ip);
        return message;
    }

}
