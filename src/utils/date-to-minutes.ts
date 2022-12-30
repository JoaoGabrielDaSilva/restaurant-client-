import { isValid, format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const dateToMinutes = (date: Date): string => {
  const isDateValid = isValid(date);

  if (!isDateValid) return "-";

  const formattedDate = format(date, "HH:mm:ss", { locale: ptBR });

  return formattedDate;
};
