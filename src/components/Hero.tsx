import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 pb-16 sm:pb-20 lg:pt-16 lg:pb-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-wider text-text-muted">We #build Dynamics 365 and Power Platform tools</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Transform your Dynamics 365 investment</h1>
            <p className="max-w-prose text-text-muted">
              Transform your Dynamics 365 investment into tangible results with the help of a seasoned partner. Choose Pascalcase, where our expertise in Dynamics 365 and Power Platform will take your business to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="#" className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-[color:var(--on-accent)] font-medium hover:brightness-95">Chat on Microsoft Teams</Link>
              <Link href="#products" className="inline-flex items-center justify-center rounded-md border border-border-default px-5 py-3 text-sm font-medium hover:bg-overlay-1">Explore Products</Link>
            </div>
          </div>
          <div className="relative w-full max-w-[420px] sm:max-w-[500px] lg:max-w-[560px] mx-auto">
            <Image
              src="/hero.png"
              alt="Hero"
              width={600}
              height={300}
              priority
              sizes=" 50vw, 100vw"
              className="w-full h-auto object-contain rounded-none hero-bounce"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


