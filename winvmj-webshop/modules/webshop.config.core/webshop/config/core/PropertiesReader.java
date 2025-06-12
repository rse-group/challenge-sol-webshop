package webshop.config.core;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.*;

public class PropertiesReader {
    private static Properties loadProperties(String fileName) {
        FileInputStream input = null;
        Properties prop = new Properties();

        try {
            input = new FileInputStream(fileName);
            // load a properties file
            prop.load(input);
        } catch (IOException ex) {
            System.out.println(ex);
        } finally {
            if (input != null) {
                try {
                    input.close();
                } catch (IOException e) {
                }
            }
        }
        return prop;
    }

    public static String getProp(String fileName, String propName) {
        Properties prop = loadProperties(fileName);
        return prop.getProperty(propName);
    }

}