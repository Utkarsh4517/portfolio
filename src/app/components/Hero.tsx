'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import pic from '../assets/msr.jpeg';

export function Hero() {
  return (
    <section className="bg-[#0a0a0a] px-6 pt-8">
      <nav className="flex flex-col sm:flex-row justify-between items-center mb-10 sm:mb-20 gap-4 sm:gap-0">
        <span className="text-xs sm:text-sm text-gray-400 order-2 sm:order-1">uttkarsh.dav@gmail.com</span>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400 order-1 sm:order-2">
          <a href="/blog" className="hover:text-white">Blogs</a>
          <span className="hidden sm:inline">/</span>
          <a href="https://www.linkedin.com/in/utkarsh-shrivastava-7339041a0/" className="hover:text-white">LinkedIn</a>
          <span className="hidden sm:inline">/</span>
          <a href="https://twitter.com/utkarsh4517" className="hover:text-white">Twitter</a>
          <span className="hidden sm:inline">/</span>
          <a href="https://github.com/Utkarsh4517" className="hover:text-white">Github</a>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6"
        >
          <Image
            src={pic}
            alt="Profile"
            width={96}
            height={96}
            className="object-cover hover:scale-125 transition-all duration-500 ease-out"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-sm mb-4"
          whileHover={{ 
            scale: 1.05,
            textShadow: "0 0 8px rgb(255,255,255)"
          }}
        >
          Hi, I&apos;m Utkarsh 👋
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="text-4xl sm:text-5xl font-light mb-20"
        >
          Building{' '}
          <motion.span 
            className="text-gray-500"
            whileHover={{ 
              color: '#ffffff',
              scale: 1.05,
              textShadow: "0 0 8px rgba(255,255,255,0.8)"
            }}
            transition={{ duration: 0.3 }}
          >
            high quality
          </motion.span>{' '}
          mobile and web{' '}
          <motion.span 
            className="text-gray-500"
            whileHover={{ 
              color: '#ffffff',
              scale: 1.05,
              textShadow: "0 0 8px rgba(255,255,255,0.8)"
            }}
            transition={{ duration: 0.3 }}
          >
            experiences.
          </motion.span>
        </motion.h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-3xl mx-auto">
          {['Flutter', 'React Native', 'Swift UI', 'React', 'Web 3.0'].map((brand, index, array) => {
            const filename = brand.toLowerCase().replace(/ /g, '-');
            return (
              <motion.div
                key={brand}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                whileHover={{ 
                  opacity: 1,
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                className={`flex items-center justify-center gap-2 ${
                  index === array.length - 1 && array.length % 2 !== 0 
                    ? 'col-span-2 sm:col-span-1' 
                    : ''
                }`}
              >
                <Image
                  src={`/brands/${filename}.svg`}
                  alt={brand}
                  width={25}
                  height={25}
                  className="grayscale hover:grayscale-0 md:w-[30px] md:h-[30px]"
                />
                <span className="text-gray-400 text-xs sm:text-sm md:text-md">{brand}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}