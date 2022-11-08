import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Logo />
    </nav>
  );
}

export const Logo = () => <Link href={"/"}>Home Loans</Link>;
