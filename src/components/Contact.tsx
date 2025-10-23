import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { Mail, Linkedin, Instagram, Facebook } from 'lucide-react';
import { toast } from 'react-toastify';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);

    const form = event.currentTarget;
    const formDataToSend = new FormData(form);
    formDataToSend.append("access_key", "d4db8bdd-ce9c-441a-8e38-2b86e925bda1");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
        form.reset();
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error("Error:", data);
        toast.error(data.message || "Failed to send message.", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 py-32 bg-black text-white overflow-hidden"
    >
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0 bg-[url('/layer-2.png')] bg-cover bg-center opacity-25" />

      <div ref={ref} className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16"
        >
          {/* Left Section */}
          <div>
            <p className="mb-4 tracking-widest uppercase opacity-70">Get In Touch</p>
            <h2
              style={{ fontSize: '3rem', lineHeight: '1.2', fontWeight: '600' }}
              className="mb-6"
            >
              Let's Work
              <br />
              <span className="italic">Together</span>
            </h2>
            <p className="opacity-70 mb-12">
              Have a project in mind? I'm always open to discussing new opportunities,
              creative collaborations, or partnership ventures.
            </p>

            <div className="space-y-6">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=eoburuvuru@icloud.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity"
              >
                <Mail className="w-5 h-5" />
                <span>eoburuvuru@icloud.com</span>
              </a>
              <div className="flex gap-6">
                <a
                  href="https://www.linkedin.com/in/ephraim-buruvuru-594151236"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:border-white/40 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="http://www.instagram.com/ephraimburuvuru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:border-white/40 transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/share/17QFmhuSmT/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:border-white/40 transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section — Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-0 py-4 bg-transparent border-b border-white/20 focus:border-white outline-none transition-colors placeholder:text-white/40"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-0 py-4 bg-transparent border-b border-white/20 focus:border-white outline-none transition-colors placeholder:text-white/40"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="w-full px-0 py-4 bg-transparent border-b border-white/20 focus:border-white outline-none transition-colors placeholder:text-white/40 resize-none"
              />
            </div>

            <button
              type="submit"
              className="px-8 py-4 bg-white text-black rounded-full hover:opacity-80 transition-opacity"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
