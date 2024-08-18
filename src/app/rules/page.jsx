import Link from "next/link";
import rules from "../../../public/data/rules-filtered";

export default function RulesPage() {
  return (
    <main className="bg-brand-beige-10 min-h-screen p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-grey-80 mb-6">
          Overview of Tested Accessibility Rules
        </h1>
        <ul className="space-y-4">
          {rules.map((rule) => (
            <li
              key={rule.id}
              className="bg-white border border-grey-40 rounded-lg p-4 shadow-sm mb-4 hover:bg-brand-orange-70 hover:border-brand-orange-70 hover:shadow-md transition-all duration-200 group"
            >
              <Link href={`/rules/${rule.id}`} key={rule.id}>
                <p className="text-grey-80">
                  Rule Id:{" "}
                  <span className="group-hover:text-brand-turquoise-50 underline font-bold">
                    {rule.id}
                  </span>
                </p>
                <p className="text-grey-80">
                  Description: <span>{rule.description}</span>
                </p>
                <p className="text-grey-80">
                  Tags:{" "}
                  <span className="font-bold">{rule.tags.join(", ")}</span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
