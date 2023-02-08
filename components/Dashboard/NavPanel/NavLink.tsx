import Link, { LinkProps } from "next/link";

type Props = {
  icon?: React.ReactNode;
  children: string;
} & LinkProps;
export default function NavLink({ icon, children, ...rest }: Props) {
  return (
    <Link className="" {...rest}>
      {icon} {children}
    </Link>
  );
}
