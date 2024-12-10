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
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-xl mb-20"
        >
          Collaborate with brands and agencies to create impactful results.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-[#1a1a1a] rounded-lg hover:bg-[#242424] transition-colors"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-medium mb-2">{service.title}</h3>
              <p className="text-sm text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}