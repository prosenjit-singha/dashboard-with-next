import Card from "./Card";
import { MdAdd } from "react-icons/md";
import cards from "./cards";
import SummeryCard from "./SummeryCard";

export default function DashboardHeaderSection() {
  return (
    <section className="flex justify-end mx-6 py-5 border-b-[1px]">
      <div className="flex basis-full">
        <SummeryCard />
        <Card cardDetails={cards[0]} />
        <Card cardDetails={cards[1]} cardBgColor="#628DB4" />
      </div>
      <button className="flex flex-col-reverse items-center justify-center gap-2 text-primary bg-primary-container p-2 py-3 rounded-md hover:bg-blue-100 transition ml-2 mr-4">
        <MdAdd size={20} />
        <span className="write-vertical text-xl">Add Card</span>
      </button>
    </section>
  );
}
