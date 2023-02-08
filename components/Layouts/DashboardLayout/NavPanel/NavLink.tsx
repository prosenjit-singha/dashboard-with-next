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
      className={`rounded-md flex items-center gap-5 px-4 py-3 transition hover:bg-blue-100 ${
        active
          ? "font-semibold text-primary bg-primary-container"
          : "text-slate-700 hover:text-slate-900"
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
