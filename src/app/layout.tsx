import type { Metadata } from "next";
import "./styles.css";
import "./details.css";

export const metadata: Metadata = {
  title: "Krantijyoti Women’s Run 2027 | Pune",
  description: "Celebrate women, movement, and community at Krantijyoti Women’s Run in Pune on 3 January 2027.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
