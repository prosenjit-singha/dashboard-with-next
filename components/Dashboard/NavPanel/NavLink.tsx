import Link, { LinkProps } from "next/link";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  children: string;
  active?: boolean;
} & LinkProps;
export default function NavLink({ icon, children, ...rest }: Props) {
  const Icon = icon;
  return (
    <Link
      className="rounded flex items-center gap-5 px-4 py-3 text-slate-800 hover:bg-blue-100"
      {...rest}
    >
      <>
        <Icon size={22} />
        {children}
      </>
    </Link>
  );
}
