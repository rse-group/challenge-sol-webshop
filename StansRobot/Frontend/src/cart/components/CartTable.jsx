/*
	Generated on 05/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.11.1
*/
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal,Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';

import clearCartItem from '../services/clearCartItem'

import deleteCartItem from '../services/deleteCartItem'
import * as Layouts from "@/commons/layouts";
const CartTable = ({ cartItemListData,
		 
		 
		 

	}) => {
  const { checkPermission } = useAuth();
  const [selectedConfirmRemoveCartItem, setSelectedConfirmRemoveCartItem] = React.useState(null);
  const navigate = useNavigate();
  const detail = async (cartItem) => {
    isMobile() && navigate();
  };
  const [showModalConfirmClearCart, setShowModalConfirmClearCart] = React.useState(false);
  
  const clear = async (selectedConfirmClearCart) => {
      await clearCartItem({
        cartId: selectedConfirmClearCart.cartId,
      });
  		window.location.reload();
    }
  const [showModalConfirmRemoveCartItem, setShowModalConfirmRemoveCartItem] = React.useState(false);
  
  const remove = async (selectedConfirmRemoveCartItem) => {
      await deleteCartItem({
        cartItemId: selectedConfirmRemoveCartItem.cartItemId,
      });
  		window.location.reload();
    }
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[cartItemListData]}
  	  detail={detail}
  	  itemsAttrs={[
          {
            id: "product",
            condition: "",
            label: "Product",
            featureName: "pictureURL",
            editable: false
          }
  ,        {
            id: "",
            condition: "",
            label: "",
            featureName: "name",
            editable: false
          }
  ,        {
            id: "unitPrice",
            condition: "isCurrency",
            label: "Unit Price",
            featureName: "price",
            editable: false
          }
  ,        {
            id: "quantity",
            condition: "",
            label: "Quantity",
            featureName: "quantity",
            editable: false
          }
  ,        {
            id: "subtotal",
            condition: "isCurrency",
            label: "Subtotal",
            featureName: "amount",
            editable: false
          }
  ,        {
            id: "stockStatus",
            condition: "",
            label: "Stock Status",
            featureName: "stockStatus",
            editable: false
          }
  ]}
        itemsEvents={(cartItem) => [
          checkPermission("DeleteCartItem") &&  (
            <Link to=''>
              <Button
                id="_Ojsu0PM4Ee-sOY7xW5iSqw"
                size="sm"
                variant=
                            "secondary"
                onClick={() => {
                  setSelectedConfirmRemoveCartItem(cartItem);
                  setShowModalConfirmRemoveCartItem(true);
                }}
              >
                Remove
              </Button>
            </Link>
            
          )
  ,
          checkPermission("UpdateCartItem") &&  (
    <Link to={`/cart/item/edit?cartItemId=${cartItem.cartItemId}`}>
      <Button
        id="_H-AeIPNBEe-sOY7xW5iSqw"
        size="sm"
        variant=
                    "secondary"
      >
        Edit
      </Button>
    </Link>
    
  )
  ,
          
        ]}
  	/>
  		<Modal
  		isShow={showModalConfirmClearCart}
  		title={"Confirm Clear Cart"}
  		>
  		
  				<Link to=''><Button className={`w-full`} variant="tertiary" onClick={() => setShowModalConfirmClearCart(false)}>Batal</Button></Link>
  		
  		<Button
  		  id="_YcHQUPM2Ee-sOY7xW5iSqw"
  		  variant="primary"
  		  onClick={() => clear(selectedConfirmClearCart)}
  		>
  		  Clear
  		</Button>
  		</Modal>,
  		<Modal
  		isShow={showModalConfirmRemoveCartItem}
  		title={"Confirm Remove Cart Item"}
  		>
  		
  				<Link to=''><Button className={`w-full`} variant="tertiary" onClick={() => setShowModalConfirmRemoveCartItem(false)}>Batal</Button></Link>
  		
  		<Button
  		  id="_i6Q_UPM4Ee-sOY7xW5iSqw"
  		  variant="primary"
  		  onClick={() => remove(selectedConfirmRemoveCartItem)}
  		>
  		  Remove
  		</Button>
  		</Modal>,
  </>
  )
};

export default CartTable;
