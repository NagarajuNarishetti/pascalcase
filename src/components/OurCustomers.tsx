import Image from 'next/image';

export default function OurCustomers() {
  return (
    <section aria-labelledby="customers-heading" className="mx-auto max-w-7xl px-4 sm:px-6 mt-12">
      <div className="text-center mb-6">
        <h2 id="customers-heading" className="text-2xl sm:text-3xl font-bold text-text-primary">Our Customers</h2>
        <p className="mt-2 text-text-secondary">A few of the organizations we’ve worked with</p>
      </div>
      <div className="rounded-2xl border border-border-default bg-surface-card p-3 shadow-sm">
        <Image
          src="/ourCustomers.png"
          alt="Customer logos"
          width={1600}
          height={400}
          className="w-full h-auto rounded-xl"
          priority
        />
      </div>
    </section>
  );
}


