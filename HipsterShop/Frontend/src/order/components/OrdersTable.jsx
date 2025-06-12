/*
	Generated on 31/05/2025 by UI Generator PRICES-IDE
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
const OrdersTable = ({ orderListData,
		 

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (ordersItem) => {
    isMobile() && navigate(`/order/${ordersItem.orderId}`
    );
  };
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[orderListData]}
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
        itemsEvents={(ordersItem) => [
          <Link to={`/order/${ordersItem.orderId}?addressId=${ordersItem.addressId}`}>
            <Button
              id="_qfGpwBL1EfC6ovLNDfZAgQ"
              size="sm"
              variant=
                  "primary"
            >
              Detail
            </Button>
          </Link>
        ]}
  	/>
  </>
  )
};

export default OrdersTable;
