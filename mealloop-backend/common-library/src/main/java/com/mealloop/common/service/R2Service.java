package com.mealloop.common.service;

import java.util.List;

public interface R2Service {
    List<String> getFiles(String bucketName, String prefix);
    void getFileInfor(String bucketName, String key);
    Boolean fileExists(String bucketName, String key);
    List<String> findFilesByPrefix(String bucketName, String prefix);
    List<String> findFilesByMetadata(String bucketName, String metadataKey, String metadataValue);
    List<String> findFilesByTag(String bucketName, String tagKey, String tagValue);
    String generatePublicUrl(String bucketName, String prefix);

    String uploadFile(String bucketName, String key);
    String uploadFileWithMetadata();
    byte[] downloadFile();
    Boolean deleteFile(String bucketName, String key);
}