import "@libs/globals.css";

import NavBar from "@includes/NavBar";
import Footer from "@includes/Footer";

export const metadata = {
  title: "Desirable Solutions",
  description: "We solve problems.",
};

export default function RootLayout(props: any) {

  const { children } = props;

  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
