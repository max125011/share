//package com.share.business;
//
//import com.qcloud.cos.COSClient;
//import com.qcloud.cos.ClientConfig;
//import com.qcloud.cos.request.DelFileRequest;
//import com.qcloud.cos.request.GetFileLocalRequest;
//import com.qcloud.cos.request.ListFolderRequest;
//import com.qcloud.cos.request.UploadFileRequest;
//import com.qcloud.cos.sign.Credentials;
//import com.share.Enum.TXCloudEnum;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.stereotype.Component;
//
//import java.io.File;
//
///**
// * Created by max on 2016/11/28.
// * 对接腾讯云COS对象存储，对上传下载及管理接口进行封装
// */
//@Component
//public class TXCloudBusiness {
//
//    private static Logger logger =  LoggerFactory.getLogger(TXCloudBusiness.class);
//
//    COSClient client;
//
//    /**
//     *  本地文件上传接口，为了减轻本地服务器压力，将大的静态文件例如：图片、音频、视频等文件存储在腾讯云上
//     *  接口逻辑：
//     *      服务器开放本地上传接口，会直接先上传到本地服务器临时文件夹中，然后定时扫描上传到腾讯云上，同时删除
//     *      本地临时文件
//     * @param name
//     * @return
//     */
//    public String uploadFile(String name){
//        String localPath = TXCloudEnum.LOCALPATH.getValue() + name;
//        UploadFileRequest uploadFileRequest = new UploadFileRequest(TXCloudEnum.BUCKET001.getValue(), "/" + name,
//                localPath);
//        String uploadFileReturn = client.uploadFile(uploadFileRequest);
//        if(uploadFileReturn.contains("SUCCESS")){
//            File file = new File(localPath);
//            if (!file.delete())
//                logger.error(name + "文件已经上传，本地删除失败，请通过本条日志手动删除！");
//        }
//        return uploadFileReturn;
//    }
//
//    public String getFileLocal(String name){
//        String localPath = TXCloudEnum.LOCALPATH.getValue() + name;
//        GetFileLocalRequest getFileLocalRequest =
//                new GetFileLocalRequest(TXCloudEnum.BUCKET001.getValue(), "/" + name, localPath);
//        getFileLocalRequest.setUseCDN(false);
//        String getFileResult = client.getFileLocal(getFileLocalRequest);
//        return getFileResult;
//    }
//
//    public String delFile(String name){
//        DelFileRequest delFileRequest = new DelFileRequest(TXCloudEnum.BUCKET001.getValue(), "/" + name);
//        String delFileReturn = client.delFile(delFileRequest);
//        return delFileReturn;
//    }
//
//    public String listFolder(){
//        ListFolderRequest listFolderRequest = new ListFolderRequest(TXCloudEnum.BUCKET001.getValue(), "/");
//        String listFolderRet = client.listFolder(listFolderRequest);
//        return listFolderRet;
//    }
//
//    /**
//     *  无参构造器，在启动时构造一个COSClient实例，调用所有方法都用该实例，不new多余的COSClient实例
//     */
//    public TXCloudBusiness(){
//        Credentials cred = new Credentials(Long.valueOf(TXCloudEnum.APPID.getValue()), TXCloudEnum.SECRETID.getValue(),
//                TXCloudEnum.SECRETKEY.getValue());
//        ClientConfig config = new ClientConfig();
//        config.setRegion("sh");
//        client = new COSClient(config, cred);
//    }
//
//}
