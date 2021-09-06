import Button from "components/Button/Button";
import ButtonClose from "components/ButtonClose/ButtonClose";
import Logo from "components/Logo/Logo";
import SwithNightMode from "components/SwithNightMode/SwithNightMode";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { MAIN_MENU } from "data/navigation";
import { NavItemType } from "./NavigationItem";

export interface NavMobileProps {
  data?: NavItemType[];
  onClickClose?: () => void;
}

const NavMobile: React.FC<NavMobileProps> = ({
  data = MAIN_MENU,
  onClickClose,
}) => {
  const _renderMenuChild = (item: NavItemType) => {
    return (
      <ul className="nav-mobile-sub-menu px-2 text-base">
        {item.children?.map((i, index) => (
          <Disclosure
            key={i.href + index}
            as="li"
            className="capitalize text-gray-700 dark:text-gray-200"
          >
            <NavLink
              exact
              strict
              to={{
                pathname: i.href || undefined,
              }}
              className="flex px-4 py-2 font-medium capitalize hover:bg-gray-100"
              activeClassName="text-secondary"
            >
              {i.name}
              {i.children && (
                <span
                  className="flex-grow z-20 relative flex"
                  onClick={(e) => e.preventDefault()}
                >
                  <Disclosure.Button as="span" className="flex-grow text-right">
                    <i className="ml-1 las la-angle-down"></i>
                  </Disclosure.Button>
                </span>
              )}
            </NavLink>
            {i.children && (
              <Disclosure.Panel>{_renderMenuChild(i)}</Disclosure.Panel>
            )}
          </Disclosure>
        ))}
      </ul>
    );
  };

  const _renderItem = (item: NavItemType, index: number) => {
    return (
      <Disclosure
        key={item.id}
        as="li"
        className="text-gray-900 dark:text-white"
      >
        <NavLink
          exact
          strict
          className="flex w-full items-center py-2 px-4 font-medium uppercase text-sm hover:bg-gray-100"
          to={{
            pathname: item.href || undefined,
          }}
          activeClassName="text-secondary"
        >
          {item.name}
          {item.children && (
            <span
              className="flex-grow z-20 relative flex"
              onClick={(e) => e.preventDefault()}
            >
              <Disclosure.Button as="span" className="flex-grow text-right">
                <i className="ml-1 mb-1 las la-angle-down"></i>
              </Disclosure.Button>
            </span>
          )}
        </NavLink>
        {item.children && (
          <Disclosure.Panel>{_renderMenuChild(item)}</Disclosure.Panel>
        )}
      </Disclosure>
    );
  };

  return (
    <div className="overflow-y-auto w-full md:w-80 h-screen py-2 transition transform shadow-lg ring-1 ring-black ring-opacity-20 bg-white dark:bg-gray-800 divide-y-2 divide-gray-100 dark:divide-gray-700">
      <div className="py-6 px-5">
        <Logo />
        <div className="flex flex-col mt-5 text-gray-700 dark:text-gray-300 text-sm">
          <span>Contact us: ++8801682530219</span>
          <span>Mail us: eoard@gmail.com</span>

          <div className="flex space-x-3 text-gray-900 dark:text-gray-100 text-xl mt-4">
            <a href="#root">
              <i className="lab la-facebook-f"></i>
            </a>
            <a href="#root">
              <i className="lab la-twitter"></i>
            </a>
            <a href="#root">
              <i className="lab la-pinterest-p"></i>
            </a>
            <a href="#root">
              <i className="lab la-github"></i>
            </a>
          </div>
        </div>
        <span className="absolute right-2 top-2 p-1">
          <ButtonClose
            onClick={onClickClose}
            containerClassName="text-black dark:text-white"
          />
        </span>
      </div>
      <ul className="flex flex-col py-6 px-2 space-y-2">
        {data.map(_renderItem)}
      </ul>
      <div className="flex items-center justify-between py-6 px-5 space-x-4">
        <Button containerClassName="text-white bg-gray-700 uppercase">
          Get Template
        </Button>
        <span className="block md:hidden">
          <SwithNightMode />
        </span>
      </div>
    </div>
  );
};

export default NavMobile;
