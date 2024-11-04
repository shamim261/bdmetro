import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" shadow-md flex justify-center items-center">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          className="py-7"
          width={250}
          height={250}
        />
      </Link>
    </div>
  );
};

export default Navbar;
