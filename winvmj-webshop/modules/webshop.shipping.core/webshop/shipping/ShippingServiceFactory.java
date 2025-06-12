package webshop.shipping;

import webshop.shipping.core.ShippingService;
import java.lang.reflect.Constructor;
import java.util.logging.Logger;
import java.util.Arrays;

public class ShippingServiceFactory{
    private static final Logger LOGGER = Logger.getLogger(ShippingFactory.class.getName());

    public ShippingServiceFactory()
    {

    }

    public static ShippingService createShippingService(String fullyQualifiedName, Object ... base)
    {
        ShippingService record = null;
        try {
            Class<?> clz = Class.forName(fullyQualifiedName);
            Constructor<?> constructor = clz.getDeclaredConstructors()[0];
            System.out.println("Constructor: " + constructor);
            System.out.println("Base arguments: " + Arrays.toString(base));
            record = (ShippingService) constructor.newInstance(base);
        } 
        catch (IllegalArgumentException e)
        {
            LOGGER.severe("Failed to create instance of Shipping.");
            LOGGER.severe("Given FQN: " + fullyQualifiedName);
            LOGGER.severe("Failed to run: Check your constructor argument");
            System.exit(20);
        }
        catch (ClassCastException e)
        {   LOGGER.severe("Failed to create instance of Shipping.");
            LOGGER.severe("Given FQN: " + fullyQualifiedName);
            LOGGER.severe("Failed to cast the object");
            System.exit(30);
        }
        catch (ClassNotFoundException e)
        {
            LOGGER.severe("Failed to create instance of Shipping.");
            LOGGER.severe("Given FQN: " + fullyQualifiedName);
            LOGGER.severe("Decorator can't be applied to the object");
            System.exit(40);
        }
        catch (Exception e)
        {
            LOGGER.severe("Failed to create instance of Shipping.");
            LOGGER.severe("Given FQN: " + fullyQualifiedName);
            System.exit(50);
        }
        return record;
    }

}
