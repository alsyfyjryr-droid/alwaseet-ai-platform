import "./globals.css";
export const metadata = {
  title: "ALWASEET AI",
  description: "AI Workforce & Marketing Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
