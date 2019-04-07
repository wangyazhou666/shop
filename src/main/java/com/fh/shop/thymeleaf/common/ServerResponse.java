package com.fh.shop.thymeleaf.common;

import java.io.Serializable;

public class ServerResponse implements Serializable {

    private static final long serialVersionUID = -1258103569327407795L;

    private Integer code;

    private String message;

    private Object data;

    public static ServerResponse error(String message) {
        return new ServerResponse(-2, message, null);
    }

    public static ServerResponse error(ResponseEnum responseEnum) {
        return new ServerResponse(responseEnum.getCode(), responseEnum.getMessage(), null);
    }

    public static ServerResponse success(ResponseEnum responseEnum) {
        return new ServerResponse(responseEnum.getCode(), responseEnum.getMessage(), null);
    }

    public static ServerResponse error() {
        return new ServerResponse(ResponseEnum.ERROR.getCode(), ResponseEnum.ERROR.getMessage(), null);
    }

    public static ServerResponse success(Object data) {
        return new ServerResponse(ResponseEnum.SUCCESS.getCode(), ResponseEnum.SUCCESS.getMessage(), data);
    }

    public static ServerResponse success() {
        return new ServerResponse(ResponseEnum.SUCCESS.getCode(), ResponseEnum.SUCCESS.getMessage(), null);
    }

    public static ServerResponse success(String message) {
        return new ServerResponse(ResponseEnum.SUCCESS.getCode(), message, null);
    }

    private ServerResponse() {
    }

    private ServerResponse(Integer code, String message, Object data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }

    public Integer getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }

    public Object getData() {
        return data;
    }

}
