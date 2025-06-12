import useAppearance from "@/commons/appearance/useAppearance";
import { FONT_CLASSNAMES } from "./variants";

const useTypography = () => {
  const interfaceKit = useAppearance();
  const typographyStyle = interfaceKit?.typography ?? "sans";
  const typographyVariant = FONT_CLASSNAMES[typographyStyle];

  return typographyVariant;
};

export default useTypography;
