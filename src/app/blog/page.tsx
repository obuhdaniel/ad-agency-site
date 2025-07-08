import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

// Fetch blogs from Hygraph
async function getBlogs() {
    const response = await fetch(
        "https://eu-west-2.cdn.hygraph.com/content/cmcnpnfcn03lw06w6x9hqpu7i/master",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: `
                    query Blogs {
                        blogs {
                            id
                            slug
                            title
                            created
                            content {
                                html
                            }
                            coverImage {
                                url
                            }
                        }
                    }
                `,
            }),
            next: { revalidate: 60 },
        }
    );
    const json = await response.json();
    return json.data.blogs ?? [];
}

// Helper function to extract text from HTML content
function extractTextFromHtml(html: string) {
    if (!html) return "";
    return html.replace(/<[^>]*>/g, "").substring(0, 120) + "...";
}

// Helper function to format date
function formatDate(dateString: string | number | Date) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

export default async function BlogPage() {
    const blogs = await getBlogs();

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-r from-red-600 to-orange-500 text-white overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
                    <div className="container mx-auto px-6 py-24">
                        <div 
                            className="text-center"
                        >
                            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                                The Pulse
                            </h1>
                            <p className="text-lg md:text-xl max-w-2xl mx-auto text-orange-100">
                                Dive into our latest insights, trends, and stories shaping the future
                            </p>
                        </div>
                    </div>
                </section>

                {/* Blog Cards Section */}
                <section className="container mx-auto px-6 py-16">
                    {blogs.length === 0 ? (
                        <div 
                            className="text-center py-20"
                        >
                            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-12 max-w-lg mx-auto">
                                <svg className="w-20 h-20 mx-auto text-orange-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    No Stories Yet
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    We're crafting new content. Stay tuned for fresh perspectives!
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogs.map((blog: { id: React.Key | null | undefined; slug: any; coverImage: { url: string | undefined; }; title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; created: any; content: { html: any; }; }) => (
                                <article
                                    key={blog.id}
                                  
                                    className="group"
                                >
                                    <Link href={`/blog/${blog.slug}`}>
                                        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
                                            {/* Cover Image */}
                                            <div className="relative h-56 overflow-hidden">
                                                {blog.coverImage?.url ? (
                                                    <img
                                                        src={blog.coverImage.url}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-400 to-orange-500">
                                                        <svg className="w-20 h-20 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                )}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </div>

                                            {/* Content */}
                                            <div className="p-6">
                                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                                                    <svg className="w-4 h-4 mr-2 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    {formatDate(blog.created)}
                                                </div>
                                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                                                    {blog.title}
                                                </h2>
                                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
                                                    {extractTextFromHtml(blog.content?.html)}
                                                </p>
                                                <div className="flex items-center text-orange-500 font-semibold text-sm group-hover:text-orange-600 transition-colors">
                                                    Read Story
                                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    )}
                </section>
            </main>
            <Footer />
        </>
    );
}