import { Header } from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="-translate-y-10 space-y-5">
      <Header />
      {children}
    </div>
  );
}
