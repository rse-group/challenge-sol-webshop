const MOBILE_WIDTH = 640;

export const isMobile = () => {
  const { clientWidth } = window.document.documentElement;
  return clientWidth <= MOBILE_WIDTH;
};
