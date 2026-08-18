import { useState, useEffect } from 'react';
import useScrollAnimation from '../components/useScrollAnimation';

const contactInfo = {
  email: 'winnermichael2010@gmail.com',
  github: 'https://github.com/winnermichaels2010',
  twitter: 'https://x.com/winnerMich72654',
  phone: '09168103341',
};

export default function Contact() {
  const sectionRef = useScrollAnimation();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = 'Contact | winner.dev';
  }, []);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch('https://formspree.io/f/xdkzoqry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      const { name, email, message } = formState;
      window.location.href = `mailto:${contactInfo.email}?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
    } finally {
      setSubmitting(false);
    }
  };

  const contactLinks = [
    { href: `mailto:${contactInfo.email}`, label: 'Email', value: contactInfo.email, icon: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 4L12 13 2 4" /></> },
    { href: contactInfo.github, label: 'GitHub', value: 'github.com/winnermichaels2010', external: true, icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /> },
    { href: contactInfo.twitter, label: 'Twitter / X', value: '@winnerMich72654', external: true, icon: <><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></> },
    { href: `tel:${contactInfo.phone}`, label: 'Phone', value: contactInfo.phone, icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /> },
  ];

  return (
    <div className="pt-[72px]">
      <section ref={sectionRef} className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info Side */}
            <div className="animate-on-scroll">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                {"Let's "}<span className="text-accent">connect.</span>
              </h1>
              <p className="mt-4 max-w-md leading-relaxed" style={{ color: 'var(--c-text-sec)' }}>
                {"Got a project in mind, a question, or just want to say hello? I'd love to hear from you."}
                {"Fill out the form or reach out through any of the channels below."}
              </p>

              <div className="mt-8 space-y-3">
                {contactLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group"
                    style={{ backgroundColor: 'var(--c-card)', border: '1px solid var(--c-border)' }}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-accent shrink-0"
                      style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        {item.icon}
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs" style={{ color: 'var(--c-text-muted)' }}>{item.label}</div>
                      <div className="text-sm font-medium transition-colors group-hover:text-accent" style={{ color: 'var(--c-text)' }}>{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Form Side */}
            <div className="animate-on-scroll animate-delay-2">
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl space-y-5"
                style={{ backgroundColor: 'var(--c-card)', border: '1px solid var(--c-border)' }}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--c-text)' }}>Name</label>
                  <input id="name" name="name" type="text" placeholder="Your name"
                    value={formState.name} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all"
                    style={{ backgroundColor: 'var(--c-input-bg)', border: '1px solid var(--c-border)', color: 'var(--c-text)' }} />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--c-text)' }}>Email</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com"
                    value={formState.email} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all"
                    style={{ backgroundColor: 'var(--c-input-bg)', border: '1px solid var(--c-border)', color: 'var(--c-text)' }} />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--c-text)' }}>Message</label>
                  <textarea id="message" name="message" rows={5} placeholder="Tell me about your project or just say hi..."
                    value={formState.message} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all resize-none"
                    style={{ backgroundColor: 'var(--c-input-bg)', border: '1px solid var(--c-border)', color: 'var(--c-text)' }} />
                </div>

                {status === 'success' && (
                  <div className="p-3 rounded-xl text-sm text-green-400"
                    style={{ backgroundColor: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)' }}>
                    {"Message sent! I'll get back to you soon."}
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-3 rounded-xl text-sm text-red-400"
                    style={{ backgroundColor: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}>
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent rounded-xl font-semibold text-sm hover:bg-accent-hover hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ color: '#0c1210' }}
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                  {!submitting && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
