import Link from "next/link";
import Image from "next/image";
import { BookOpenCheck } from "lucide-react";

const Navbar = () => (
  <div className="navbar bg-base-100">
    <div className="flex-1">
      <Link href="/">
        <BookOpenCheck color="green" />
      </Link>
    </div>
    <div className="flex-none gap-4">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
      <Link href="/blog/new" className="btn btn-ghost">
        Create Post
      </Link>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <Image
              alt="avatar"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><a>Profile</a></li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
);

export default Navbar;
