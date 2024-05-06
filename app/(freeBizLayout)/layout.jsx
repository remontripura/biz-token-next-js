
import Navbar from "../components/shared/navbar/Navbar";
import "../globals.css";

export const metadata = {
  title: "Biz Token | Free Biz",
  description: "Biz token",
};

export default function RootLayout({ children }) {
  return <html lang='en'>
    <body>
      <div>
        <Navbar />
        {children}
      </div>;
    </body>
  </html>;
}
