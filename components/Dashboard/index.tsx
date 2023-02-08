import Card from "./Card";
import { MdAdd } from "react-icons/md";

const CARD_NUMBER = 3475738137591234;
export default function Dashboard() {
  return (
    <section className="flex justify-end">
      <div></div>
      <div className="flex">
        <Card cardDetails={{ number: CARD_NUMBER }} />
        <Card cardDetails={{ number: CARD_NUMBER }} />
      </div>
      <button className="flex flex-col-reverse items-center justify-center gap-2 text-primary bg-primary-container p-2 py-3 rounded-md hover:bg-blue-100 transition ml-2">
        <MdAdd size={20} />
        <span className="write-vertical text-xl">Add Card</span>
      </button>
    </section>
  );
}
