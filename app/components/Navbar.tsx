import { APP_NAME } from "~/constants/app";

import BellIcon from "./icons/bell";
import { Link } from "@remix-run/react";
import { createUserNavbar } from "~/constants/navbarLinks";

interface MenuProps {
  userId: string;
}

function Menu({ userId }: MenuProps) {
  const styles =
    "menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow";
  const navbarLinks = createUserNavbar(userId);

  return (
    <ul tabIndex={0} className={styles}>
      {navbarLinks.map(({ ref, label, Icon }) => (
        <li id={ref}>
          <Link to={ref}>
            <Icon />
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Dropdown() {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      <Menu userId={"prueba"} />
    </div>
  );
}

function Logo() {
  return (
    <Link to={"/"} className="btn btn-ghost text-xl">
      {APP_NAME}
    </Link>
  );
}

function Notifications() {
  return (
    <button className="btn btn-ghost btn-circle px-4">
      <div className="indicator ">
        <BellIcon />
        <span className="badge badge-xs badge-primary indicator-item hidden"></span>
      </div>
    </button>
  );
}

function MobileNavbar() {
  return (
    <div className="navbar lg:hidden bg-base-100 border-b-2 px-2">
      <div className="navbar-start">
        <Dropdown />
      </div>
      <div className="navbar-center">
        <Logo />
      </div>
      <div className="navbar-end">
        <Notifications />
      </div>
    </div>
  );
}

function DesktopNavbar() {
  return <></>;
}

export default function Navbar() {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
}
