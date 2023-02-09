import React from "react";

const Thead = ({ children }: { children: string }) => (
  <th className="font-semibold text-left p-2">{children}</th>
);

export function TableHeader() {
  return (
    <thead className="w-full border-t-[1px] border-b-[1px]">
      <tr className="">
        <Thead>ID</Thead>
        <Thead>Name</Thead>
        <Thead>Price</Thead>
        <Thead>Date</Thead>
        <Thead>Category</Thead>
        <Thead>Payment Method</Thead>
        <Thead>Status</Thead>
      </tr>
    </thead>
  );
}
