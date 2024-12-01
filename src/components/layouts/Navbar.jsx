"use client";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
// import SearchButton from "./SearchButton";

const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background py-3">
        <nav className="container px-2 sm:px-4 lg:px-6 flex items-center justify-between">
          <MobileNav />
          <DesktopNav />
          <div>
            Search Button cartbutton
            <Link href="/sign-in">
              Sign In
              <span className="sr-only">Sign In</span>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
