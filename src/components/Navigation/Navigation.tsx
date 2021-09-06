import React from "react";
import NavigationItem, { MegamenuItem, NavItemType } from "./NavigationItem";
import ncNanoId from "utils/ncNanoId";

const megaMenuDemo: MegamenuItem[] = [
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/7439460/pexels-photo-7439460.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    title: "Menu title",
    items: [
      {
        id: ncNanoId(),
        href: "#",
        name: "Life Style",
      },
      {
        id: ncNanoId(),
        href: "#",
        name: "Templates",
      },
      {
        id: ncNanoId(),
        href: "#",
        name: "Archive pages",
      },
      {
        id: ncNanoId(),
        href: "#",
        name: "Other pages",
      },
    ],
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/3156381/pexels-photo-3156381.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    title: "Menu title",
    items: [
      {
        id: ncNanoId(),
        href: "#",
        name: "Life Style",
      },
      {
        id: ncNanoId(),
        href: "#",
        name: "Templates",
      },
      {
        id: ncNanoId(),
        href: "#",
        name: "Archive pages",
      },
      {
        id: ncNanoId(),
        href: "#",
        name: "Other pages",
      },
    ],
  },
  {
    id: ncNanoId(),
    image: "",
    title: "Menu title",
    items: [
      {
        id: ncNanoId(),
        href: "#",
        name: "Life Style",
      },
      {
        id: ncNanoId(),
        href: "#",
        name: "Templates",
      },
      {
        id: ncNanoId(),
        href: "#",
        name: "Archive pages",
      },
      {
        id: ncNanoId(),
        href: "#",
        name: "Other pages",
      },
    ],
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/3464632/pexels-photo-3464632.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    title: "Menu title",
    items: [
      {
        id: ncNanoId(),
        href: "#",
        name: "Life Style",
      },
      {
        id: ncNanoId(),
        href: "#",
        name: "Templates",
      },
      {
        id: ncNanoId(),
        href: "#",
        name: "Archive pages",
      },
      {
        id: ncNanoId(),
        href: "#",
        name: "Other pages",
      },
    ],
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/3464632/pexels-photo-3464632.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    title: "Menu title",
    items: [
      {
        id: ncNanoId(),
        href: "#",
        name: "Life Style",
      },
      {
        id: ncNanoId(),
        href: "#",
        name: "Templates",
      },
      {
        id: ncNanoId(),
        href: "#",
        name: "Archive pages",
      },
      {
        id: ncNanoId(),
        href: "#",
        name: "Other pages",
      },
    ],
  },
];
const megaMenu3ItemDemo: MegamenuItem[] = [
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/7439460/pexels-photo-7439460.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    title: "Menu title",
    items: [
      {
        id: ncNanoId(),
        href: "#",
        name: "Life Style",
      },
      {
        id: ncNanoId(),
        href: "#",
        name: "Templates",
      },
      {
        id: ncNanoId(),
        href: "#",
        name: "Archive pages",
      },
      {
        id: ncNanoId(),
        href: "#",
        name: "Other pages",
      },
    ],
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/3156381/pexels-photo-3156381.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    title: "Menu title",
    items: [
      {
        id: ncNanoId(),
        href: "#",
        name: "Life Style",
      },
      {
        id: ncNanoId(),
        href: "#",
        name: "Templates",
      },
      {
        id: ncNanoId(),
        href: "#",
        name: "Archive pages",
      },
      {
        id: ncNanoId(),
        href: "#",
        name: "Other pages",
      },
    ],
  },
  {
    id: ncNanoId(),
    image: "",
    title: "Menu title",
    items: [
      {
        id: ncNanoId(),
        href: "#",
        name: "Life Style",
      },
      {
        id: ncNanoId(),
        href: "#",
        name: "Templates",
      },
      {
        id: ncNanoId(),
        href: "#",
        name: "Archive pages",
      },
      {
        id: ncNanoId(),
        href: "#",
        name: "Other pages",
      },
    ],
  },
];
const childrenDemo3: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "#",
    name: "Life Style",
  },
  {
    id: ncNanoId(),
    href: "#",
    name: "Life Style",
  },
  {
    id: ncNanoId(),
    href: "#",
    name: "Life Style",
  },
  {
    id: ncNanoId(),
    href: "#",
    name: "Life Style",
  },
];
const childrenDemo2: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "#",
    name: "Life Style",
    type: "dropdown",
    children: childrenDemo3,
  },
  {
    id: ncNanoId(),
    href: "#",
    name: "Life Style",
  },
  {
    id: ncNanoId(),
    href: "#",
    name: "Life Style",
  },
  {
    id: ncNanoId(),
    href: "#",
    name: "Life Style",
  },
];
const childrenDemo: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "#",
    name: "Menu has child",
    type: "dropdown",
    children: childrenDemo2,
  },
  {
    id: ncNanoId(),
    href: "#",
    name: "Life Style",
  },
  {
    id: ncNanoId(),
    href: "#",
    name: "Life Style",
  },
  {
    id: ncNanoId(),
    href: "#",
    name: "Life Style",
  },
];

const DATA: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
    type: "megaMenu",
    megaMenu: megaMenuDemo,
  },
  {
    id: ncNanoId(),
    href: "#",
    name: "Life Style",
    type: "dropdown",
    children: childrenDemo,
  },
  {
    id: ncNanoId(),
    href: "#",
    name: "Templates",
  },
  {
    id: ncNanoId(),
    href: "#",
    name: "Archive pages",
  },
  {
    id: ncNanoId(),
    href: "#",
    name: "Other pages",
    type: "megaMenu",
    megaMenu: megaMenu3ItemDemo,
  },
];

function Navigation() {
  return (
    <ul className="hidden lg:flex flex-wrap items-center space-x-1 relative">
      {DATA.map((item, _index) => (
        <NavigationItem key={item.id} menuItem={item} />
      ))}
    </ul>
  );
}

export default Navigation;
