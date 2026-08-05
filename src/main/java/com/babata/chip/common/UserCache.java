package com.babata.chip.common;

public class UserCache {
    private static final ThreadLocal<UserContext> local = new ThreadLocal<>();

    public static UserContext getUserContext() {
        return local.get();
    }

    public static void setUserContext(UserContext userContext) {
        local.set(userContext);
    }
}
