export const ResolveTruthyValue = (...values) => {
  return values.find((v) => v) || values[values.length - 1];
};
