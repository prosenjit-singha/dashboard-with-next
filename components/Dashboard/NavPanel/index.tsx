import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/icons/logo.png";
import navLinks from "./navLinks";
import NavLink from "./NavLink";

type Props = React.HTMLAttributes<HTMLDivElement>;

export default function NavPanel(props: Props) {
  return (
    <section {...props}>
      <Link href="/" className="text-[21px] font-bold flex items-center gap-3">
        <Image src={logo} alt="Logo" />
        Cashon
      </Link>
      <nav className="flex flex-col gap-1 mt-[50px]">
        {navLinks.map((link) => (
          <NavLink href={link.to} icon={link.icon} key={link.to}>
            {link.text}
          </NavLink>
        ))}
        {/* {navLinks[0].icon} */}
        {/* <NavLink
          href={navLinks[0].to}
          icon={navLinks[0].icon}
          key={navLinks[0].to}
        >
          {navLinks[0].text}
        </NavLink> */}
      </nav>
    </section>
  );
}
