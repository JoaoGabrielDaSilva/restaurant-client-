import { Session } from "next-auth";
import "../styles/globals.css";
import Providers from "./components/providers";

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return (
    <html>
      <head />
      <body>
        <Providers session={session}>
          <div id="modal" />
          {children}
        </Providers>
      </body>
    </html>
  );
}
