'use client';
import { motion } from 'framer-motion';


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
            This isn&apos;t just another developer. This is Utkarsh. He&apos;s not going to bore you with a laundry list of acronyms. 
            He <span className="text-accent font-medium">*builds*</span> things. Real things. Beautiful, functional things. 
            Think of him as the conductor of a digital orchestra. He&apos;s fluent in the language of web apps, crafting elegant 
            experiences for any screen. Mobile? That&apos;s his forte. He lives and breathes cross-platform development, churning 
            out sleek, intuitive apps that feel native, no matter the device. He can whip up a backend, get your project 
            deployed faster than you can say &quot;app store,&quot; and even automate the whole damn process with CI/CD magic. 
            Based in India, but his code speaks a universal language: innovation. Utkarsh. He&apos;s not just a 10x developer. 
            He&apos;s the developer you need when you want to build something 
            <span className="text-accent font-medium"> *insanely great*</span>.
          </div>
          
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-12 right-4 text-sm text-gray-500/40 italic
                     transform transition-all duration-300 ease-in-out
                     group-hover:text-gray-400/60 group-hover:-translate-y-1"
          >
            — in the spirit of Steve Jobs&apos; legendary product introductions <br>
            </br> This is how Jobs would have described me.
          </motion.div>
          
       
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-accent/10 via-transparent to-accent/10 
                        opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
        </motion.div>
      </div>
    </section>
  );
}