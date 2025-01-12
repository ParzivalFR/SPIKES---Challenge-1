import { Users } from "@/data/users";
import { User } from "@/types/user";
import Image from "next/image";
import { Marquee } from "../ui/marquee";

const firstRow = Users.slice(0, Users.length / 2);
const secondRow = Users.slice(Users.length / 2);

const ReviewCard = ({ avatar, name, pseudo, review }: User) => {
  return (
    <div className="relative w-72 p-[1.5px]">
      <div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-[#4C3182] to-[#11032C]" />
      <figure className="relative h-full rounded-[19px] bg-[#0C0024] p-4 cursor-pointer">
        <div className="flex flex-row items-center gap-3">
          <Image
            className="rounded-full"
            width="32"
            height="32"
            alt=""
            src={avatar}
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-white">
              {name}
            </figcaption>
            <p className="text-xs text-white/60">{pseudo}</p>
          </div>
        </div>
        <blockquote className="mt-3 text-sm leading-relaxed text-white/80">
          {review}
        </blockquote>
      </figure>
    </div>
  );
};

export function Reviews() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:60s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:40s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
