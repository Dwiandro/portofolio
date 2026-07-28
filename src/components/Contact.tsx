import React, { useState, useEffect, useRef } from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaMapMarkerAlt, FaCopy, FaCheck, FaPaperPlane, FaComments } from "react-icons/fa";
import { animate, stagger } from "animejs";
import { PERSONAL_INFO } from "../data/cvData";

const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll(".contact-anime");
      if (items.length > 0) {
        animate(items, {
          opacity: [0, 1],
          translateY: [20, 0],
          delay: stagger(100),
          duration: 700,
          ease: "outCubic",
        });
      }
    }
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 relative bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-yellow-400 text-xs font-mono mb-3">
            <FaComments />
            <span>HUBUNGI SAYA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mari <span className="text-yellow-400">Bekerja Sama</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-2">
            Terbuka untuk peluang Management Trainee (Technology & Data), posisi Web Developer, kolaborasi project, atau diskusi teknis.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="contact-anime opacity-0 minimal-card p-6 rounded-2xl border border-zinc-800 minimal-card-hover flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-yellow-400 text-xl shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-400 block">Email Resmi</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-bold text-white hover:text-yellow-400 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-300 hover:text-yellow-400 transition-colors"
                title="Salin Email"
              >
                {copiedEmail ? <FaCheck className="text-yellow-400" /> : <FaCopy />}
              </button>
            </div>

            {/* Phone / WhatsApp Card */}
            <div className="contact-anime opacity-0 minimal-card p-6 rounded-2xl border border-zinc-800 minimal-card-hover flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-yellow-400 text-xl shrink-0">
                  <FaPhoneAlt />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-400 block">Telepon / WhatsApp</span>
                  <a
                    href={`https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-white hover:text-yellow-400 transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-300 hover:text-yellow-400 transition-colors"
                title="Salin No. Telepon"
              >
                {copiedPhone ? <FaCheck className="text-yellow-400" /> : <FaCopy />}
              </button>
            </div>

            {/* Location Card */}
            <div className="contact-anime opacity-0 minimal-card p-6 rounded-2xl border border-zinc-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-yellow-400 text-xl shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <span className="text-xs font-mono text-zinc-400 block">Lokasi Domisili</span>
                <span className="text-sm font-bold text-white">{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="contact-anime opacity-0 minimal-card p-6 rounded-2xl border border-zinc-800 space-y-3">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                Tautan Profil Profesional
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-950 border border-yellow-400/40 text-yellow-400 font-bold text-xs hover:bg-yellow-400 hover:text-zinc-950 transition-colors"
                >
                  <FaLinkedin className="text-base" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-200 font-bold text-xs hover:bg-zinc-800 transition-colors"
                >
                  <FaGithub className="text-base" />
                  <span>GitHub Repo</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="contact-anime opacity-0 lg:col-span-7 minimal-card p-6 sm:p-8 rounded-2xl border border-zinc-800 relative">
            <h3 className="text-2xl font-extrabold text-white mb-2">
              Kirim Pesan Langsung
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm mb-6">
              Silakan tinggalkan pesan untuk pertanyaan, wawancara kerja, atau tawaran kolaborasi project.
            </p>

            {formSent ? (
              <div className="bg-zinc-950 border border-yellow-400/50 p-6 rounded-xl text-center space-y-2 animate-in fade-in duration-300">
                <FaCheck className="text-3xl text-yellow-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Pesan Berhasil Terkirim!</h4>
                <p className="text-xs text-zinc-300">
                  Terima kasih sudah menghubungi. Afdhal akan segera membalas email Anda.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Masukkan nama Anda"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-200 text-xs focus:outline-none focus:border-yellow-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1">
                      Alamat Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nama@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-200 text-xs focus:outline-none focus:border-yellow-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-zinc-400 block mb-1">
                    Subjek Pesan
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Peluang Kerja / Project Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-200 text-xs focus:outline-none focus:border-yellow-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-zinc-400 block mb-1">
                    Isi Pesan *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan detail pesan Anda di sini..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-200 text-xs focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-yellow-400 text-zinc-950 font-bold text-xs sm:text-sm hover:bg-yellow-300 transition-all shadow flex items-center justify-center gap-2"
                >
                  <FaPaperPlane />
                  <span>Kirim Pesan Sekarang</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
