import Image from "next/image";
import graph from "@/assets/images/graph.png";

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
      <div className="py-4 mr-4 border-b-[1px]">
        <Image src={graph} alt="Graph" />
      </div>

      {/* income */}
      <div className="border-r-[1px] px-4 my-4 flex items-end justify-between">
        <div>
          <Label>Income</Label>
          <Text>51,321</Text>
        </div>
        <div className="text-[#2DBF3C]">+2.01</div>
      </div>
      {/* expenses */}
      <div className="p-4 flex items-end justify-between">
        <div className="">
          <Label>Expenses</Label>
          <Text>21,321</Text>
        </div>
        <div className="text-[#FF7D33]">-0.05</div>
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
