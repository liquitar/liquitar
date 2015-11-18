package com.liquitar.www.util;

import java.util.Random;

public class RandomUtil {

    private static Random random = new Random();

    /**
     * 
     * @param length
     *            返回length位随机数
     * @return
     */
    public static int getRandomInteger(int length) {
        int param = 10;
        for (int i = 0; i < length; i++) {
            param = param * 10;
        }
        return random.nextInt(param);
    }
}
