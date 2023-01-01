"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { addMinutes } from "date-fns/esm";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { OrderModel } from "../../../src/@core/domain/models/order-model";
import { TableModel } from "../../../src/@core/domain/models/table-model";
import { useSideBar } from "../../../src/store/side-bar";
import { useSideModal } from "../../../src/store/side-modal";
import { debounce } from "../../../src/utils/debounce";
import { Button } from "../../components/button";
import Order from "../../components/order";
import SearchBar from "../../components/search-bar";
import SideModal from "../../components/side-modal";
import Table from "../../components/table";
import Tabs from "../../components/tabs";
import AnimatedMount from "../../components/animated-mount";
import Modal from "../../components/modal";
import { motion } from "framer-motion";
import Tag from "../../components/tag";
import TableLayout from "../../components/table-layout";
import { formatCurrency } from "../../../src/utils/format-currency";

const mockOrder: OrderModel = {
  tableNumber: "Mesa 02",
  amount: 2,
  orderSheetId: "190596",
  productName: "Cerveja Antárctica",
  requestDate: new Date("12/29/22 13:30"),
};

const orders = [
  mockOrder,
  mockOrder,
  // {
  //   ...mockOrder,
  //   extras: [{ item: "molho da casa", amount: 2 }, { item: "picles" }],
  //   observations: "Sem tomate",
  // },
];

const dataBase: TableSection[] = [
  {
    section: "Internas",
    data: [
      {
        number: "1",
        status: null,
      },
      {
        number: "2",
        orderSheetId: "123",
        status: "waiting for closure",
        amount: 180,
        startDate: addMinutes(new Date(), 10),
      },
      {
        number: "3",
        status: "on going",
        orderSheetId: "1234",
        amount: 180,
        startDate: addMinutes(new Date(), 10),
      },
      {
        number: "4",
        status: "requesting waiter",
        amount: 180,
        orderSheetId: "1234",
        startDate: addMinutes(new Date(), 10),
      },
    ],
  },
  {
    section: "Externas",
    data: [
      {
        number: "5",
      },
      {
        number: "6",
        orderSheetId: "234567",
        status: "waiting for closure",
        amount: 180,
        startDate: addMinutes(new Date(), 10),
      },
      {
        number: "7",
        status: "on going",
        orderSheetId: "23456789",
        amount: 180,
        startDate: addMinutes(new Date(), 10),
      },
      {
        number: "8",
        orderSheetId: "9999",
        status: "requesting waiter",
        amount: 180,
        startDate: addMinutes(new Date(), 10),
      },
    ],
  },
];

type TableSection = {
  section: string | null;
  data: TableModel[];
};

