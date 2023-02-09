import Card from "./Header/Card";
import { MdAdd } from "react-icons/md";
import DashboardHeaderSection from "./Header";
import MiddleSection from "./MiddleSection";
import TransactionHistory from "./TransactionHistory";

export default function Dashboard() {
  return (
    <section className="flex flex-col">
      <DashboardHeaderSection />
      <MiddleSection />
      <TransactionHistory />
    </section>
  );
}
