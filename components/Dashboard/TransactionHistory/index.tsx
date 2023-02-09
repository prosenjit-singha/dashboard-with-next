import Header from "./Header";
import { TableHeader } from "./Table";

function TransactionHistory() {
  return (
    <section className="py-5 mx-6">
      <Header />
      <table className="w-full">
        <TableHeader />
        <tbody></tbody>
      </table>
    </section>
  );
}

export default TransactionHistory;
