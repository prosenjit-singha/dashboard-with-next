import Overview from "./Overview";
import QuickTransfer from "./QuickTransfer";

function MiddleSection() {
  return (
    <section className="py-5 pl-4 mx-6 flex border-b-[1px]">
      <Overview className="basis-full" />
      <QuickTransfer className="p-4" />
    </section>
  );
}

export default MiddleSection;
