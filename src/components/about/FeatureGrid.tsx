import { CheckCircledIcon, LightningBoltIcon, LockClosedIcon, RocketIcon, PersonIcon, InfoCircledIcon } from '@radix-ui/react-icons';

type Feature = { Icon: React.ComponentType<{ className?: string }>; title: string; text: string };

const features: Feature[] = [
  { Icon: PersonIcon, title: 'Ex-Microsoft Employees', text: 'Unparalleled product knowledge to accelerate your success.' },
  { Icon: CheckCircledIcon, title: 'Low Total Cost', text: 'Lean delivery that maximizes value and minimizes waste.' },
  { Icon: InfoCircledIcon, title: 'License Savings', text: 'Architectures that reduce licensing overhead where possible.' },
  { Icon: LightningBoltIcon, title: 'Faster Time-to-Value', text: 'Iterative delivery that shows results from day one.' },
  { Icon: LockClosedIcon, title: 'Secure by Design', text: 'Security-first approach across environments and data.' },
  { Icon: RocketIcon, title: 'Partner Mindset', text: 'We work with you, not just for you.' },
];

export default function FeatureGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f) => {
          const Icon = f.Icon;
          return (
            <article key={f.title} className="rounded-2xl border border-border-default bg-surface-card backdrop-blur-xl p-5 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl">
              <header className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-default bg-surface-input">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-semibold">{f.title}</h3>
              </header>
              <p className="mt-2 text-sm text-text-muted line-clamp-2">{f.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}


