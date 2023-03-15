import "./../styles/globals.css";

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
      <body>{children}</body>
    </html>
  );
}
