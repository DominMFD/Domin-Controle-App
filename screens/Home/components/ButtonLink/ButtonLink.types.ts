import { LinkProps } from "expo-router/build/link/Link";
import { ComponentType, ReactNode } from "react";

export type ButtonLinkProps = {
  LinkComponent: ComponentType<LinkProps>;
  href: LinkProps["href"];
  children: ReactNode | string;
};
