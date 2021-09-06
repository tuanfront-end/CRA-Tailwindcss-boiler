import React from "react";
import Logo from "components/Logo/Logo";
import Navigation from "components/Navigation/Navigation";
import SearchDropdown from "./SearchDropdown";
import SwithNightMode from "components/SwithNightMode/SwithNightMode";
import ButtonPrimary from "components/Button/ButtonPrimary";
import MenuBar from "components/MenuBar/MenuBar";

export default function Header() {
  return (
    <div className="nc-Header sticky top-0 bg-white dark:bg-neutral-900 bg-opacity-40 dark:bg-gray-800 filter backdrop-blur-3xl py-5">
      <div className="container relative flex justify-between items-center space-x-4 lg:space-x-8">
        <div className="flex justify-start flex-grow items-center space-x-4 sm:space-x-10 2xl:space-x-14">
          <Logo />
          <Navigation />
        </div>
        <div className="flex-shrink-0 flex items-center justify-end text-neutral-700 dark:text-neutral-100 space-x-1">
          <div className="hidden items-center lg:flex space-x-1">
            <SwithNightMode />
            <SearchDropdown />
            <div />
            <ButtonPrimary>Sign up</ButtonPrimary>
          </div>
          <div className="flex items-center lg:hidden space-x-1">
            <div />
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
  );
}
