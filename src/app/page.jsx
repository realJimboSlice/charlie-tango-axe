"use client";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";

export default function Home() {
  const router = useRouter();
  const [url, setUrl] = useState("https://");
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (url) {
      console.log("Navigating to:", `/report?url=${encodeURIComponent(url)}`);
      router.push(`/report?url=${encodeURIComponent(url)}`);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault(); // Prevent the default paste behavior
    const pasteText = e.clipboardData.getData("text");

    if (pasteText.startsWith("http://") || pasteText.startsWith("https://")) {
      setUrl(pasteText); // Replace the entire value with the pasted URL
    } else {
      setUrl("https://" + pasteText); // Prepend "https://" if no protocol is present
    }

    // Move the cursor to the end of the input field
    setTimeout(() => {
      inputRef.current.setSelectionRange(url.length, url.length);
    }, 0);
  };

  const handleChange = (e) => {
    let inputValue = e.target.value;
    setUrl(inputValue);
  };

  return (
    <section className="bg-brand-beige-10 h-screen flex flex-col justify-center items-center p-6 overflow-hidden">
      <h1 className="text-4xl font-bold text-grey-80 text-center mb-4">
        Find out if a website is{" "}
        <span className="text-brand-turquoise-50">accessible</span> and{" "}
        <span className="text-brand-orange-70">compliant</span>!
      </h1>
      <p className="text-lg text-grey-80 text-center mb-6">
        Enter a website URL to get started:
      </p>
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label htmlFor="url" />
          <input
            type="url"
            id="url"
            placeholder="https://"
            pattern="https://.*"
            value={url}
            ref={inputRef}
            onChange={handleChange}
            onPaste={handlePaste} // Add paste event listener
            required
            className="p-3 border border-grey-40 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-turquoise-50 text-grey-100"
          />
          <button
            type="submit"
            className="bg-brand-turquoise-50 text-grey-100 p-3 rounded-md hover:bg-brand-turquoise-20 focus:outline-none focus:ring-2 focus:ring-brand-turquoise-50"
          >
            Check Website
          </button>
        </form>
      </div>
    </section>
  );
}
