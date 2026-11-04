export function StepList({ steps, columns = true }: { steps: string[]; columns?: boolean }) {
  const wide = columns && steps.length > 8;

  return (
    <ol className={wide ? "columns-1 gap-x-10 md:columns-2" : ""}>
      {steps.map((step, index) => (
        <li
          key={`${index}-${step}`}
          className="mb-1 grid break-inside-avoid grid-cols-[1.6rem_1fr] gap-2 border-b border-line py-2 text-sm"
        >
          <span className="font-display text-wood">{index + 1}</span>
          <span>{step}</span>
        </li>
      ))}
    </ol>
  );
}
