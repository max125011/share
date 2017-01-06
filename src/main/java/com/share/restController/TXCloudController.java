//package com.share.restController;
//
//import com.share.business.TXCloudBusiness;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import javax.annotation.Resource;
//
///**
// * Created by max on 2016/11/27.
// */
//@RestController
//@RequestMapping("/tx")
//public class TXCloudController {
//
//    private static Logger logger = LoggerFactory.getLogger(TXCloudController.class);
//
//    @Resource
//    TXCloudBusiness txCloudBusiness;
//
//    @RequestMapping("/upload")
//    public String uploadFile(String file){
//        String message = txCloudBusiness.uploadFile(file);
//        logger.info(file + "文件上传：" + message);
//        return message;
//    }
//
//    @RequestMapping("/download")
//    public String getFileLocal(String file){
//        String message = txCloudBusiness.getFileLocal(file);
//        logger.info(file + "文件下载：" + message);
//        return message;
//    }
//
//    @RequestMapping("/delete")
//    public String delFile(String file){
//        String message = txCloudBusiness.delFile(file);
//        logger.info(file + "文件刪除：" + message);
//        return message;
//    }
//
//    @RequestMapping("/list")
//    public String listFolder(){
//        String message = txCloudBusiness.listFolder();
//        logger.info("文件列表请求：" + message);
//        return message;
//    }
//}
