'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import pic from '../assets/msr.jpeg';

export function Hero() {
  return (
    <section className="bg-[#0a0a0a] px-6 pt-8">
      <nav className="flex justify-between items-center mb-20">
        <span className="text-sm text-gray-400">hi@utkarsh4517.in</span>
        <div className="flex gap-4 text-sm text-gray-400">
          <a href="#" className="hover:text-white">LinkedIn</a>
          <span>/</span>
          <a href="#" className="hover:text-white">Twitter</a>
          <span>/</span>
          <a href="#" className="hover:text-white">Github</a>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6"
        >
          <Image
            src={pic}
            alt="Profile"
            width={96}
            height={96}
            className="object-cover"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm mb-4"
        >
          Hi, I'm Utkarsh 👋
        </motion.p>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-5xl font-light mb-20"
        >
          Building <span className="text-gray-500">high qaulity</span> web and mobile{' '}
          <span className="text-gray-500">experiences.</span>
        </motion.h1>

        <div className="flex justify-center items-center gap-12">
          {['Flutter', 'React Native', 'Swift UI', 'React', 'Web 3.0'].map((brand) => {
            const filename = brand.toLowerCase().replace(/ /g, '-');
            return (
              <motion.div
                key={brand}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                whileHover={{ opacity: 1 }}
                className="flex items-center gap-2"
              >
                <Image
                  src={`/brands/${filename}.svg`}
                  alt={brand}
                  width={30}
                  height={30}
                  className="grayscale hover:grayscale-0"
                />
                <span className="text-gray-400 text-md text-start">{brand}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}