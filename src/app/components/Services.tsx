'use client';
import { motion } from 'framer-motion';
import { CodeBracketIcon, DevicePhoneMobileIcon, PaintBrushIcon, CommandLineIcon } from '@heroicons/react/24/outline';

const services = [
  {
    icon: <CodeBracketIcon className="w-6 h-6" />,
    title: 'UX & UI',
    description: 'Designing interfaces that are intuitive, efficient, and enjoyable to use.'
  },
  {
    icon: <DevicePhoneMobileIcon className="w-6 h-6" />,
    title: 'Web & Mobile App',
    description: 'Transforming ideas into exceptional web and mobile experiences.'
  },
  {
    icon: <PaintBrushIcon className="w-6 h-6" />,
    title: 'Design & Creative',
    description: 'Crafting visually stunning designs that connect with your audience.'
  },
  {
    icon: <CommandLineIcon className="w-6 h-6" />,
    title: 'Development',
    description: 'Bringing your vision to life with the latest technology and design trends.'
  }
];

export function Services() {
  return (
    <section className="py-20 px-6 bg-[#0a0a0a]">
      <div className="w-[75%] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-xl mb-20"
        >
          <div className="gap-2 border-1 border border-white p-6 rounded-2xl text-base font-junge">
          This isn't just another developer. This is Utkarsh. He's not going to bore you with a laundry list of acronyms. He *builds* things. Real things. Beautiful, functional things. Think of him as the conductor of a digital orchestra. He's fluent in the language of web apps, crafting elegant experiences for any screen. Mobile? That's his forte. He lives and breathes cross-platform development, churning out sleek, intuitive apps that feel native, no matter the device. He can whip up a backend, get your project deployed faster than you can say "app store," and even automate the whole damn process with CI/CD magic. Based in India, but his code speaks a universal language: innovation. Utkarsh. He's not just a 10x developer. He's the developer you need when you want to build something *insanely great*.
          </div>
        </motion.p>
      </div>
    </section>
  );
}