import { Icon as IconifyIcon } from "@iconify/react"

const icons = import.meta.glob("@/assets/icons.jsx", {
  import: "default",
  eager: true,
});

export function getIconsMap() {
  return icons["/assets/icons.jsx"] ?? {};
}

const iconsMap = getIconsMap();

export function Icon({ id }) {
  const icon = iconsMap[id];
  if (typeof icon === "string") {
    return <IconifyIcon icon={icon} />;
  } else if (typeof icon === "function") {
    const IconComponent = icon;
    return <IconComponent />;
  } else {
    return null;
  }
}

