import { GridPattern } from "../design/grid_pattern";

export function GridSection() {
  return (
    <section className="fixed h-svh -z-10 inset-0">
      {/* GRID TOP */}
      <GridPattern className="absolute top-0 rotate-180 w-full h-auto" />
      <div className="h-96 w-screen rounded-full absolute -top-96 bg-primary/40 blur-[200px]"></div>

      {/* GRID BOTTOM */}
      <GridPattern className="absolute bottom-0 w-full h-auto" />
      <div className="h-96 w-screen rounded-full absolute -bottom-96 bg-primary/40 blur-[200px]"></div>
    </section>
  );
}
