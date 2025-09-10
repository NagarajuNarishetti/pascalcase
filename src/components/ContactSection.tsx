"use client";
import Image from 'next/image';
import { useId, useState } from 'react';
import { motion } from 'framer-motion';

type ContactFormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export default function ContactSection() {
  const formId = useId();
  const [form, setForm] = useState<ContactFormState>({ name: '', email: '', company: '', message: '' });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<null | 'ok' | 'error'>(null);

  const setField = (key: keyof ContactFormState, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const errors = {
    name: form.name.trim() ? undefined : 'Name is required.',
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? undefined : 'Enter a valid email.',
    company: form.company.trim() ? undefined : 'Company is required.',
    message: form.message.trim() ? undefined : 'Message is required.',
  } as const;

  const hasErrors = Object.values(errors).some(Boolean);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, company: true, message: true });
    if (hasErrors) return;
    setSubmitting(true);
    try {
      // Simulate request; wire to API route later
      await new Promise((r) => setTimeout(r, 900));
      setSubmitted('ok');
      setForm({ name: '', email: '', company: '', message: '' });
    } catch {
      setSubmitted('error');
    } finally {
      setSubmitting(false);
    }
  };


  const helperText = (key: keyof ContactFormState) => {
    const msg = errors[key];
    if (!touched[key] || !msg) return null;
    return (
      <p id={`${formId}-${key}-error`} role="alert" className="mt-1 text-xs text-red-400">
        {msg}
      </p>
    );
  };

  const inputClasses = (invalid?: boolean) =>
    `w-full rounded-lg border px-3 py-2 text-sm text-text-primary bg-surface-input border-border-default backdrop-blur focus:outline-none focus:ring-2 focus:bg-overlay-1 ring-accent placeholder:text-text-muted ${invalid ? 'border-red-400/60 ring-red-400/60' : ''
    }`;

  return (
    <section aria-labelledby="contact-heading" className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left: Illustration */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-lg">
            <Image
              src="/contact.png"
              alt="Contact our team"
              width={800}
              height={800}
              className="h-auto w-full max-h-[500px] object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
          </div>
        </div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 260, damping: 26 }}
          className="rounded-2xl border border-border-default bg-surface-card backdrop-blur-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.25)] p-6 md:p-8"
        >
          <header className="mb-4">
            <h2 id="contact-heading" className="text-2xl font-bold">
              Contact Us
            </h2>
            <p className="mt-1 text-sm text-text-muted">
              We usually respond within one business day. Tell us a little about your needs.
            </p>
          </header>

          <form noValidate onSubmit={onSubmit} className="space-y-4 contact-form" aria-describedby={submitted === 'ok' ? `${formId}-success` : undefined}>
            {/* Row: Name + Email */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Name with icon + floating label */}
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
                  {/* user icon */}
                  <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" stroke="currentColor" strokeWidth="1.5" /><path d="M20 22a8 8 0 1 0-16 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </span>
                <input
                  id={`${formId}-name`}
                  name="name"
                  type="text"
                  required
                  aria-required="true"
                  aria-invalid={Boolean(touched.name && errors.name)}
                  aria-describedby={touched.name && errors.name ? `${formId}-name-error` : undefined}
                  value={form.name}
                  onChange={(e) => setField('name', e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                  placeholder=" "
                  className={`${inputClasses(touched.name && Boolean(errors.name))} pl-9 peer`}
                />
                <label htmlFor={`${formId}-name`} className="pointer-events-none absolute left-9 top-1/2 -translate-y-1/2 text-sm text-text-muted transition-all peer-focus:top-2 peer-focus:text-xs peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-xs">Name</label>
                {helperText('name')}
              </div>

              {/* Email */}
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
                  {/* mail icon */}
                  <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" stroke="currentColor" strokeWidth="1.5" /><path d="m3 7 9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </span>
                <input
                  id={`${formId}-email`}
                  name="email"
                  type="email"
                  required
                  aria-required="true"
                  aria-invalid={Boolean(touched.email && errors.email)}
                  aria-describedby={touched.email && errors.email ? `${formId}-email-error` : undefined}
                  value={form.email}
                  onChange={(e) => setField('email', e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  placeholder=" "
                  className={`${inputClasses(touched.email && Boolean(errors.email))} pl-9 peer`}
                />
                <label htmlFor={`${formId}-email`} className="pointer-events-none absolute left-9 top-1/2 -translate-y-1/2 text-sm text-text-muted transition-all peer-focus:top-2 peer-focus:text-xs peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-xs">Email</label>
                {helperText('email')}
              </div>
            </div>

            {/* Company */}
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
                {/* building icon */}
                <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 21h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M7 21V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14" stroke="currentColor" strokeWidth="1.5" /><path d="M9 10h.01M12 10h.01M15 10h.01M9 13h.01M12 13h.01M15 13h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </span>
              <input
                id={`${formId}-company`}
                name="company"
                type="text"
                required
                aria-required="true"
                aria-invalid={Boolean(touched.company && errors.company)}
                aria-describedby={touched.company && errors.company ? `${formId}-company-error` : undefined}
                value={form.company}
                onChange={(e) => setField('company', e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, company: true }))}
                placeholder=" "
                className={`${inputClasses(touched.company && Boolean(errors.company))} pl-9 peer`}
              />
              <label htmlFor={`${formId}-company`} className="pointer-events-none absolute left-9 top-1/2 -translate-y-1/2 text-sm text-text-muted transition-all peer-focus:top-2 peer-focus:text-xs peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-xs">Company</label>
              {helperText('company')}
            </div>

            {/* Message */}
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-3 text-text-muted">
                {/* message icon */}
                <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a8 8 0 0 1-11.8 7L3 20l1-6A8 8 0 1 1 21 12Z" stroke="currentColor" strokeWidth="1.5" /></svg>
              </span>
              <textarea
                id={`${formId}-message`}
                name="message"
                required
                aria-required="true"
                aria-invalid={Boolean(touched.message && errors.message)}
                aria-describedby={touched.message && errors.message ? `${formId}-message-error` : undefined}
                value={form.message}
                onChange={(e) => setField('message', e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                placeholder=" "
                className={`${inputClasses(touched.message && Boolean(errors.message))} min-h-[120px] pl-9 peer resize-vertical`}
              />
              <label htmlFor={`${formId}-message`} className="pointer-events-none absolute left-9 top-3 text-sm text-text-muted transition-all peer-focus:top-2 peer-focus:text-xs peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-xs">Message</label>
              {helperText('message')}
            </div>

            {/* CTA */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              disabled={submitting}
              className="inline-flex w-full items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-[color:var(--on-accent)] shadow-[0_10px_24px_rgba(0,0,0,0.25)] transition-colors focus:outline-none focus-visible:ring-2 ring-accent disabled:opacity-60 hover:brightness-95"
              aria-busy={submitting}
            >
              {submitting ? 'Sending…' : 'Send Message'}
            </motion.button>

            {submitted === 'ok' && (
              <p id={`${formId}-success`} className="text-sm text-emerald-400">
                Thanks! We received your message and will get back to you shortly.
              </p>
            )}
            {submitted === 'error' && (
              <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
            )}
          </form>

          {/* Extra Contact Info - icon buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="mailto:support@pascalcase.com" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-default bg-surface-input backdrop-blur transition-colors focus-visible:outline-none focus-visible:ring-2 ring-accent hover:bg-overlay-1" aria-label="Email support">
              <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" stroke="currentColor" strokeWidth="1.5" /><path d="m3 7 9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </a>
            <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-default bg-surface-input backdrop-blur transition-colors focus-visible:outline-none focus-visible:ring-2 ring-accent hover:bg-overlay-1" aria-label="LinkedIn">
              <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 8.98h3.96V21H3V8.98Zm7.49 0H14.3v1.64h.05c.44-.83 1.51-1.7 3.11-1.7 3.33 0 3.94 2.19 3.94 5.05V21h-3.96v-5.2c0-1.24-.02-2.83-1.73-2.83-1.74 0-2.01 1.36-2.01 2.74V21H10.5V8.98Z" /></svg>
            </a>

            <span className="ml-2 text-xs text-text-muted">support@pascalcase.com</span>
          </div>
        </motion.div>
      </div>
      {/* Scoped override to keep dark glass on autofill/focus */}
      <style jsx global>{`
        .contact-form input:-webkit-autofill,
        .contact-form textarea:-webkit-autofill,
        .contact-form input:-webkit-autofill:focus,
        .contact-form textarea:-webkit-autofill:focus {
          -webkit-text-fill-color: var(--text-inverse) !important;
          caret-color: var(--text-inverse) !important;
          transition: background-color 9999s ease-in-out 0s !important;
          box-shadow: 0 0 0px 1000px rgba(255,255,255,0.08) inset !important;
        }
      `}</style>
    </section>
  );
}

