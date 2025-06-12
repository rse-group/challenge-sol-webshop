export const calculateDayRemaining = (date) => {
  const now = new Date();
  const target = new Date(date);
  const diff = target - now;
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return days;
};
