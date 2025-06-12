const cleanFormData = (data) => {
  return Object.fromEntries(
    Object.entries(data).map(([key, val]) =>
      val instanceof File ? [key, val] : [key, String(val)],
    ),
  );
};

export default cleanFormData;
