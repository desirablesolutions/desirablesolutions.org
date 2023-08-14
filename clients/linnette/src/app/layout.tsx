import Container from "@includes/Container";
import Footer from "@includes/Footer";
import NavBar from "@includes/NavBar";
import "@libs/globals.css";
import type { MetadataProps } from "@typings/index";
import { DefinitionParams, LayoutType, defineLayout } from "blakprint";

export async function generateMetadata(): Promise<MetadataProps> {
  return {
    title: "Linnettes Lens.",
    description: "how to combine Art and Engineering one project at a time.",
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): DefinitionParams<LayoutType<any, React.ReactNode, Error>> {


  const Component = defineLayout<any, React.ReactNode, Error>(() => (
    <Container>
      <NavBar navBar={null} />
      {children}
      <Footer footer={null}/>
    </Container>
  ));

  return Component.value() as (typeof Component)["value"];

}
