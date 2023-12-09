import "@libs/globals.css";
import { default as getMetadata } from "@hooks/usePageMetadata";

import { usePage as getPage } from "@hooks/usePage";
import Container from "@includes/Container";
import Footer from "@includes/Footer";
import NavBar from "@includes/NavBar";
import Navigator from "@includes/Navigator";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

const web_font = Manrope({
  weight: "200",
  subsets: ["latin"],
});


export async function generateMetadata(): Promise<Metadata> {
  
  const { metaData } = await getPage("home");

  return metaData;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const { layout } = await getMetadata();

  return (
    <Container type="Application" className={`${web_font.className} dark:bg-black font-thin tracking-tight bg-white `}   >
      <NavBar navBar={layout.navBar} />
      {children}
      <Footer footer={layout.footer} />
      <Navigator navigator={layout.navigator} />
    </Container>
  );
}
