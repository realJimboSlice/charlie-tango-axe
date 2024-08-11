import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";

const tags = ["wcag2a", "wcag2aa", "wcag2aaa", "best-practice", "ACT"];

async function fetchData(params) {
  tags.forEach((tag) => params.append("tags", tag));

  try {
    const response = await fetch(
      `https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`
    );
    if (!response.ok) {
      if (response.status === 404) {
        // Return error 404
        return { errorCode: 404 };
      }
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch data:", error);
    // Return error 500
    return { errorCode: 500 };
  }
}

export default async function ReportPage({ searchParams }) {
  const params = new URLSearchParams(searchParams);
  const data = await fetchData(params);

  console.log("Fetched data:", data);

  if (data.errorCode === 404) {
    redirect("/errors/error-404"); // 404 Not Found
  }

  if (data.errorCode === 500) {
    redirect("/errors/error-500"); // 500 Internal Server Error
  }

  if (!data) {
    redirect("/errors/error-500"); // 500 Internal Server Error fallback
  }

  return (
    <main>
      <div>
        <div>
          <Image
            alt={`Screenshot of ${data.url}`}
            src={data.screenshot.url}
            width={data.screenshot.width}
            height={data.screenshot.height}
          />
        </div>
        <div>
          <h1>Report for {data.url}</h1>
          <p>
            Tested for {data.passes.length + data.violations.length} AXE rules.
          </p>
          <p>
            Found <span>{data.violations.length}</span> issues.
          </p>
        </div>
        <article>
          <h2>Violations</h2>
          <p>Click on the rule id to be redirected to a more detailed page</p>
          <ul>
            {data.violations.map((violation) => (
              <li key={violation.id}>
                <p>
                  Axe Rule Id:{" "}
                  <Link href={`/rules/${violation.id}`}>
                    <span>{violation.id}</span>
                  </Link>
                </p>
                <p>
                  Level of impact: <span>{violation.impact}</span>
                </p>
                <p>
                  Description: <span>{violation.help}</span>
                </p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </main>
  );
}
