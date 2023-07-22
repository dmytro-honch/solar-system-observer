export const useHeader = (isMenuToggleActive?: boolean) => {
  const menuToggleActive = !isMenuToggleActive;
  return {
    isMenuToggleActive: menuToggleActive,
  };
};