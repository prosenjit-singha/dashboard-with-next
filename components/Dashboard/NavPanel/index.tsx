import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/icons/logo.png";
import navLinks from "./navLinks";
import NavLink from "./NavLink";
import { useRouter } from "next/router";

type Props = React.HTMLAttributes<HTMLDivElement>;

export default function NavPanel(props: Props) {
  const { pathname } = useRouter();

  console.log(pathname);

  return (
    <section {...props}>
      <Link href="/" className="text-[21px] font-bold flex items-center gap-3">
        <Image src={logo} alt="Logo" />
        Cashon
      </Link>
      <nav className="flex flex-col gap-1 mt-[50px]">
        {navLinks.map((link) => (
          <NavLink
            href={link.to}
            active={pathname === link.to}
            icon={link.icon}
            key={link.to}
          >
            {link.text}
          </NavLink>
        ))}
      </nav>
    </section>
  );
}
