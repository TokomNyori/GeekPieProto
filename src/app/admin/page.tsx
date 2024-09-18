import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
};

function Admin() {
  return (
    <main className="min-h-screen antialiased">
      ADMIN
      <div className="h-96"></div>
    </main>
  );
}

export default Admin;
