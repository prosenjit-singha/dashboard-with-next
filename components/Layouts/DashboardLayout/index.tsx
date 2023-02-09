import MainSection from "./MainSection";
import NavPanel from "./NavPanel";

type Props = {
  children: JSX.Element;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex max-w-[1440px] mx-auto min-h-[100vh]">
      <NavPanel className="p-6 min-w-[256px] flex flex-col border-gray-300 border-r-[1px]" />
      <MainSection className="basis-full">{children}</MainSection>
    </div>
  );
}
