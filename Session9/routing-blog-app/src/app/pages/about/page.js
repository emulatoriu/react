import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This blog is built with Next.js to demonstrate routing concepts.</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}