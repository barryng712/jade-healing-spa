export function StepList({
  steps,
  columns = true,
  plain = false,
}: {
  steps: string[] | null;
  columns?: boolean;
  plain?: boolean;
}) {
  const wide = !plain && columns && steps && steps.length > 8;

  return (
    <ol className={wide ? "columns-1 gap-x-10 md:columns-2" : plain ? "space-y-3" : ""}>
      {steps && steps.length > 0 && steps.map((step, index) => (
        <li
          key={`${index}-${step}`}
          className={
            plain
              ? "grid grid-cols-[1.6rem_1fr] gap-2 text-[15px] leading-6"
              : "mb-1 grid break-inside-avoid grid-cols-[1.6rem_1fr] gap-2 border-b border-line py-2 text-sm"
          }
        >
          <span className="font-display text-wood">{index + 1}</span>
          <span>{step}</span>
        </li>
      ))}
    </ol>
  );
}
