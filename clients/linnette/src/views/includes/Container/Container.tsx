import { Unica_One } from "next/font/google";
const inter = Unica_One({ weight: ["400"], subsets: ["latin"] });

export default function Container({ children }: any) {
  

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
