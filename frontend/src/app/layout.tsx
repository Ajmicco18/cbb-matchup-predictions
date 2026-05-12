import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Machine Learning Model Simulation",
  description: "Application to allow users to upload data, select ml model, adjust parameters, and view output",
  authors: [{ "name": "Anthony Micco" }]
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
