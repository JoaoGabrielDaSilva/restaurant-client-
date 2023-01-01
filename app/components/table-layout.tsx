import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";
import { useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { formatCurrency } from "../../src/utils/format-currency";

type TableLayoutProps<T = unknown> = {
  rows: T[];
  cols: string[];
  className?: string;
};

export default function TableLayout<T>({
  rows,
  cols,
  className,
}: TableLayoutProps<T>) {
  return (
    <table className={twMerge("table-auto text-left w-full", className)}>
      <thead>
        {cols.map((item) => (
          <th className="border border-gray-200 pl-2 py-2">{item}</th>
        ))}
      </thead>
      <tbody>
        {rows.map((item) => (
          <tr className="hover:bg-gray-100 cursor-pointer">
            {Object.values(item).map((element) => (
              <td className="border border-gray-200 py-2 pl-2">{element}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
