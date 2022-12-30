"use client";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { differenceInMinutes } from "date-fns";
import {
  TableModel,
  TableStatus,
} from "../../src/@core/domain/models/table-model";
import { formatCurrency } from "../../src/utils/format-currency";

type TableProps = TableModel;

type TableInfoProps = {
  info: string;
};

type TableStatusStyles = {
  border: string;
  background: string;
  lightBackground: string;
};

const TABLE_STATUS_CLASSES: Record<TableStatus, TableStatusStyles> = {
  "waiting for closure": {
    border: "border-green-600",
    background: "bg-green-500",
    lightBackground: "bg-green-50",
  },
  "on going": {
    border: "border-gray-800",
    background: "bg-gray-800",
    lightBackground: "bg-gray-50",
  },
  "requesting waiter": {
    border: "border-orange-300",
    background: "bg-orange-500",
    lightBackground: "bg-orange-50",
  },
};

const TABLE_STATUS_MESSAGES: Record<TableStatus, string | null> = {
  "waiting for closure": "Aguardando Fechamento",
  "requesting waiter": "Solicitando Garçom",
  "on going": null,
};

export default function Table({
  number,
  startDate,
  amount,
  status,
  orderSheetId,
}: TableProps) {
  const classes = status ? TABLE_STATUS_CLASSES[status] : null;

  const tableStatusMessage = status ? TABLE_STATUS_MESSAGES[status] : null;

  const hasPeopleIn = !!orderSheetId;
  const isRequesting = hasPeopleIn && status;

  return (
    <div
      className={classNames(
        isRequesting && classes
          ? `${classes.border} ${classes.lightBackground}`
          : null,
        hasPeopleIn
          ? "hover:scale-105 transform ease-in-out duration-200"
          : "border-dashed border-gray-300 ",
        "border-2 aspect-square w-36 h-36 p-3 flex flex-col justify-between cursor-pointer"
      )}
    >
      <div>
        <div
          className={classNames(
            isRequesting && classes ? `${classes.background}` : "bg-gray-200",
            hasPeopleIn ? "text-white" : "bg-gray-100 text-gray-500",
            " w-fit px-3 py-1"
          )}
        >
          <span className="font-semibold">{number}</span>
        </div>
      </div>
      {startDate && amount ? (
        <div className="text-left text-sm md:text-md">
          {!tableStatusMessage ? (
            <span>{differenceInMinutes(startDate, new Date())}min</span>
          ) : null}
          <div className="flex justify-between items-end ">
            {tableStatusMessage ? (
              <TableInfo info={tableStatusMessage} />
            ) : (
              <span>
                R$ <b>{formatCurrency(amount, { showPrefix: false })}</b>
              </span>
            )}
            <ChevronRightIcon className="w-3 h-3 text-gray-500 mb-1" />
          </div>
        </div>
      ) : null}
    </div>
  );
}

const TableInfo = ({ info }: TableInfoProps) => {
  const [firstText, secondText] = info.split(" ");

  return (
    <span>
      {firstText}
      <b className="inline-block">{secondText}</b>
    </span>
  );
};
