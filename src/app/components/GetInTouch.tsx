'use client';
import { motion } from 'framer-motion';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export function GetInTouch() {
  return (
    <section className="py-20 px-6 bg-[#0a0a0a]">
      <div className="w-[75%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-light mb-6">Get in Touch</h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out. 
            I'm always open to discussing new opportunities and ideas.
          </p>
          
          <motion.a
            href="mailto:uttkarsh.dav@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full
                     bg-accent text-white font-light
                     transition-all duration-300 ease-in-out
                     hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
          >
            <EnvelopeIcon className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12" />
            <span>Send me an email</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}