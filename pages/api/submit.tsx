// pages/api/submit.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { fullName, email, institution, researchArea, summary } = req.body;

  try {
    const airtableRes = await fetch("https://api.airtable.com/v0/appLZ7Orr1tLfyQo2/ResearchShowcases", {
      method: "POST",
      headers: {
        Authorization: `Bearer patLpqeD7rxIf07C5.a7b326c0cbeb26b63eb75a069029a1479a1c80420ec3d40389b743cc3c1d80d5`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              "Full Name": fullName,
              "Email Address": email,
              Institution: institution,
              "Area of Research": researchArea,
              "Research Summary": summary,
            },
          },
        ],
      }),
    });

    const data = await airtableRes.json(); // 👈 get the real response

    if (!airtableRes.ok) {
      const errorText = JSON.stringify(data, null, 2);
      console.error("Airtable API error:", data); // 👈 log full error from Airtable
      throw new Error("Airtable API error");
    }

    return res.status(200).json({ message: "Submitted successfully" });
  } catch (error) {
    console.error("Submission error:", error);
    return res.status(500).json({ message: "Server error" });
  }
}