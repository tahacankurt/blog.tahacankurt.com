import "./globals.css";
import ThemeProvider from "./theme-provider";
import { NavBar } from "./components/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-white font-light dark:bg-slate-800 dark:text-slate-200">
        <ThemeProvider>
          <div className={"shadow-md "}>
            <div className={"container mx-auto py-6 "}>
              <NavBar/>
            </div>
          </div>
          <div className="container mx-auto py-5">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
