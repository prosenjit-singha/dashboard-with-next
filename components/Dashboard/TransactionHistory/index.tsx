import transactionHistory from "@/dummyData/transactionHistory";
import Header from "./Header";
import { TableHeader, TableRow } from "./Table";

function TransactionHistory() {
  return (
    <section className="py-5 mx-6">
      <Header />
      <table className="w-full text-[#959595]">
        <TableHeader />
        <tbody>
          {transactionHistory.map((data) => (
            <TableRow data={data} />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default TransactionHistory;
