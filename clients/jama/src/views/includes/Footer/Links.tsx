import { default as Link } from "./Link";

export function Container({ children }: any) {
  return (
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
      {children}
    </ul>
  );
}

export default function FooterLinks({ links }: any) {
  return (
    <Container>
      {links.map((link: any) => (
        <Link {...link} key={Date.now()} />
      ))}
    </Container>
  );
}
