// Small "AI-generated" label shown on every lesson, quiz question and explanation (QA audit F10).
export function AiBadge({ text }: { text: string }) {
  return <span className="inline-flex shrink-0 items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">{text}</span>
}
