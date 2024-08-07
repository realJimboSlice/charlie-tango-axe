"use client"; // Required for client-side hooks and handlers
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [url, setUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (url) {
      router.push(`/report?url=${encodeURIComponent(url)}`);
    }
  };

  return (
    <main>
      <section>
        <h1>
          Find out if a website is <span>accessible</span> and up to{" "}
          <span>ADA</span> standards.
        </h1>
        <h2>
          Learn whether or not a site is accessible for people with disabilities
          and compliant with legislation!
        </h2>
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="url">Enter a website URL:</label>
            <input
              type="text"
              id="url"
              placeholder="https://"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
            <button type="submit">Check</button>
          </form>
        </div>
      </section>
    </main>
  );
}
