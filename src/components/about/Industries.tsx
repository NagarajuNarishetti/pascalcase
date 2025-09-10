import { SpeakerLoudIcon, BarChartIcon, ChatBubbleIcon, GearIcon } from '@radix-ui/react-icons';
import type { ElementType } from 'react';

type Item = { title: string; text: string; Icon: ElementType };

const items: Item[] = [
  { title: 'Marketing', text: 'Journeys, segmentation, and ROI analytics.', Icon: SpeakerLoudIcon },
  { title: 'Sales', text: 'Pipelines, forecasting, and guided selling.', Icon: BarChartIcon },
  { title: 'Customer Service', text: 'Omnichannel, knowledge, and SLAs.', Icon: ChatBubbleIcon },
  { title: 'Field Service', text: 'Scheduling, assets, and mobile.', Icon: GearIcon },
];

export default function Industries() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-4 pr-4">
          {items.map((i) => {
            const Icon = i.Icon as ElementType;
            return (
              <div key={i.title} className="min-w-[260px] rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-5 shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-lg">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-3 font-semibold">{i.title}</h3>
                <p className="text-sm text-text-muted">{i.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


