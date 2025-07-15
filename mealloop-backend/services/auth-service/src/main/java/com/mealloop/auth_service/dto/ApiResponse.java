package com.mealloop.auth_service.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.OffsetDateTime;

//@Data
//@NoArgsConstructor
//@AllArgsConstructor
//@Builder(toBuilder = true)
//@JsonInclude(JsonInclude.Include.NON_NULL)
//public class ApiResponse<T> {
//    private Integer statusCode = 200;
//    private String errorCode; // dựa theo quy tắc của hệ thống, giúp người dùng báo về mã lỗi thay vì chung chung như 400, 403...
//    private String message;
//
//    @Builder.Default
//    private OffsetDateTime timestamp = OffsetDateTime.now();
//
//    private T data;
//}
