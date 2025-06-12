import { useRoutes } from "react-router";
import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import orderRoutes from "@/order/routes";
import catalogRoutes from "@/catalog/routes";
import categoryRoutes from "@/category/routes";
import cartRoutes from "@/cart/routes";
import orderHistoryRoutes from "@/orderHistory/routes";
import addressRoutes from "@/address/routes";
import paymentOrderRoutes from "@/paymentOrder/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
	...commonRoutes,
	...staticPageRoutes,
	...userRoutes,
	...roleRoutes,
	...homeRoutes, 
	...orderRoutes, 
	...catalogRoutes, 
	...categoryRoutes, 
	...cartRoutes, 
	...orderHistoryRoutes, 
	...addressRoutes, 
	...paymentOrderRoutes, 
  ])
  return router
}

const MobileRoutes = () => {
	const router = useRoutes([ 
	  ...commonMobileRoutes, 
  ])
  return router
}

export {GlobalRoutes, MobileRoutes}
