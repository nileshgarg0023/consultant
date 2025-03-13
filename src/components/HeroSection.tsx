"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const partnerLogos = [
  {
    name: "MoneyM",
    logo: "/logos/moneym.svg",
    className: "w-28"
  },
  {
    name: "Trade",
    logo: "/logos/trade.svg",
    className: "w-24"
  },
  {
    name: "WalletSky",
    logo: "/logos/walletsky.svg",
    className: "w-32"
  },
  {
    name: "Cube",
    logo: "/logos/cube.svg",
    className: "w-28"
  },
  {
    name: "PayFlow",
    logo: "/logos/payflow.svg",
    className: "w-32"
  },
  {
    name: "DarkLight",
    logo: "/logos/darklight.svg",
    className: "w-24"
  }
];

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[3.5rem] leading-[1.1] lg:text-[4.5rem] font-medium tracking-tight text-[#0F4C5C]"
            >
              Your Partner for{" "}
              <span className="block">Financial Success</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg text-slate-600 max-w-lg"
            >
              Lorem ipsum dolor sit amet, vim id assentior moderatius, neligendis iuvaret est per et inani alienum.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8"
            >
              <Button 
                size="lg"
                className="h-14 px-8 text-lg bg-[#0F4C5C] hover:bg-[#0F4C5C]/90 text-white rounded-full"
              >
                Free consultation
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative h-[700px] w-full"
          >
            <div className="absolute inset-0 bg-[#0F4C5C]/10 rounded-2x overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop"
                alt="Business professional"
                fill
                className="object-cover"
                priority
              />
              {/* Decorative Elements */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#9FE870] opacity-40 blur-2xl" />
              <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-[#0F4C5C] opacity-20 blur-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20"
        >
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {partnerLogos.map((partner, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={60}
                  className={`${partner.className} opacity-80 hover:opacity-100 transition-opacity`}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 