import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import "./globals.css";

/**Font management */
import { Kumbh_Sans } from "next/font/google";
const kumbsans = Kumbh_Sans({
  subsets: ["latin"],
  display: "swap",
});

/**Meta Data management */
export const metadata = {
  title: {
    template: "%s | Developer Resources Hub.",
    default: "Developer Resources Hub",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${kumbsans.className}  text-white flex flex-col min-h-screen`}
      >
        {/* Include Navbar at the top */}
        <Navbar />

        {/* Main content goes here */}
        <main>{children}</main>

        {/* Footer at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
