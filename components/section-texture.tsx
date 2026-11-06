import Image from "next/image";

export function SectionTexture({
  src,
  blend = "mix-blend-multiply",
}: {
  src: string;
  blend?: string;
}) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <Image src={src} alt="" fill sizes="100vw" className={`object-cover ${blend}`} />
    </div>
  );
}
