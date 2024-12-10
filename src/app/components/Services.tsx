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
      <div className="w-1/3 mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-xl mb-20"
        >
          <div className="gap-2 border-1 border border-white p-2 rounded-2xl text-base">
            hi, I am Utkarsh
          </div>
        </motion.p>
      </div>
    </section>
  );
}