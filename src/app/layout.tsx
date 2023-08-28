import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import ChildrenContainer from "@/components/childrenContainerGlobal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: "https://pulauintan.com/wp-content/themes/Apex/favicon.ico",
  title: "Pulau Intan Lestari ",
  description:
    "Fashion-Focused Fabric Manufacturer Fine Quality & Globally Trusted.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Head> */}
      {/*   <link */}
      {/*     rel="icon" */}
      {/*     href="https://pulauintan.com/wp-content/themes/Apex/favicon.ico" */}
      {/*   /> */}
      {/* </Head> */}
      <body className={`min-h-screen ${inter.className} relative h-fit`}>
        <Providers>
          <ChildrenContainer>{children}</ChildrenContainer>
        </Providers>
      </body>
    </html>
  );
}
