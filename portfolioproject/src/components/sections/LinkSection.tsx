import links from "@/assets/DataArray/LinkSectionArray";
import Link from "next/link";

const LinkSection = () => {
  return (
    <>
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Link Utili</h2>
        <div className="grid grid-cols-1 gap-6">
          <div className="flex flex-col items-center">
            <ul className="space-y-4">
              {links.map((link, index) => (
                <li key={index} className="p-2 flex items-center gap-6 ">
                  {link.icon}
                  <Link
                    href={link.href}
                    className="text-black hover:underline  hover:font-bold hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkSection;
