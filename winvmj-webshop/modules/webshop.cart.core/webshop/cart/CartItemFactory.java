package webshop.cart;

import webshop.cart.core.CartItem;
import java.lang.reflect.Constructor;
import java.util.logging.Logger;

public class CartItemFactory{
    private static final Logger LOGGER = Logger.getLogger(CartItemFactory.class.getName());

    public CartItemFactory()
    {

    }

    public static CartItem createCartItem(String fullyQualifiedName, Object ... base)
    {
        CartItem record = null;
        try {
            Class<?> clz = Class.forName(fullyQualifiedName);
            Constructor<?>[] constructorList = clz.getDeclaredConstructors();
            Constructor<?> constructor = null;
            for (int i = 0; i < constructorList.length; i++) {
              try {
                constructor = constructorList[i];
                System.out.println(constructor.toString());
                record = (CartItem) constructor.newInstance(base);
                i = constructorList.length;
                System.out.println(i);
              } catch (IllegalArgumentException e) {
                if (i < constructorList.length - 1) {
                  System.out.println("Trying other constructor");
                  continue;
                } else {
                  throw e;
                }
              }
            }
        }
        catch (IllegalArgumentException e)
        {
            LOGGER.severe("Failed to create instance of CartItem.");
            LOGGER.severe("Given FQN: " + fullyQualifiedName);
            LOGGER.severe("Failed to run: Check your constructor argument");
            System.exit(20);
        }
        catch (ClassCastException e)
        {   LOGGER.severe("Failed to create instance of CartItem.");
            LOGGER.severe("Given FQN: " + fullyQualifiedName);
            LOGGER.severe("Failed to cast the object");
            System.exit(30);
        }
        catch (ClassNotFoundException e)
        {
            LOGGER.severe("Failed to create instance of CartItem.");
            LOGGER.severe("Given FQN: " + fullyQualifiedName);
            LOGGER.severe("Decorator can't be applied to the object");
            System.exit(40);
        }
        catch (Exception e)
        {
            LOGGER.severe("Failed to create instance of CartItem.");
            LOGGER.severe("Given FQN: " + fullyQualifiedName);
            System.exit(50);
        }
        return record;
    }

}
