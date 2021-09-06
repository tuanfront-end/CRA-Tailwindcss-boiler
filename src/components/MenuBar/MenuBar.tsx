import React, { ReactNode, useState, Fragment, useEffect } from "react";
import { Transition, Dialog } from "@headlessui/react";
import NavMobile from "components/Navigation/NavMobile";

export interface MenuBarProps {
  renderButtonBar?: ReactNode;
}
const MenuBar: React.FC<MenuBarProps> = ({ renderButtonBar }) => {
  const [isVisable, setIsVisable] = useState(false);

  useEffect(() => {
    setIsVisable(false);
  }, [window.location.pathname]);

  const handleOpenMenu = () => setIsVisable(true);
  const handleCloseMenu = () => setIsVisable(false);

  const renderContent = () => {
    return (
      <Transition show={isVisable} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          static
          open={isVisable}
          onClose={handleCloseMenu}
        >
          <div className="fixed left-0 top-0 bottom-0 w-full md:w-auto z-max outline-none focus:outline-none">
            <React.Fragment>
              <Transition.Child
                as={Fragment}
                enter="transition duration-100 transform"
                enterFrom="opacity-0 -translate-x-14"
                enterTo="opacity-100 translate-x-0"
                leave="transition duration-150 transform"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 -translate-x-14"
              >
                <div className="z-10 relative">
                  <NavMobile onClickClose={handleCloseMenu} />
                </div>
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter=" duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave=" duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
              </Transition.Child>
            </React.Fragment>
          </div>
        </Dialog>
      </Transition>
    );
  };

  return (
    <>
      <button
        onClick={handleOpenMenu}
        className="text-2xl md:text-3xl w-12 h-12 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {renderContent()}
    </>
  );
};

export default MenuBar;
