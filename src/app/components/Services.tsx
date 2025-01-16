"use client";
import { motion } from "framer-motion";

export function Services() {
  return (
    <section className="py-20 px-6 bg-[#0a0a0a]">
      <div className="w-[75%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="group relative"
        >
          <div
            className="gap-2 border border-gray-800/60 bg-gray-900/20 p-8 rounded-2xl 
                     text-base font-light text-gray-400/80 leading-relaxed tracking-wide
                     backdrop-blur-sm transition-all duration-300 ease-in-out
                     group-hover:border-gray-700/60 group-hover:bg-gray-900/40 
                     group-hover:text-gray-300 group-hover:shadow-xl 
                     group-hover:shadow-accent/5"
          >
            I am a generalist. I build things, I ship real <span className="text-accent font-medium">products and tools.</span> I
            craft beautiful and functional <span className="text-accent font-medium">mobile apps</span>, I can write web apps, I
            can deploy your mobile app to the stores, I can write CI/CD for your
            mobile apps, I can even fix your product, be it design or code. I am
            a 10x dev, You want me when you want build something <span className="text-accent font-medium">*insanely great*</span>

    
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-12 right-4 text-sm text-gray-500/40 italic
                     transform transition-all duration-300 ease-in-out
                     group-hover:text-gray-400/60 group-hover:-translate-y-1"
          >
            — maybe a bit exaggerated but okay{" "}
          </motion.div>

          <div
            className="absolute inset-0 -z-10 bg-gradient-to-r from-accent/10 via-transparent to-accent/10 
                        opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
          />
        </motion.div>
      </div>
    </section>
  );
}