export default function Page() {
  const [tableFilter, setTableFilter] = useState("Todas");

  const [isFirstMount, setIsFirstMount] = useState(true);

  const [selectedTable, setSelectedTable] = useState(null);

  const [showOrders, setShowOrders] = useState(false);

  const { open: openSideBar } = useSideBar();

  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const [search, setSearch] = useState("");

  const debouncedSearch = useCallback(debounce(setSearch, 300), []);

  const data = useMemo(() => {
    return !search
      ? dataBase.filter((item) =>
          tableFilter !== "Todas" ? item.section === tableFilter : item
        )
      : [
          {
            section: null,
            data: dataBase.reduce<TableModel[]>((tables, table) => {
              return [
                ...tables,
                ...table.data.filter((item) =>
                  item?.orderSheetId?.includes(search)
                ),
              ];
            }, []),
          },
        ];
  }, [tableFilter, search]);

  useEffect(() => {
    if (search && searchInputRef?.current) {
      searchInputRef.current.value = "";
      setSearch("");
    }
  }, [tableFilter]);

  useEffect(() => {
    setIsFirstMount(false);
  }, []);

  return (
    <>
      <div className="overflow-hidden h-screen flex bg-gray-50">
        <div className="grow">
          <SearchBar
            ref={searchInputRef}
            placeholder="Procurar código da conta"
            onChange={(e) => debouncedSearch(e.target.value)}
          />
          <div className="pt-8 pl-2 sm:pl-8 ">
            <div className="mb-2 pr-4 flex justify-between items-center">
              <b className="text-2xl text-gray-800 ">Contas</b>
              <div className="sm:flex items-center justify-end">
                <Button
                  className="mr-4 hidden sm:block"
                  onClick={() => setShowOrders(true)}
                >
                  Abrir conta sem mesa
                </Button>
                <Bars3Icon
                  className="w-6 h-6 block md:hidden"
                  onClick={openSideBar}
                />
              </div>
            </div>
            <div className="sm:hidden m-4 ml-0">
              <Button>Abrir conta sem mesa</Button>
            </div>
            <Tabs
              tabs={[
                { section: "Todas" },
                { section: "Internas" },
                { section: "Externas" },
                { section: "Balcão" },
              ]}
              onChange={({ section }) => setTableFilter(section)}
            />

            <Modal
              isOpen={!!selectedTable}
              onBackdropClick={() => setSelectedTable(null)}
            >
              <motion.div
                initial={{ translateY: "100%" }}
                animate={{ translateY: 0 }}
                exit={{ translateY: "100%" }}
                transition={{
                  type: "spring",
                  duration: 0.2,
                  bounce: 0,
                }}
                className="bg-white absolute bottom-0 left-0 right-0 h-[90%]"
              >
                <div className="flex justify-between items-center p-4">
                  <div className="flex items-center">
                    <span className="font-bold mr-4">
                      Mesa {selectedTable?.number}
                    </span>
                    <Tag text="#92029" className="mr-4" />
                    <Tag text="Conta Aberta" className="mr-4" variant="good" />
                    <Tag
                      text="Existem pedidos pendentes nessa mesa"
                      className="mr-4"
                      variant="warning"
                    />
                  </div>
                  <button onClick={() => setSelectedTable(null)}>
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>
                <div className="px-2">
                  <Tabs
                    tabs={[
                      {
                        section: "Pedidos",
                      },
                      {
                        section: "Conta",
                      },
                    ]}
                    onChange={() => {}}
                  />
                  <TableLayout
                    className="mt-4"
                    rows={[
                      {
                        name: "A",
                        price: 20.0,
                        amount: 5,
                        get total() {
                          return formatCurrency(this.price * this.amount);
                        },
                      },
                      {
                        name: "B",
                        price: 10.0,
                        amount: 3,
                        get total() {
                          return formatCurrency(this.price * this.amount);
                        },
                      },
                    ]}
                    cols={["Produto", "Preço", "Quantidade", "Total"]}
                  />
                </div>
              </motion.div>
            </Modal>

            {data?.length > 0 ? (
              data?.map((item, index) => (
                <div key={index} className="flex-col">
                  <div className="my-1">
                    {item.section ? (
                      <span className="text-lg font-semibold">
                        {item.section}
                      </span>
                    ) : (
                      <div className="pt-2">
                        <span className="text-md text-gray-500">
                          Filtradas por{" "}
                          <b className="text-gray-700 underline">{search}</b>
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-4 pl-1 pr-4 sm:flex-wrap overflow-auto overflow-y-hidden py-4">
                    {item.data.map((item, index) => (
                      <AnimatedMount
                        key={index}
                        enabled={isFirstMount}
                        delay={index * 0.04}
                      >
                        <button onClick={() => setSelectedTable(item)}>
                          <Table {...item} />
                        </button>
                      </AnimatedMount>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="mt-4 text-center sm:text-left">
                <span className="text-gray-700  ">
                  Nenhum resultado encontrado
                </span>
              </div>
            )}
          </div>
        </div>

        {/* <SideModal
          isVisible={showOrders}
          onBackdropClick={() => setShowOrders(false)}
        >
          <div className="flex justify-between">
            <span className="text-lg font-bold">Pedidos</span>
            <button onClick={() => setShowOrders(false)}>
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          {orders.map((item, index) => (
            <AnimatedMount
              key={index}
              enabled={isFirstMount}
              delay={index * 0.04}
            >
              <Order {...item} className="mt-4" />
            </AnimatedMount>
          ))}
        </SideModal> */}
      </div>
    </>
  );
}
