export const calculateTax = (income: number, year: number): number => {
  if (year !== 2024) return 0; // Erweiterbar für andere Jahre

  let tax = 0;
  if (income <= 11_784) {
    tax = 0;
  } else if (income <= 17_005) {
    let y = (income - 11_784) / 10_000;
    tax = (979.18 * y + 1_400) * y;
  } else if (income <= 66_760) {
    let z = (income - 17_006) / 10_000;
    tax = (192.59 * z + 2_397) * z + 991.91;
  } else if (income <= 277_825) {
    tax = 0.42 * income - 10_636.31;
  } else {
    tax = 0.45 * income - 18_981.66;
  }

  return Math.round(tax);
};
