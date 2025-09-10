import Link from 'next/link';

export default function CallToActionBanner() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
      <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 sm:p-10 shadow-xl">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/10 to-white/0" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h3 className="text-2xl font-semibold text-center sm:text-left">Ready to transform your Dynamics 365 experience?</h3>
          <div className="flex gap-3">
            <Link href="#" className="rounded-full border border-white/20 bg-accent/90 text-black px-5 py-2.5 font-medium hover:opacity-90">Chat on Microsoft Teams</Link>
            <Link href="/contact" className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 font-medium hover:bg-white/20">Get in Touch</Link>
          </div>
        </div>
      </div>
    </section>
  );
}


