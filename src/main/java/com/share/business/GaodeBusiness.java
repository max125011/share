package com.share.business;

import com.share.Enum.GaodeEnum;
import com.share.model.CityVo;
import com.share.model.District;
import com.share.service.DistrictService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

/**
 * Created by max on 2016/11/21.
 */
@Component
public class GaodeBusiness {

    private static Logger logger = LoggerFactory.getLogger(GaodeBusiness.class);

    @Autowired
    DistrictService districtService;

    /**
     * 描述：高德行政区域查询接口（个人开发者每天1000次调用权限）
     * 入参：
     * key -- 请求服务权限标识
     * keywords --  查询关键字
     * subdistrict -- 子级行政区0：不返回下级行政区；1：返回下一级行政区；2：返回下两级行政区；3：返回下三级行政区；
     * showbiz -- 是否显示商圈（为了物流，送餐等场景），建议设置成false
     * page -- 需要第几页数据
     * offset --   最外层返回数据个数（ <=20个）（默认20）
     * extensions -- 返回结果控制，base（默认）:不返回行政区边界坐标点；all:只返回当前查询district的边界值，不返回子节点的边界值；
     * filter -- 根据区划过滤
     * callback -- 回调函数
     * output -- 返回数据格式类型(JSON,XML),默认JSON
     *
     */
    public CityVo getCity(String city){
        RestTemplate restTemplate  = new RestTemplate();
        String url = GaodeEnum.AREAURL.getValue() + "?showbiz=false&subdistrict=2&extensions=base&keywords="
                + city + "&" + GaodeEnum.KEY.getName() + "=" + GaodeEnum.KEY.getValue();
        CityVo vo = restTemplate.getForObject(url, CityVo.class);
        if(vo.districts.length >0 && districtService.getDistrict(vo.districts[0].getAdcode()) == null)
            districtService.insertDistrict(vo.districts[0]);
        logger.info("调用高德url：" + url);
        logger.info("返回message：" + vo);
        return vo;
    }

    public String getWeather(String city){
        //为了落更多的城市数据落到数据库中
        District district = districtService.getDistrictByName(city);
        if(district != null)
            city = district.getName();
        else{
            CityVo vo = this.getCity(city);
            if(vo.districts.length >0)
                city = vo.districts[0].getName();
        }
        RestTemplate restTemplate  = new RestTemplate();
        String url = GaodeEnum.WEATHERURL.getValue() + "?" + GaodeEnum.KEY.getName() + "=" + GaodeEnum.KEY.getValue() + "&extensions=all&city=" + city;
        String message = restTemplate.getForObject(url, String.class);
        logger.info("访问高德url："+ url);
        logger.info("返回message：" + message);
        return message;
    }

    public String getCityByIP(String ip){
        RestTemplate restTemplate  = new RestTemplate();
        String url = GaodeEnum.IPURL.getValue() + "?" + GaodeEnum.KEY.getName() + "=" + GaodeEnum.KEY.getValue() + "&ip=" + ip;
        String message = restTemplate.getForObject(url, String.class);
        logger.info("访问高德url："+ url);
        logger.info("返回message：" + message);
        return message;
    }
}
