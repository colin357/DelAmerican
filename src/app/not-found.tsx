import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x pb-24 pt-48 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-5xl">Page Not Found</h1>
      <Link href="/" className="btn mt-10">
        Back Home
      </Link>
    </section>
  );
}
