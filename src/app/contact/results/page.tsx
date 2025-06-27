"use client";
import React, { useEffect, useState } from "react";

type ContactMessage = {
  name: string;
  email: string;
  message: string;
  _id: string;
}
const Page = () => {
  const [, setFetching] = useState(true);
  const [contactData, setContactData] = useState<ContactMessage[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/contact`);
        const data = await res.json();
        setContactData(data);
      } catch (error) {
        console.log("Error fetching", error);
      } finally {
        setFetching(false);
      }
      try {
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(contactData);
  return (
    <div className="mt-16">
      {contactData && contactData.map((entry) => (
        <div key={entry._id}>
          <p>{entry.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
