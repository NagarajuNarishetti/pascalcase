import Link from 'next/link';

type Params = { params: Promise<{ slug: string }> };

const copy: Record<string, { title: string; body: string }> = {
  'metadata-browser': { title: 'Metadata Browser', body: 'Examine and export Dataverse metadata such as tables, columns, relationships and keys.' },
  'data-mask': { title: 'Data Mask for Dataverse', body: 'Mask or tokenize sensitive data across environments with confidence.' },
  'ai-autocloser': { title: 'AI Autocloser', body: 'Automatically close non-actionable tickets with AI assistance.' },
  'commission-365': { title: 'Commission 365', body: 'Design commission plans and incentives for your sales teams.' },
  'html-to-pdf': { title: 'HTML To PDF Converter', body: 'Convert HTML templates to pixel-perfect PDFs with ease.' },
  'flow-monitor': { title: 'Flow Monitor', body: 'Monitor Power Automate flows across environments with rich insights.' },
};

export default async function ProductDetail({ params }: Params) {
  const { slug } = await params;
  const data = copy[slug] ?? { title: 'Product', body: 'Details coming soon.' };
  return (
    <main id="content" className="mx-auto max-w-4xl px-4 sm:px-6 py-10">
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <p className="mt-3 text-text-muted">{data.body}</p>
      <div className="mt-6 flex gap-3">
        <Link href="/products" className="rounded-md border border-white/20 px-4 py-2 text-sm hover:bg-white/10">Back to Products</Link>
        <a href="#" className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-black hover:opacity-90">Download</a>
      </div>
    </main>
  );
}


