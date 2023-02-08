import MainSection from "./Dashboard/MainSection";
import NavPanel from "./Dashboard/NavPanel";

type Props = {
  children: JSX.Element;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div>
      <NavPanel />
      <MainSection>{children}</MainSection>
    </div>
  );
}
