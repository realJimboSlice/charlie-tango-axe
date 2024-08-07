import Image from "next/image";

// Revalidate route every 30 minutes
export const revalidate = 1800;

export async function getServerSideProps(context) {
  const params = new URLSearchParams(context.query);
  const tags = ["wcag2a", "wcag2aa", "ACT"];

  tags.forEach((tag) => params.append("tags", tag));

  try {
    const response = await fetch(
      `https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return { props: { data: null, error: "Failed to fetch data." } };
  }
}

const ReportPage = ({ data, error }) => {
  if (error) {
    return (
      <main>
        <h1>Error</h1>
        <p>{error}</p>
      </main>
    );
  }

  if (!data) {
    return (
      <main>
        <h1>Loading...</h1>
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
};

export default ReportPage;
