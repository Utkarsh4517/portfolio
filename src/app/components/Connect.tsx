'use client';
import { motion } from 'framer-motion';
import { DocumentTextIcon, BookOpenIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const links = [
  {
    title: "GitHub",
    description: "Check out my open source contributions and projects",
    icon: <CodeBracketIcon className="w-6 h-6" />,
    url: "https://github.com/Utkarsh4517",
    className: "bg-[#2ea043]/10 text-[#2ea043] hover:bg-[#2ea043]/20"
  },
  {
    title: "Resume",
    description: "View my projects, works and professional background",
    icon: <DocumentTextIcon className="w-6 h-6" />,
    url: "https://drive.google.com/file/d/1VZh5lilKuXXzG4BfIIzEDvdLfnO5RDKx/view?usp=sharing",
    className: "bg-accent/10 text-accent hover:bg-accent/20"
  },
  {
    title: "Blog",
    description: "Read my thoughts on development and tech",
    icon: <BookOpenIcon className="w-6 h-6" />,
    url: "/",
    className: "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20"
  }
];

export function Connect() {
  return (
    <section className="py-20 px-6 bg-[#0a0a0a]">
      <div className="w-[75%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-light mb-4">Let's Connect</h2>
          <p className="text-gray-400">Explore more about my work and thoughts</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl p-6 border border-gray-800/60 
                         transition-all duration-300 hover:border-gray-700/60 
                         hover:shadow-xl hover:shadow-accent/5 ${link.className}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-white/5">
                  {link.icon}
                </div>
                <h3 className="text-xl font-light">{link.title}</h3>
              </div>
              
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                {link.description}
              </p>

              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent to-black/30 opacity-0 
                            transition-opacity duration-300 group-hover:opacity-100" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}