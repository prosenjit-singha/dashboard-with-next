import Overview from "./Overview";
import QuickTransfer from "./QuickTransfer";

function MiddleSection() {
  return (
    <section className="py-5 mx-6 flex border-b-[1px]">
      <Overview />
      <QuickTransfer />
    </section>
  );
}

export default MiddleSection;
