import type { NavBarProps } from "@typings/index";
import { default as Favicon } from "./Favicon";
import { default as Links } from "./Links";
import { safeProperties } from "@/controllers/utils";
import Container from "./Container";
import { defaultProps } from "./defaults";

export default function NavBar({ navBar }: { navBar: NavBarProps }) {
  
  const { links, favicon } = safeProperties({
    props: navBar,
    defaults: defaultProps,
  });

  return (
    <Container>
      <Favicon favicon={favicon} />
      <Links links={links} />
    </Container>
  );
}
