'use client';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const blogPosts = [
  {
    title: "Type Safety and Null safety in Dart.",
    description: "Have you ever wondered why Dart is called a Type Safe language?",
    date: "June 3, 2023",
    readTime: "5 min read",
    url: "https://dev.to/utkarsh4517/type-safety-and-null-safety-in-dart-1756",
    tags: ["Flutter", "Mobile Development"]
  },
  {
    title: "The Practical Hands-On Guide to Flutter Isolates",
    description: "A comprehensive guide to understanding and implementing Flutter Isolates",
    date: "October 26, 2024",
    readTime: "7 min read",
    url: "https://dev.to/utkarsh4517/the-practical-hands-on-guide-to-flutter-isolates-4834",
    tags: ["Flutter", "Mobile Development", "Isolates"]
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white px-6 py-8">
      <div className="w-[75%] mx-auto">
        <Link href="/" className="inline-block mb-12">
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            <span>Back</span>
          </motion.div>
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-light mb-8"
        >
          Blog
        </motion.h1>

        <div className="grid gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={post.url}>
                <div className="border border-gray-800/60 rounded-2xl p-6
                            transition-all duration-300
                            hover:border-gray-700/60 hover:bg-gray-900/40
                            hover:shadow-xl hover:shadow-accent/5">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-light group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <div className="flex gap-2 text-sm text-gray-400">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-4">
                    {post.description}
                  </p>
                  
                  <div className="flex gap-2">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full
                                 bg-accent/10 text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}