// pages/showcase.tsx
import { useState } from "react";

export default function ShowcaseForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    institution: "",
    researchArea: "",
    summary: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Submitted successfully!");
        setForm({
          fullName: "",
          email: "",
          institution: "",
          researchArea: "",
          summary: "",
        });
      } else {
        throw new Error();
      }
    } catch {
      setStatus("❌ Error submitting. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">🧪 Researcher Submission</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            name="institution"
            placeholder="Institution / Affiliation"
            value={form.institution}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            name="researchArea"
            placeholder="Area of Research"
            value={form.researchArea}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <textarea
            name="summary"
            placeholder="Research Summary (Non-Technical)"
            value={form.summary}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded h-32"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
        {status && (
          <p className="mt-4 text-center text-sm text-white bg-green-600 py-2 px-4 rounded-lg">
            {status}
          </p>
        )}
      </div>
    </div>
  );
}
