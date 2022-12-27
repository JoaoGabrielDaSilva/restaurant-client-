type Options = {
  showPrefix?: boolean;
};

const optionsDefaultValues: Options = {
  showPrefix: true,
};

export const formatCurrency = (
  value: number,
  options: Options = optionsDefaultValues
): string => {
  const intl = Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: options?.showPrefix ? "currency" : undefined,
    minimumFractionDigits: 2,
  });

  return intl.format(value);
};
