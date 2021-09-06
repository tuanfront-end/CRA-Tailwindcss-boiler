import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import NcImage from "components/NcImage/NcImage";

// <--- NavItemType --->
export interface MegamenuItem {
  id: string;
  image: string;
  title: string;
  items: NavItemType[];
}
export interface NavItemType {
  id: string;
  name: string;
  href: string;
  targetBlank?: boolean;
  children?: NavItemType[];
  megaMenu?: MegamenuItem[];
  type?: "dropdown" | "megaMenu" | "none";
}

export interface NavigationItemProps {
  menuItem: NavItemType;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ menuItem }) => {
  const [menuCurrentHovers, setMenuCurrentHovers] = useState<string[]>([]);

  const onMouseEnterMenu = (id: string) => {
    setMenuCurrentHovers([...menuCurrentHovers, id]);
  };

  const onMouseLeaveMenu = (id: string) => {
    const menuIndex = menuCurrentHovers.indexOf(id);
    setMenuCurrentHovers(
      menuCurrentHovers.filter((item, index) => {
        return item !== id && index < menuIndex;
      })
    );
  };

  // ===================== MENU MEGAMENU =====================
  const renderMegaMenu = (menu: NavItemType) => {
    const isHover = menuCurrentHovers.includes(menu.id);

    const isFull = menu.megaMenu && menu.megaMenu?.length > 3;
    const classPopover = isFull
      ? "menu-megamenu--large"
      : "menu-megamenu--small relative";
    const classPanel = isFull
      ? "left-0"
      : "transform -translate-x-1/2 left-1/2";

    return (
      <Popover
        as="li"
        className={`sub-menu menu-megamenu ${classPopover}`}
        onMouseEnter={() => onMouseEnterMenu(menu.id)}
        onMouseLeave={() => onMouseLeaveMenu(menu.id)}
      >
        {({ open }) => (
          <>
            <Popover.Button as={Fragment}>
              {renderMainItem(menu, open)}
            </Popover.Button>
            <Transition
              as={Fragment}
              show={isHover}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                static
                className={`absolute z-10 w-screen max-w-sm px-4 mt-3 sm:px-0 lg:max-w-max ${classPanel}`}
              >
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-10 text-sm">
                  <div
                    className={`relative bg-white dark:bg-neutral-900 px-3 py-6 grid gap-1 grid-cols-${menu.megaMenu?.length}`}
                  >
                    {menu.megaMenu?.map((item) => (
                      <div key={item.id}>
                        <div className="px-2">
                          <NcImage
                            containerClassName="w-36 h-24 rounded-lg overflow-hidden relative flex"
                            src={item.image}
                          />
                        </div>
                        <p className="font-medium text-neutral-800 dark:text-neutral-200 py-1 px-2 my-2">
                          {item.title}
                        </p>
                        <ul className="grid space-y-1">
                          {item.items.map(renderMegaMenuNavlink)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };
  const renderMegaMenuNavlink = (item: NavItemType) => {
    return (
      <li key={item.id}>
        <NavLink
          exact
          strict
          target={item.targetBlank ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="inline-flex items-center font-normal text-neutral-6000 dark:text-neutral-300 py-1 px-2 rounded hover:text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
          to={{
            pathname: item.href || undefined,
          }}
          activeClassName="font-semibold text-neutral-700 bg-neutral-100 dark:bg-neutral-800 dark:!text-neutral-200"
        >
          {item.name}
        </NavLink>
      </li>
    );
  };

  // ===================== MENU DROPDOW =====================
  const renderDropdownMenu = (menuDropdown: NavItemType) => {
    const isHover = menuCurrentHovers.includes(menuDropdown.id);
    return (
      <Popover
        as="li"
        className="sub-menu menu-dropdown relative"
        onMouseEnter={() => onMouseEnterMenu(menuDropdown.id)}
        onMouseLeave={() => onMouseLeaveMenu(menuDropdown.id)}
      >
        {() => (
          <>
            <Popover.Button as={Fragment}>
              {renderMainItem(menuDropdown, isHover)}
            </Popover.Button>
            <Transition
              as={Fragment}
              show={isHover}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel static className="absolute z-10 w-56 mt-3 left-0">
                <ul className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 text-sm relative bg-white dark:bg-neutral-900 py-4 grid space-y-1">
                  {menuDropdown.children?.map((i) => {
                    if (i.type) {
                      return renderDropdownMenuNavlinkHasChild(i);
                    } else {
                      return renderDropdownMenuNavlink(i);
                    }
                  })}
                </ul>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  const renderDropdownMenuNavlinkHasChild = (item: NavItemType) => {
    const isHover = menuCurrentHovers.includes(item.id);
    return (
      <Popover
        as="li"
        key={item.id}
        className="sub-menu menu-dropdown relative"
        onMouseEnter={() => onMouseEnterMenu(item.id)}
        onMouseLeave={() => onMouseLeaveMenu(item.id)}
      >
        {() => (
          <>
            <Popover.Button as={Fragment}>
              {renderDropdownMenuNavlink(item)}
            </Popover.Button>
            <Transition
              as={Fragment}
              show={isHover}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                static
                className="absolute z-10 w-56 left-full pl-2 top-0"
              >
                <ul className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 text-sm relative bg-white dark:bg-neutral-900 py-4 grid space-y-1">
                  {item.children?.map((i) => {
                    if (i.type) {
                      return renderDropdownMenuNavlinkHasChild(i);
                    } else {
                      return renderDropdownMenuNavlink(i);
                    }
                  })}
                </ul>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  const renderDropdownMenuNavlink = (item: NavItemType) => {
    return (
      <li key={item.id} className="px-2">
        <NavLink
          exact
          strict
          target={item.targetBlank ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="flex items-center font-normal text-neutral-6000 dark:text-neutral-300 py-2 px-4 rounded-md hover:text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
          to={{
            pathname: item.href || undefined,
          }}
          activeClassName="font-semibold text-neutral-700 bg-neutral-100 dark:bg-neutral-800 dark:!text-neutral-200"
        >
          {item.name}
          {item.type && (
            <ChevronDownIcon
              className="ml-2 h-4 w-4 text-neutral-500"
              aria-hidden="true"
            />
          )}
        </NavLink>
      </li>
    );
  };

  // ===================== MENU MAIN MENU =====================
  const renderMainItem = (item: NavItemType, open?: boolean) => {
    return (
      <NavLink
        exact
        strict
        target={item.targetBlank ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm xl:text-base font-normal text-neutral-6000 dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-lg hover:text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
        to={{
          pathname: item.href || undefined,
        }}
        activeClassName="font-semibold text-neutral-700 bg-neutral-100 dark:bg-neutral-800 dark:!text-neutral-200"
      >
        {item.name}
        {item.type && (
          <ChevronDownIcon
            className="ml-1 h-4 w-4 text-neutral-400"
            aria-hidden="true"
          />
        )}
      </NavLink>
    );
  };

  switch (menuItem.type) {
    case "megaMenu":
      return renderMegaMenu(menuItem);
    case "dropdown":
      return renderDropdownMenu(menuItem);
    default:
      return <li>{renderMainItem(menuItem)}</li>;
  }
};

export default NavigationItem;
