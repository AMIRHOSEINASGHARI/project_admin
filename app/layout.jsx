// css
import "./globals.css";
// cmp
import { Toaster } from "react-hot-toast";
// providers
import AntDesignConfigProvider from "@/providers/AntDesignConfigProvider";
import ReactQueryClientProvider from "@/providers/ReactQueryClientProvider";

export const metadata = {
  title: {
    default: "Dashboard",
    template: "Dashboard | %s",
  },
  description: "Powerful Admin dashboard for E-Commerce",
};

export default function RootLayout({ children }) {
  return (
    <ReactQueryClientProvider>
      <AntDesignConfigProvider>
        <html lang="en">
          <body>
            {children}
            <div>
              <Toaster position="top-center" />
            </div>
          </body>
        </html>
      </AntDesignConfigProvider>
    </ReactQueryClientProvider>
  );
}
