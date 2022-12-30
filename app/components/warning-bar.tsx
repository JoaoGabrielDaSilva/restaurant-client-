"use client";

import classNames from "classnames";
import { useState } from "react";

const STATUS_CONFIGS = {
  "requesting waiter": {
    background: "bg-[#faf7f0]",
    textColor: "text-orange-400",
    message: "Solicitando Garçom",
  },
  "waiting for closure": {
    background: "bg-[#eaf3f0]",
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
    table: "Mesa 04",
    ...STATUS_CONFIGS["waiting for closure"],
  },
  {
    status: "requesting waiter",
    table: "Mesa 05",
    ...STATUS_CONFIGS["requesting waiter"],
  },
  {
    status: "requesting waiter",
    table: "Mesa 06",
    ...STATUS_CONFIGS["requesting waiter"],
  },
  {
    status: "requesting waiter",
    table: "Mesa 07",
    ...STATUS_CONFIGS["requesting waiter"],
  },
  {
    status: "requesting waiter",
    table: "Mesa 05",
    ...STATUS_CONFIGS["requesting waiter"],
  },
  {
    status: "requesting waiter",
    table: "Mesa 06",
    ...STATUS_CONFIGS["requesting waiter"],
  },
  {
    status: "requesting waiter",
    table: "Mesa 07",
    ...STATUS_CONFIGS["requesting waiter"],
  },
];

export default function WarningBar() {
  return (
    <div className="flex overflow-auto">
      {warnings.map((item) => {
        return (
          <div
            key={item.table}
            className={classNames(
              item.background,
              item.textColor,
              "py-1 min-w-[33.3%] text-center cursor-pointer px-4 flex items-center"
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
