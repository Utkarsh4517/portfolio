import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Hero />
      <Services />
    </main>
  );
}
