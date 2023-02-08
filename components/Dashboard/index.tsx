import Card from "./Card";
import { MdAdd } from "react-icons/md";

export default function Dashboard() {
  return (
    <section className="grid grid-cols-12 place-items-center">
      <div></div>
      <div>
        <Card />
        <Card />
      </div>
      <button className="flex flex-col-reverse items-center justify-center gap-2 text-primary bg-primary-container p-2 py-3 rounded-md hover:bg-blue-100 transition">
        <MdAdd size={20} />
        <span className="write-vertical text-xl">Add Card</span>
      </button>
    </section>
  );
}
