"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname=usePathname();
    const links=<>
    <li><Link href="/Home" className={pathname === "/workouts" ? "text-accent" : "text-gray-400"}> Workout</Link></li>
        <li><Link href="/my-plan" className={pathname === "/my-plan" ? "text-accent" : "text-gray-400"}>My Plan</Link></li>
    </>;
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <div className='flex gap-1.5'>
    <img src="./logo.png" alt="logo" />
    <a className="btn btn-ghost text-xl">Fitlog</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {links}
    </ul>
  </div>
  <div className="navbar-end gap-2.5">
    <Link href='/my-plan' className={pathname === "/my-plan" ? "text-accent" : "text-gray-400"}>Plan</Link>
    <Link href='/my-plan' className={pathname === "/my-plan" ? "text-accent" : "text-gray-400"}>Saved</Link>
  </div>
</div>
    );
};

export default Navbar;