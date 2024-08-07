import Image from "next/image";
import { notFound } from "next/navigation"; // For 404 errors
import { redirect } from "next/navigation"; // For redirection

const tags = [
  "wcag2a",
  "wcag2aa",
  "wcag2aaa",
  "wcag21a",
  "wcag21aa",
  "wcag22aa",
  "best-practice",
  "ACT",
];

async function fetchData(params) {
  tags.forEach((tag) => params.append("tags", tag));

  try {
    const response = await fetch(
      `https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`
    );
    if (!response.ok) {
      if (response.status === 404) {
        notFound(); // Handle 404 errors
      }
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw new Error("Failed to fetch data.");
  }
}

export default async function ReportPage({ searchParams }) {
  const params = new URLSearchParams(searchParams);

  try {
    const data = await fetchData(params);

    if (!data) {
      throw new Error("No data returned");
    }

    return (
      <main>
        <h1>Report for {data.url}</h1>
        <p>Found {data.violations.length} issues</p>
        <Image
          alt={`Screenshot of ${data.url}`}
          src={data.screenshot.url}
          width={data.screenshot.width}
          height={data.screenshot.height}
        />
      </main>
    );
  } catch (error) {
    console.error("Error in ReportPage:", error);
    // Redirect to custom 500 page
    redirect("/errors/error-500/500");
    return null;
  }
}
