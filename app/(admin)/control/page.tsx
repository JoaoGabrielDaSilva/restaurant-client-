import { addMinutes } from "date-fns/esm";
import Table from "../../components/table";

const Page = () => {
  return (
    <div className="pt-8 pl-8 overflow-hidden">
      <b className="text-2xl text-gray-800">Contas</b>

      <div className="mb-4">
        <span className="text-lg font-semibold">Internas</span>
      </div>
      <div className="flex gap-4 pr-4 sm:flex-wrap overflow-scroll sm:overflow-hidden py-4">
        <Table number="1" status="empty" />
        <Table
          isActive={true}
          number="1"
          status="waiting for closure"
          amount={180}
          startDate={addMinutes(new Date(), 10)}
        />
        <Table
          isActive={true}
          number="2"
          status="on going"
          amount={135}
          startDate={addMinutes(new Date(), 10)}
        />
        <Table
          isActive={true}
          number="3"
          status="requesting waiter"
          amount={190}
          startDate={addMinutes(new Date(), 10)}
        />
      </div>
      <div className="mb-4">
        <span className="text-lg font-semibold">Externas</span>
      </div>
      <div className="flex gap-4 pr-4 sm:flex-wrap overflow-scroll sm:overflow-hidden py-4">
        <Table number="1" status="empty" />
        <Table
          isActive={true}
          number="4"
          status="waiting for closure"
          amount={180}
          startDate={addMinutes(new Date(), 10)}
        />
        <Table
          isActive={true}
          number="5"
          status="on going"
          amount={135}
          startDate={addMinutes(new Date(), 10)}
        />
        <Table
          isActive={true}
          number="6"
          status="requesting waiter"
          amount={190}
          startDate={addMinutes(new Date(), 10)}
        />
      </div>
    </div>
  );
};

export default Page;
