import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "This is Support page for Solid Pro",
};

const SupportPage = () => {
  return (
    <div className="pt-10 pb-20">
      <Contact />
    </div>
  );
};

export default SupportPage;
