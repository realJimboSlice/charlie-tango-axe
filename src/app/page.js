"use client"; // Required for client-side hooks and handlers
import { useRouter } from "next/navigation";
import { useState } from "react";

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
    <section>
      <h1>
        Find out if a website is <span>accessible</span> and{" "}
        <span>compliant</span>!
      </h1>
      <p>Enter a website URL to get started.</p>
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
  );
}
