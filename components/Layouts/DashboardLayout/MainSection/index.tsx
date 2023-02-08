import DashboardHeader from "../Header";

type Props = {
  children: JSX.Element;
} & React.HTMLAttributes<HTMLDivElement>;

export default function MainSection({ children, ...rest }: Props) {
  return (
    <main {...rest}>
      <DashboardHeader />
      {children}
    </main>
  );
}
