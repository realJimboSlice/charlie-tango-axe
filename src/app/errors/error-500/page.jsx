export const metadata = {
  title: "Error 404",
};

export default function Error500() {
  return (
    <main className="bg-brand-beige-10 min-h-screen flex flex-col justify-center items-center p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-grey-80 mb-4">
          500 - Server-side error occurred
        </h1>
        <p className="text-lg text-grey-80">
          Sorry, something went wrong on our end. Please try again later.
        </p>
      </div>
    </main>
  );
}
