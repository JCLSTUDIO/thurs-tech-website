import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center cream-section pt-20">
      <div className="text-center">
        <div className="text-brand-500 text-8xl font-heading font-bold mb-2">404</div>
        <h2 className="text-2xl font-semibold text-brand-800 mb-4">Page Not Found</h2>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">The page you are looking for does not exist. Let us help you find what you need.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="bg-brand-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-600 transition-colors shadow-md">
            Go Home
          </Link>
          <Link href="/contact" className="border-2 border-brand-500 text-brand-500 px-6 py-3 rounded-lg font-semibold hover:bg-brand-500 hover:text-white transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}