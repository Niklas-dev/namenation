import "./../styles/globals.css";

import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "NameNation | Learn the background of your name!",
  description:
    "NameNation is a website where you can learn the background of your name. Not just your background can be found here, but also an estimated age and random facts related to names!",
  keywords: ["name", "nationality", "nation", "facts", "age"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} bg-[#181818]`}>{children}</body>
    </html>
  );
}
