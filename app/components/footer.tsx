import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1E3D34] text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">

        {/* Top */}
        <div className="grid items-start gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
           <Link href="/" className="flex items-center gap-1">
            <Image
              src="/logo.png"
              alt="Funeral Insights Logo"
              width={34}
              height={34}
              className="h-8 w-8 object-contain"
            />

            <span className="text-xl font-bold text-[#C8A46A]">
              Funeral Insights
            </span>
          </Link>

            <p className="mt-4 leading-7 text-white/80">
              Helping families make informed funeral decisions through trusted
              guidance, practical tools and personalised support.
            </p>

            <p className="mt-6 text-sm text-[#C8A46A]">
              Guiding families. Connecting providers. Bringing clarity.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold uppercase tracking-wider text-[#C8A46A]">
              Explore
            </h3>

            <ul className="mt-5 space-y-3 text-white/80">
              <li>
                <Link href="/planning-guide" className="hover:text-white">
                  Funeral Planning Guide
                </Link>
              </li>

              <li>
                <Link href="/find-funeral-parlour" className="hover:text-white">
                  Find a Provider
                </Link>
              </li>

              <li>
                <Link href="/resources" className="hover:text-white">
                  Planning Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold uppercase tracking-wider text-[#C8A46A]">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-white/80">
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold uppercase tracking-wider text-[#C8A46A]">
              Legal
            </h3>

            <ul className="mt-5 space-y-3 text-white/80">
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/60 md:flex-row">

          <p>
            © {new Date().getFullYear()} Funeral Insights.
            All rights reserved.
          </p>

          <p>
            Bringing clarity to one of life's most difficult moments.
          </p>

        </div>

      </div>
    </footer>
  );
}