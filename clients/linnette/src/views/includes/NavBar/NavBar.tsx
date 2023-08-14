import { default as Container } from "./Container";
import { default as Favicon } from "./Favicon";
import { default as Links } from "./Links";
import { default as CallToAction } from "./CallToAction";
import { default as Burger } from "./Burger";

export type NavBarProps = {
  container: any,
  favicon: any,
  burger: any,
  links: any,
  cta: any
}
export default function NavBar({ navBar } : { navBar: NavBarProps}) {

  
  return (
    <Container>
      <Favicon />
      <Burger />
      <Links />
      <CallToAction />
    </Container>
  );
}
