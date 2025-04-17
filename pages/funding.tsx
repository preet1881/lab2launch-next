// pages/funding.tsx
import { useState } from "react";

export default function FundingForm() {
  const [form, setForm] = useState({
    researcherName: "",
    email: "",
    project: "",
    amountNeeded: "",
    stage: "",
    pitchSummary: "",
  });

  const [statusMsg, setStatusMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMsg("Submitting...");

    try {
      const res = await fetch("/api/submit-funding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatusMsg("✅ Submitted successfully!");
        setForm({
          researcherName: "",
          email: "",
          project: "",
          amountNeeded: "",
          stage: "",
          pitchSummary: "",
        });
      } else {
        throw new Error();
      }
    } catch (err) {
      setStatusMsg("❌ Error submitting. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">💸 Apply for Research Funding</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="researcherName" placeholder="Your Name" value={form.researcherName} onChange={handleChange} required className="w-full p-2 border rounded" />
          <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required className="w-full p-2 border rounded" />
          <input name="project" placeholder="Project Title" value={form.project} onChange={handleChange} required className="w-full p-2 border rounded" />
          <input name="amountNeeded" placeholder="Amount Needed (in INR/USD)" value={form.amountNeeded} onChange={handleChange} required className="w-full p-2 border rounded" />
          <input name="stage" placeholder="Stage (Idea / Pilot / Market)" value={form.stage} onChange={handleChange} required className="w-full p-2 border rounded" />
          <textarea name="pitchSummary" placeholder="Pitch Summary" value={form.pitchSummary} onChange={handleChange} required className="w-full p-2 border rounded h-28" />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Submit</button>
        </form>
        {statusMsg && <p className="mt-4 text-center text-sm text-gray-700">{statusMsg}</p>}
      </div>
    </div>
  );
}
