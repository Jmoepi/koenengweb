'use client';

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const LoadingSkeleton = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Skeleton className="h-96 w-full rounded-lg" />
    </div>
  </section>
);

const ProductsSection = dynamic(() => import('@/components/sections/products-section'), {
  loading: () => <LoadingSkeleton />,
  ssr: false,
});

export default ProductsSection;
