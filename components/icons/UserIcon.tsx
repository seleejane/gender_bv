export function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={8} r={4} stroke="currentColor" strokeWidth={2} />
      <path d="M6 20c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="currentColor" strokeWidth={2} />
    </svg>
  );
}
