import Card from "./Header/Card";
import { MdAdd } from "react-icons/md";
import cards from "./Header/cards";
import DashboardHeaderSection from "./Header";
import MiddleSection from "./MiddleSection";

export default function Dashboard() {
  return (
    <section className="flex flex-col">
      <DashboardHeaderSection />
      <MiddleSection />
    </section>
  );
}
