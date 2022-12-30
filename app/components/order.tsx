"use client";
import classNames from "classnames";
import Link from "next/link";
import { HTMLAttributes } from "react";
import { OrderModel } from "../../src/@core/domain/models/order-model";
import { dateToMinutes } from "../../src/utils/date-to-minutes";
import { Button } from "./button";

export type OrderProps = Pick<HTMLAttributes<HTMLDivElement>, "className"> &
  OrderModel;

export default function Order({
  tableNumber,
  orderSheetId,
  amount,
  productName,
  requestDate,
  observations,
  extras,
  className,
}: OrderProps) {
  return (
    <div className={classNames(className, "bg-white cursor-pointer group ")}>
      <div className="p-4 border border-b-0 border-gray-200 ">
        <div className="flex justify-between">
          <span className="font-semibold">{tableNumber}</span>
          <span className="text-gray-500">#{orderSheetId}</span>
        </div>
        <div className="flex justify-end text-gray-500 ">
          <span>{dateToMinutes(requestDate)}</span>
        </div>
        <div className="mt-4 text-blue-500">
          <span className="aspect-square font-semibold mr-4 py-1 px-3 rounded-xl bg-blue-50 ">
            {amount}x
          </span>
          <Link href={`/product/${productName}`}>
            <span className="font-bold">{productName}</span>
          </Link>
          {observations ? (
            <div className="mt-4">
              <span className="text-gray-700">{observations}</span>
            </div>
          ) : null}
          {extras
            ? extras.map((extra, index) => (
                <div key={index} className="mt-2">
                  <span className="text-gray-700">
                    + {extra.amount} {extra.item}
                  </span>
                </div>
              ))
            : null}
        </div>
      </div>

      <div className="flex">
        <Button
          onClick={() => console.log(123)}
          className="text-green-600 grow hover:bg-green-50 hover:border-green-600 active:bg-green-600 active:text-white"
          variant="normal"
        >
          Aceitar
        </Button>
        <Button className="grow active:bg-gray-300" variant="normal">
          Pronto
        </Button>
        <Button
          className="text-red-500 grow hover:bg-red-50 hover:border-red-600 active:bg-red-500 active:text-white"
          variant="normal"
        >
          Cancelar
        </Button>
      </div>
    </div>
  );
}
