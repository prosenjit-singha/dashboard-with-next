import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/icons/logo.png";

type Props = React.HTMLAttributes<HTMLDivElement>;

export default function NavPanel(props: Props) {
  return (
    <section {...props}>
      <Link href="/" className="text-[21px] font-bold flex items-center gap-3">
        <Image src={logo} alt="Logo" />
        Cashon
      </Link>
    </section>
  );
}
