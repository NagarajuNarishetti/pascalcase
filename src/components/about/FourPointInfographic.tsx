"use client";
import { motion } from 'framer-motion';
import { InfoCircledIcon, LightningBoltIcon, PersonIcon, RocketIcon } from '@radix-ui/react-icons';

type Item = { id: string; title: string; text: string; color: string; Icon: React.ComponentType<{ className?: string }> };

const items: Item[] = [
  { id: '01', title: 'Expertise', text: 'Ex-Microsoft consultants with deep product knowledge.', color: 'from-amber-400/80 to-amber-300/40', Icon: PersonIcon },
  { id: '02', title: 'Low Cost', text: 'Lean delivery that optimizes licensing & hosting.', color: 'from-sky-400/80 to-sky-300/40', Icon: InfoCircledIcon },
  { id: '03', title: 'Velocity', text: 'Accelerators to ship value faster and safer.', color: 'from-orange-400/80 to-orange-300/40', Icon: RocketIcon },
  { id: '04', title: 'Performance', text: 'Reliable, scalable architectures with governance.', color: 'from-emerald-400/80 to-emerald-300/40', Icon: LightningBoltIcon },
];

export default function FourPointInfographic() {
  return (
    <section aria-labelledby="infographic-heading" className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
      <h2 id="infographic-heading" className="sr-only">Why Pascalcase—four highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, idx) => {
          const Icon = item.Icon;
          return (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
              transition={{ duration: 0.4, delay: 0.05 * idx }}
              className="relative isolate overflow-hidden rounded-full"
            >
              {/* pill shell */}
              <div className="relative flex items-stretch gap-4 rounded-full border border-border-default bg-surface-card backdrop-blur-xl shadow-lg">
                {/* left number block */}
                <div className="relative shrink-0 pl-6 pr-4 py-4">
                  <div className={`absolute inset-0 -z-10 rounded-l-full bg-gradient-to-br ${item.color}`} />
                  <span className="text-2xl font-extrabold">{item.id}</span>
                </div>

                {/* center content */}
                <div className="flex min-w-0 items-center py-4 pr-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-default bg-surface-input">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold truncate">{item.title}</h3>
                      <p className="text-xs text-text-muted truncate sm:whitespace-normal sm:line-clamp-2">{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}


