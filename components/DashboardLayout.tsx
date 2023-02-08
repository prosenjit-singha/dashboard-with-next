import MainSection from "./Dashboard/MainSection";
import NavPanel from "./Dashboard/NavPanel";

type Props = {
  children: JSX.Element;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex max-w-7xl mx-auto min-h-[100vh]">
      <NavPanel className="p-6 min-w-[256px] flex flex-col border-r-[2px]" />
      <MainSection className="w-full">{children}</MainSection>
    </div>
  );
}
