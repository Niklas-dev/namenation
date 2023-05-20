import CallToAction from "./components/CallToAction";
import Headline from "./components/Headline";

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
