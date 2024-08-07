import Image from "next/image";
import { redirect } from "next/navigation";

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
}
