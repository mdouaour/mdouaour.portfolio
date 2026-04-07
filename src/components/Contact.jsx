import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Formspree or similar service endpoint can be wired here
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gray-900/40">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-indigo-400 font-mono text-sm mb-2 tracking-widest uppercase">Let&apos;s Talk</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Get in Touch</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Whether you have a project in mind, want to collaborate, or just want to say hi — my
            inbox is always open.
          </p>
        </div>

        {/* Quick contact links */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="mailto:mdouaour@gmail.com"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-700 hover:border-indigo-500 text-gray-300 hover:text-white text-sm font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            mdouaour@gmail.com
          </a>
          <a
            href="https://github.com/mdouaour"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-700 hover:border-indigo-500 text-gray-300 hover:text-white text-sm font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://twitter.com/mdoer"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-700 hover:border-indigo-500 text-gray-300 hover:text-white text-sm font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Twitter / X
          </a>
        </div>

        {/* Contact form */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-white text-xl font-bold mb-2">Message Sent!</h3>
              <p className="text-gray-400">Thanks for reaching out. I&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm text-gray-400 font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm text-gray-400 font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm text-gray-400 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hello..."
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
