"use client";

export default function WarningBar() {
  return (
    <div className="flex w-full md:overflow-scroll lg:overflow-hidden">
      <div className="bg-orange-100 py-1 w-full text-center cursor-pointer min-w-fit px-4">
        <b className="text-xs mr-2 text-orange-400">Mesa 01</b>
        <span className="font-semibold text-sm text-orange-400">
          solicitando garçom
        </span>
      </div>
      <div className="bg-blue-100 py-1 w-full text-center cursor-pointer min-w-fit px-4">
        <b className="text-xs mr-2 text-blue-500">Mesa 01</b>
        <span className="font-semibold text-sm text-blue-500">
          aguardando fechamento
        </span>
      </div>

      <div className="bg-orange-100 py-1 w-full text-center cursor-pointer min-w-fit px-4">
        <b className="text-xs mr-2 text-orange-400">Mesa 03</b>
        <span className="font-semibold text-sm text-orange-400">
          solicitando garçom
        </span>
      </div>
      <div className="bg-orange-100 py-1 w-full text-center cursor-pointer min-w-fit px-4">
        <b className="text-xs mr-2 text-orange-400">Mesa 03</b>
        <span className="font-semibold text-sm text-orange-400">
          solicitando garçom
        </span>
      </div>
      <div className="bg-orange-100 py-1 w-full text-center cursor-pointer min-w-fit px-4">
        <b className="text-xs mr-2 text-orange-400">Mesa 03</b>
        <span className="font-semibold text-sm text-orange-400">
          solicitando garçom
        </span>
      </div>
    </div>
  );
}
