/*
	Generated on 05/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';
import validateQuantityOrderItem from '../services/validateQuantityOrderItem'

import clearCartItem from '../services/clearCartItem'
import deleteCartItem from '../services/deleteCartItem'
import * as Layouts from "@/commons/layouts";

const CartSummary = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalConfirmClearCart, setShowModalConfirmClearCart] = React.useState(false); 
    const [showModalConfirmRemoveCartItem, setShowModalConfirmRemoveCartItem] = React.useState(false); 
    const checkout = async () => {
      await validateQuantityOrderItem({
      });
  	navigate('/cart/checkout/delivery');
    }
  
    const clear = async () => {
      await clearCartItem({
        cartId: data.cartId,
      });
      window.location.reload();
    };
    const remove = async () => {
      await deleteCartItem({
        cartItemId: data.cartItemId,
      });
      window.location.reload();
    };
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
                {
                  id: "totalPrice",
                  condition: "isCurrency",
                  label: "Total Price",
                  featureName: "amount",
                }
        
      ]}
      itemsEvents={[
          checkPermission("SaveOrder") &&  (
          	<Button
          	  id="_YbJ3UOxBEe-Bw4Gtm2pZBg"
          	  variant="secondary"
          	  onClick={() => checkout()}
          	>
          	  Checkout
          	</Button>
          )
        ,
          <Button
          id="_8a5BQPM1Ee-sOY7xW5iSqw"
          variant="secondary"
          onClick={() => setShowModalConfirmClearCart(true)}
        >
          Clear
        </Button>
        
      ]}
      itemsModals={[
        <Modal
           isShow={showModalConfirmClearCart}
           title={"Confirm Clear Cart"}
        >
           <Link to=''><Button variant="tertiary" onClick={() => setShowModalConfirmClearCart(false)}>Batal</Button></Link>
          <Button
            id="_YcHQUPM2Ee-sOY7xW5iSqw"
            variant="secondary"
            onClick={() => clear()}
          >
            Clear
          </Button>
        </Modal>,
        <Modal
           isShow={showModalConfirmRemoveCartItem}
           title={"Confirm Remove Cart Item"}
        >
           <Link to=''><Button variant="tertiary" onClick={() => setShowModalConfirmRemoveCartItem(false)}>Batal</Button></Link>
          <Button
            id="_i6Q_UPM4Ee-sOY7xW5iSqw"
            variant="secondary"
            onClick={() => remove()}
          >
            Remove
          </Button>
        </Modal>,
        
      ]}
    />
  );
};

export default CartSummary;
