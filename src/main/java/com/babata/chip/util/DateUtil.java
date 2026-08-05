package com.babata.chip.util;

import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtil {
    private static final SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    public static String getCurrentTimeStr() {
        Date date = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sdf.format(date);
    }

    public static String getDateString(Date date) {
        if (date == null) {
            return "";
        }
        return sdf.format(date);
    }

    public static Long getDateDiffSecs(Date d1, Date d2) {
        return Math.abs(d2.getTime() - d1.getTime()) / 1000;
    }

    public static Long getDateDiffMilliSecs(Date d1, Date d2) {
        return Math.abs(d2.getTime() - d1.getTime());
    }
}
