"use client";
import React, { Suspense, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import LoadingSpin from "../../components/LoadingSpin";
import { fetchData, calculateRating } from "../../components/fetchReportData";

function ReportContent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Gets the "url" parameter
    const url = searchParams.get("url");

    if (!url) {
      console.error("URL parameter is missing");
      return;
    }

    async function loadReport() {
      const params = new URLSearchParams(searchParams);

      console.log("SearchParams:", params.toString());
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

  if (!data) {
    return <p>No data available</p>;
  }

  const rating = calculateRating(data.passes.length, data.violations.length);

  return (
    <main className="bg-brand-beige-10 min-h-screen p-6 overflow-hidden overscroll-none">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 flex-shrink-0">
            <Image
              alt={`Screenshot of the website: ${data.url}`}
              src={data.screenshot.url}
              width={data.screenshot.width}
              height={data.screenshot.height}
              className="rounded-lg w-full border-solid border-2 border-grey-40"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-grey-80 mb-2">
              Report for <span className="text-cyan-600">{data.url}</span>
            </h1>
            <p className="text-lg text-grey-80">
              Tested for{" "}
              <span className="font-bold">
                {data.passes.length + data.violations.length}
              </span>{" "}
              AXE rules.
            </p>
            <p className="text-lg text-grey-80">
              Found{" "}
              <span className="font-bold text-orange-600">
                {data.violations.length}
              </span>{" "}
              issues.
            </p>
            <p className="text-lg text-grey-80">
              Accessibility Rating:{" "}
              <span className="font-bold text-7xl">{rating}</span>
            </p>
          </div>
        </div>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-grey-80 mb-4">Violations</h2>
          <p className="text-grey-80 mb-4">
            Click on the &quot;Rule Id&quot; to read more
          </p>
          <ul className="space-y-4">
            {data.violations.map((violation) => (
              <li
                key={violation.id}
                className="bg-white border border-grey-40 rounded-lg p-4 shadow-sm mb-4"
              >
                <article>
                  <p className="text-grey-80">
                    Rule Id:{" "}
                    <Link
                      href={`/rules/${violation.id}`}
                      key={violation.id}
                      rel="noopener"
                      target="_blank"
                    >
                      <span className="underline font-bold ">
                        {violation.id}
                      </span>
                    </Link>
                  </p>
                  <p className="text-grey-80">
                    Level of impact:{" "}
                    <span className="font-bold ">{violation.impact}</span>
                  </p>
                  <p className="text-grey-80">
                    Description:{" "}
                    <span className="font-bold ">{violation.help}</span>
                  </p>
                  {/* <br /> */}
                  <p className="font-bold text-xl text-grey-80 pt-2 pb-2">
                    Details:
                  </p>
                  {violation.nodes.length > 0 && (
                    <div>
                      {violation.nodes.map((node, index) => (
                        <div key={index} className="mb-4">
                          {/* <p className="text-grey-80">
                            <strong>Impact:</strong> {node.impact}
                          </p> */}
                          <p className="text-grey-80">
                            <span>HTML:</span>{" "}
                            <span className="font-bold ">
                              <code>{node.html}</code>
                            </span>
                          </p>
                          <p className="text-grey-80">
                            Element Location:{" "}
                            <span className="font-bold ">
                              {node.target.join(", ")}
                            </span>
                          </p>
                          <p className="text-grey-80">
                            {/* To solve this problem you have to:{" "} */}
                            <span className="font-bold ">
                              {node.failureSummary}
                            </span>
                          </p>
                          <p>-</p>
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default function ReportPage() {
  return (
    <Suspense fallback={<LoadingSpin />}>
      <ReportContent />
    </Suspense>
  );
}
