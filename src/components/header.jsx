import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-brand-turquoise-50 text-grey-100 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-brand-orange-70 text-xl">
              Home
            </Link>
          </li>
          <li>
            <Link href="/rules" className="hover:text-brand-orange-70 text-xl">
              Rules Overview
            </Link>
          </li>
        </ul>

        <div>
          <Image
            alt="Diversa logo"
            src="/assets/diversa.svg"
            width={150}
            height={150}
          />
        </div>
      </nav>
    </header>
  );
}
