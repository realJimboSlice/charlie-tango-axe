import Image from "next/image";

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
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return { error: "Failed to fetch data." };
  }
}

export default async function ReportPage({ searchParams }) {
  const params = new URLSearchParams(searchParams);
  const data = await fetchData(params);

  if (data.error) {
    return (
      <main>
        <h1>Error</h1>
        <p>{data.error}</p>
      </main>
    );
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
