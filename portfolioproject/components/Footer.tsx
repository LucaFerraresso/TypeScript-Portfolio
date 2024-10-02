import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-between items-center bg-[#1E1E1E] px-4 py-2">
      <Link href={"/"}>
        <button className="text-white">
          &copy; 2024 My Website. All rights reserved
        </button>
      </Link>
      <div className="flex items-center gap-4">
        <Link href={"/Contacts"}>
          <button className="text-white">Contacts</button>
        </Link>
        <Link href={"/AboutMe"}>
          <button className="text-white">AboutMe</button>
        </Link>
      </div>
    </div>
  );
};
export default Footer;
