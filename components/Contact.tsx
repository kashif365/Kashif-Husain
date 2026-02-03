import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase"; 

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await addDoc(collection(db, "messages"), {
        name,
        email,
        message,
        createdAt: serverTimestamp(),
      });

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="glass p-8 md:p-16 rounded-[2rem] relative overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            {/* LEFT SIDE (unchanged) */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Let's <span className="text-gradient">Connect</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Have a vision for a project or just want to chat about modern frontend tech? My inbox is always open.
              </p>
            </div>

            {/* FORM */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white"
                />
              </div>

              <textarea
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Tell me about your project..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white resize-none"
              />

              <button
                disabled={status === "sending"}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-all"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-400 text-sm">Message sent successfully ✅</p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm">Something went wrong ❌</p>
              )}
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
