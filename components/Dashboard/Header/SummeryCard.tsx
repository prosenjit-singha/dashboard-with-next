import { channel } from "diagnostics_channel";

export default function SummeryCard() {
  return (
    <div className="grid grid-cols-2 w-full h-[200px] border-r-[1px]">
      {/* header */}

      {/* total balance */}
      <div className="py-4 ml-4 border-b-[1px] ">
        <Label>Total Balance</Label>
        <Text>1,251,321</Text>
      </div>
      {/* chart */}
      <div className="py-4 mr-4 border-b-[1px]">chart</div>

      {/* income */}
      <div className="border-r-[1px] px-4 my-4">
        <Label>Income</Label>
        <Text>51,321</Text>
      </div>
      {/* expenses */}
      <div className="p-4">
        <Label>Expenses</Label>
        <Text>21,321</Text>
      </div>
    </div>
  );
}

function Label({ children }: { children: string }) {
  return <h3 className="capitalize text-sm  text-gray-600">{children}</h3>;
}

function Text({ children }: { children: string }) {
  return (
    <p className="text-xl font-semibold">
      $<span>{children}</span>
    </p>
  );
}