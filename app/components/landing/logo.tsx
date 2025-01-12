import Link from "next/link";
import { SpikesIcon } from "../design/spikes_icon";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 w-fit">
      <SpikesIcon className="h-8 w-8" />
      <h1 className="text-2xl font-bold">Spikes</h1>
    </Link>
  );
}
