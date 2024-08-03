import Link from "next/link";
import "./globals.css";
import { ComponentElement } from "react";

export const metadata = {
  title: "Frontend Theory Visualizer",
  description: "Visualize and learn frontend theories",
};

export default function RootLayout(
  { children }: { children: any },
) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header>
            <nav>
              <Link href="/">Home</Link> |
              <Link href="/WebSafe">Web 安全</Link> |
              <Link href="/WebPerformance">Web 性能</Link>
            </nav>
          </header>
          <main>{children}</main>
        </div>
        <footer>
          <p>© 2024 Frontend Theory Visualizer</p>
        </footer>
      </body>
    </html>
  );
}
