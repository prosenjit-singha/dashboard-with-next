import Image from "next/image";
import pageNotFound from "@/assets/images/404.svg";
import Link from "next/link";

function PageNotFound() {
  return (
    <section className="flex h-full w-full justify-center items-center flex-col">
      <Image
        src={pageNotFound}
        alt="Page Not Found!"
        className="w-[clamp(200px,60vw,400px)]"
      />
      <h1 className="uppercase font-black text-red-500 text-3xl">
        Oops Page Not Found
      </h1>
      <Link
        href="/"
        className="mt-4 px-3 py-2 text-xl bg-primary-container text-primary rounded-md hover:bg-blue-100"
      >
        Go To Dashboard
      </Link>
    </section>
  );
}

export default PageNotFound;
