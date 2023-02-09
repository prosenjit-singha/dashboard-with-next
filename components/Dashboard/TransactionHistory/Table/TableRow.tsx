import Transaction from "@/types/transaction.type";
import React from "react";
import Chip from "./Chip";

type Props = {
  data: Transaction;
};

function TableData({
  children,
  ...rest
}: { children: React.ReactNode } & React.ComponentProps<"td">) {
  return (
    <td className="capitalize p-2" {...rest}>
      {children}
    </td>
  );
}

export function TableRow({ data }: Props) {
  const {
    id,
    name,
    category,
    date,
    paymentMethod,
    price,
    profilePhoto,
    status,
    transactionType,
  } = data;
  return (
    <tr className="hover:text-gray-500 hover:bg-slate-100 rounded">
      <TableData>#{id}</TableData>
      <TableData className="flex gap-2">
        {/* avatar */}
        <div className="my-auto min-w-[40px] min-h-[40px] rounded bg-[#9E9E9E]">
          {/* put image here */}
        </div>
        {/* name */}
        <div className="flex flex-col my-2">
          <span className="block text-sm leading-3">
            {transactionType === "income" ? "Received" : "Transfer To"}
          </span>
          <span className="text-md text-[#1A1A1A]">{name}</span>
        </div>
      </TableData>
      <TableData className="text-[#1A1A1A]">
        {transactionType === "income" ? "+" : "-"}

        {price}
      </TableData>
      <TableData>{"Aug 02, 2023"}</TableData>
      <TableData>{category}</TableData>
      <TableData>{paymentMethod}</TableData>
      <TableData>
        <Chip variant={status} />
      </TableData>
    </tr>
  );
}
