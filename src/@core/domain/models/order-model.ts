export type OrderExtraItem = {
  item: string;
  amount?: number;
};

export type OrderModel = {
  tableNumber: string;
  orderSheetId: string;
  requestDate: Date;
  amount: number;
  productName: string;
  observations?: string;
  extras?: OrderExtraItem[];
};
