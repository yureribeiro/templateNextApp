import "../globals.css";
import Sidebar from "@/components/sidebar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="ContainerLayout">
      <Sidebar />
      <div className="contentLayout">
        {children}
      </div>
    </main>
  );
}
