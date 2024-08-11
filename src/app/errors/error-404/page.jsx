export const metadata = {
  title: "Error 404",
};

export default function Error404() {
  return (
    <main className="bg-brand-beige-10 min-h-screen flex flex-col justify-center items-center p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-grey-80 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-grey-80">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </main>
  );
}
