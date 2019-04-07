package com.fh.shop.thymeleaf.common;

public enum ResponseEnum {
    RESULT_USERNAME_ISNOT(1000, "账号已存在"),
    RESULT_USERNAME_ERROR(1001, "账号不能为空"),
    RESULT_USERNAMEORPWD_ISNOT(1002, "账号或密码或验证码不能为空"),
    RESULT_USERNAMEORPWD_ERROR(1003, "账号或密码错误"),
    RESULT_LOG_USER_LOCK(1004, "账号被锁定"),
    RESULT_IMAGECODE_ERROR(1005, "验证码错误"),
    ERROR(-1, "请联系管理员"),
    SUCCESS(200, "成功");

    private Integer code;

    private String message;

    private ResponseEnum() {
    }

    private ResponseEnum(Integer code, String message) {
        this.code = code;
        this.message = message;
    }

    public Integer getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }

}
