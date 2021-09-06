import { ComponentType } from "react";

export interface LocationStates {
  "/"?: {};
  "/home2"?: {};
  "/home3"?: {};
  "/about-us"?: {};
  "/contact"?: {};
  "/the-blog"?: {};
  "/blog-single/:id"?: {};
  "/page404"?: {};
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType<Object>;
}
