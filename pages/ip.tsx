// pages/ip.tsx
import { useState } from "react";

export default function IPForm() {
  const [form, setForm] = useState({
    patentName: "",
    inventorEmail: "",
    industry: "",
    techArea: "",
    useCase: "",
    status: "",
  });

  const [statusMsg, setStatusMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMsg("Submitting...");

    try {
      const res = await fetch("/api/submit-ip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatusMsg("✅ Submitted successfully!");
        setForm({
          patentName: "",
          inventorEmail: "",
          industry: "",
          techArea: "",
          useCase: "",
          status: "",
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
        <h2 className="text-2xl font-bold text-center mb-6">🔓 Submit an IP for Marketplace</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="patentName" placeholder="Patent Title / Name" value={form.patentName} onChange={handleChange} required className="w-full p-2 border rounded" />
          <input type="email" name="inventorEmail" placeholder="Inventor's Email" value={form.inventorEmail} onChange={handleChange} required className="w-full p-2 border rounded" />
          <input name="industry" placeholder="Industry (e.g., Healthcare, Energy)" value={form.industry} onChange={handleChange} required className="w-full p-2 border rounded" />
          <input name="techArea" placeholder="Tech Area / Keywords" value={form.techArea} onChange={handleChange} required className="w-full p-2 border rounded" />
          <textarea name="useCase" placeholder="Potential Use Case / Application" value={form.useCase} onChange={handleChange} required className="w-full p-2 border rounded h-28" />
          <input name="status" placeholder="Status (Filed / Licensed / Open)" value={form.status} onChange={handleChange} required className="w-full p-2 border rounded" />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Submit</button>
        </form>
        {statusMsg && <p className="mt-4 text-center text-sm text-gray-700">{statusMsg}</p>}
      </div>
    </div>
  );
}
