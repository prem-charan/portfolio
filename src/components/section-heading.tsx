export function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-6 flex items-baseline gap-3">
      <h2 className="text-xl font-medium tracking-tight">{title}</h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
