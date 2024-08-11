import rules from "../../../../public/data/rules-filtered";
import Link from "next/link";

export const metadata = {
  title: "Accessibility Rule Details",
  description: "Detailed information about a specific accessibility rule.",
};

export default function RuleDetailPage({ params }) {
  const { slug } = params;
  const rule = rules.find((r) => r.id === slug);

  return (
    <main className="bg-brand-beige-10 min-h-screen p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-grey-80 mb-6">{rule.id}</h1>
        <div className="bg-white border border-grey-40 rounded-lg p-6 shadow-sm">
          <p className="text-grey-80 mb-4">
            <strong className="font-bold">Tags:</strong> {rule.tags.join(", ")}
          </p>
          <p className="text-grey-80 mb-4">
            <strong className="font-bold">Description:</strong>{" "}
            {rule.description}
          </p>
          <p className="text-grey-80 mb-4">
            <strong className="font-bold">How to:</strong> {rule.help}
          </p>
          <p className="text-grey-80 mb-4">
            <a
              href={rule.helpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-turquoise-50 underline font-bold hover:text-brand-orange-70 transition-all duration-200"
            >
              Further explanation on Deque University&apos;s website
            </a>
          </p>
        </div>
        <div className="mt-6">
          <Link
            href="/rules"
            className="text-grey-80 underline hover:text-brand-orange-70 transition-all duration-200"
          >
            Back to rule overview
          </Link>
        </div>
      </div>
    </main>
  );
}
