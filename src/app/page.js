import Image from "next/image";

export default function Home() {
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
          <form>
            <label htmlFor="url">Enter a website URL:</label>
            <input type="text" id="url" placeholder="https://" required />
            <button>Check</button>
          </form>
        </div>
      </section>
    </main>
  );
}
