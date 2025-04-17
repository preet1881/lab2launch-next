// pages/match.tsx
import { useState } from "react";

export default function MatchForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    startupIdea: "",
    lookingFor: "",
    skills: "",
    location: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch("/api/submit-match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Submitted successfully!");
        setForm({
          fullName: "",
          email: "",
          startupIdea: "",
          lookingFor: "",
          skills: "",
          location: "",
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
        <h2 className="text-2xl font-bold text-center mb-6">🤝 Find a Co-Founder</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="fullName" placeholder="Full Name" value={form.fullName} onChange={handleChange} required className="w-full p-2 border rounded" />
          <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required className="w-full p-2 border rounded" />
          <textarea name="startupIdea" placeholder="Describe your startup idea" value={form.startupIdea} onChange={handleChange} required className="w-full p-2 border rounded h-24" />
          <input name="lookingFor" placeholder="Looking for (Tech / Biz / Design / etc.)" value={form.lookingFor} onChange={handleChange} required className="w-full p-2 border rounded" />
          <input name="skills" placeholder="Your Key Skills" value={form.skills} onChange={handleChange} required className="w-full p-2 border rounded" />
          <input name="location" placeholder="Your Location (City / Remote)" value={form.location} onChange={handleChange} required className="w-full p-2 border rounded" />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Submit</button>
        </form>
        {status && <p className="mt-4 text-center text-sm text-gray-700">{status}</p>}
      </div>
    </div>
  );
}
