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
import * as Layouts from "@/commons/layouts";
const OrderTable = ({ orderUnpaidData,
		 
		 

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (orderItem) => {
    isMobile() && navigate(`/payment/${orderItem.orderId}`
    );
  };
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[orderUnpaidData]}
  	  detail={detail}
  	  itemsAttrs={[
          {
            id: "orderID",
            condition: "",
            label: "Order ID",
            featureName: "orderId",
            editable: false
          }
  ,        {
            id: "orderDate",
            condition: "",
            label: "Order Date",
            featureName: "date",
            editable: false
          }
  ,        {
            id: "totalPrice",
            condition: "isCurrency",
            label: "Total Price",
            featureName: "amount",
            editable: false
          }
  ,        {
            id: "status",
            condition: "",
            label: "Status",
            featureName: "status",
            editable: false
          }
  ]}
        itemsEvents={(orderItem) => [
          <Link to={`/payment/${orderItem.orderId}`}>
            <Button
              id="_mFuZQDBCEfCGjbY9PYx7KA"
              size="sm"
              variant=
                  "primary"
            >
              Detail
            </Button>
          </Link>
  ,
          checkPermission("SavePayment") &&  (
    <Link to={`/payment/ewallet/${orderItem.orderId}`}>
      <Button
        id="_lJqLsDncEfC48dUZQ8AMKg"
        size="sm"
        variant=
            "primary"
      >
        Pay With EWallet
      </Button>
    </Link>
    
  )
        ]}
  	/>
  </>
  )
};

export default OrderTable;
