"use client";

import classNames from "classnames";

const STATUS_CONFIGS = {
  "requesting waiter": {
    background: "#faf7f0",
    textColor: "text-orange-400",
    message: "Solicitando Garçom",
  },
  "waiting for closure": {
    background: "#eaf3f0",
    textColor: "text-green-600",
    message: "Aguardando Fechamento",
  },
};

const warnings = [
  {
    status: "requesting waiter",
    table: "Mesa 01",
    ...STATUS_CONFIGS["requesting waiter"],
  },
  {
    status: "waiting for closure",
    table: "Mesa 02",
    ...STATUS_CONFIGS["waiting for closure"],
  },
  {
    status: "requesting waiter",
    table: "Mesa 03",
    ...STATUS_CONFIGS["requesting waiter"],
  },
  {
    status: "waiting for closure",
    table: "Mesa 02",
    ...STATUS_CONFIGS["waiting for closure"],
  },
  {
    status: "requesting waiter",
    table: "Mesa 03",
    ...STATUS_CONFIGS["requesting waiter"],
  },
  {
    status: "requesting waiter",
    table: "Mesa 03",
    ...STATUS_CONFIGS["requesting waiter"],
  },
  {
    status: "requesting waiter",
    table: "Mesa 03",
    ...STATUS_CONFIGS["requesting waiter"],
  },
];

export default function WarningBar() {
  return (
    <div className="flex w-full md:overflow-scroll lg:overflow-hidden">
      {warnings.map((item) => {
        return (
          <div
            className={classNames(
              `bg-[${item.background}]`,
              "py-1 w-full text-center cursor-pointer min-w-fit px-4"
            )}
          >
            <b className={classNames(item.textColor, "text-xs mr-2")}>
              {item.table}
            </b>
            <span
              className={classNames(item.textColor, "font-semibold text-sm")}
            >
              {item.message}
            </span>
          </div>
        );
      })}
    </div>
  );
}
