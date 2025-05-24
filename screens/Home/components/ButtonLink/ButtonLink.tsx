import { Link } from "expo-router";

import { ButtonLinkProps } from "./ButtonLink.types";

export function ButtonLink({ children, href, ...props }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className="w-full py-4 bg-main_white text-center rounded-md text-main_red text-base font-bold tracking-widest"
    >
      {" "}
      {children}
    </Link>
  );
}
