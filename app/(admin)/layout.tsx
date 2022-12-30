import Sidebar from "../components/side-bar";
import WarningBar from "../components/warning-bar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">{children}</div>
    </div>
  );
}
