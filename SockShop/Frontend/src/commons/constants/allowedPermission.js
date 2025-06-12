export const ALLOWED_PERMISSIONS = [
  { value: "CreateIncome", label: "CreateIncome" },
  { value: "UpdateIncome", label: "UpdateIncome" },
  { value: "DeleteIncome", label: "DeleteIncome" },
  { value: "CreateExpense", label: "CreateExpense" },
  { value: "UpdateExpense", label: "UpdateExpense" },
  { value: "DeleteExpense", label: "DeleteExpense" },
  { value: "CreateFinancialReport", label: "CreateFinancialReport" },
  { value: "UpdateFinancialReport", label: "UpdateFinancialReport" },
  { value: "DeleteFinancialReport", label: "DeleteFinancialReport" },
  { value: "CreateArusKas", label: "CreateArusKas" },
  { value: "UpdateArusKas", label: "UpdateArusKas" },
  { value: "DeleteArusKas", label: "DeleteArusKas" },
  { value: "CreateProgram", label: "CreateProgram" },
  { value: "UpdateProgram", label: "UpdateProgram" },
  { value: "DeleteProgram", label: "DeleteProgram" },
  { value: "CreateOperational", label: "CreateOperational" },
  { value: "UpdateOperational", label: "UpdateOperational" },
  { value: "DeleteOperational", label: "DeleteOperational" },
  { value: "ReadCOD", label: "ReadCOD" },
  { value: "CreateCOD", label: "CreateCOD" },
  { value: "UpdateCOD", label: "UpdateCOD" },
  { value: "DeleteCOD", label: "DeleteCOD" },
];

export const findAllowedPermission = (defaultValues) => {
  const defaultVal = ALLOWED_PERMISSIONS.filter((allowed) =>
    defaultValues.includes(allowed.value),
  );

  return defaultVal;
};
