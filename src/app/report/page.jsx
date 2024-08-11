"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import LoadingSpin from "../../components/loadingSpin";
import { useState, useEffect } from "react";

const tags = ["wcag2a", "wcag2aa", "wcag2aaa", "best-practice", "ACT"];

async function fetchData(params) {
  // Log the params to see what's being passed
  console.log("Fetching data with params:", params.toString());
  tags.forEach((tag) => params.append("tags", tag));

  // Log the full URL being fetched
  const fullUrl = `https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`;
  console.log("Full Fetch URL:", fullUrl);

  try {
    const response = await fetch(
      `https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`
    );
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

export default function ReportPage({ searchParams }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    console.log("Initial searchParams:", searchParams);
    async function loadReport() {
      const params = new URLSearchParams(searchParams);

      // Log the searchParams to ensure it's correct
      console.log("SearchParams:", searchParams);
      const fetchedData = await fetchData(params);

      if (fetchedData.errorCode === 404) {
        router.push("/errors/error-404");
      } else if (fetchedData.errorCode === 500) {
        router.push("/errors/error-500");
      } else {
        setData(fetchedData);
      }
      setLoading(false);
    }
    loadReport();
  }, [searchParams, router]);

  if (loading) {
    return <LoadingSpin />;
  }

  return (
    <main className="bg-brand-beige-10 min-h-screen p-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 flex-shrink-0">
            <Image
              alt={`Screenshot of ${data.url}`}
              src={data.screenshot.url}
              width={data.screenshot.width}
              height={data.screenshot.height}
              className="rounded-lg w-full border-solid border-2 border-grey-40"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-grey-80 mb-2">
              Report for{" "}
              <span className="text-brand-turquoise-50">{data.url}</span>
            </h1>
            <p className="text-lg text-grey-80">
              Tested for {data.passes.length + data.violations.length} AXE
              rules.
            </p>
            <p className="text-lg text-grey-80">
              Found{" "}
              <span className="font-bold text-brand-orange-70">
                {data.violations.length}
              </span>{" "}
              issues.
            </p>
          </div>
        </div>
        <article className="mt-8">
          <h2 className="text-2xl font-bold text-grey-80 mb-4">Violations</h2>
          <p className="text-grey-80 mb-4">Click on the rule to read more</p>
          <ul className="space-y-4">
            {data.violations.map((violation) => (
              <Link href={`/rules/${violation.id}`} key={violation.id}>
                <li
                  key={violation.id}
                  className="bg-white border border-grey-40 rounded-lg p-4 shadow-sm mb-4 hover:bg-brand-orange-70 hover:border-brand-orange-70 hover:shadow-md transition-all duration-200"
                >
                  <p className="text-grey-80">
                    Rule Id:{" "}
                    <span className="text-brand-turquoise-50 underline font-bold">
                      {violation.id}
                    </span>
                  </p>
                  <p className="text-grey-80">
                    Level of impact:{" "}
                    <span className="font-bold">{violation.impact}</span>
                  </p>
                  <p className="text-grey-80">
                    Description: <span>{violation.help}</span>
                  </p>
                </li>
              </Link>
            ))}
          </ul>
        </article>
      </div>
    </main>
  );
}
