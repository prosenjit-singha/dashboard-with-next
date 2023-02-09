import Overview from "./Overview";
import QuickTransfer from "./QuickTransfer";

function MiddleSection() {
  return (
    <section className="mx-6 flex border-b-[1px] my-4">
      <Overview className="basis-full p-4 border-r-[1px]" />
      <QuickTransfer className="p-4" />
    </section>
  );
}

export default MiddleSection;
