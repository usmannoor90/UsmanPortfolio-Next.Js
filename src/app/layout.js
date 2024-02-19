/* eslint-disable @next/next/no-page-custom-font */
import "./globals.css";
import "react-responsive-modal/styles.css";

export const metadata = {
  // title: "M Usman Noor Portfolio",
  description:
    "M Usman Noor is a software engineer who builds accessible, inclusive products and digital experiences for the web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="./icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="./icon.png" />
        <link rel="icon" type="image/jpg" sizes="32x32" href="./icon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative">
        <div className="fixed">
          <div id="stars"></div>
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars3"></div>
        </div>

        {children}
      </body>
    </html>
  );
}
