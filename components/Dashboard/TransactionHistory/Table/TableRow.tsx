import Transaction from "@/types/transaction.type";
import React from "react";
import Chip from "./Chip";

type Props = {
  data: Transaction;
};

function TableData({ children }: { children: React.ReactNode }) {
  return <td className="capitalize p-2">{children}</td>;
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
    <tr className="hover:text-gray-500">
      <TableData>#{id}</TableData>
      <TableData>{name}</TableData>
      <TableData>{price}</TableData>
      <TableData>{"Aug 02, 2023"}</TableData>
      <TableData>{category}</TableData>
      <TableData>{paymentMethod}</TableData>
      <TableData>
        <Chip variant={status} />
      </TableData>
    </tr>
  );
}
