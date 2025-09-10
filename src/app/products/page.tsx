import ProductCard, { Product } from '@/components/ProductCard';
import { ReaderIcon, LayersIcon, MagicWandIcon, RocketIcon, FileTextIcon } from '@radix-ui/react-icons';

const products: Product[] = [
  { slug: 'metadata-browser', title: 'Metadata Browser', description: 'Examine and export Dataverse metadata: tables, columns, relationships, keys.', icon: <ReaderIcon />, tags: ['Edge'] },
  { slug: 'data-mask', title: 'Data Mask for Dataverse', description: 'Protect sensitive data with deterministic masking and reversible tokens.', icon: <LayersIcon /> },
  { slug: 'ai-autocloser', title: 'AI Autocloser', description: 'Auto-resolve non-actionable support tickets using intelligent rules.', icon: <MagicWandIcon />, tags: ['AppSource'] },
  { slug: 'commission-365', title: 'Commission 365', description: 'Configure commissions, incentives and bonus plans for your sales teams.', icon: <RocketIcon />, tags: ['Popular'] },
  { slug: 'html-to-pdf', title: 'HTML To PDF Converter', description: 'Generate pixel-perfect PDFs from HTML templates and data.', icon: <FileTextIcon />, tags: ['Free'] },
  { slug: 'flow-monitor', title: 'Flow Monitor', description: 'Monitor Power Automate flows: duration, failures and insights across envs.', icon: <RocketIcon /> },
];

export default function ProductsPage() {
  return (
    <main id="content" className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Our Products</h1>
          <p className="text-text-muted">Scalable tools for Dynamics 365 and Power Platform.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </main>
  );
}


