import {
  GitBranch,
  GitPullRequestIcon,
  InfoIcon,
  TextCursorIcon,
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
              <GitBranch color="blue" />
            </li>
            <li>
              <TextCursorIcon color="gray" />
            </li>
            <li>
              <InfoIcon color="green" />
            </li>
            <li>
              <User color="purple" />
            </li>
            <li>
              <GitPullRequestIcon color="orange" />
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
      </div>
    </div>
  );
};
export default LinkSection;
