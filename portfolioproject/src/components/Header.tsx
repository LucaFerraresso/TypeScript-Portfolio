// components/Header.tsx
import { Metadata } from "next";

// Definisci l'interfaccia per i props
interface HomeHeadProps {
  metadata: Metadata;
}

const Header = ({ metadata }: HomeHeadProps) => {
  // Assicurati di gestire i tipi correttamente
  let iconUrl: string | undefined;

  // Verifica se icons è presente
  if (metadata.icons) {
    // Controlla se è un array o un oggetto
    if (Array.isArray(metadata.icons)) {
      iconUrl = (metadata.icons[0] as { url?: string }).url; // Assumendo che ogni oggetto in icons abbia una proprietà url
    } else if (typeof metadata.icons === "object") {
      iconUrl = (metadata.icons as { icon?: string }).icon; // Accedi alla proprietà icon
    }
  }

  return (
    <>
      <title>{String(metadata.title || "Default Title")}</title>
      <meta
        name="description"
        content={String(metadata.description || "Default description")}
      />
      <link rel="icon" href={iconUrl || "/default-icon.svg"} />
    </>
  );
};

export default Header;
