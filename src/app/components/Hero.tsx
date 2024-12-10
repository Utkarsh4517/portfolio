'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import pic from '../assets/msr.jpeg';

export function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-8"
        >
          <Image
            src={pic}
            alt="Profile"
            width={128}
            height={128}
            className="object-cover"
          />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Mobile & Frontend Developer
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-400 text-xl mb-8"
        >
          Building digital experiences with Flutter & React Native
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-4"
        >
          {['Flutter', 'React Native', 'Frontend'].map((tech, index) => (
            <span
              key={tech}
              className="px-4 py-2 bg-gray-800 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}