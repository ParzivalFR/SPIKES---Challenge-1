import { GridPattern } from "../design/grid_pattern";

export function GridSection() {
  return (
    <section className="fixed h-svh -z-10 inset-0">
      {/* GRID TOP */}
      <GridPattern className="absolute top-0 rotate-180 w-full h-auto" />
      <div className="absolute -top-48 w-full h-1/2 bg-gradient-radial from-[#4C3182]/20 via-purple-900/5 to-transparent" />

      {/* GRID BOTTOM */}
      <GridPattern className="absolute bottom-0 w-full h-auto" />
      <div className="absolute -bottom-48 w-full h-1/2 bg-gradient-radial from-[#4C3182]/20 via-[#4C3182]/5 to-transparent" />
    </section>
  );
}
