"use client";
import { useEffect } from 'react';
type Module = { title: string; description: string };

const modules: Module[] = [
    {
        title: 'Marketing',
        description:
            'We help you create complete end-to-end marketing funnels, customer journeys, campaigns, industry‑specific integrations & marketing analytics.',
    },
    {
        title: 'Customer Service',
        description:
            'Connect to call centers, self‑help portals, knowledge base, SLA management, entitlements & more.',
    },
    {
        title: 'Field Service',
        description:
            'Bring customer service capabilities to customer locations.',
    },
    {
        title: 'Sales',
        description:
            'Lead management, sales funnels, opportunity management, order processing, reporting & more with Dynamics 365 Sales.',
    },
];

const reasons: string[] = [
    'Low‑cost implementation',
    'Custom data migration tools',
    'We can assist you in reducing your licence expenses',
    'We work with Microsoft technologies exclusively',
    'We develop tools for Dynamics 365 and Power Platform',
    'We are ex‑Microsoft employees. We have unparalleled product knowledge.',
];

export default function AboutHighlights() {
    useEffect(() => {
        const els = Array.from(document.querySelectorAll('.js-reveal')) as HTMLElement[];
        if (!('IntersectionObserver' in window)) {
            els.forEach((el) => el.classList.add('is-visible'));
            return;
        }
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) (e.target as HTMLElement).classList.add('is-visible');
                });
            },
            { threshold: 0.1 }
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);
    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-10">
            {/* Modules */}
            <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
                    We build industry‑specific solutions/tools for Dynamics 365 modules
                </h2>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4">
                {modules.map((m) => (
                    <div
                        key={m.title}
                        className="rounded-2xl border border-border-default bg-surface-card p-5 shadow-sm hover-card reveal js-reveal"
                    >
                        <h3 className="text-center font-semibold text-text-primary">{m.title}</h3>
                        <p className="mt-2 text-center text-sm text-text-secondary max-w-3xl mx-auto">
                            {m.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Why Pascalcase */}
            <div className="mt-10 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">Why Pascalcase?</h2>
                <p className="mt-2 text-text-secondary max-w-3xl mx-auto">
                    We are ex‑Microsoft employees. We have unparalleled product knowledge.
                </p>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {reasons.map((r) => (
                    <div key={r} className="rounded-2xl border border-border-default bg-surface-card p-4 shadow-sm hover-card reveal js-reveal">
                        <p className="text-sm font-semibold text-text-primary text-center">{r}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}


