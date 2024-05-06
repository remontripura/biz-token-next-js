import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Biz Token | Home",
  description: "Biz token",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="https://i.postimg.cc/HkzmZjxm/favicon.png"
          sizes="any"
        />
      </head>
      <body className={inter.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}
