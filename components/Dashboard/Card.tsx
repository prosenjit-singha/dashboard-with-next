import Image from "next/image";
import overlay from "@/assets/images/card-overlay-1.png";
import chip from "@/assets/images/chip.png";
import { splitCardNumber } from "@/utils/cardHelpers";
import { Card } from "./cards";

type Props = {
  cardDetails: Card;
  cardBgColor?: string;
};

function Card({ cardDetails, cardBgColor = "#0085FF" }: Props) {
  const numbers = splitCardNumber(cardDetails.number);

  return (
    <div
      className="bg-[#0085FF] rounded-xl overflow-hidden w-[315px] h-[200px] relative p-4 text-white flex flex-col mx-2"
      style={{ background: cardBgColor }}
    >
      <Image
        src={overlay}
        alt="Overlay"
        className="absolute top-0 left-0 w-full h-full -z-1"
      />
      {/* card header */}
      <section className="flex justify-between gap-4">
        <h1 className="text-2xl">LOGO</h1>
        <Image src={chip} alt="chip" />
      </section>

      {/* Card Number */}
      <p className="flex gap-2 text-lg mt-auto mb-4">
        <span>{numbers[0]}</span>
        <span>{numbers[1]}</span>
        <span>{numbers[2]}</span>
        <span>****</span>
      </p>

      {/* Card Footer */}
      <section className="flex justify-between gap-4">
        <div>
          <h2 className="uppercase text-[12px]">Total Balance</h2>
          <p>3,215,325 USD</p>
        </div>
        <div>
          <h2 className="uppercase text-[12px]">Exp. Date</h2>
          <p>04/24</p>
        </div>
      </section>
    </div>
  );
}

export default Card;
