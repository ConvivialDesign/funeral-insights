import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

      <Link
        href="/"
        className="flex items-center gap-1"
      >
        <Image
          src="/logo.png"
          alt="Funeral Insights Logo"
          width={90}
          height={90}
          priority
        />

  <span className="text-2xl font-bold text-[#173F35]">
    Funeral Insights
  </span>
</Link>

        <div className="hidden md:flex gap-8 text-sm font-medium">

          <Link href="/planning-guide">
            Planning Guide
          </Link>

          <Link href="/find-funeral-parlour">
            Find a Provider
          </Link>

          <Link href="/resources">
            Planning Resources
          </Link>

          <Link href="/about">
            About
          </Link>

          <Link href="/contact">
            Contact
          </Link>

        </div>

      </nav>
    </header>
  );
}