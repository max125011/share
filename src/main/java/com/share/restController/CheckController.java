package com.share.restController;

import com.share.model.CarCheck;
import com.share.service.CheckService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by max on 2016/12/13.
 */
@RestController
@RequestMapping("/check")
public class CheckController {

    private static Logger logger = LoggerFactory.getLogger(CheckController.class);

    @Autowired
    CheckService checkService;

    @GetMapping("/{id}")
    public CarCheck getCarCheckById(@PathVariable int id){
        CarCheck carCheck = checkService.getCarCheckById(id);
        logger.info(id + " : " + carCheck);
        return carCheck;
    }

    @PostMapping("/insert")
    public int insertCarCheck(@RequestBody CarCheck carCheck){
        int message = checkService.insertCarCheck(carCheck);
        logger.info(carCheck + " : " + message);
        return message;
    }

    @PostMapping("/update")
    public int updateCarCheck(@RequestBody CarCheck carCheck){
        int message = checkService.updateCarCheck(carCheck);
        logger.info(carCheck + " : " + message);
        return  message;
    }
}
