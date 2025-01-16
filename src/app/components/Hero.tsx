'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import pic from '../assets/msr.jpeg';

export function Hero() {
  return (
    <section className="bg-[#0a0a0a] px-6 pt-8">
      <nav className="flex justify-between items-center mb-20">
        <span className="text-sm text-gray-400">uttkarsh.dav@gmail.com</span>
        <div className="flex gap-4 text-sm text-gray-400">
        <a href="/blog" className="hover:text-white">Blogs</a>
        <span>/</span>

          <a href="https://www.linkedin.com/in/utkarsh-shrivastava-7339041a0/" className="hover:text-white">LinkedIn</a>
          <span>/</span>
          <a href="https://twitter.com/utkarsh4517" className="hover:text-white">Twitter</a>
          <span>/</span>
          <a href="https://github.com/Utkarsh4517" className="hover:text-white">Github</a>
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
          Hi, I&apos;m Utkarsh 👋
        </motion.p>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-5xl font-light mb-20"
        >
          Building <span className="text-gray-500">high qaulity</span> mobile and web{' '}
          <span className="text-gray-500">experiences.</span>
        </motion.h1>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {['Flutter', 'React Native', 'Swift UI', 'React', 'Web 3.0'].map((brand) => {
            const filename = brand.toLowerCase().replace(/ /g, '-');
            return (
              <motion.div
                key={brand}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                whileHover={{ opacity: 1 }}
                className="flex items-center gap-2 w-[140px] md:w-auto"
              >
                <Image
                  src={`/brands/${filename}.svg`}
                  alt={brand}
                  width={25}
                  height={25}
                  className="grayscale hover:grayscale-0 md:w-[30px] md:h-[30px]"
                />
                <span className="text-gray-400 text-sm md:text-md text-start">{brand}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}