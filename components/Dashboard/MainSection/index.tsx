import DashboardHeader from "../Header";

type Props = {
  children: JSX.Element;
};

export default function MainSection({ children }: Props) {
  return (
    <main>
      <DashboardHeader />
      {children}
    </main>
  );
}
