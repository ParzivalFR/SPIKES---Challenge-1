import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <Link href="https://spikes.dev" target="_blank">
      <footer className="py-2 px-6 w-fit rounded-full backdrop-blur-sm border border-[#4C3182] hover:backdrop-blur-lg">
        <div className="flex flex-row items-center gap-2 ">
          <p>https://spikes.dev</p>
          <ArrowRight size={16} />
        </div>
      </footer>
    </Link>
  );
}
