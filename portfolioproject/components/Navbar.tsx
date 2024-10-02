import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center bg-[#1E1E1E] px-4 py-2">
      <Link href={"/"}>
        <button className="text-white">Luca Ferraresso</button>
      </Link>
      <div className="flex items-center gap-4">
        <Link href={"/Login"}>
          <button className="text-white">Login</button>
        </Link>
        <Link href={"/Projects"}>
          <button className="text-white">Projects</button>
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
