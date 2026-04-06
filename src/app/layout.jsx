import "./globals.css";

export const metadata = {
  title: "Aldanex Site",
  description: "Aldanex.fi rebuilt with Next.js and React.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
