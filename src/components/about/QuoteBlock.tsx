import Image from 'next/image';

export default function QuoteBlock() {
  return (
    <section className="relative mx-auto max-w-4xl px-4 sm:px-6 py-12">
      <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 sm:p-10 shadow-xl">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        </div>
        <div className="relative">
          <div className="text-5xl mb-4">“</div>
          <blockquote className="italic text-lg sm:text-xl leading-relaxed">
            At Pascalcase, we share Microsoft’s vision of helping organizations realize their full potential.
          </blockquote>
          <div className="mt-6 flex items-center gap-3 text-sm text-text-muted">
            <div className="h-9 w-9 rounded-full overflow-hidden border border-white/30 bg-white/10">
              <Image src="/satish.jpg" alt="Satish Reddy" width={36} height={36} className="h-full w-full object-cover" />
            </div>
            <div>
              <span className="font-semibold">Satish Reddy</span>, The CEO of the company Pascalcase & Xbattery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


