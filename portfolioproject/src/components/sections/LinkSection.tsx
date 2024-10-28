import Link from "next/link";

const LinkSection = () => {
  return (
    <div className="flex justify-center items-center">
      <ul>
        <li>
          <Link href="/Projects" className="hover:underline">
            Pagina progetti
          </Link>
        </li>
        <li>
          <Link href="/TechStack" className="hover:underline">
            TechStack
          </Link>
        </li>
        <li>
          <Link href="/AboutMe" className="hover:underline">
            About me
          </Link>
        </li>
        <li>
          <Link href="/Contacts" className="hover:underline">
            Contacts
          </Link>
        </li>
        <li>
          <Link href="/Library icons" className="hover:underline">
            Library
          </Link>
        </li>
        <li>
          <Link href="/error" className="hover:underline">
            Error page
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default LinkSection;
