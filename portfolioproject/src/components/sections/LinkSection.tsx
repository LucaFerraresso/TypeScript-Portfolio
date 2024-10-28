import {
  CodeIcon,
  LibraryBigIcon,
  MailIcon,
  TerminalIcon,
  User,
  XCircle,
} from "lucide-react";
import Link from "next/link";

const LinkSection = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex justify-center items-center gap-12">
        <div>
          <ul>
            <li>
              <TerminalIcon color="blue" />
            </li>
            <li>
              <CodeIcon color="black" />
            </li>
            <li>
              <User color="green" />
            </li>
            <li>
              <MailIcon color="purple" />
            </li>
            <li>
              <LibraryBigIcon color="orange" />
            </li>
            <li>
              <XCircle color="red" />
            </li>
          </ul>
        </div>
        <div>
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
              <Link href="/Library" className="hover:underline">
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
      </div>
    </div>
  );
};
export default LinkSection;
