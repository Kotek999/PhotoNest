export const getColorForCategory = (
  activeCategory: string,
  category: string,
  firstColor: string,
  secondColor: string
) => {
  const color = activeCategory === category ? firstColor : secondColor;
  return color;
};
