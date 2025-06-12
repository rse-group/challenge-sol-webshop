export const formatCurrency = (amount) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(amount);

export const COLORS = [
  "#138a57",
  "#ff7700",
  "#0dbfa8",
  "#20acd7",
  "#7bce1c",
  "#d52943",
];
