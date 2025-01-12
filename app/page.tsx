import { Footer } from "./components/landing/footer";
import { GridSection } from "./components/landing/grids";
import { Logo } from "./components/landing/logo";
import { Reviews } from "./components/landing/reviews";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <GridSection />
      <div className="flex flex-col items-center justify-between w-full h-svh py-8">
        <Logo />
        <Reviews />
        <Footer />
      </div>
    </main>
  );
}
