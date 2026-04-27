import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <h1 className="text-6xl font-bold tracking-widest uppercase">
        <span className={`${openSans.className} text-yellow-400`}>Harvey</span>
        <span className="text-white"> Specter</span>
      </h1>
    </main>
  );
}
