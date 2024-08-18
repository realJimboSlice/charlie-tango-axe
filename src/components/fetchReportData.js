const tags = ["wcag2a", "wcag2aa", "wcag2aaa", "best-practice", "ACT"];

export function calculateRating(passes, violations) {
  const totalRules = passes + violations;
  const violationRate = violations / totalRules;

  if (violationRate === 0) return "A+";
  if (violationRate <= 0.05) return "A";
  if (violationRate <= 0.1) return "B+";
  if (violationRate <= 0.15) return "B";
  if (violationRate <= 0.2) return "C+";
  if (violationRate <= 0.25) return "C";
  if (violationRate <= 0.3) return "D+";
  if (violationRate <= 0.35) return "D";
  if (violationRate <= 0.4) return "E+";
  if (violationRate <= 0.5) return "E";
  return "F";
}

export async function fetchData(params) {
  console.log("Fetching data with params:", params.toString());
  tags.forEach((tag) => params.append("tags", tag));

  const fullUrl = `https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`;
  console.log("Full Fetch URL:", fullUrl);

  try {
    const response = await fetch(fullUrl);
    if (!response.ok) {
      if (response.status === 404) {
        return { errorCode: 404 };
      }
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return { errorCode: 500 };
  }
}
