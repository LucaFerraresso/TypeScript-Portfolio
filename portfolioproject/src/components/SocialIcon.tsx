// Componente per le icone social
const SocialIcon: React.FC<{
  href: string;
  label: string;
  icon: React.ReactNode;
}> = ({ href, label, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="cursor-pointer mx-2 transition-transform duration-300 ease-in-out transform hover:scale-110"
  >
    {icon}
  </a>
);
export default SocialIcon;
