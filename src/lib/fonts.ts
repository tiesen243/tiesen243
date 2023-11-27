import { Poppins } from "next/font/google";

const fontSans = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-sans",
});

export const variable = fontSans.variable;
export default fontSans;
