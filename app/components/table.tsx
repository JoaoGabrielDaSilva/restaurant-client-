import { ChevronRightIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { differenceInMinutes } from "date-fns";
import { formatCurrency } from "../../src/utils/format-currency";

type Status =
  | "waiting for closure"
  | "on going"
  | "requesting waiter"
  | "empty";

type TableProps = {
  isActive?: boolean;
  number: string;
  startDate?: Date;
  amount?: number;
  status: Status;
};

const TABLE_STATUS_CLASSES: {
  [key: string]: {
    border: string;
    background: string;
    lightBackground: string;
  };
} = {
  "waiting for closure": {
    border: "border-green-600",
    background: "bg-green-500",
    lightBackground: "bg-green-50",
  },
  "on going": {
    border: "border-blue-500",
    background: "bg-blue-500",
    lightBackground: "bg-blue-50",
  },
  "requesting waiter": {
    border: "border-orange-300",
    background: "bg-orange-500",
    lightBackground: "bg-orange-50",
  },
};

const TABLE_STATUS_MESSAGES: { [key: string]: string } = {
  "waiting for closure": "Aguardando Fechamento",
  "requesting waiter": "Solicitando Garçom",
};

export default function Table({
  isActive,
  number,
  startDate,
  amount,
  status,
}: TableProps) {
  const classes = TABLE_STATUS_CLASSES[status];

  return (
    <div
      className={classNames(
        isActive && status !== "empty"
          ? `${classes.border} ${classes.lightBackground}`
          : "bg-white",
        isActive
          ? "hover:scale-105 transform ease-in-out duration-200"
          : "border-dashed border-gray-300 ",
        "border-2 aspect-square w-36 h-36 p-3 flex flex-col justify-between cursor-pointer"
      )}
    >
      <div>
        <div
          className={classNames(
            isActive && status !== "empty"
              ? `${classes.background}`
              : "bg-gray-300",
            isActive ? "text-white" : "bg-gray-100 text-gray-500",
            " w-fit px-3 py-1"
          )}
        >
          <span className="font-semibold">{number}</span>
        </div>
      </div>
      {startDate && amount ? (
        <div>
          {!TABLE_STATUS_MESSAGES[status] ? (
            <span>{differenceInMinutes(startDate, new Date())}min</span>
          ) : null}
          <div className="flex justify-between items-end ">
            {TABLE_STATUS_MESSAGES[status] ? (
              <span>
                {TABLE_STATUS_MESSAGES[status].split(" ")[0]}
                <b className="inline-block">
                  {TABLE_STATUS_MESSAGES[status].split(" ")[1]}
                </b>
              </span>
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
