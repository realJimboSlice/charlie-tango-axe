import Link from "next/link";
import rules from "../../../public/data/rules-filtered";

export default function RulesPage() {
  return (
    <div>
      <h1>Accessibility Rules Overview</h1>
      <ul>
        {rules.map((rule) => (
          <li key={rule.id}>
            <Link href={`/rules/${rule.id}`}>{rule.id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
