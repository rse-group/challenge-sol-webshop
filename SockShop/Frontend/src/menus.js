const menus = [];
const addMenu = (menu) => {
  menus.push(menu);
};

const addSubMenu = (label, subMenu, menu = menus) => {
  for (const item of menu) {
    if (item.label === label) {
      item.subMenus.push(subMenu);
      return;
    }
    if (item.subMenus) {
      addSubMenu(label, subMenu, item.subMenus);
    }
  }
};

export const settingsMenu = [
  {
    route: '#',
    label: 'Pengaturan',
    permission: 'administrator',
    subMenus: [
      {
        route: '/settings/appearance',
        label: 'Pengaturan Tampilan',
        permission: 'administrator',
      },
      {
        route: '/settings/role',
        label: 'Pengaturan Role',
        permission: 'administrator',
      },
      {
        route: '/settings/user',
        label: 'Pengaturan User',
        permission: 'administrator',
      },
    ]
  },
]

export default menus;

addMenu({
	id: '_LaqX39hREe-MTYgfXJyETw',
	route: '/order',
    label: 'Order',
    permission: 'ViewAllOrder',
	subMenus: [],
})

addMenu({
	id: '_QuAHa9neEe-7P6hXqrl3yg',
	route: '/catalog',
    label: 'Catalog',
    permission: '',
	subMenus: [],
})

addMenu({
	id: '_3N8QgObaEe-6x4xJ55yoyw',
	route: '/category',
    label: 'Category',
    permission: '',
	subMenus: [],
})

addMenu({
	id: '_FtBPUOxkEe-NMuxI0L09Xg',
	route: '/cart',
    label: 'Cart',
    permission: 'ViewCart',
	subMenus: [],
})

addMenu({
	id: '_317wMO0SEe-fr5TCVRzEhw',
	route: '/order-history',
    label: 'OrderHistory',
    permission: 'ViewOrderHistory',
	subMenus: [],
})

addMenu({
	id: '_xc854Ae2EfCOVew4wI5gAA',
	route: '/profile',
    label: 'Profile',
    permission: 'ViewCustomer',
	subMenus: [],
})

addMenu({
	id: '_Hx-KcDCQEfCc75Wlttz2AA',
	route: '/payment',
    label: 'PaymentOrder',
    permission: 'ViewPayment',
	subMenus: [],
})
