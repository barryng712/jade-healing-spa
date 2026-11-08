import Image from "next/image";

export function SectionTexture({
  src,
  blend = "mix-blend-multiply",
}: {
  src: string;
  blend?: string;
}) {
  const soft = blend.includes("soft-light");
  const highOpacity = blend.includes("opacity-90");
  const imgClass = soft
    ? `section-texture section-texture--soft-light object-cover${highOpacity ? " md:opacity-90" : ""}`
    : "section-texture section-texture--multiply object-cover";

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <Image src={src} alt="" fill sizes="100vw" className={imgClass} />
    </div>
  );
}
