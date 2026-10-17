import React from "react";
import "./styles.css";

export const metadata = {
  description: "Et starterprosjekt for Payload CMS, bygget med Docker",
  title: "Payload CMS",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="no">
      <body>
        {children}
      </body>
    </html>
  );
};
