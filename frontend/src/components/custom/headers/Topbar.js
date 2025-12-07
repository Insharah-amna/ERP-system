import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const Topbar = () => {
  return (
    <header className="h-8 px-7 flex justify-between text-xs sticky top-0 z-5 bg-white">
      <div className="flex gap-2 items-center">
        <div className="flex gap-1 items-center">
          <Mail size={12} />
          <a href="#">info@example.com</a>
        </div>
        <p> | </p>
        <div className="flex gap-1 items-center">
          <Phone size={12} />
          <a href="#">+92 301 7788665</a>
        </div>
      </div>

      <div className="flex items-center">
        <Link href="/auth/login">Log in</Link>
      </div>
    </header>
  );
};

export default Topbar;
