// pages/api/submit-funding.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { researcherName, email, project, amountNeeded, stage, pitchSummary } = req.body;

  try {
    const airtableRes = await fetch("https://api.airtable.com/v0/appLZ7Orr1tLfyQo2/Launch%20Funding", {
      method: "POST",
      headers: {
        Authorization: `Bearer patLpqeD7rxIf07C5.a7b326c0cbeb26b63eb75a069029a1479a1c80420ec3d40389b743cc3c1d80d5`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              "Researcher Name": researcherName,
              "Email": email,
              "Project": project,
              "Amount Needed": parseFloat(amountNeeded), // ⚠ if using number column
              "Stage": stage,
              "Pitch Summary": pitchSummary,
            },
          },
        ],
      }),
    });

    const data = await airtableRes.json();

    if (!airtableRes.ok) {
      console.error("Airtable Error:", JSON.stringify(data, null, 2));
      throw new Error("Airtable API error");
    }

    return res.status(200).json({ message: "Submitted successfully" });
  } catch (error) {
    console.error("Submission error:", error);
    return res.status(500).json({ message: "Server error" });
  }
}
