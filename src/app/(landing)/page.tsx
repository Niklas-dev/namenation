import { Kufam } from "next/font/google";
import CallToAction from "./components/CallToAction";
import Headline from "./components/Headline";
import styles from "./page.module.css";

const kufam_bold = Kufam({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});
const kufam = Kufam({ weight: "400", style: "normal", subsets: ["latin"] });

export default async function Home() {
  return (
    <main className="home-bg-image h-screen w-screen bg-cover flex justify-center items-center pt-8 lg:pt-20 min-h-[400px]">
      <div className="">
        <Headline />
        <CallToAction />
      </div>
    </main>
  );
}
