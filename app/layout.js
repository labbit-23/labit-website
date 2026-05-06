import "./globals.css";
import ChakraProviderClient from "./ChakraProviderClient";

export const metadata = {
  title: "Labit | Health Ops Platform",
  description: "Labit branding and product website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProviderClient>{children}</ChakraProviderClient>
      </body>
    </html>
  );
}
