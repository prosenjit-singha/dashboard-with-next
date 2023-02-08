import MainSection from "./Dashboard/MainSection";
import NavPanel from "./Dashboard/NavPanel";

export default function DashboardLayout() {
  return (
    <>
      <div>
        <NavPanel />
        <MainSection />
      </div>
    </>
  );
}
