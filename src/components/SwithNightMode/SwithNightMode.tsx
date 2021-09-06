import React, { useEffect, useState } from "react";

function SwithNightMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    _toogleDarkMode();
  }, []);

  const toDark = () => {
    setIsDarkMode(true);
    const root = document.querySelector("body");
    if (!root) return;
    !root.classList.contains("dark") && root.classList.add("dark");
    localStorage.theme = "dark";
  };
  const toLight = () => {
    setIsDarkMode(false);
    const root = document.querySelector("body");
    if (!root) return;
    root.classList.remove("dark");
    localStorage.theme = "light";
  };

  function _toogleDarkMode() {
    //   Check nightMode from localStore
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      toDark();
    } else {
      toLight();
    }
  }

  return (
    <button
      tabIndex={0}
      onClick={() => {
        if (isDarkMode) {
          toLight();
        } else {
          toDark();
        }
      }}
      className="text-2xl md:text-3xl w-12 h-12 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 flex items-center justify-center"
    >
      <span className="sr-only">Enable dark mode</span>
      <i className="las la-sun"></i>
    </button>
  );
}

export default SwithNightMode;
