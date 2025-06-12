import Menu from "./Menu";

export default Menu;
export { default as MenuItem } from "./MenuItem";

export const hasValidPermission = (menu, checkPermission) => {
    if (menu.subMenus && menu.subMenus.length > 0) {
        return menu.subMenus.some((subMenu) => hasValidPermission(subMenu, checkPermission))
    } else {
        return !menu.permission || checkPermission(menu.permission)
    }
}