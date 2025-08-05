import React from "react";
import { ContactForm } from "./ContactForm";

export const ContactUs: React.FC = () => {
  return (
    <div className="flex flex-wrap md:mb-0 mb-8">
      <div className="w-full md:w-1/2 p-6 flex flex-col">
        <h1 className="mt-1 text-2xl font-bold">Contact Us</h1>
        <p className="mt-5">
          If you have any questions, concerns, or suggestions, feel free to
          contact us anytime.
        </p>
      </div>
      <div className="w-full md:w-1/2 p-6 ">
        <ContactForm />
      </div>
    </div>
  );
};
