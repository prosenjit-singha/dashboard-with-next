import MainSection from "./Dashboard/MainSection";
import NavPanel from "./Dashboard/NavPanel";

type Props = {
  children: JSX.Element;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex max-w-7xl mx-auto min-h-[100vh]">
      <NavPanel className="col-start-1 col-end-4 p-6 min-w-[256px] flex flex-col border-r-[2px]" />
      <MainSection className="col-start-4 col-end-13">{children}</MainSection>
    </div>
  );
}
