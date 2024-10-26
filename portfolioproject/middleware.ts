import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Questo middleware verrà eseguito su tutte le richieste
export function middleware(request: NextRequest) {
  // Se la rotta richiesta non esiste o restituisce un errore, reindirizza alla pagina di errore personalizzata
  const pathname = request.nextUrl.pathname;

  // Verifica se il percorso non è presente nella lista delle rotte esistenti o è una pagina di errore
  if (pathname.startsWith("/ErrorPage")) {
    // Reindirizza sempre alla tua pagina di errore personalizzata
    return NextResponse.rewrite(new URL("/ErrorPage", request.url));
  }

  // Gestisce altre richieste senza fare nulla
  return NextResponse.next();
}

// Configura il matcher per applicare il middleware a tutte le rotte tranne alcune eccezioni
export const config = {
  matcher: "/:path*",
};
