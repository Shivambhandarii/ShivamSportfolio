"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const pages = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  image: `/Ola/page-${i + 1}.jpg`,
}));

export default function OlaCaseStudyPage() {
  return (
    <main className="min-h-screen bg-[#f8f8f8] text-black">
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-6"
        >
          Ola Case Study
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
        >
          Improving Ride Experience
          <br />
          and User Retention at Ola
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto mt-8 text-neutral-600 text-base md:text-lg leading-8"
        >
          A product management case study focused on improving Ola’s ride booking
          experience, reducing ride cancellations, improving driver-user trust,
          and increasing customer retention through smarter UX and personalized
          recommendations.
        </motion.p>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-24 space-y-10">
        {pages.map((page) => (
          <motion.div
            key={page.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
          >
            <Image
              src={page.image}
              alt={`Ola Case Study Page ${page.id}`}
              width={1600}
              height={2200}
              priority={page.id === 1}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}
      </section>
    </main>
  );
}
