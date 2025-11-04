// components/BlogSection.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Calendar, Clock, Eye, Heart, ArrowRight, ExternalLink, BookOpen } from "lucide-react";
import Image from "next/image";
import { getHashnodePosts, HashnodePost } from "@/lib/hashnode";

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-10% 0px -10% 0px" });
  const [posts, setPosts] = useState<HashnodePost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const hashnodePosts = await getHashnodePosts();
        setPosts(hashnodePosts);
      } catch (err) {
        setError('Failed to fetch blog posts');
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Fallback cover image
  const getCoverImage = (post: HashnodePost) => {
    return post.coverImage?.url || '/blog-placeholder.jpg';
  };

  return (
    <section id="blog" className="min-h-screen py-16 md:py-20 px-4 sm:px-6 bg-[color:var(--bg-900)] relative overflow-hidden">
      {/* New Blog-specific Background Animation */}
      <div className="absolute inset-0">
        {/* Animated Code Background */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-20 left-10 text-[color:var(--color-primary)] font-mono text-sm"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {`// Code. Create. Share.`}
          </motion.div>
          <motion.div
            className="absolute top-40 right-20 text-[color:var(--color-secondary)] font-mono text-sm"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          >
            {`<Blog />`}
          </motion.div>
          <motion.div
            className="absolute bottom-40 left-20 text-[color:var(--color-accent)] font-mono text-sm"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          >
            {`function learn() { return grow; }`}
          </motion.div>
        </div>

        {/* Floating Book Icons */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${20 + (i * 10) % 60}%`,
              left: `${10 + (i * 12) % 80}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 8 + (i * 2),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            <BookOpen 
              className={`w-6 h-6 ${
                i % 3 === 0 ? 'text-[color:var(--color-primary)]' :
                i % 3 === 1 ? 'text-[color:var(--color-secondary)]' :
                'text-[color:var(--color-accent)]'
              } opacity-20`}
            />
          </motion.div>
        ))}

        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-[color:var(--color-primary)] rounded-lg"
            animate={{ rotate: [0, 45, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-[color:var(--color-secondary)] rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-16 h-16 border border-[color:var(--color-accent)]"
            animate={{ rotate: [0, -45, 0] }}
            transition={{ duration: 18, repeat: Infinity, delay: 1 }}
          />
        </div>

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-secondary)] rounded-full opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-[color:var(--color-secondary)] to-[color:var(--color-accent)] rounded-full opacity-5 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-secondary)] rounded-lg flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-[color:var(--text)]">Latest </span>
              <span className="text-[color:var(--color-primary)]">Blogs</span>
            </h2>
          </div>
          <p className="text-[color:var(--muted)] text-base md:text-lg max-w-2xl mx-auto px-4">
            Thoughts, tutorials, and insights about web development, AI, and technology
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center items-center py-20"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="flex space-x-2">
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="w-3 h-3 bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-secondary)] rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
              <p className="text-[color:var(--muted)]">Loading blog posts...</p>
            </div>
          </motion.div>
        )}

        {/* Error State */}
        {error && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="card-glass p-8 rounded-2xl max-w-md mx-auto">
              <BookOpen className="w-12 h-12 text-[color:var(--muted)] mx-auto mb-4" />
              <p className="text-[color:var(--muted)] mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="btn-neon text-sm"
              >
                Try Again
              </button>
            </div>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        {!loading && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-glass rounded-2xl glow-container overflow-hidden group hover:glow-container-hover transition-all duration-300 flex flex-col h-full"
                  whileHover={{ y: -5 }}
                >
                  {/* Cover Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-secondary)]">
                    {post.coverImage?.url ? (
                      <Image
                        src={post.coverImage.url}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BookOpen className="w-12 h-12 text-white opacity-50" />
                      </div>
                    )}
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--bg-900)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-[color:var(--text)] mb-3 line-clamp-2 group-hover:text-[color:var(--color-primary)] transition-colors duration-300">
                      {post.title}
                    </h3>

                    {/* Brief */}
                    <p className="text-[color:var(--muted)] text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                      {post.brief}
                    </p>

                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-xs text-[color:var(--muted)] mb-3">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(post.publishedAt)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTimeInMinutes} min</span>
                        </div>
                      </div>
                    </div>

                    {/* Engagement Stats */}
                    <div className="flex items-center gap-4 text-xs text-[color:var(--muted)] mb-4">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{post.views || 0}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        <span>{post.reactionCount || 0}</span>
                      </div>
                    </div>

                    {/* Read More Button */}
                    <motion.a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-2 text-[color:var(--color-primary)] font-medium text-sm group/btn mt-auto pt-3 border-t border-[color:var(--border)]"
                      whileHover={{ x: 5 }}
                    >
                      <span>Read More</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </motion.a>
                  </div>
                </motion.article>
              ))
            ) : (
              // Empty State
              <div className="col-span-full text-center py-20">
                <div className="card-glass p-8 rounded-2xl max-w-md mx-auto">
                  <BookOpen className="w-16 h-16 text-[color:var(--muted)] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[color:var(--text)] mb-2">
                    No Blog Posts Yet
                  </h3>
                  <p className="text-[color:var(--muted)] mb-4">
                    I'm currently working on some amazing content. Check back soon!
                  </p>
                  <a
                    href="https://hashnode.com/@shahidafridii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-neon text-sm inline-flex items-center gap-2"
                  >
                    Follow on Hashnode
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* View All Posts Button */}
        {posts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://afridis-blog.hashnode.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Posts on Hashnode
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  );
}