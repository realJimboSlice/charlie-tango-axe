import rules from "../../../../public/data/rules-filtered";
import Link from "next/link";

export default function RuleDetailPage({ params }) {
  const { slug } = params;
  const rule = rules.find((r) => r.id === slug);

  return (
    <div>
      <h1>{rule.id}</h1>
      <p>
        <strong>Tags:</strong> {rule.tags.join(", ")}
      </p>
      <p>
        <strong>Description:</strong> {rule.description}
      </p>
      <p>
        <strong>How to:</strong> {rule.help}
      </p>
      <p>
        <a href={rule.helpUrl} target="_blank" rel="noopener noreferrer">
          Read further explanation on Deque University&apos;s website
        </a>
      </p>
      <Link href="/rules">Back to Rules</Link>
    </div>
  );
}
