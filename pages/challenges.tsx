// pages/challenges.tsx
import { useState } from "react";

export default function ChallengeForm() {
  const [form, setForm] = useState({
    companyName: "",
    email: "",
    problemStatement: "",
    budget: "",
    timeline: "",
    tags: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch("/api/submit-challenges", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Submitted successfully!");
        setForm({
          companyName: "",
          email: "",
          problemStatement: "",
          budget: "",
          timeline: "",
          tags: "",
        });
      } else {
        throw new Error();
      }
    } catch (err) {
      setStatus("❌ Error submitting. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">🏢 Post an R&D Challenge</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="companyName" placeholder="Company Name" value={form.companyName} onChange={handleChange} required className="w-full p-2 border rounded" />
          <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required className="w-full p-2 border rounded" />
          <textarea name="problemStatement" placeholder="Describe the Challenge / Problem" value={form.problemStatement} onChange={handleChange} required className="w-full p-2 border rounded h-28" />
          <input name="budget" placeholder="Proposed Budget (in INR/USD)" value={form.budget} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="timeline" placeholder="Timeline / Deadline" value={form.timeline} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="tags" placeholder="Relevant Keywords / Tech Area" value={form.tags} onChange={handleChange} className="w-full p-2 border rounded" />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Submit</button>
        </form>
        {status && <p className="mt-4 text-center text-sm text-gray-700">{status}</p>}
      </div>
    </div>
  );
}
