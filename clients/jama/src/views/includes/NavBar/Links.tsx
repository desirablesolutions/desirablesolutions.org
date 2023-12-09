import type { LinkProps, NavBarProps } from "@typings/index";
import Link from "./Link";
import { tuid } from "@utils/index";

export function Container({ children }: any) {
  return (
    <div className="items-center justify-center hidden w-full h-full mt-2 mb-2 overflow-hidden overflow-x-hidden border-black border-opacity-100 gap-44 lg:flex no-scrollbar border-seperate border-1">
      {children}
    </div>
  );
}

export default function Links({ links }: { links: NavBarProps["links"] }) {
  return (
    <Container>
      {links?.map((link: LinkProps) => (
        <Link key={tuid()} link={link} />
      ))}
    </Container>
  );
}
