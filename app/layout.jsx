// css
import "./globals.css";
// next
import { Inter } from "next/font/google";
// cmp
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Dashboard",
    template: "Dashboard | %s",
  },
  description: "Powerful Admin dashboard for E-Commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div>
          <Toaster position="top-center" />
        </div>
      </body>
    </html>
  );
}
