"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ProductDeckViewer = ({
  label,
  title,
  description,
  basePath,
  pageCount,
}) => {
  const pages = Array.from({ length: pageCount }, (_, i) => ({
    id: i + 1,
    image: `${basePath}/page-${i + 1}.jpg`,
  }));

  return (
    <main className="min-h-screen bg-[#f8f8f8] text-black">
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-20 text-center md:pt-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-500"
        >
          {label}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-8 max-w-3xl text-base leading-8 text-neutral-600 md:text-lg"
        >
          {description}
        </motion.p>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-4 pb-24 md:space-y-10 md:px-6">
        {pages.map((page) => (
          <motion.div
            key={page.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-80px" }}
            className="relative overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] md:rounded-3xl"
          >
            <Image
              src={page.image}
              alt={`${title} — Page ${page.id}`}
              width={1600}
              height={2200}
              priority={page.id <= 2}
              loading={page.id <= 2 ? "eager" : "lazy"}
              className="h-auto w-full object-cover"
            />
          </motion.div>
        ))}
      </section>
    </main>
  );
};

export default ProductDeckViewer;
