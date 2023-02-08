import Link, { LinkProps } from "next/link";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  children: string;
  active?: boolean;
} & LinkProps;
export default function NavLink({ icon, children, active, ...rest }: Props) {
  const Icon = icon;
  return (
    <Link
      className={`rounded-md flex items-center gap-5 px-4 py-3 transition-all ${
        active
          ? "bg-blue-100/70 font-semibold text-blue-500"
          : "text-slate-700 hover:bg-blue-100/70 hover:text-slate-900"
      }`}
      {...rest}
    >
      <>
        <Icon size={22} />
        {children}
      </>
    </Link>
  );
}
