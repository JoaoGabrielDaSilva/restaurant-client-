export type TableStatus =
  | "waiting for closure"
  | "on going"
  | "requesting waiter";

export type TableModel = {
  number: string;
  startDate?: Date;
  amount?: number;
  status?: TableStatus | null;
  orderSheetId?: string;
};
